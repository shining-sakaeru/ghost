#!/usr/bin/env python3
"""Synchronize published Ghost Content API posts to Blogger.

The script uses Ghost's Content API only; it does not scrape HTML pages or use
wget. Run with --dry-run to validate and render posts without external writes.
"""
from __future__ import annotations

import argparse
import hashlib
import html as html_module
import json
import logging
import os
import re
import subprocess
import sys
import time
from dataclasses import dataclass
from datetime import datetime, timezone
from html.parser import HTMLParser
from pathlib import Path
from typing import Any, Iterable

import requests
from dotenv import load_dotenv

try:
    import markdown as markdown_lib
except ImportError:  # pragma: no cover - reported by dependency validation
    markdown_lib = None

LOGGER = logging.getLogger("publish_pipeline")
STATE_FILE = Path(os.getenv("PUBLISH_STATE_FILE", "/var/lib/ghost-blog-sync/processed_posts.json"))
POSTS_DIR = Path("_posts")
BLOGGER_SCOPES = ["https://www.googleapis.com/auth/blogger"]
DEFAULT_BLOG_ID = "8897823621704713173"
DEFAULT_CLIENT_FILE = "/etc/ghost-blog-sync/client_secret.json"
DEFAULT_TOKEN_FILE = "/etc/ghost-blog-sync/token.json"


@dataclass(frozen=True)
class GhostPost:
    id: str
    title: str
    slug: str
    html: str
    tags: tuple[str, ...]
    published_at: str
    feature_image: str | None

    @classmethod
    def from_api(cls, payload: dict[str, Any]) -> "GhostPost":
        tags = tuple(tag.get("name", "").strip() for tag in payload.get("tags", []) if tag.get("name"))
        return cls(
            id=str(payload["id"]),
            title=payload.get("title", "Untitled").strip(),
            slug=payload.get("slug", payload["id"]).strip(),
            html=payload.get("html") or "",
            tags=tags,
            published_at=payload.get("published_at") or payload.get("created_at") or "",
            feature_image=payload.get("feature_image"),
        )


class GhostAPIError(RuntimeError):
    pass


class GhostClient:
    def __init__(self, base_url: str, api_key: str, session: requests.Session | None = None, api_path: str | None = None):
        self.base_url = base_url.rstrip("/")
        self.api_key = api_key
        self.session = session or requests.Session()
        self.api_path = api_path or os.getenv("GHOST_CONTENT_API_PATH", "/ghost/api/content/posts/")

    def latest_published(self, limit: int) -> list[GhostPost]:
        url = f"{self.base_url}/{self.api_path.lstrip('/')}"
        params = {
            "key": self.api_key,
            "limit": str(limit) if limit > 0 else "all",
            "include": "tags",
            "formats": "html",
            "filter": "status:published",
            "order": "published_at DESC",
        }
        try:
            response = self.session.get(url, params=params, timeout=30)
        except requests.RequestException:
            raise GhostAPIError("Ghost Content API request failed; check GHOST_URL and network connectivity.") from None
        if response.status_code == 429:
            raise GhostAPIError("Ghost Content API rate limit reached (HTTP 429). Retry later.")
        if not response.ok:
            detail = " Check GHOST_CONTENT_API_KEY and its Content API access." if response.status_code in (401, 403) else ""
            raise GhostAPIError(f"Ghost Content API returned HTTP {response.status_code}.{detail}")
        try:
            data = response.json()
        except ValueError as exc:
            raise GhostAPIError("Ghost Content API returned invalid JSON") from exc
        return [GhostPost.from_api(post) for post in data.get("posts", [])]


class HTMLToMarkdown(HTMLParser):
    """Small dependency-free HTML-to-Markdown renderer for Ghost post HTML."""

    BLOCKS = {"p", "div", "section", "article", "blockquote", "pre", "table", "tr", "ul", "ol", "li"}

    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.parts: list[str] = []
        self.skip_depth = 0
        self.list_depth = 0
        self.ordered_depths: list[bool] = []
        self.link_stack: list[str] = []
        self.in_code = False

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        tag = tag.lower()
        attributes = dict(attrs)
        if tag in {"script", "style", "noscript", "iframe"}:
            self.skip_depth += 1
            return
        if self.skip_depth:
            return
        if tag in {"h1", "h2", "h3", "h4", "h5", "h6"}:
            self._break(2)
            self.parts.append("#" * int(tag[1]) + " ")
        elif tag == "br":
            self.parts.append("  \n")
        elif tag == "strong" or tag == "b":
            self.parts.append("**")
        elif tag == "em" or tag == "i":
            self.parts.append("*")
        elif tag == "a":
            self.link_stack.append(attributes.get("href") or "")
            self.parts.append("[")
        elif tag == "img":
            src = attributes.get("src") or ""
            alt = attributes.get("alt") or ""
            if src:
                self.parts.append(f"![{self._escape(alt)}]({src})")
        elif tag == "code":
            self.in_code = True
            self.parts.append("`")
        elif tag == "pre":
            self._break(2)
            self.parts.append("```\n")
        elif tag == "li":
            self._break(1)
            marker = "1. " if self.ordered_depths and self.ordered_depths[-1] else "- "
            self.parts.append("  " * max(self.list_depth - 1, 0) + marker)
        elif tag in {"ul", "ol"}:
            self._break(1)
            self.list_depth += 1
            self.ordered_depths.append(tag == "ol")
        elif tag in self.BLOCKS:
            self._break(1)

    def handle_endtag(self, tag: str) -> None:
        tag = tag.lower()
        if tag in {"script", "style", "noscript", "iframe"}:
            self.skip_depth = max(0, self.skip_depth - 1)
            return
        if self.skip_depth:
            return
        if tag == "a":
            href = self.link_stack.pop() if self.link_stack else ""
            self.parts.append(f"]({href})" if href else "]")
        elif tag in {"strong", "b"}:
            self.parts.append("**")
        elif tag in {"em", "i"}:
            self.parts.append("*")
        elif tag == "code":
            self.in_code = False
            self.parts.append("`")
        elif tag == "pre":
            self._break(1)
            self.parts.append("```\n")
        elif tag in {"ul", "ol"}:
            self.list_depth = max(0, self.list_depth - 1)
            if self.ordered_depths:
                self.ordered_depths.pop()
            self._break(1)
        elif tag in self.BLOCKS or tag.startswith("h") and len(tag) == 2:
            self._break(2)

    def handle_data(self, data: str) -> None:
        if not self.skip_depth:
            self.parts.append(data if self.in_code else data.replace("\u00a0", " "))

    def _break(self, count: int) -> None:
        current = "".join(self.parts).rstrip("\n")
        self.parts = [current + "\n" * count] if current else []

    @staticmethod
    def _escape(value: str) -> str:
        return value.replace("[", "\\[").replace("]", "\\]")

    def render(self) -> str:
        text = "".join(self.parts)
        text = re.sub(r"[ \t]+\n", "\n", text)
        text = re.sub(r"\n{3,}", "\n\n", text)
        return text.strip() + "\n"


def html_to_markdown(value: str) -> str:
    parser = HTMLToMarkdown()
    parser.feed(value)
    return parser.render()


def parse_date(value: str) -> datetime:
    parsed = datetime.fromisoformat(value.replace("Z", "+00:00"))
    return parsed if parsed.tzinfo else parsed.replace(tzinfo=timezone.utc)


def safe_slug(slug: str) -> str:
    result = re.sub(r"[^a-zA-Z0-9가-힣_-]+", "-", slug).strip("-").lower()
    return result or "untitled"


def front_matter(post: GhostPost) -> str:
    tags = json.dumps(list(post.tags), ensure_ascii=False)
    return "---\n" + "".join([
        f"title: {json.dumps(post.title, ensure_ascii=False)}\n",
        f"date: {parse_date(post.published_at).isoformat()}\n",
        f"tags: {tags}\n",
        "layout: post\n",
        f"slug: {json.dumps(safe_slug(post.slug), ensure_ascii=False)}\n",
        f"feature_image: {json.dumps(post.feature_image or '', ensure_ascii=False)}\n",
        f"ghost_id: {json.dumps(post.id)}\n",
        "---\n\n",
    ])


def markdown_document(post: GhostPost) -> str:
    body = html_to_markdown(post.html)
    image = f"\n\n![Featured image]({post.feature_image})\n" if post.feature_image else ""
    return front_matter(post) + body + image


def series_title(title: str, prefix: str) -> str:
    prefix = prefix.strip()
    if not prefix:
        return title
    return title if title.startswith(prefix) else f"{prefix} {title}"


def blogger_html(post: GhostPost) -> str:
    # Ghost already supplies semantic HTML; Blogger accepts this directly.
    marker = f'<!-- ghost-post-id: {html_module.escape(post.id)} -->'
    return marker + "\n" + post.html


def load_state(path: Path) -> dict[str, Any]:
    if not path.exists():
        return {"processed_posts": {}}
    try:
        value = json.loads(path.read_text(encoding="utf-8"))
    except (OSError, ValueError) as exc:
        raise RuntimeError(f"Cannot read state file {path}: {exc}") from exc
    value.setdefault("processed_posts", {})
    return value


def save_state(path: Path, state: dict[str, Any]) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    temporary = path.with_name(path.name + f".{os.getpid()}.tmp")
    try:
        with temporary.open("w", encoding="utf-8") as stream:
            stream.write(json.dumps(state, ensure_ascii=False, indent=2) + "\n")
            stream.flush()
            os.fsync(stream.fileno())
        os.chmod(temporary, 0o600)
        temporary.replace(path)
    finally:
        temporary.unlink(missing_ok=True)


def write_jekyll_post(post: GhostPost, posts_dir: Path = POSTS_DIR) -> Path:
    date = parse_date(post.published_at).date().isoformat()
    target = posts_dir / f"{date}-{safe_slug(post.slug)}.md"
    target.parent.mkdir(parents=True, exist_ok=True)
    target.write_text(markdown_document(post), encoding="utf-8")
    return target


def load_oauth_credentials(client_file: str, token_file: str):
    token_path = Path(token_file)
    if not token_path.exists():
        raise RuntimeError(f"Blogger OAuth token is missing. Run blogger_auth.py --client-secret {client_file} --token-file {token_file}.")
    from google.auth.exceptions import GoogleAuthError
    from google.auth.transport.requests import Request
    from google.oauth2.credentials import Credentials

    credentials = None
    try:
        credentials = Credentials.from_authorized_user_file(str(token_path), BLOGGER_SCOPES)
    except (OSError, ValueError):
        raise RuntimeError("Blogger OAuth token file is unreadable or invalid; run blogger_auth.py.") from None
    if credentials and credentials.valid:
        return credentials
    if credentials and credentials.expired and credentials.refresh_token:
        try:
            credentials.refresh(Request())
            save_token(token_path, credentials.to_json())
            return credentials
        except GoogleAuthError:
            raise RuntimeError("Blogger OAuth token refresh failed; run blogger_auth.py again.") from None
    raise RuntimeError(f"Blogger OAuth token is missing or expired. Run blogger_auth.py --client-secret {client_file} --token-file {token_file}.")


def save_token(path: Path, token_json: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    temporary = path.with_name(path.name + f".{os.getpid()}.tmp")
    try:
        temporary.write_text(token_json, encoding="utf-8")
        os.chmod(temporary, 0o600)
        temporary.replace(path)
        os.chmod(path, 0o600)
    finally:
        temporary.unlink(missing_ok=True)


def build_blogger_service(client_file: str | None = None, token_file: str | None = None):
    from googleapiclient.discovery import build
    credentials = load_oauth_credentials(
        client_file or os.getenv("BLOGGER_OAUTH_CLIENT_FILE", DEFAULT_CLIENT_FILE),
        token_file or os.getenv("BLOGGER_OAUTH_TOKEN_FILE", DEFAULT_TOKEN_FILE),
    )
    return build("blogger", "v3", credentials=credentials, cache_discovery=False)


def find_blogger_post(service: Any, blog_id: str, marker: str) -> dict[str, Any] | None:
    try:
        request = service.posts().list(blogId=blog_id, maxResults=100, fetchBodies=True)
        while request is not None:
            result = request.execute()
            for item in result.get("items", []):
                if marker in item.get("content", ""):
                    return item
            request = service.posts().list_next(request, result)
    except Exception as exc:
        code = getattr(getattr(exc, "resp", None), "status", None)
        suffix = f" (HTTP {code})." if code else ". Check OAuth authorization and Blogger blog access."
        raise RuntimeError("Blogger API post listing failed" + suffix) from None
    return None


def blogger_labels(post: GhostPost) -> list[str]:
    return list(dict.fromkeys(tag.strip() for tag in post.tags if tag.strip()))


def post_content_hash(post: GhostPost, prefix: str) -> str:
    payload = json.dumps([post.title, post.html, post.tags, prefix], ensure_ascii=False)
    return hashlib.sha256(payload.encode()).hexdigest()


def pending_posts(posts: list[GhostPost], state: dict[str, Any], prefix: str) -> list[GhostPost]:
    processed = state.get("processed_posts", {})
    return [
        post for post in posts
        if processed.get(post.id, {}).get("content_hash") != post_content_hash(post, prefix)
        or processed.get(post.id, {}).get("last_sync_status") not in {"published", "updated", "draft"}
    ]


def publish_blogger(service: Any, blog_id: str, post: GhostPost, dry_run: bool, publish_status: str = "published", prefix: str = "", max_retries: int = 3) -> dict[str, str]:
    marker = f"ghost-post-id: {post.id}"
    existing = find_blogger_post(service, blog_id, marker)
    body = {"kind": "blogger#post", "title": series_title(post.title, prefix), "content": blogger_html(post), "labels": blogger_labels(post)}
    if dry_run:
        return {"status": "dry_run", "post_id": (existing or {}).get("id", ""), "url": (existing or {}).get("url", "")}
    for attempt in range(max_retries + 1):
        try:
            if existing:
                result = service.posts().update(blogId=blog_id, postId=existing["id"], body=body, publish=publish_status == "published").execute()
                status = "updated"
            else:
                result = service.posts().insert(blogId=blog_id, body=body, isDraft=publish_status != "published").execute()
                status = "published" if publish_status == "published" else "draft"
            return {"status": status, "post_id": str(result.get("id", "")), "url": result.get("url", "")}
        except Exception as exc:
            code = getattr(getattr(exc, "resp", None), "status", None)
            if code == 429 and attempt < max_retries:
                delay = 2 ** attempt
                LOGGER.warning("Blogger rate limited for %s; retrying in %ss", post.slug, delay)
                time.sleep(delay)
                continue
            raise RuntimeError(f"Blogger API {'update' if existing else 'write'} failed" + (f" (HTTP {code})" if code else ".")) from None
    raise AssertionError("unreachable")


def run_git_push(message: str, dry_run: bool, state_file: Path) -> None:
    paths = [str(POSTS_DIR), str(state_file)]
    commands = [
        ["git", "add", "--", *paths],
        ["git", "diff", "--cached", "--quiet"],
    ]
    if dry_run:
        LOGGER.info("Dry run: would stage %s", ", ".join(paths))
        return
    subprocess.run(commands[0], check=True)
    if subprocess.run(commands[1]).returncode == 0:
        LOGGER.info("No new GitHub Pages commit; retrying any previously unpushed commits")
    else:
        subprocess.run(["git", "commit", "-m", message], check=True)
    subprocess.run(["git", "push"], check=True)


def require_env(name: str) -> str:
    value = os.getenv(name, "").strip()
    if not value:
        raise RuntimeError(f"Required environment variable is missing: {name}")
    return value


def main(argv: Iterable[str] | None = None) -> int:
    load_dotenv()
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--limit", type=int, default=0, help="Maximum Ghost posts to process (default: all published posts)")
    parser.add_argument("--state-file", type=Path, default=Path(os.getenv("PUBLISH_STATE_FILE", str(STATE_FILE))))
    parser.add_argument("--posts-dir", type=Path, default=POSTS_DIR)
    parser.add_argument("--dry-run", action="store_true", help="Fetch and render only; do not publish or push")
    parser.add_argument("--skip-blogger", action="store_true")
    parser.add_argument("--skip-git-push", action="store_true", help="Compatibility option; Git push is opt-in via --git-push")
    parser.add_argument("--git-push", action="store_true", help="Export Markdown and push it to GitHub Pages")
    args = parser.parse_args(list(argv) if argv is not None else None)
    logging.basicConfig(level=logging.INFO, format="%(levelname)s %(message)s")

    try:
        ghost = GhostClient(require_env("GHOST_URL"), require_env("GHOST_CONTENT_API_KEY"))
        state = load_state(args.state_file)
        posts = ghost.latest_published(args.limit)
        prefix = os.getenv("BLOGGER_SERIES_PREFIX", "")
        publish_status = os.getenv("BLOGGER_PUBLISH_STATUS", "published").strip().lower()
        if publish_status not in {"published", "draft"}:
            raise RuntimeError("BLOGGER_PUBLISH_STATUS must be either 'published' or 'draft'.")
        pending = pending_posts(posts, state, prefix)
        if not pending:
            LOGGER.info("No new published Ghost posts found")
            if args.git_push and not args.skip_git_push:
                run_git_push("Retry GitHub Pages push", args.dry_run, args.state_file)
            return 0

        blogger = None
        blog_id = ""
        if not args.skip_blogger:
            blog_id = os.getenv("BLOGGER_BLOG_ID", DEFAULT_BLOG_ID).strip()
            blogger = build_blogger_service()

        for post in pending:
            path = write_jekyll_post(post, args.posts_dir)
            blogger_result = {"status": "skipped", "post_id": "", "url": ""}
            if blogger is not None:
                blogger_result = publish_blogger(blogger, blog_id, post, args.dry_run, publish_status, prefix)
            state["processed_posts"][post.id] = {
                "blogger_post_id": blogger_result["post_id"],
                "blogger_post_url": blogger_result["url"],
                "slug": post.slug,
                "markdown_path": str(path),
                "content_hash": post_content_hash(post, prefix),
                "last_sync_at": datetime.now(timezone.utc).isoformat(),
                "last_sync_status": blogger_result["status"],
            }
            LOGGER.info("Processed %s: Blogger=%s Markdown=%s", post.slug, blogger_result["status"], path)
            if not args.dry_run:
                save_state(args.state_file, state)

        if args.dry_run:
            LOGGER.info("Dry run: state file and external services were not changed")
        if args.git_push and not args.skip_git_push:
            run_git_push(f"Publish Ghost post(s) to GitHub Pages", args.dry_run, args.state_file)
        return 0
    except (GhostAPIError, RuntimeError, requests.RequestException, subprocess.CalledProcessError) as exc:
        LOGGER.error("Pipeline failed: %s", exc)
        return 1


if __name__ == "__main__":
    sys.exit(main())

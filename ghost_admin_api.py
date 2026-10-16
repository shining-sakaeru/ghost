"""Minimal Ghost Admin API client for OpenHands post publishing.

Requires GHOST_ADMIN_API_KEY=id:hex-secret in the process environment. The
credential is never persisted or printed.
"""
from __future__ import annotations

import base64
import hashlib
import hmac
import json
import os
import time
from datetime import datetime, timezone
from urllib.error import HTTPError, URLError
from urllib.parse import urlencode
from urllib.request import Request, urlopen


class GhostAdminAPI:
    def __init__(self, base_url: str | None = None, api_key: str | None = None):
        self.base_url = (base_url or os.environ.get("GHOST_URL", "http://172.17.0.1:2368")).rstrip("/")
        key = api_key or os.environ.get("GHOST_ADMIN_API_KEY", "")
        if not key or ":" not in key:
            raise RuntimeError("Set GHOST_ADMIN_API_KEY to a Ghost Admin API integration key (id:secret).")
        self.key_id, secret_hex = key.split(":", 1)
        try:
            self.secret = bytes.fromhex(secret_hex)
        except ValueError:
            raise RuntimeError("GHOST_ADMIN_API_KEY must contain a hexadecimal secret; value withheld.") from None
        if not self.key_id or not self.secret:
            raise RuntimeError("GHOST_ADMIN_API_KEY is malformed; value withheld.")
        self._authors: dict[str, str] = {}
        self._tags: dict[str, str] = {}

    @staticmethod
    def _b64url(data: bytes) -> str:
        return base64.urlsafe_b64encode(data).rstrip(b"=").decode("ascii")

    def _jwt(self) -> str:
        now = int(time.time())
        header = {"alg": "HS256", "typ": "JWT", "kid": self.key_id}
        payload = {"iat": now, "exp": now + 300, "aud": "/admin/"}
        signing_input = ".".join((
            self._b64url(json.dumps(header, separators=(",", ":")).encode()),
            self._b64url(json.dumps(payload, separators=(",", ":")).encode()),
        ))
        signature = hmac.new(self.secret, signing_input.encode(), hashlib.sha256).digest()
        return signing_input + "." + self._b64url(signature)

    def _request(self, method: str, path: str, payload: dict | None = None) -> dict:
        url = self.base_url + "/ghost/api/admin/" + path.lstrip("/")
        data = None if payload is None else json.dumps(payload, ensure_ascii=False).encode("utf-8")
        request = Request(url, data=data, method=method, headers={
            "Authorization": "Ghost " + self._jwt(),
            "Accept-Version": os.environ.get("GHOST_ADMIN_API_VERSION", "v6.67"),
            "Content-Type": "application/json",
        })
        try:
            with urlopen(request, timeout=20) as response:
                if response.status < 200 or response.status >= 300:
                    raise RuntimeError(f"Ghost Admin API returned HTTP {response.status}.")
                return json.loads(response.read().decode("utf-8"))
        except HTTPError as error:
            raise RuntimeError(f"Ghost Admin API {method} request failed with HTTP {error.code}.") from None
        except URLError:
            raise RuntimeError("Ghost Admin API could not be reached at GHOST_URL.") from None

    @staticmethod
    def _published_at(value: str) -> str:
        parsed = datetime.fromisoformat(value.replace("Z", "+00:00"))
        if parsed.tzinfo is None:
            parsed = parsed.replace(tzinfo=timezone.utc)
        return parsed.astimezone(timezone.utc).isoformat(timespec="milliseconds").replace("+00:00", "Z")

    def _find(self, resource: str, slug: str) -> dict | None:
        params = {"filter": f"slug:{slug}", "limit": "1"}
        if resource == "posts":
            params["include"] = "authors,tags"
        query = urlencode(params)
        items = self._request("GET", f"{resource}/?{query}").get(resource, [])
        return next((item for item in items if item.get("slug") == slug), None)

    def _author_id(self, slug: str) -> str:
        if slug not in self._authors:
            author = self._find("users", slug)
            if not author:
                raise RuntimeError(f"Ghost author slug not found: {slug}")
            self._authors[slug] = author["id"]
        return self._authors[slug]

    def _tag_id(self, slug: str) -> str:
        if slug not in self._tags:
            tag = self._find("tags", slug)
            if not tag:
                name = slug.replace("-", " ").title()
                response = self._request("POST", "tags/", {"tags": [{"name": name, "slug": slug, "visibility": "public"}]})
                created = response.get("tags", [])
                if not created:
                    raise RuntimeError(f"Ghost did not return the created tag: {slug}")
                tag = created[0]
            self._tags[slug] = tag["id"]
        return self._tags[slug]

    @staticmethod
    def _existing_ids(record: dict | None, relation: str) -> list[dict[str, str]]:
        return [{"id": item["id"]} for item in (record or {}).get(relation, []) if item.get("id")]

    @staticmethod
    def _append_unique(target: list[dict[str, str]], value: dict[str, str]) -> None:
        if value["id"] not in {item["id"] for item in target}:
            target.append(value)

    def update_post(self, slug: str, fields: dict) -> dict:
        existing = self._find("posts", slug)
        if not existing:
            raise RuntimeError(f"Cannot update missing Ghost post: {slug}")
        payload = dict(fields)
        if "published_at" in payload and payload["published_at"]:
            payload["published_at"] = self._published_at(payload["published_at"])
        payload.update({"id": existing["id"], "updated_at": existing["updated_at"]})
        query = "?source=html" if "html" in payload else ""
        response = self._request("PUT", f"posts/{existing['id']}/{query}", {"posts": [payload]})
        return response["posts"][0]

    def upsert_post(self, post: dict, author_slugs: list[str] | None = None, tag_slugs: list[str] | None = None) -> dict:
        payload = dict(post)
        slug = payload.get("slug")
        if not slug:
            raise ValueError("Every Ghost post requires a slug.")
        if "published_at" in payload and payload["published_at"]:
            payload["published_at"] = self._published_at(payload["published_at"])
        existing = self._find("posts", slug)
        if existing:
            payload.update({"id": existing["id"], "updated_at": existing["updated_at"]})
        if author_slugs is not None:
            authors = self._existing_ids(existing, "authors")
            for author_slug in author_slugs:
                self._append_unique(authors, {"id": self._author_id(author_slug)})
            payload["authors"] = authors
        if tag_slugs is not None:
            tags = self._existing_ids(existing, "tags")
            for tag_slug in tag_slugs:
                self._append_unique(tags, {"id": self._tag_id(tag_slug)})
            payload["tags"] = tags
        payload.setdefault("status", "published")
        payload.setdefault("type", "post")
        payload.setdefault("visibility", "public")
        query = "?source=html" if "html" in payload else ""
        if existing:
            path = f"posts/{existing['id']}/{query}"
            method = "PUT"
        else:
            path = f"posts/{query}"
            method = "POST"
        response = self._request(method, path, {"posts": [payload]})
        return response["posts"][0]

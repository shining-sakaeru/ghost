import json
from pathlib import Path

import pytest
import publish_pipeline as pipeline


class Response:
    def __init__(self, status, payload):
        self.status_code = status
        self.ok = 200 <= status < 300
        self.payload = payload
        self.text = "sensitive response content"

    def json(self):
        return self.payload


class GhostSession:
    def __init__(self, response):
        self.response = response
        self.call = None

    def get(self, url, **kwargs):
        self.call = (url, kwargs)
        return self.response


def ghost_post(**kwargs):
    data = {"id": "ghost-1", "title": "Episode", "slug": "episode", "html": "<p>hello</p>", "tags": [{"name": "Docker"}], "published_at": "2026-01-01T00:00:00Z"}
    data.update(kwargs)
    return pipeline.GhostPost.from_api(data)


class FakeRequest:
    def __init__(self, response):
        self.response = response

    def execute(self):
        return self.response


class FakePosts:
    def __init__(self, pages=None):
        self.pages = list(pages or [])
        self.writes = []

    def list(self, **kwargs):
        return FakeRequest(self.pages.pop(0))

    def list_next(self, request, result):
        return FakeRequest(self.pages.pop(0)) if self.pages else None

    def insert(self, **kwargs):
        self.writes.append(("insert", kwargs))
        return FakeRequest({"id": "blogger-1", "url": "https://blogger.test/post"})

    def update(self, **kwargs):
        self.writes.append(("update", kwargs))
        return FakeRequest({"id": kwargs["postId"], "url": "https://blogger.test/post"})


class FakeService:
    def __init__(self, posts):
        self._posts = posts

    def posts(self):
        return self._posts


def test_ghost_content_api_success_and_standard_endpoint():
    session = GhostSession(Response(200, {"posts": [{"id": "1", "title": "Hi", "tags": []}]}))
    client = pipeline.GhostClient("https://ghost.test", "secret-key", session)
    result = client.latest_published(12)
    assert result[0].id == "1"
    url, options = session.call
    assert url == "https://ghost.test/ghost/api/content/posts/"
    assert options["params"]["key"] == "secret-key"
    assert options["params"]["include"] == "tags"
    assert options["params"]["formats"] == "html"
    assert options["params"]["filter"] == "status:published"
    assert options["params"]["order"] == "published_at DESC"


@pytest.mark.parametrize("status", [401, 403, 429])
def test_ghost_api_errors_are_safe(status):
    client = pipeline.GhostClient("https://ghost.test", "private-key", GhostSession(Response(status, {})))
    with pytest.raises(pipeline.GhostAPIError) as error:
        client.latest_published(1)
    assert f"HTTP {status}" in str(error.value)
    assert "private-key" not in str(error.value)
    assert "sensitive" not in str(error.value)


def test_html_to_markdown_tags_and_series_prefix():
    assert "**bold**" in pipeline.html_to_markdown("<p><strong>bold</strong></p>")
    post = ghost_post(tags=[{"name": "Docker"}, {"name": "Automation"}])
    assert pipeline.blogger_labels(post) == ["Docker", "Automation"]
    assert pipeline.blogger_labels(ghost_post(tags=[])) == []
    assert pipeline.series_title("Episode", "[Series]") == "[Series] Episode"
    assert pipeline.series_title("[Series] Episode", "[Series]") == "[Series] Episode"
    assert pipeline.series_title("Episode", "") == "Episode"


def test_marker_search_handles_blogger_pagination():
    posts = FakePosts([{"items": [{"id": "old", "content": "unrelated"}], "nextPageToken": "p2"},
                       {"items": [{"id": "found", "content": "<!-- ghost-post-id: ghost-1 -->"}]}])
    found = pipeline.find_blogger_post(FakeService(posts), "blog", "ghost-post-id: ghost-1")
    assert found["id"] == "found"


def test_blogger_insert_update_and_dry_run():
    post = ghost_post()
    create_api = FakePosts([{"items": []}])
    created = pipeline.publish_blogger(FakeService(create_api), "blog", post, False)
    assert created["status"] == "published"
    assert create_api.writes[0][0] == "insert"
    assert create_api.writes[0][1]["body"]["labels"] == ["Docker"]

    update_api = FakePosts([{"items": [{"id": "existing", "content": "ghost-post-id: ghost-1"}]}])
    updated = pipeline.publish_blogger(FakeService(update_api), "blog", post, False)
    assert updated["status"] == "updated"
    assert update_api.writes[0][0] == "update"

    dry_api = FakePosts([{"items": []}])
    result = pipeline.publish_blogger(FakeService(dry_api), "blog", post, True)
    assert result["status"] == "dry_run"
    assert dry_api.writes == []


def test_state_atomic_roundtrip_and_hash_skip(tmp_path):
    state_file = tmp_path / "processed_posts.json"
    state = {"processed_posts": {"ghost-1": {"content_hash": "abc", "last_sync_status": "published"}}}
    pipeline.save_state(state_file, state)
    assert json.loads(state_file.read_text()) == state
    assert state_file.stat().st_mode & 0o777 == 0o600
    assert not list(tmp_path.glob("*.tmp"))
    post = ghost_post()
    synced = {"processed_posts": {post.id: {"content_hash": pipeline.post_content_hash(post, ""), "last_sync_status": "published"}}}
    assert pipeline.pending_posts([post], synced, "") == []
    assert pipeline.pending_posts([post], {"processed_posts": {}}, "") == [post]


def test_missing_oauth_token_has_actionable_message(monkeypatch, tmp_path):
    monkeypatch.setattr(Path, "exists", lambda self: False)
    with pytest.raises(RuntimeError, match="blogger_auth.py"):
        pipeline.load_oauth_credentials(str(tmp_path / "client.json"), str(tmp_path / "token.json"))


def test_git_push_always_retries_remote_push_when_no_new_commit(monkeypatch, tmp_path):
    calls = []

    class Result:
        returncode = 0

    def fake_run(command, **kwargs):
        calls.append((command, kwargs))
        return Result()

    monkeypatch.setattr(pipeline, "POSTS_DIR", tmp_path)
    monkeypatch.setattr(pipeline.subprocess, "run", fake_run)
    pipeline.run_git_push("sync", False)

    assert [call[0] for call in calls] == [
        ["git", "add", str(tmp_path)],
        ["git", "diff", "--cached", "--quiet"],
        ["git", "push"],
    ]


def test_git_push_commits_changes_before_push(monkeypatch, tmp_path):
    calls = []

    class Result:
        def __init__(self, returncode=0):
            self.returncode = returncode

    def fake_run(command, **kwargs):
        calls.append((command, kwargs))
        return Result(1 if command[:3] == ["git", "diff", "--cached"] else 0)

    monkeypatch.setattr(pipeline, "POSTS_DIR", tmp_path)
    monkeypatch.setattr(pipeline.subprocess, "run", fake_run)
    pipeline.run_git_push("sync", False)

    assert [call[0] for call in calls] == [
        ["git", "add", str(tmp_path)],
        ["git", "diff", "--cached", "--quiet"],
        ["git", "commit", "-m", "sync"],
        ["git", "push"],
    ]

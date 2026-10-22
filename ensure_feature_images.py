#!/usr/bin/env python3
"""Ensure every published Ghost post has a public featured image.

Use --check to report drift without writes.  Without --check, missing images
are set through the Ghost Admin API.  The image can be overridden with
DEFAULT_FEATURE_IMAGE.
"""
from __future__ import annotations

import argparse
import os

from ghost_admin_api import GhostAdminAPI
from publish_pipeline import GhostClient, require_env

DEFAULT_FEATURE_IMAGE = "/content/images/2026/10/series-openhands.png"


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--check", action="store_true", help="Report missing images without updating Ghost.")
    args = parser.parse_args()
    image = os.getenv("DEFAULT_FEATURE_IMAGE", DEFAULT_FEATURE_IMAGE).strip()
    if not image:
        raise RuntimeError("DEFAULT_FEATURE_IMAGE must not be empty.")

    posts = GhostClient(require_env("GHOST_URL"), require_env("GHOST_CONTENT_API_KEY")).latest_published(0)
    missing = [post for post in posts if not post.feature_image]
    if not missing:
        print(f"All {len(posts)} published Ghost posts have featured images.")
        return 0

    print(f"Posts missing featured images: {len(missing)}")
    for post in missing:
        print(f"- {post.slug}")
    if args.check:
        return 1

    admin = GhostAdminAPI()
    for post in missing:
        result = admin.update_post(post.slug, {"feature_image": image})
        print(f"Updated {result['slug']}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

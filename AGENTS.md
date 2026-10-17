# Repository memory

## Publishing source of truth
- Ghost is the canonical source for every post.
- The required publishing chain is Ghost -> GitHub Pages -> Blogger.
- Keep Blogger's existing theme unchanged; synchronize content, not Blogger theme markup.
- For every published Ghost post, synchronize title, HTML body, tags, `published_at`, and `feature_image`.
- Blogger featured images must use publicly reachable URLs. Rewrite Ghost internal or relative image URLs to `https://shining-sakaeru.github.io` before Blogger updates.
- Verify all three destinations after publishing: Ghost post, GitHub Pages URL, and Blogger URL.
- Treat HTTP 429 from Blogger as retryable and preserve incremental state after each successful post.

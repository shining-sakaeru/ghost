# Repository memory

## Publishing source of truth
- Ghost is the canonical source for every post.
- The required publishing chain is Ghost -> GitHub Pages -> Blogger.
- Keep Blogger's existing theme unchanged; synchronize content, not Blogger theme markup.
- For every published Ghost post, synchronize title, HTML body, tags, `published_at`, and `feature_image`.
- A non-empty `feature_image` is a pre-publication requirement. Verify it resolves in Ghost and GitHub Pages, and that Blogger receives the corresponding public image URL.
- Blogger featured images must use publicly reachable URLs. Rewrite Ghost internal or relative image URLs to the deployed `https://shining-sakaeru.github.io/content/images/size/w1200/...` variant before Blogger updates.
- Preserve the root `.nojekyll` file on every Pages export and require an HTTP 200 image check before publishing a Blogger image URL.
- Verify all three destinations after publishing: Ghost post, GitHub Pages URL, and Blogger URL.
- Treat HTTP 429 from Blogger as retryable and preserve incremental state after each successful post.

# Blog content

`blog-posts.json` contains all Planetive blog articles migrated from planetive.org (25 posts).

Images are stored under `public/images/blog/`. To re-import from the legacy site (before it is taken down), run:

```bash
node scripts/import-blog-from-planetive.mjs
node scripts/localize-blog-assets.mjs
```

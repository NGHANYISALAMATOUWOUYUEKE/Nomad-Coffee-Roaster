## Suggested order (and why)

1. Add `react-helmet-async`, set a title + description per page.
   Fast to do, fast to verify (watch the browser tab per route).
2. Turn the `ServicePage` tabs into real routes
   (`/service/wholesale`, `/service/subscription`, `/service/training`).
   Pure routing, no new concepts — and it gives you real URLs for step 1
   to act on if you didn't already cover them.
3. Write `robots.txt` and `sitemap.xml` by hand in `public/`, now that
   there are real routes to list.
4. Add a JSON-LD `<script>` tag — `Organization` schema site-wide,
   `BlogPosting` schema per journal entry.
5. Last, and optional: look into a Vite prerendering plugin (e.g.
   `vite-plugin-ssg`) to get blog post content into the initial HTML.
   This is the hardest one and the one place a plain Vite SPA structurally
   struggles — worth understanding *why* before reaching for a fix.

## Run it

```bash
npm install
npm run dev
```

## Checking your work

- `npm run build`, then open `dist/index.html` in a text editor — before
  your fixes, it's nearly empty; after, real titles/descriptions/schema
  should be visible in the raw HTML (content from `useEffect` fetches
  still won't be, until step 5).
- View page source (not devtools inspector — that shows the *rendered*
  DOM, not what a crawler sees first) on each route to check titles are
  actually changing.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## SSG (Static Site Generation):

1. At the time of `npm run build`, pages using SSG fetch the data, generate the HTML, and save it as a static file.
2. When users request this page, they receive the pre-generated HTML.
3. If, after the build, the underlying data (e.g., the posts array) changes, the SSG page will not reflect those changes unless it's rebuilt i.e. `npm run build` is run again. While using the development server (`npm run dev`), Next.js behaves a bit differently. In development mode, the SSG pages are regenerated on every request (page refresh) to emulate the SSR behavior. This is done to streamline the development experience, allowing to instantly see the results of changes without rebuilding. So, in dev, SSG pages will update with latest data upon refresh.

4. In a production environment (after running `npm run build` and `npm start`), the static pages would remain static and not update on each request unless you use additional features or rebuild the site.
So, if there were 4 posts at build time, an SSG-based page will always show those 4 posts, even if more posts are added afterward, until the page is rebuilt.


## SSR (Server Side Rendering):

1. Pages using SSR don't pre-generate the HTML at build time. Instead, they generate the HTML on-the-fly for each request.
2. When a user requests an SSR page, the server fetches the latest data, renders the page, and then sends the HTML to the user's browser.
3. So, if you add 3 more posts to your data after the initial 4, an SSR-based page would show all 7 posts when requested, since it fetches and renders the data in real-time.

## React Query (or similar client-side data-fetching libraries(`fetch`, `axios`)):

1. After the initial page load, React Query can fetch data directly on the client side, store it in cache, and automatically re-fetch it at specified intervals or under certain conditions.
2. This means that if the data changes (like new posts being added), a page using React Query can reflect those changes without a full page refresh because it keeps re-fetching the data.
3. With React Query, even if the initial page was generated using SSG or SSR, subsequent data updates can be fetched directly on the client side, giving the appearance of real-time updates.
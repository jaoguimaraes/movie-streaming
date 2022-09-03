This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## How to use endpoints

Routes avaiables:
- `GET /movies`
- `POST /movies`
- `GET /movies/{id}`
- `PUT /movies/{id}`
- `DELETE /movies/{id}`

Postman collection available:
https://www.getpostman.com/collections/be654e3af89c5946958d

Payload to create movies:
- [`movies.json`](https://nextjs.org/docs/api-routes/introduction)
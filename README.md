Proyecto GuitarLa - Proyecto de venta de guitarras con Next.js y Strapi





This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


Errors

        npm run dev

        > guitarla_next@0.1.0 dev
        > next dev

        ready - started server on 0.0.0.0:3000, url: http://localhost:3000
        wait  - compiling...
        event - compiled client and server successfully in 1130 ms (128 modules)
        wait  - compiling / (client and server)...
        wait  - compiling...
        warn  - Attempted to load @next/swc-darwin-x64, but it was not installed
        error - ./pages/index.js
        TypeError: Cannot read properties of undefined (reading 'isWasm')
        error - Failed to load SWC binary for darwin/x64, see more info here: https://nextjs.org/docs/messages/failed-loading-swc
        
Solution: https://github.com/vercel/next.js/discussions/30468?sort=top

Simply remove node_modules, re run npm i or yarn install, and ensure npm or yarn downloads all binaries/packages with no problem on one flight and Voila!


Strapi - CMS Headless

npx create-strapi-app@3.6.8

yarn install --ignore-engines

solucionar error de versiones:

npm install --force -g node@14.18.2




Consumir API

cuando la informacion no cambia en cada request utilizamos:
getStaticProps- Obtener los dataos cuando se crea el build
getStaticPaths- Obtener el listado de paginas que se van a crear cuando se realiza un build

Cuando la informacion cambia continuamente utilizamos.
getServerSideProps - Los datos se obtienen en cada request
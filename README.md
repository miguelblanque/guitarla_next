Proyecto GuitarLa - Proyecto de venta de guitarras con Next.js, Strapi, mongodb, cloudinary y localstorage para carrito

Página principal de la tienda


![alt text](/img/guitarla_inicio.png)

Página de nosotros


![alt text](/img/guitarla_nosotros.png)


Página de Blog que consulta la api de strapi para obtener la informacion

![alt text](/img/guitarla_blog.png)


Tienda de guitarras que consulta la api de strapi para obtener la informacion

![alt text](/img/guitarla_tienda.png)


Agregar al carrito una guitarra


![alt text](/img/guitarla_guitarra.png)


Ver carrito donde podemos modificar la cantidad y eliminar productos. (LocalStorage)

![alt text](/img/guitarla_carrito.png)


Strapi


![alt text](/img/guitarla_strapi_guitarras.png)


Las imagenes en strapi se guardan en cloudinary

![alt text](/img/guitarla_cloudinary.png)


Mongodb

![alt text](/img/guitarla_mongodb.png)





Errores encontrados en el proyecto:

1- 
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

Eliminar /node_modules, y lanzar  npm i ó yarn install





2- Error versiones 
       error node sass version 7.0.1 is incompatible with ^4.0.0

   solucionar error de versiones :

        npm install --force -g node@14.18.2




Strapi deploy with heroku

https://boiling-brook-93263.herokuapp.com


App deploy with vercel 


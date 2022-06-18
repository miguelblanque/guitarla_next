import {useState} from 'react'
import { useEffect } from 'react'
import '../styles/normalize.css'
import '../styles/globals.css'



function MyApp({ Component, pageProps }) {

  const [carrito, setCarrito]= useState([])
  
  //obtenemos el carrito de LocalStorage
  useEffect(()=> {
    const carritoLS = JSON.parse(localStorage.getItem("carrito")) ?? [];
    setCarrito(carritoLS);
  }, []);
  //guardamos el carrito en LocalStorage
  useEffect(()=>{
    localStorage.setItem("carrito",JSON.stringify(carrito)) ;
   
  },[carrito]);

  const agregarCarrito = (producto) => {
    //Control producto duplicado para actualizar cantidad
    if(carrito.some(articulo => articulo.id=== producto.id)){
        const carritoActualizado = carrito.map( articulo => {
          if(articulo.id === producto.id){
            articulo.cantidad=producto.cantidad
          }
          return articulo;
        });
        setCarrito(carritoActualizado)
    }else{
      
      setCarrito([...carrito, producto]);
    }

   

  };

  return <Component 
  {...pageProps}  
  carrito={carrito}
  agregarCarrito={agregarCarrito}
  />
}

export default MyApp

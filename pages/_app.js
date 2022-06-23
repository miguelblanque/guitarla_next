import {useState , useEffect} from 'react';

import '../styles/normalize.css'
import '../styles/globals.css'



function MyApp({ Component, pageProps }) {

  const [carrito, setCarrito] = useState([]);
  

  //obtenemos el carrito de LocalStorage
  useEffect(() => {
    const obtenerLs=()=>{
        const carritoLS = JSON.parse(localStorage.getItem('carrito')) ?? []; 
      
        setCarrito(carritoLS);
        console.log('Obteniendo LS carrito: ',carritoLS)

        }
    obtenerLs();
     
    }, [])

  //guardamos el carrito en LocalStorage
  useEffect(()=> {
    if(carrito.length>0){
    localStorage.setItem('carrito', JSON.stringify(carrito)) ;
        console.log('Guardando en LS: ',carrito)
    }
  }, [carrito])




  const agregarCarrito = (producto) => {
    //Control producto duplicado para actualizar cantidad
    if(carrito.some(articulo => articulo.id === producto.id)){
        const carritoActualizado = carrito.map( ( articulo) => {
          if(articulo.id === producto.id){
            articulo.cantidad=producto.cantidad;
          }
          return articulo;
        });
        setCarrito(carritoActualizado)
    }else{
      
      setCarrito([...carrito, producto]);
    }

  };

  const actualizarCantidad = (producto) => {
    const carritoActualizado = carrito.map( ( articulo) => {
      if(articulo.id === producto.id){
        articulo.cantidad=producto.cantidad;
      }
      return articulo;
    });
    setCarrito(carritoActualizado)
  };

  const eliminarProducto =(id) => {
    const carritoActualizado = carrito.filter( articulo => articulo.id !== id) 
    setCarrito(carritoActualizado)
  }


  return <Component 
  {...pageProps}  
  carrito={carrito}
  agregarCarrito={agregarCarrito}
  actualizarCantidad={actualizarCantidad}
  eliminarProducto={eliminarProducto}
  />
}

export default MyApp

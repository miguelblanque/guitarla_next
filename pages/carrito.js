
import Layout from '../components/Layout'
import styles from "../styles/Carrito.module.css"


const Carrito = ({carrito}) => {
  
  console.log(carrito)

  return (
    <Layout pagina={"Carrito de Compras"}>
        <main className="contenedor">
            <h1 className="heading">Carrito</h1>
            <main className={`${styles.contenido} contenedor`}>
              <div>1</div>
              <div>2</div>
            </main>
        </main>
    </Layout>
  );mbg
};

export default Carrito;
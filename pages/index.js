
import Layout from '../components/Layout'
import Listado from '../components/Listado'


export default function Home({guitarras}) {
  return (
   
    <div>
      <Layout
      pagina='Inicio'
      >
      <main className='contenedor'>
        <h1 className='heading'>Nuestra Colección</h1>
        <Listado
           guitarras={guitarras}
          />

      </main>
      </Layout>

      
      
      
      </div>
      
      
  )
}
export async function getServerSideProps() {
  const url =`${process.env.API_URL}/guitarras/`
  const respuesta = await fetch(url)
  const guitarras = await respuesta.json()
 console.log(guitarras)

  return {
    props: {
      guitarras:guitarras
    }
  }
}

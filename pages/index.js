
import Layout from '../components/Layout'
import Listado from '../components/Listado'
import Curso from '../components/Curso'


export default function Home({guitarras, curso}) {
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

        <Curso 
         curso={curso}
        />


      </Layout>

    
      </div>
      
      
  )
}

export async function getServerSideProps() {

  // const url =`${process.env.API_URL}/guitarras/`
  // const respuesta = await fetch(url)
  // const guitarras = await respuesta.json()

  // const url =`${process.env.API_URL}/guitarras/`
  // const respuesta = await fetch(url)
  // const guitarras = await respuesta.json()

  //Se ejecutan en secuencia y da un mal performance, mejor utilizar promise para que se ejecute la llamada a las dos apis en paralelo.

  const urlGuitarras =`${process.env.API_URL}/guitarras/`
  const urlCursos = `${process.env.API_URL}/cursos/`

  const [resGuitarras,resCursos] = await Promise.all([
      fetch(urlGuitarras),
       fetch(urlCursos)
  ])

  const [guitarras,curso] = await Promise.all([
    resGuitarras.json(),
    resCursos.json()
  ])


  return {
    props: {
      guitarras:guitarras,
      curso:curso
    }
  }
}

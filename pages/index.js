
import Layout from '../components/Layout'
import Listado from '../components/Listado'
import Curso from '../components/Curso'
import ListadoBlog from '../components/ListadoBlog'

export default function Home({guitarras, curso, entradas}) {
  
  return (
   
    <div>
      <Layout
           pagina='Inicio'
           guitarra={guitarras[3]}
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
        
        <section className='contenedor'>
                <ListadoBlog
                   entradas={entradas}
                />
        </section>

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
  const urlBlog = `${process.env.NEXT_PUBLIC_API_URL}/blogs?_limit=3&_sort=created_at:desc`

  const [resGuitarras,resCursos,resBlog] = await Promise.all([
      fetch(urlGuitarras),
       fetch(urlCursos),
       fetch(urlBlog)
  ])

  const [guitarras,curso,entradas] = await Promise.all([
    resGuitarras.json(),
    resCursos.json(),
    resBlog.json()
  ])


  return {
    props: {
      guitarras:guitarras,
      curso:curso,
      entradas:entradas
    }
  }
}

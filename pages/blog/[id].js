import { useRouter } from "next/router"
import Layout from "../../components/Layout"
import { formatearFecha } from '../../helpers'
import Image from 'next/image'
import styles from '../../styles/Entrada.module.css'

const EntradaBlog = ({entrada}) => {
  
    const {contenido,imagen,published_at, titulo} = entrada


    return (
     <Layout>
         <main className="contenedor">
             <h1 className ="heading">{titulo}</h1>
            <article className={styles.entrada}>
                <Image layout='responsive' width={800} height={600} src={imagen.url} alt={`Imagen entrada ${titulo}`}/>

                <div className={styles.contenido}>
                    <p className={styles.fecha}>{formatearFecha(published_at)}</p>
                    <p className={styles.texto}>{contenido}</p>
                </div>
                </article>        
         </main>
     </Layout>
  )
}
//getStaticPaths para routing dinamico 
export async function getStaticPaths(){
 
    const url = `${process.env.API_URL}/blogs`
    const respuesta = await fetch(url)
    const entradas = await respuesta.json()

    const paths = entradas.map(entrada => ({
        params:{ id: entrada.id}
    }))

    
    return {
        paths,
        fallback: false // true: para muchas entradas, false: se contruyen las entradas por peticion
    }
}

export async function getStaticProps({params: { id }}){

    
    const url = `${process.env.API_URL}/blogs/${id}`
  const respuesta = await fetch(url)
  const entrada = await respuesta.json()

    return {
        props: {
            entrada
        }
    }
}

// export async function getServerSideProps({query: { id }}){


//     const url = `${process.env.NEXT_PUBLIC_API_URL}/blogs/${id}`
//   const respuesta = await fetch(url)
//   const entrada = await respuesta.json()

//     return {
//         props: {
//             entrada
//         }
//     }
// }


export default EntradaBlog
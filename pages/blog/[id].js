import { useRouter } from "next/router"

const EntradaBlog = ({entrada}) => {
  
    // const router= useRouter()

    // console.log(router.query)
  
    console.log(entrada)
    return (
    <div>Desde EntradaBlog</div>
  )
}
//getStaticPaths para routing dinamico 
export async function getStaticPaths(){
    const url ='http://localhost:1337/blogs'
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

    const url = `http://localhost:1337/blogs/${id}`
  const respuesta = await fetch(url)
  const entrada = await respuesta.json()

    return {
        props: {
            entrada
        }
    }
}

// export async function getServerSideProps({query: { id }}){

//     const url = `http://localhost:1337/blogs/${id}`
//   const respuesta = await fetch(url)
//   const entrada = await respuesta.json()

//     return {
//         props: {
//             entrada
//         }
//     }
// }


export default EntradaBlog
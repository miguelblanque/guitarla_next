import { useRouter } from "next/router"

const EntradaBlog = ({entrada}) => {
  
    // const router= useRouter()

    // console.log(router.query)
  
    console.log(entrada)
    return (
    <div>Desde EntradaBlog</div>
  )
}

export async function getServerSideProps({query: { id }}){

    const url = `http://localhost:1337/blogs/${id}`
  const respuesta = await fetch(url)
  const entrada = await respuesta.json()

    return {
        props: {
            entrada
        }
    }
}

export default EntradaBlog
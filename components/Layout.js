import Head from 'next/head'
import Header from './Header'
import Footeer from './Footeer'

const Layout = ({children,pagina,guitarra}) => {
  return (
    <div>      
       <Head>
         <title>GuitarLA - {pagina}</title>
         <meta name="description" content="Sitio Web de venta de guitarras"/>
         
         <link rel="preconnect" href="https://fonts.googleapis.com"/>
         <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
         <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap" rel="stylesheet"/>

             </Head>
       
       <Header
       guitarra={guitarra}
       />
        {children}

      <Footeer /> 
    </div>
  )
}
// props por defecto para cuando no este informado sea null
Layout.defaultProps = {
  guitarra: null
}
export default Layout
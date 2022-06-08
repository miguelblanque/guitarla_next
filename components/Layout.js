import Head from 'next/head'
import Header from './Header'
import Footeer from './Footeer'

const Layout = ({children,pagina}) => {
  return (
    <div>      
       <Head>
         <title>GuitarLA - {pagina}</title>
         <meta name="description" content="Sitio Web de venta de guitarras"/>
       </Head>
       
       <Header />
        {children}

      <Footeer /> 
    </div>
  )
}

export default Layout
import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'

const Nosotros = () => {
  return (
    <div>
      <Layout
      pagina='Nosotros'
      >
        
        desde Nosotros
      </Layout>
        <div>Desde 
        nosotros</div>
        
        <Link href="/">Ir a Inicio</Link>
    </div>
  )
}

export default Nosotros
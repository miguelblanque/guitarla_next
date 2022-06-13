import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Guitarra = ({guitarra}) => {
  console.log(guitarra)
  const {descripcion, imagen, nombre, precio , url} = guitarra
  console.log(descripcion,imagen, nombre, precio, url)
  return (
    <div>
        <Image layout='responsive' width={500} height={350} src={imagen[0].url} alt={`Imagen Guitarra ${nombre}`}/>
        <div>
          <h3>{nombre}</h3>
          <p>{descripcion}</p>
          <p>${precio}</p>
          <Link href={`/guitarras/${url}`}>
            Ver Producto
          </Link>
        </div>
    </div>
  )
}

export default Guitarra
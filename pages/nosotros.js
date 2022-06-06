
import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Nosotros.module.css'

const Nosotros = () => {
  return (
    <Layout 
    pagina='Nosotros'
    >
 
    <main className="contenedor">
      <h2 className="heading">Nosotros</h2>

      <div className={styles.contenido}>
        <Image layout="responsive"  width={600} height={450} src="/img/nosotros.jpg" alt="Imagen sobre nosotros"/>

        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed enim quis purus aliquam vulputate at id dolor. Etiam id metus sem. Mauris in vestibulum quam, sit amet eleifend erat. Vestibulum ultrices est id tristique malesuada. Pellentesque purus mi, euismod maximus elementum ut, laoreet vel felis. Morbi tincidunt dui mi. Donec tempor condimentum elit, ac elementum est fermentum sit amet. Praesent est quam, pharetra non pharetra sed, iaculis id sem. Aenean tincidunt maximus augue, non maximus quam venenatis ut. Sed mauris dui, convallis sed nunc a, hendrerit sodales lorem.</p>
           <p>Pellentesque ut volutpat mi, eu fringilla nisi. Nullam aliquet augue id mauris sollicitudin, in cursus est volutpat. Donec tempor massa nec est accumsan, ac auctor erat semper. Sed sollicitudin, dui lacinia consectetur accumsan, ex lectus suscipit ante, ut pharetra lacus urna in lorem. Nam nisl eros, ultricies non mauris nec, tempus semper est. Duis in lacus neque. Maecenas ut fermentum velit. Suspendisse quis nisl mauris. Sed ac est eu erat gravida vestibulum. Pellentesque vitae faucibus nisi. Morbi varius pretium consequat. In egestas porta consequat. Suspendisse potenti.</p>
        </div>
      </div>
    </main>
    </Layout>
 
  )
}

export default Nosotros 
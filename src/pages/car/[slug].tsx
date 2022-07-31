
import groq from 'groq'
import client from '../../lib/client'
import { urlImage } from '../../lib/sanityUtils'

const Car = ({car}) => {

  const { title = 'Missing title', brand = 'Missing name' } = car
  console.log(car)
  
  return (
    <article>
      <h1>{title}</h1>
      <span>Brand {brand}</span>
      <div>
      {car.gallery.map((pic)=><img key={pic._key} src={urlImage(pic).width(500).url()} />)}
      </div>
      
    </article>
  )
}

const query = groq`*[_type == "car" && slug.current == $slug][0]{
  title,
  "brand": brand->name,
  "gallery": gallery
}`

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "car" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug) => ({params: {slug}})),
    fallback: true,
  }
}



export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params
  console.log('slug',slug)
  const car = await client.fetch(query, { slug })
  return {
    props: {
      car
    }
  }
}

export default Car
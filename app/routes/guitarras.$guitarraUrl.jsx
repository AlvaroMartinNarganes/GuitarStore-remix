import { useLoaderData } from "@remix-run/react";
import { getGuitarra } from "../models/guitarras.server";
import styles from '../styles/guitarras.css/'

export function meta({data}) {
  if(!data){
    return [
      { title: `Guitarra no encontrada` },
      { description: `Guitarra no encontrada` }
    ]
  }

  return [
    { title: `Guitar Store - ${data.attributes.nombre}` },
    { description: `Información de la guitarra ${data.attributes.nombre}` }
  ]
}
export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

export async function loader({ params }) {
  const { guitarraUrl } = params
  const guitarra = await getGuitarra(guitarraUrl)

  if(guitarra.data.length===0){
    throw new Response ('',{
      status:404,
      statusText: 'Guitarra no encontrada'
    })
  }

  return guitarra.data[0]
}
function Guitarra() {
  const guitarra = useLoaderData();
  const { nombre, descripcion, imagen, precio } = guitarra.attributes
  return (
    <main className="contenedor guitarra">
      <img src={imagen.data.attributes.url} alt="Imagen de la guitarra" />
      <div className="contenido">
        <h3>{nombre}</h3>
        <p className="texto">{descripcion}</p>
        <p className="precio">{precio}</p>
      </div>
    </main>
  )
}

export default Guitarra
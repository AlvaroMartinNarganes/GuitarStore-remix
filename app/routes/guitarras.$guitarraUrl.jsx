import { useLoaderData, useOutletContext } from "@remix-run/react";
import { getGuitarra } from "../models/guitarras.server";
import styles from '../styles/guitarras.css/'
import { useState } from "react";

export function meta({ data }) {
  if (!data) {
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

  if (guitarra.data.length === 0) {
    throw new Response('', {
      status: 404,
      statusText: 'Guitarra no encontrada'
    })
  }

  return guitarra.data[0]
}

function Guitarra() {
  const {agregarCarrito}=useOutletContext()
  const [cantidad, setCantidad] = useState(0)
  const guitarra = useLoaderData();
  const { nombre, descripcion, imagen, precio } = guitarra.attributes

  //Validacion del Form
  const handleSubmit=e=>{
    e.preventDefault();
  
    if(cantidad<1){
      alert('Seleccione una cantidad')
      return
    }
  
    const guitarraSeleccionada={
      id:guitarra.id,
      imagen:imagen.data.attributes.url,
      nombre,
      precio,
      cantidad
    }

    agregarCarrito(guitarraSeleccionada)
  }
  

  return (
    <main className="contenedor guitarra">
      <img src={imagen.data.attributes.url} alt="Imagen de la guitarra" />
      <div className="contenido">
        <h3>{nombre}</h3>
        <p className="texto">{descripcion}</p>
        <p className="precio">{precio}</p>
        <form className="formulario" onSubmit={handleSubmit} >
          <label htmlFor="cantidad">Cantidad</label>
          <select onChange={e=>setCantidad(parseInt(e.target.value))} id="cantidad">
            <option value="">--Seleccione--</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <input type="submit" value="Agregar al carrito"/>
        </form>
      </div>
    </main>
  )
}

export default Guitarra
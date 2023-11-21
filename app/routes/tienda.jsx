import { useLoaderData } from "@remix-run/react";
import { getGuitarras } from "../models/guitarras.server"
import Guitarra from "../components/guitarra";
import styles from '../styles/guitarras.css'
import ListadoGuitarras from "../components/listado-guitarras";

export function meta() {
  return [
    { title: 'Guitar Store - Tienda' },
    { description: 'Nuestras guitarras' }
  ]
}
export function links() {
  return [
    { rel: 'stylesheet', href: styles }
  ]
}

//El loader carga en el server, ya sabe lo que tiene que hacer
export async function loader() {
  const guitarras = await getGuitarras();
  return guitarras.data
}

function Tienda() {
  const guitarras = useLoaderData() //Aquí lo consumimos en el cliente
  return (
    <>
    <ListadoGuitarras guitarras={guitarras}/>
    </>
  )
}

export default Tienda
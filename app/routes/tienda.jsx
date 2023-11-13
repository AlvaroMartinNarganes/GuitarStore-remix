import { useLoaderData } from "@remix-run/react";
import { getGuitarras } from "../models/guitarras.server"
import Guitarra from "../components/guitarra";

//El loader carga en el server, ya sabe lo que tiene que hacer
export async function loader() {
  const guitarras = await getGuitarras();
  return guitarras.data
}

function Tienda() {
  const guitarras = useLoaderData() //Aquí lo consumimos en el cliente
  return (
    <main className="contenider">
      <h2 className="heading">Nuestra Colección</h2>
      {guitarras.length && (
        <div className="guitarras-grid">
          {guitarras.map(guitarra => (
            <Guitarra key={guitarra.id} guitarra={guitarra.attributes} />
          ))}
        </div>
      )}
    </main>
  )
}

export default Tienda
import React from 'react'

function Curso({curso}) {
    const {titulo,contenido,imagen}=curso
  return (
    <section className='curso'> 
    {/*Usamos la inyeccion para poder acceder a los atributos de la imagen, ya que desde el archivo css no puedes ir a la imagen*/}
    <style jsx="true">{
        `.curso{
            background-image: linear-gradient(to right, rgb(0 0 0 / .65), rgb(0 0 0 / .7)), url(${imagen.data.attributes.url});
        }`
    }</style>
    <div className="contenedor curso-grid">
        <div className="contenido">
            <h2 className="heading">{titulo}</h2>
            <p className="texto">{contenido}</p>
        </div>
    </div>

    </section>
  )
}

export default Curso
import { Link } from '@remix-run/react'
import React from 'react'
import { formatearFecha } from '../utils/helpers'

function Post({post}) {
    const {titulo, contenido,url,imagen, publishedAt}=post.attributes

  return (
    <article className='post'>
        <img src={imagen.data.attributes.formats.small.url} alt={`Imagen del post ${titulo}`} className='imagen' />
        <div className="contenido">
            <h3>{titulo}</h3>
            <p className="fecha">{formatearFecha(publishedAt)}</p>
            <p className='resumen'>{contenido}</p>
            <Link to={`/posts/${url}`} className='enlace'>Leer Post</Link>
        </div>
    </article>
  )
}

export default Post
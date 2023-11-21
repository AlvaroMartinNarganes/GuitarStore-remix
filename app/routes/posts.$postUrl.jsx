import { useLoaderData } from '@remix-run/react';
import React from 'react'
import { getPost } from '../models/blogs.server';
import { formatearFecha } from '../utils/helpers';
import styles from "../styles/blog.css"

export function meta({data}) {
  if(!data){
    return [
      { title: `Blog no encontrado` },
      { description: `Blog no encontrado` }
    ]
  }

  return [
    { title: `Guitar Store - ${data.attributes.titulo}` },
    { description: `Blog - ${data.attributes.titulo}` }
  ]
}
export function links(){
  return [
    { rel: 'stylesheet', href: styles }
]
}

export async function loader({ params }) {
  const result = await getPost(params.postUrl)
  if(result.data.length===0){
    throw new Response ('',{
      status:404,
      statusText: 'Post no encontrado '
    })
  }

  return result.data[0]
}

function Post() {
  const post = useLoaderData()
  const {titulo,contenido,url, publishedAt, imagen}=post.attributes
  return (
    <article className='contenedor post mt-3'>
      <img src={imagen.data.attributes.url} alt={`Imagen del post ${titulo}`} className='imagen' />
        <div className="contenido">
            <h3>{titulo}</h3>
            <p className="fecha">{formatearFecha(publishedAt)}</p>
            <p className='texto'>{contenido}</p>
        </div>
    </article>
  )
}

export default Post
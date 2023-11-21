import { useLoaderData } from "@remix-run/react"
import { getPosts } from "../models/blogs.server"
import Post from "../components/post";
import styles from '../styles/blog.css'
import ListadoPosts from "../components/listado-posts";


export function meta() {
    return [
      { title: 'Guitar Store - Blogs' },
      { description: 'Nuestros blogs' }
    ]
  }
export function links(){
    return [
        { rel: 'stylesheet', href: styles }
    ]
}

export async function loader() {
    const posts = await getPosts()
    return posts.data
}

function Blog() {
    const posts = useLoaderData()

    return (
        <main className="contenedor">
            <ListadoPosts posts={posts}/>
        </main>
    )
}

export default Blog
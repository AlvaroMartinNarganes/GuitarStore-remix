import { useState } from 'react'
import { Meta, Links, Outlet, Scripts, LiveReload, useRouteError, isRouteErrorResponse, Link } from '@remix-run/react'
import styles from './styles/index.css'
import Header from './components/header'
import Footer from './components/footer'
//cabecera
export function meta() {
    return [
        { charset: 'utf-8' },
        { title: 'Guitar Store Remix' },
        { viewport: 'width=device-width, initial-scale=1' }

    ]
}


//Estilos
export function links() {
    return [
        {
            rel: 'stylesheet',
            href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
        },
        {
            rel: 'stylesheet',
            href: styles
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com'
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com',
            crossOrigin: 'true'
        },
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Outfit:wght@400;700;900&display=swap'
        },
    ]
}

//Vamos a usar context para usar estados globales, para ello al outlet le pasamos el context, el cual debe contener un objeto
export default function App() {
    const [carrito, setCarrito] = useState([])
    const agregarCarrito = guitarra => {
        if (carrito.some(guitarraState => guitarraState.id === guitarra.id)) {
            //Como el producto ya existe, actualizamos el valor por si se ha equivocado
            const carritoActualizado=carrito.map(guitarraActual=>{
                if(guitarraActual.id=== guitarra.id){
                    guitarraActual.cantidad=guitarra.cantidad
                }
                return guitarraActual
            })
            setCarrito(carritoActualizado)
        } else {
            setCarrito([...carrito, guitarra])

        }
    }

    const actualizarCantidad=guitarra=>{
        const carritoActualizado=carrito.map(guitar=>{
            if(guitar.id===guitarra.id){
                guitar.cantidad=guitarra.cantidad
            }
            return guitar
        })

        setCarrito(carritoActualizado)
    }

    return (
        <Document>
            <Header />
            <Outlet context={{
                agregarCarrito,
                carrito,
                actualizarCantidad
            }} />
            <Footer />
        </Document>
    )
}

function Document({ children }) {
    return (
        <html lang="es">
            <head>
                <Meta />
                <Links />
            </head>
            <body>
                {children}
                <Scripts />
                <LiveReload />
            </body>
        </html>
    )
}

/** Manejo de errores en la nueva versión */
export function ErrorBoundary() {
    const error = useRouteError()

    if (isRouteErrorResponse(error)) {
        return (
            <Document>
                <Header />
                <p className="error">
                    {error.status} {error.statusText}
                    <Link className='error-enlace' to="/">Volver al inicio</Link>
                </p>
                <Footer />
            </Document>
        )
    }
}
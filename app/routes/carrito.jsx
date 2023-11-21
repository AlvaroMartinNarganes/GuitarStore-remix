import styles from "../styles/carrito.css"

export function links() {
    return [
        { rel: 'stylesheet', href: styles }
    ]
}

export function meta() {
    return [
        { title: 'Guitar Store - Carrito de compras' },
        { description: 'Carrito de compras de guitar store' }
    ]
}


function Carrito() {
    return (
        <main className="contenedor">
            <h1 className="heading">Carrito de Compras</h1>
            <div className="contenido">
                <div className="carrito">
                    <h2>Articulos</h2>
                </div>
                <aside className="resumen">
                    <h3>Resumen del pedido</h3>
                    <p>Total a pagar: €</p>
                </aside>
            </div>

        </main>
    )
}

export default Carrito
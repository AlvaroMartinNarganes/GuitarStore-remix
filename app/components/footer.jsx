import React from 'react'
import Navegacion from './navegacion'

export default function Footer() {
  return (
    <footer className='footer'>
        <div className="contenedor contenido">
            <Navegacion/>
            <p className="copyright">Todos los derechos reservados a Álvaro Martín Narganes {new Date().getFullYear()}</p>
        </div>
    </footer>
  )
}

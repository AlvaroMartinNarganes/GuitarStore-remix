import imagen from '../../public/img/nosotros.jpg'
import styles from '../styles/nosotros.css'

export function meta() {
  return [
    { title: 'Guitar Store - Nosotros' },
    { description: 'Venta de guitarras amantes de la musica' }
  ]
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel:'preload',
      href:imagen,
      as: 'image'
    }
  ]
}
function Nosotros() {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>
      <div className="contenido">
        <img src={imagen} alt="imagen sobre nosotros" />
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus placerat enim, in gravida arcu varius eu. Etiam massa tellus, feugiat et lobortis sit amet, auctor convallis justo. Donec tincidunt ac turpis vel volutpat. Donec blandit odio ac leo imperdiet aliquam. Nullam ipsum erat, tempor semper faucibus ornare, volutpat at justo. Curabitur sit amet turpis eget erat hendrerit hendrerit id suscipit ipsum. Vestibulum tortor enim, pharetra vitae lacus vel, pulvinar posuere tortor. Nam at lacinia felis, ut accumsan tellus.</p>

          <p>Pellentesque ac odio lectus. Nam ornare velit at mauris varius bibendum. Proin at enim gravida est pellentesque porta a eu eros. Suspendisse potenti. Sed condimentum ullamcorper sem vel ornare. Ut rhoncus nunc eu felis commodo lobortis. Nullam quis tempor nisi.</p>
        </div>
      </div>
    </main>
  )
}

export default Nosotros
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="page not-found">
      <h1>404</h1>
      <h2>Pagina no encontrada</h2>
      <p>La ruta que buscas no existe o ha sido movida.</p>
      <Link to="/" className="btn btn-primary">Volver al Inicio</Link>
    </section>
  )
}

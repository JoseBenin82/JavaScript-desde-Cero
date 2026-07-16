import { Link } from 'react-router-dom'

export default function Perfil() {
  return (
    <section className="page perfil">
      <h2>Mi Perfil</h2>
      <div className="perfil-card">
        <div className="perfil-avatar">JP</div>
        <h3>Juan Perez</h3>
        <p>paciente@correo.com</p>
        <p className="perfil-tipo">Paciente</p>
      </div>
      <div className="perfil-actions">
        <Link to="/citas" className="btn btn-primary">Mis Citas</Link>
        <Link to="/" className="btn btn-outline">Volver al Inicio</Link>
      </div>
    </section>
  )
}

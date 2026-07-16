import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="page home">
      <div className="hero-section">
        <h1>Gestion de Citas Medicas</h1>
        <p>
          Agenda, consulta y administra tus citas medicas de forma rapida y segura.
          Conectamos pacientes con los mejores profesionales de la salud.
        </p>
        <div className="hero-actions">
          <Link to="/registro" className="btn btn-primary btn-lg">Crear Cuenta</Link>
          <Link to="/login" className="btn btn-outline btn-lg">Iniciar Sesion</Link>
        </div>
      </div>

      <div className="features">
        <div className="feature-card">
          <span className="feature-icon">1</span>
          <h3>Agenda Facil</h3>
          <p>Selecciona medico, especialidad y horario en pocos clicks.</p>
        </div>
        <div className="feature-card">
          <span className="feature-icon">2</span>
          <h3>Recordatorios</h3>
          <p>Recibe notificaciones de tus proximas citas.</p>
        </div>
        <div className="feature-card">
          <span className="feature-icon">3</span>
          <h3>Historial Clinico</h3>
          <p>Accede a tu historial de citas y diagnostico.</p>
        </div>
      </div>
    </section>
  )
}

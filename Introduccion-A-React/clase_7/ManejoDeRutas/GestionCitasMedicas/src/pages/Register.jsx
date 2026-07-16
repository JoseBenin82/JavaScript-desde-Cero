import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Register() {
  const [form, setForm] = useState({ nombre: '', email: '', password: '' })
  const navigate = useNavigate()

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/dashboard')
  }

  return (
    <section className="page auth-page">
      <div className="auth-card">
        <h2>Crear Cuenta</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nombre">Nombre Completo</label>
            <input id="nombre" name="nombre" value={form.nombre} onChange={handleChange} placeholder="Juan Perez" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo Electronico</label>
            <input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="correo@ejemplo.com" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contrasena</label>
            <input id="password" name="password" type="password" value={form.password} onChange={handleChange} placeholder="********" required />
          </div>
          <button type="submit" className="btn btn-primary btn-block">Registrarse</button>
        </form>
        <p className="auth-link">
          ¿Ya tienes cuenta? <Link to="/login">Inicia sesion</Link>
        </p>
      </div>
    </section>
  )
}

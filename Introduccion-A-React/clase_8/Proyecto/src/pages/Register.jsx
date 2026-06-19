import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/useAuth'

export default function Register() {
  const { register } = useAuth()
  const navigate = useNavigate()

  const [form, setForm] = useState({ name: '', username: '', password: '' })
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setSubmitting(true)
    try {
      await register(form)
      // Tras registrarse queda logueado automáticamente -> vamos al timeline.
      navigate('/', { replace: true })
    } catch (err) {
      setError(err.message)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="auth-card">
      <h1>Crear cuenta</h1>
      <p className="muted">Únete a Chirp en segundos.</p>

      <form onSubmit={handleSubmit} className="form">
        <label>
          Nombre
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Tu nombre"
          />
        </label>

        <label>
          Usuario
          <input
            name="username"
            value={form.username}
            onChange={handleChange}
            autoComplete="username"
            placeholder="tu_usuario"
          />
        </label>

        <label>
          Contraseña
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            autoComplete="new-password"
            placeholder="Mínimo 6 caracteres"
          />
        </label>

        {error && <p className="error">{error}</p>}

        <button type="submit" className="btn btn-primary" disabled={submitting}>
          {submitting ? 'Creando…' : 'Registrarme'}
        </button>
      </form>

      <p className="muted">
        ¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link>
      </p>
    </div>
  )
}

import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/useAuth'

export default function Navbar() {
  const { user, isAuthenticated, logout } = useAuth()
  const navigate = useNavigate()

  function handleLogout() {
    logout()
    navigate('/login')
  }

  return (
    <header className="navbar">
      <Link to="/" className="brand">
        🐦 Chirp
      </Link>

      <nav className="nav-links">
        {isAuthenticated ? (
          <>
            <NavLink to="/" end>
              Inicio
            </NavLink>
            <NavLink to="/perfil">Perfil</NavLink>
            <span className="nav-user">@{user.username}</span>
            <button type="button" className="btn btn-ghost" onClick={handleLogout}>
              Cerrar sesión
            </button>
          </>
        ) : (
          <>
            <NavLink to="/login">Iniciar sesión</NavLink>
            <NavLink to="/registro" className="btn btn-primary">
              Registrarse
            </NavLink>
          </>
        )}
      </nav>
    </header>
  )
}

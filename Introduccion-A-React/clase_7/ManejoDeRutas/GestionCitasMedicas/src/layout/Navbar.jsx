import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Inicio' },
  { to: '/citas', label: 'Citas' },
  { to: '/doctores', label: 'Doctores' },
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/perfil', label: 'Perfil' },
]

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <NavLink to="/">MediCitas</NavLink>
      </div>
      <ul className="navbar-links">
        {links.map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="navbar-actions">
        <NavLink to="/login" className="btn btn-outline">Iniciar Sesion</NavLink>
        <NavLink to="/registro" className="btn btn-primary">Registrarse</NavLink>
      </div>
    </nav>
  )
}

import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/useAuth'

// Componente "guardián": envuelve a las rutas que requieren autenticación.
// Si no hay usuario logueado, redirige al login.
export default function ProtectedRoute({ children }) {
  const { isAuthenticated, loading } = useAuth()
  const location = useLocation()

  // Mientras leemos la sesión de localStorage no decidimos nada todavía.
  if (loading) {
    return <p className="loading">Cargando…</p>
  }

  if (!isAuthenticated) {
    // Guardamos la ruta a la que intentaba entrar para volver tras el login.
    return <Navigate to="/login" replace state={{ from: location }} />
  }

  return children
}

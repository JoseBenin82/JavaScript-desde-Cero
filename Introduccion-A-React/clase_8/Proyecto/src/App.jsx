import { Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import ProtectedRoute from './components/ProtectedRoute'
import { useAuth } from './context/useAuth'
import Home from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Register from './pages/Register'
import './App.css'

// Si el usuario YA está autenticado y trata de ir a /login o /registro,
// lo mandamos al timeline en lugar de mostrarle el formulario de nuevo.
function PublicOnlyRoute({ children }) {
  const { isAuthenticated, loading } = useAuth()
  if (loading) return <p className="loading">Cargando…</p>
  return isAuthenticated ? <Navigate to="/" replace /> : children
}

function App() {
  return (
    <div className="app">
      <Navbar />

      <main className="container">
        <Routes>
          {/* Rutas protegidas: requieren sesión iniciada */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/perfil"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />

          {/* Rutas públicas: solo para usuarios NO autenticados */}
          <Route
            path="/login"
            element={
              <PublicOnlyRoute>
                <Login />
              </PublicOnlyRoute>
            }
          />
          <Route
            path="/registro"
            element={
              <PublicOnlyRoute>
                <Register />
              </PublicOnlyRoute>
            }
          />

          {/* Cualquier otra ruta redirige al inicio */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  )
}

export default App

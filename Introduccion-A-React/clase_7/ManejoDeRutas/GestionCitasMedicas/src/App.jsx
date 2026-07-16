import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Citas from './pages/Citas'
import CitaDetalle from './pages/CitaDetalle'
import Doctores from './pages/Doctores'
import Perfil from './pages/Perfil'
import NotFound from './pages/NotFound'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="registro" element={<Register />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="citas" element={<Citas />} />
          <Route path="citas/:id" element={<CitaDetalle />} />
          <Route path="doctores" element={<Doctores />} />
          <Route path="perfil" element={<Perfil />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

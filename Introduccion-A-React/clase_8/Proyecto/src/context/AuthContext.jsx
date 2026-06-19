import { useState } from 'react'
import { hashPassword } from '../utils/crypto'
import { AuthContext } from './useAuth'
import {
  clearSession,
  findUserByUsername,
  getSession,
  getUsers,
  saveSession,
  saveUsers,
} from '../utils/storage'

// El contexto (definido en ./useAuth) nos permite compartir el estado de
// autenticación con TODA la app sin pasar props de componente en componente.
export function AuthProvider({ children }) {
  // Recuperamos la sesión guardada al iniciar (inicializador perezoso) para
  // mantener al usuario logueado aunque recargue la página. `user` contiene los
  // datos públicos del usuario autenticado (sin la contraseña), o null.
  const [user, setUser] = useState(() => getSession())
  // Como la lectura de localStorage es síncrona no necesitamos un estado de
  // carga real; lo dejamos en false para que los guardianes de ruta decidan ya.
  const loading = false

  // Registro: valida que el usuario no exista, hashea la contraseña y lo guarda.
  async function register({ name, username, password }) {
    const cleanName = name.trim()
    const cleanUsername = username.trim()

    if (!cleanName || !cleanUsername || !password) {
      throw new Error('Todos los campos son obligatorios.')
    }
    if (password.length < 6) {
      throw new Error('La contraseña debe tener al menos 6 caracteres.')
    }
    if (findUserByUsername(cleanUsername)) {
      throw new Error('Ese nombre de usuario ya está en uso.')
    }

    const newUser = {
      id: crypto.randomUUID(),
      name: cleanName,
      username: cleanUsername,
      passwordHash: await hashPassword(password),
      createdAt: new Date().toISOString(),
    }

    saveUsers([...getUsers(), newUser])

    // Iniciamos sesión automáticamente tras registrarse.
    return startSession(newUser)
  }

  // Login: busca el usuario y compara el hash de la contraseña.
  async function login({ username, password }) {
    const found = findUserByUsername(username.trim())
    const passwordHash = await hashPassword(password)

    // Comparamos el hash incluso si el usuario no existe para no revelar
    // qué parte de las credenciales fue la incorrecta.
    if (!found || found.passwordHash !== passwordHash) {
      throw new Error('Usuario o contraseña incorrectos.')
    }

    return startSession(found)
  }

  // Guardamos en estado y en localStorage solo los datos públicos del usuario.
  function startSession(fullUser) {
    const publicUser = {
      id: fullUser.id,
      name: fullUser.name,
      username: fullUser.username,
      createdAt: fullUser.createdAt,
    }
    setUser(publicUser)
    saveSession(publicUser)
    return publicUser
  }

  function logout() {
    setUser(null)
    clearSession()
  }

  const value = {
    user,
    loading,
    isAuthenticated: Boolean(user),
    register,
    login,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

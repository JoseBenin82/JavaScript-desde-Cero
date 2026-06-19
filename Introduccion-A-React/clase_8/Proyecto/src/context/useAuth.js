import { createContext, useContext } from 'react'

// El objeto Context vive aquí (en un archivo sin componentes) junto al hook que
// lo consume. Separarlo del <AuthProvider> mantiene contento a React Fast
// Refresh, que pide que cada archivo exporte solo componentes o solo utilidades.
export const AuthContext = createContext(null)

// Hook de conveniencia para consumir el contexto con una validación útil.
export function useAuth() {
  const context = useContext(AuthContext)
  if (context === null) {
    throw new Error('useAuth debe usarse dentro de un <AuthProvider>.')
  }
  return context
}

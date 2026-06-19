// Utilidad para "hashear" contraseñas antes de guardarlas.
// Usamos la Web Crypto API (SHA-256) para NO almacenar nunca la contraseña en
// texto plano dentro de localStorage. Es una simulación con fines educativos:
// en una app real el hashing y la validación se harían en el servidor con
// algoritmos diseñados para contraseñas (bcrypt, argon2, etc.).

export async function hashPassword(password) {
  // Convertimos el texto a bytes
  const encoder = new TextEncoder()
  const data = encoder.encode(password)

  // Calculamos el digest SHA-256
  const hashBuffer = await window.crypto.subtle.digest('SHA-256', data)

  // Pasamos el ArrayBuffer a una cadena hexadecimal legible
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('')
}

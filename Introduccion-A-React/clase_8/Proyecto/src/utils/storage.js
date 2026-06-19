// Capa de acceso a localStorage.
// Centralizamos aquí las claves y la (de)serialización JSON para que el resto
// de la app no manipule localStorage directamente. Así es más fácil de leer,
// probar y, en el futuro, sustituir por una API real.

const KEYS = {
  users: 'twclone_users',
  session: 'twclone_session',
  tweets: 'twclone_tweets',
}

function read(key, fallback) {
  try {
    const raw = localStorage.getItem(key)
    return raw ? JSON.parse(raw) : fallback
  } catch {
    // Si el JSON está corrupto devolvemos el valor por defecto en vez de romper
    return fallback
  }
}

function write(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}

/* ----------------------------- Usuarios ----------------------------- */

export function getUsers() {
  return read(KEYS.users, [])
}

export function saveUsers(users) {
  write(KEYS.users, users)
}

export function findUserByUsername(username) {
  const normalized = username.trim().toLowerCase()
  return getUsers().find((u) => u.username.toLowerCase() === normalized)
}

/* ----------------------------- Sesión ----------------------------- */

export function getSession() {
  return read(KEYS.session, null)
}

export function saveSession(user) {
  write(KEYS.session, user)
}

export function clearSession() {
  localStorage.removeItem(KEYS.session)
}

/* ----------------------------- Tweets ----------------------------- */

export function getTweets() {
  return read(KEYS.tweets, [])
}

export function saveTweets(tweets) {
  write(KEYS.tweets, tweets)
}

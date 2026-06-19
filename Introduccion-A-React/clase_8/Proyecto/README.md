# 🐦 Chirp

Un clon minimalista de Twitter construido con **React 19** y **Vite**. Permite registrarse, iniciar sesión, publicar tweets y verlos en un timeline, con toda la información persistida en el navegador mediante `localStorage`.

Proyecto educativo de la sesión de **Introducción a React** (clase 8). Su objetivo es practicar enrutado, contexto global, rutas protegidas y manejo de estado.

## ✨ Funcionalidades

- **Registro de usuarios** con validación (campos obligatorios, contraseña mínima de 6 caracteres y nombre de usuario único).
- **Inicio de sesión** con verificación de credenciales.
- **Sesión persistente**: el usuario sigue logueado aunque recargue la página.
- **Timeline (Inicio)**: publica tweets de hasta 280 caracteres con contador en vivo; los más recientes aparecen arriba.
- **Perfil**: muestra los datos del usuario y solo sus propios tweets.
- **Rutas protegidas**: las páginas de Inicio y Perfil requieren sesión iniciada; las de Login y Registro solo son accesibles si **no** hay sesión.
- **Hash de contraseñas** con SHA-256 (Web Crypto API) para no guardar contraseñas en texto plano.

## 🛠️ Tecnologías

- [React 19](https://react.dev/)
- [React Router DOM 7](https://reactrouter.com/)
- [Vite 8](https://vite.dev/)
- [ESLint](https://eslint.org/)
- `localStorage` + Web Crypto API (sin backend)

## 🚀 Puesta en marcha

Requisitos: [Node.js](https://nodejs.org/) 18+ y npm.

```bash
# 1. Instalar dependencias
npm install

# 2. Levantar el servidor de desarrollo
npm run dev

# 3. Abrir la URL que muestra la consola (por defecto http://localhost:5173)
```

## 📜 Scripts disponibles

| Script            | Descripción                                    |
| ----------------- | ---------------------------------------------- |
| `npm run dev`     | Inicia el servidor de desarrollo con HMR.      |
| `npm run build`   | Genera la build de producción en `dist/`.      |
| `npm run preview` | Sirve localmente la build de producción.       |
| `npm run lint`    | Ejecuta ESLint sobre el proyecto.              |

## 📁 Estructura del proyecto

```
src/
├── components/
│   ├── Navbar.jsx           # Barra de navegación (cambia según la sesión)
│   ├── ProtectedRoute.jsx   # Guardián de rutas que requieren autenticación
│   └── Tweet.jsx            # Tarjeta que renderiza un tweet
├── context/
│   ├── AuthContext.jsx      # Proveedor de autenticación (register, login, logout)
│   └── useAuth.js           # Contexto y hook para consumir la sesión
├── pages/
│   ├── Home.jsx             # Timeline y composer de tweets
│   ├── Login.jsx            # Formulario de inicio de sesión
│   ├── Profile.jsx          # Perfil del usuario y sus tweets
│   └── Register.jsx         # Formulario de registro
├── utils/
│   ├── crypto.js            # Hash de contraseñas con SHA-256
│   └── storage.js           # Capa de acceso a localStorage
├── App.jsx                  # Definición de rutas
└── main.jsx                 # Punto de entrada (Router + AuthProvider)
```

## 🗄️ Persistencia de datos

No hay servidor. Toda la información se guarda en `localStorage` bajo estas claves:

- `twclone_users` — lista de usuarios registrados (con la contraseña hasheada).
- `twclone_session` — datos públicos del usuario con sesión activa.
- `twclone_tweets` — lista de tweets publicados.

> ⚠️ **Nota educativa:** el hash de contraseñas en el cliente es una simulación con fines didácticos. En una aplicación real, el hashing y la validación de credenciales deben hacerse en el servidor con algoritmos diseñados para contraseñas (bcrypt, argon2, etc.).

## 📝 Licencia

Proyecto con fines educativos.

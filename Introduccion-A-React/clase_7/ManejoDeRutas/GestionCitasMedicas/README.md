# MediCitas — Gestion de Citas Medicas

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-7-CA4245?logo=reactrouter&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-blue)

Aplicacion web SPA para la gestion eficiente de citas medicas. Construida con **React 19** + **Vite 8** y enrutamiento declarativo con **React Router v7**.

## Stack

| Tecnologia | Proposito |
|---|---|
| React 19 | UI basada en componentes |
| Vite 8 | Build tool con HMR |
| React Router v7 | Enrutamiento SPA |
| JavaScript (ES6+) | Logica del cliente |

## Routing — Conceptos Aplicados

| Concepto | Uso en el proyecto |
|---|---|
| `BrowserRouter` | Envoltorio principal en `App.jsx` |
| `Routes` / `Route` | 9 rutas definidas, incluyendo comodin `*` |
| Ruta dinamica `:id` | `/citas/:id` para detalle individual |
| `useParams` | Captura del ID en `CitaDetalle.jsx` |
| `useNavigate` | Redireccion tras login/registro |
| `NavLink` | Barra de navegacion con clase `active` |
| `Outlet` | Layout compartido (Navbar + Footer) |
| `Link` | Navegacion declarativa en todas las vistas |

## Estructura

```
src/
├── layout/          # Navbar, Footer, MainLayout (con Outlet)
├── pages/           # Home, Login, Register, Dashboard, Citas, CitaDetalle, Doctores, Perfil, NotFound
├── App.jsx          # BrowserRouter + Routes
├── App.css          # Estilos de componentes
├── main.jsx         # Entry point
└── index.css        # Variables globales
```

## Rutas

| Ruta | Vista | Tipo |
|---|---|---|
| `/` | Landing page | Estatica |
| `/login` | Inicio de sesion | Estatica |
| `/registro` | Registro de usuario | Estatica |
| `/dashboard` | Panel con estadisticas | Estatica |
| `/citas` | Listado de citas | Estatica |
| `/citas/:id` | Detalle de cita | Dinamica (`useParams`) |
| `/doctores` | Directorio de medicos | Estatica |
| `/perfil` | Perfil del usuario | Estatica |
| `*` | Pagina 404 | Catch-all |

## Ejecutar

```bash
npm install
npm run dev
```

Abre en `http://localhost:5173`.

## Scripts

| Comando | Accion |
|---|---|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de produccion |
| `npm run preview` | Vista previa del build |
| `npm run lint` | Analisis con ESLint |

## Licencia

MIT

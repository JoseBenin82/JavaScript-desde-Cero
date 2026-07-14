<div align="center">

# ⏱ Contador de Tareas

### Registra, organiza y visualiza el tiempo invertido en tus tareas

**Hecho con React · useMemo · useEffect**

</div>

---

## 🧑‍💻 ¿Qué es esto?

Una aplicación web sencilla pero poderosa para **registrar tareas** con su duración y **ver al instante cuánto tiempo total llevas acumulado**. Ideal para quienes quieren medir su productividad sin complicaciones.

No necesitas registrarte, ni descargar nada pesado. Solo abres la página, agregas una tarea, le pones los minutos que te tomó, y la app hace el resto.

---

## ✨ Funcionalidades

| Para el usuario | Para el desarrollador |
|----------------|----------------------|
| 🕐 **Reloj en vivo** — la hora se actualiza sola cada segundo | 🔁 **useEffect** — efectos secundarios como el reloj, el título dinámico y persistencia en localStorage |
| 📊 **Estadísticas al instante** — cuántas tareas, total de minutos y promedio por tarea | 🧠 **useMemo** — cálculos optimizados que solo se ejecutan cuando es necesario |
| 🎯 **Filtros por duración** — tareas cortas, medianas o largas de un clic | 💾 **Persistencia automática** — las tareas se guardan solas, aunque recargues la página |
| 🌙 **Modo oscuro automático** — se adapta a tu sistema | 🧹 **Sin librerías externas** — solo React puro para aprender los fundamentos |
| ❌ **Eliminar tareas** — un clic para borrar lo que ya no necesitas | 🎨 **CSS moderno con variables** — fácil de modificar y mantener |

---

## 🚀 Cómo usarlo (sin ser developer)

```bash
# 1. Asegúrate de tener Node.js instalado
# 2. Abre una terminal en esta carpeta y escribe:
npm install

# 3. Cuando termine, escribe:
npm run dev

# 4. Abre tu navegador en la dirección que aparezca
#    (normalmente http://localhost:5173)
```

> 💡 **Tip:** Si solo quieres ver la versión ya compilada, ejecuta `npm run preview` después de `npm run build`.

## 🔧 Cómo usarlo (para developers)

```bash
npm install      # Instala dependencias
npm run dev      # Servidor de desarrollo con recarga en caliente
npm run build    # Genera build de producción en /dist
npm run preview  # Previsualiza el build
npm run lint     # Analiza el código con ESLint
```

---

## 📁 Estructura del proyecto

```
ContadorDeTareas/
├── public/
│   └── favicon.svg        # Icono de la pestaña
├── src/
│   ├── App.css            # Estilos de la aplicación
│   ├── App.jsx            # ✅ Toda la lógica y la interfaz
│   ├── index.css          # Estilos globales y modo oscuro
│   └── main.jsx           # Punto de entrada de React
├── index.html
├── package.json
├── vite.config.js
└── eslint.config.js
```

Solo **un componente principal** (`App.jsx`) con todo lo necesario. Sin rutas, sin stores, sin complejidad innecesaria.

---

## 🧪 Hooks de React utilizados

### `useState` — el estado de la app
Controla la lista de tareas, los campos del formulario, el filtro activo y la hora actual.

### `useEffect` — efectos secundarios
- **Reloj:** un intervalo cada segundo actualiza la hora en pantalla (con limpieza al salir).
- **Título dinámico:** el título de la pestaña muestra el total de minutos acumulados.
- **Persistencia:** cada vez que agregas o eliminas una tarea, se guarda automáticamente en `localStorage`.

### `useMemo` — rendimiento inteligente
- **Tiempo total:** solo recalcula cuando la lista de tareas cambia, no en cada render.
- **Tareas filtradas:** igual con los filtros, evitando recorrer el array innecesariamente.

---

## 📚 Workshop

Este proyecto forma parte de la **Clase 3 — Introducción a React** del curso de **Extensión en Desarrollo Frontend** (DEV.F).

El objetivo fue construir una aplicación real usando `useEffect` y `useMemo`, entender cuándo y por qué optimizar, y salir del "Hola Mundo" para crear algo útil de verdad.

---

<div align="center">

**Hecho con 💜 por un estudiante, para quien quiera aprender**

</div>

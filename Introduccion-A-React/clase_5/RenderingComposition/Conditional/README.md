# 🎯 Adivina el Número — React Conditional Rendering & Component Composition

> **Demo interactivo de React** que demuestra **renderizado condicional** y **composición de componentes** mediante un juego de adivinanza de números.

---

## 📖 ¿Qué demuestra este proyecto?

| Concepto | Implementación |
|---|---|
| **Conditional Rendering** | `FeedbackMessage` se renderiza solo cuando hay retroalimentación. `GameOver` solo cuando el jugador acierta. `History` solo si hay intentos registrados. |
| **Component Composition** | `Game` compone 5 subcomponentes independientes (`GuessInput`, `FeedbackMessage`, `AttemptCounter`, `GameOver`, `History`) sin acoplarlos entre sí. |
| **State Management** | `useState` para el número secreto, intentos, feedback, historial y estado del juego. |
| **Callbacks / Lifting State** | `onGuess` y `onRestart` se pasan como props para que los hijos comuniquen eventos al padre. |
| **CSS Modules / Scoped Styles** | Cada componente con nombres de clase BEM para estilos predecibles y mantenibles. |

---

## 🕹️ Cómo jugar

1. El sistema genera un número aleatorio entre **1 y 100**.
2. Ingresa tu intento y presiona **"Adivinar"**.
3. Recibirás retroalimentación dinámica: 🔥 "Estás muy cerca", ⬆️ "El número es mayor", ⬇️ "El número es menor".
4. ¡Sigue intentando hasta acertar! 🏆
5. El contador de intentos y el historial te muestran tu progreso en tiempo real.

---

## 🧱 Arquitectura de componentes

```
App
└── Game                    ← estado central (secret, attempts, feedback, gameOver, history)
    ├── AttemptCounter      ← muestra número de intentos
    ├── GuessInput          ← formulario controlado con validación
    ├── FeedbackMessage     ← renderizado condicional: success | warning | hint
    ├── GameOver            ← renderizado condicional solo al ganar
    └── History             ← renderizado condicional solo si hay intentos
```

### Flujo de datos

```
GuessInput ──(onGuess)──▶ Game ──(message, type)──▶ FeedbackMessage
                              ──(attempts)─────────▶ AttemptCounter
                              ──(gameOver)─────────▶ GameOver
                              ──(history)──────────▶ History
                              ◀──(onRestart)─────── GameOver
```

---

## 🚀 Stack técnico

| Herramienta | Versión |
|---|---|
| [React](https://react.dev) | 19.x |
| [Vite](https://vite.dev) | 8.x |
| ESLint | 10.x |

---

## ⚡ Instalación y uso

```bash
# 1. Clonar el repositorio
git clone https://github.com/tu-usuario/adivina-el-numero.git
cd adivina-el-numero

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm run dev

# 4. Abrir en el navegador
# http://localhost:5173
```

### Comandos disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Inicia servidor de desarrollo con HMR |
| `npm run build` | Compila para producción |
| `npm run preview` | Previsualiza el build de producción |
| `npm run lint` | Ejecuta ESLint |

---

## 🧪 Posibles extensiones (ideas para practicar)

- [x] Feedback visual con emojis y colores según la cercanía
- [x] Historial de intentos con pistas
- [x] Modo oscuro automático (prefers-color-scheme)
- [ ] Dificultad seleccionable (1-50, 1-500, 1-1000)
- [ ] Mejor puntuación guardada en localStorage
- [ ] Temporizador / modo contrarreloj
- [ ] Animaciones con Framer Motion
- [ ] Pruebas unitarias con Vitest + React Testing Library
- [ ] Internacionalización (i18n) con react-intl
- [ ] Versión con TypeScript

---

## 📚 Aprendizajes clave

- **Renderizado condicional** con operadores `&&`, ternarios y retornos tempranos (`if (!message) return null`).
- **Composición > Herencia**: Componentes pequeños y reutilizables que se combinan para formar interfaces complejas.
- **Estado unidireccional**: Los datos fluyen hacia abajo (props) y los eventos hacia arriba (callbacks).
- **Separación de responsabilidades**: Cada componente tiene una única función bien definida.

---

## 🧑‍💻 Autor

Proyecto educativo creado como parte del taller de **Rendering Composition & Conditional Rendering** de **DEV.F**.

---

<div align="center">
  <sub>Hecho con ❤️ para aprender React — ¡Adivina el número y comparte tu mejor puntuación!</sub>
</div>

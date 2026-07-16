# 🚀 Panel de Control del Explorador Espacial

**React · Hooks · Ciclo de Vida · Vite**

---

Una aplicación interactiva que simula el panel de control de una nave espacial, construida para demostrar dominio del ciclo de vida de componentes funcionales en React a través de los hooks `useState`, `useEffect` y `useMemo`.

## 🎯 Lo que demuestra

| Concepto | Implementación |
|---|---|
| **Gestión de estado** | `useState` para distancia, combustible, estado de nave y planetas visitados |
| **Efectos secundarios** | `useEffect` simula vuelo en tiempo real (intervalo de 1s) con consumo de combustible y avance de distancia |
| **Ciclo de vida — Montaje** | Log "Panel listo" e inicio del intervalo al montar el componente |
| **Ciclo de vida — Actualización** | Log "Combustible actualizado" cada vez que cambia el combustible |
| **Ciclo de vida — Desmontaje** | Cleanup del intervalo y log "Panel apagado" al desmontar |
| **Optimización** | `useMemo` memoiza el mensaje de estado para evitar renders innecesarios |
| **Componentes anidados** | `Planeta` con su propio ciclo de vida (montaje/desmontaje individual) |

## 🛠️ Stack

- **React 19** — Functional components + Hooks
- **Vite 8** — Build tool ultrarrápido
- **ESLint** — Código limpio y consistente

## ▶️ Cómo ejecutar

```bash
npm install
npm run dev
```

Abre la consola del navegador para observar en tiempo real los mensajes del ciclo de vida.

## 📸 Funcionamiento

1. La nave vuela automáticamente: cada segundo aumenta la distancia y reduce el combustible.
2. Ingresa el nombre de un planeta y presiona **Aterrizar**.
3. El planeta se agrega a la bitácora con una animación y su hook de montaje se ejecuta.
4. Al recargar la página, todos los planetas se desmontan — observable en consola.

---

*Proyecto educativo del programa DEV.F — Frontend Extension Master.*

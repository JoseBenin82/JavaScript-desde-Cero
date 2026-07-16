# Gestor de Inventario — React Hooks Avanzados

Aplicación funcional en React que demuestra el uso práctico de `useReducer`, `useRef` y `useCallback` para la gestión de inventario de una tienda.

## Hooks implementados

| Hook | Propósito | Implementación |
|------|-----------|----------------|
| `useReducer` | Estado complejo del inventario (CRUD de productos, manejo de errores) | Reducer con acciones `ADD_PRODUCT`, `REMOVE_PRODUCT`, `UPDATE_QUANTITY`, `EDIT_PRODUCT`, `CLEAR_ERROR` |
| `useRef` | Referencias al DOM sin causar re-renders | Auto-focus en el input del formulario (`src/components/ProductForm.jsx:14`), ref al heading principal (`src/App.jsx:45`) |
| `useCallback` | Funciones memoizadas para evitar recreación innecesaria | Handlers `handleAdd`, `handleRemove`, `handleUpdateQuantity`, `handleEdit` memoizados en `src/App.jsx:49-64` |

Además se utiliza `useMemo` para el cálculo de estadísticas y `memo` / `React.memo` para evitar re-renders en filas de la tabla.

## Características

- **CRUD completo** de productos: agregar, editar, eliminar y ajustar existencias
- **Validación**: no permite duplicados, muestra errores en un banner interactivo
- **Estadísticas en tiempo real**: total de productos, valor del inventario, stock bajo, precio promedio
- **Categorización** de productos con badges visuales
- **Edición inline** directamente en la tabla
- **Diseño responsive** con modo oscuro

## Tecnologías

- React 19
- Vite 8
- ESLint (configuración moderna con flat config)

## Cómo ejecutar

```bash
npm install
npm run dev        # Desarrollo con HMR
npm run build      # Producción
npm run preview    # Vista previa de producción
```

## Estructura del proyecto

```
src/
  App.jsx                      # Componente raíz — useReducer + handlers con useCallback
  App.css                      # Estilos globales
  components/
    ProductForm.jsx            # Formulario — useRef para auto-focus
    InventoryTable.jsx         # Tabla — memo + callbacks
    StatsPanel.jsx             # Estadísticas — useMemo
```

## Lo que demuestra este proyecto

- Manejo de **estado complejo** con `useReducer` en lugar de múltiples `useState`
- **Interacción con el DOM** mediante `useRef` sin provocar re-renders
- **Optimización de rendimiento** con `useCallback` y `React.memo` para evitar renders innecesarios en hijos
- Organización de componentes y separación de responsabilidades
- Buenas prácticas: reducer inmutable, componentes puros, accesibilidad (`aria-label`, `role`, `aria-expanded`)

---

Proyecto educativo creado como parte del taller de **Hooks Avanzados en React** — DEV.F.

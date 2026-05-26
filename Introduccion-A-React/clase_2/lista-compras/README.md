# Lista de Compras

Aplicación web hecha con **React** y **Vite** para organizar las compras del supermercado. Permite agregar productos a una lista, marcarlos como comprados, eliminarlos uno por uno o limpiar la lista completa. Muestra en todo momento un resumen con el total de productos, cuántos quedan pendientes y cuántos ya están comprados.

## Funcionalidades

- Agregar productos a la lista mediante un formulario.
- Marcar productos como comprados (y desmarcarlos).
- Eliminar un producto de la lista.
- Limpiar toda la lista con un solo botón.
- Resumen en vivo: total, pendientes y comprados.

## Tecnologías

- React 19
- Vite
- JavaScript (JSX)
- CSS

## Cómo ejecutarlo

1. Instalar las dependencias:
   ```bash
   npm install
   ```
2. Levantar el servidor de desarrollo:
   ```bash
   npm run dev
   ```
3. Abrir el navegador en la URL que muestre la terminal (por defecto `http://localhost:5173`).

## Scripts disponibles

- `npm run dev` — inicia el servidor de desarrollo.
- `npm run build` — genera la versión de producción.
- `npm run preview` — previsualiza la versión de producción.
- `npm run lint` — ejecuta ESLint.

## Estructura del proyecto

```
src/
├── components/
│   ├── FormularioProducto.jsx
│   └── ListaCompras.jsx
├── App.jsx
├── App.css
├── main.jsx
└── style.css
```

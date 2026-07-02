# Consumo de APIs: Fetch vs Axios

Aplicación web sencilla que consume la [API de Rick & Morty](https://rickandmortyapi.com/) para obtener y mostrar personajes, implementando las solicitudes HTTP con **Fetch** y **Axios** por separado para comparar ambos enfoques.

## Estructura del proyecto

```
├── index.html       Estructura HTML con estilos y script tags
├── app.js           Código compartido (renderCharacters, setStatus)
├── app-fetch.js     Solicitud HTTP con Fetch
├── app-axios.js     Solicitud HTTP con Axios
└── README.md        Este archivo
```

## Cómo usar

1. Abre `index.html` en tu navegador (no requiere servidor).
2. Haz clic en **Obtener con Fetch** para cargar personajes usando `fetch`.
3. Haz clic en **Obtener con Axios** para cargar personajes usando `axios`.

Cada botón muestra un indicador visual del método utilizado y su estado (cargando, éxito o error).

## APIs utilizadas

- **Rick & Morty API** — `https://rickandmortyapi.com/api/character`
- **Axios CDN** — `https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js`

## Tecnologías

- HTML5 + CSS3
- JavaScript (Fetch API, Promesas)
- Axios

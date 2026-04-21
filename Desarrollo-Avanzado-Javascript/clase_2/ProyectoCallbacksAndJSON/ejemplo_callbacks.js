/*
  Ejemplo extra: repaso del concepto de callback.
  Un callback es una función que se pasa como argumento a otra función
  para que sea invocada en un momento posterior (frecuentemente después
  de una operación asíncrona).
*/

// Callback síncrono: se ejecuta inmediatamente dentro de la función.
function transformar(texto, callback) {
  return callback(texto);
}

const aMayusculas = (t) => t.toUpperCase();
const invertir   = (t) => t.split("").reverse().join("");

console.log(transformar("hola mundo", aMayusculas)); // HOLA MUNDO
console.log(transformar("hola mundo", invertir));    // odnum aloh

// Callback asíncrono: simula una operación con retraso usando setTimeout.
function descargarDatos(url, callback) {
  console.log(`→ Solicitando ${url}...`);
  setTimeout(() => {
    const respuesta = { url, ok: true, payload: [1, 2, 3] };
    callback(null, respuesta);
  }, 800);
}

descargarDatos("https://api.ejemplo.com/libros", (err, data) => {
  if (err) {
    console.error("Error:", err);
    return;
  }
  console.log("✅ Respuesta recibida:", data);
});

// Callback hell vs. encadenamiento ordenado:
// Cuando varias tareas asincrónicas dependen unas de otras,
// los callbacks se anidan. Por eso existen Promises y async/await.
descargarDatos("/paso-1", (err, r1) => {
  console.log("Paso 1 listo:", r1.url);
  descargarDatos("/paso-2", (err, r2) => {
    console.log("Paso 2 listo:", r2.url);
    descargarDatos("/paso-3", (err, r3) => {
      console.log("Paso 3 listo:", r3.url);
      console.log("🎯 Cadena completa finalizada.");
    });
  });
});

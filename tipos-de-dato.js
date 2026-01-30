// --- Valores solicitados ---

console.log(typeof 42);             // 'number'
console.log(typeof 'Veinticinco');  // 'string' (las palabras van entre comillas)
console.log(typeof -666);           // 'number' (negativos también son numbers)
console.log(typeof true);           // 'boolean'
console.log(typeof 0);              // 'number'
console.log(typeof '');             // 'string' (una cadena vacía sigue siendo texto)

// ¡OJO AQUÍ! null es un caso especial en JS
console.log(typeof null);           // 'object' (esto es un error histórico de JS que se quedó así)

console.log(typeof undefined);      // 'undefined'

// ¡CUIDADO! JS distingue entre mayúsculas y minúsculas
console.log(typeof FALSE);          // Error o 'undefined' (si no está definida, JS la tratará como variable, no como el booleano false)


// Ejemplos para experimenta

console.log(typeof 3.14);           // 'number' (no hay tipo "float" o "decimal", todo es number)
console.log(typeof [1, 2, 3]);      // 'object' (los arrays son técnicamente objetos)
console.log(typeof { nombre: 'AI' });// 'object'
console.log(typeof NaN);            // 'number' (aunque significa "Not a Number", ¡su tipo es número!)
console.log(typeof function(){});   // 'function'
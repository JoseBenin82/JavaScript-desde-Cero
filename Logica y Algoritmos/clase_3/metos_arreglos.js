/**
 * PROYECTO: Filtro y Orden de Productos de una Tienda Online
  métodos de arreglos: filter(), sort(), map() y más.
 */

// 1. Crea un arreglo de objetos con al menos 5 productos.
const productos = [
    { nombre: "Monitor Gamer", precio: 350, categoria: "Electrónica" },
    { nombre: "Teclado Mecánico", precio: 85, categoria: "Periféricos" },
    { nombre: "Ratón Inalámbrico", precio: 45, categoria: "Periféricos" },
    { nombre: "Alfombrilla", precio: 15, categoria: "Accesorios" },
    { nombre: "Silla Ergonómica", precio: 250, categoria: "Mobiliario" },
    { nombre: "Auriculares con Micrófono", precio: 60, categoria: "Audio" }
];

console.log("--- INVENTARIO ORIGINAL ---");
console.log(productos);
console.log("\n");


// 2. Usa filter() para obtener los productos que cuesten menos de $100.
const productosBaratos = productos.filter(producto => producto.precio < 100);

console.log("--- PRODUCTOS QUE CUESTAN MENOS DE $100 (filter) ---");
console.log(productosBaratos);
console.log("\n");


// 3. Usa sort() para ordenar esos productos alfabéticamente por su nombre.
// Nota: Hacemos una copia del arreglo con el operador spread [...] porque sort() muta el arreglo original.
// Usamos localeCompare para un ordenamiento alfabético preciso.
const productosOrdenados = [...productosBaratos].sort((a, b) =>
    a.nombre.localeCompare(b.nombre)
);

console.log("--- PRODUCTOS BARATOS ORDENADOS ALFABÉTICAMENTE (sort) ---");
console.log(productosOrdenados);
console.log("\n");


// 4. Usa map() para generar un nuevo arreglo que contenga solo los nombres de los productos.
const nombresDeProductos = productosOrdenados.map(producto => producto.nombre);

console.log("--- SOLO LOS NOMBRES DE ESOS PRODUCTOS (map) ---");
console.log(nombresDeProductos);
console.log("\n");



// EXTRA 1: Usar reduce() para calcular el valor total de TODO el inventario.
const valorTotalInventario = productos.reduce((acumulador, producto) => acumulador + producto.precio, 0);

console.log("--- VALOR TOTAL DEL INVENTARIO (reduce) ---");
console.log(`El valor de todos los productos suma: $${valorTotalInventario}`);
console.log("\n");

// EXTRA 2: Usar some() para verificar si existe AL MENOS UN producto en la categoría "Mobiliario".
const hayMobiliario = productos.some(producto => producto.categoria === "Mobiliario");

console.log("--- VERIFICACIÓN DE CATEGORÍAS (some) ---");
console.log(`¿Hay artículos de mobiliario en la tienda? ${hayMobiliario ? 'Sí' : 'No'}`);
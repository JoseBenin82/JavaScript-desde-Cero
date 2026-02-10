
const librosLeidos = [];

// 2. Función para agregar un libro
function agregarLibro(titulo) {
    // El método .push() añade el elemento al final del arreglo
    librosLeidos.push(titulo); 
    console.log(`Has agregado: "${titulo}" a tu lista.`);
}

// 3. Función para mostrar todos los libros
function mostrarLibrosLeidos() {
    console.log("--- Lista de Libros Leídos ---");
    
    // Verificamos si la lista está vacía antes de recorrerla
    if (librosLeidos.length === 0) {
        console.log("Aún no has leído ningún libro.");
    } else {
        // Recorremos el arreglo para imprimir cada título
        for (let i = 0; i < librosLeidos.length; i++) {
            // (i + 1) sirve para que la lista empiece en 1 y no en 0 visualmente
            console.log((i + 1) + ". " + librosLeidos[i]);
        }
    }
}

// --- ZONA DE PRUEBAS ---
// Aquí llamamos a las funciones para ver si funcionan

mostrarLibrosLeidos(); // Debería decir que está vacía

agregarLibro("El Principito");
agregarLibro("Cien Años de Soledad");
agregarLibro("1984");
agregarLibro("Muchas vidas varios Maestros");

mostrarLibrosLeidos(); 
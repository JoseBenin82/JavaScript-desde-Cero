/**
 * PROYECTO: Algoritmo de Los 2 Punteros
 * Problema: Encuentra los Invitados que Pueden Sentarse Juntos
 */

const invitados = ["Ana", "Carlos", "Cecilia", "Daniel", "Diana", "Eduardo"];

function encontrarPareja(arr) {
    // Definimos nuestros dos punteros
    let inicio = 0;
    let siguiente = 1;

    // Recorremos el arreglo mientras el segundo puntero no se salga de los límites
    while (siguiente < arr.length) {
        
        // Obtenemos las iniciales de los nombres en las posiciones actuales.
        // Usamos [0] para sacar la primera letra y toLowerCase() para 
        // asegurarnos de que la comparación sea exacta sin importar mayúsculas.
        let inicialInicio = arr[inicio][0].toLowerCase();
        let inicialSiguiente = arr[siguiente][0].toLowerCase();

        // Compara las iniciales de los nombres en los punteros
        if (inicialInicio === inicialSiguiente) {
            // Si coinciden, devuelve el par de nombres
            return [arr[inicio], arr[siguiente]];
        }

        // Si no coinciden, avanzamos ambos punteros una posición hacia adelante
        inicio++;
        siguiente++;
    }

    return null; // Si se recorre toda la lista y no se encuentra ningún par
}

// Pruebas
console.log("--- BÚSQUEDA DE INVITADOS ---");
console.log("Lista original:", invitados);
console.log("\nResultado de la búsqueda:");
console.log(encontrarPareja(invitados));
// Resultado esperado: ["Carlos", "Cecilia"]


const otrosInvitados = ["Zack", "Alberto", "Brenda", "Beto", "Carlos"];
console.log("\nPrueba con otra lista:", otrosInvitados);
console.log(encontrarPareja(otrosInvitados));
// Resultado esperado: ["Brenda", "Beto"]
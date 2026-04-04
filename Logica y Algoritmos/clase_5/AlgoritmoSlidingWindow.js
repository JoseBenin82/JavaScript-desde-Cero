/**
 * Algoritmo Sliding Window
 * Problema: Encontrar la Palabra Más Larga
 */

function findLongestWord(text) {
    // 1. Dividir el texto en palabras y almacenarlas en un arreglo
    const words = text.split(' ');

    // Inicializar la variable que guardará la palabra más larga hasta el momento
    let longestWord = '';

    // 2. Deslizar la "ventana" recorriendo el arreglo de palabras con un ciclo
    for (let i = 0; i < words.length; i++) {
        const currentWord = words[i];

        // 3. Comparar la longitud de la palabra actual con la más larga guardada
        if (currentWord.length > longestWord.length) {
            // Actualizar la palabra más larga si encontramos una de mayor tamaño
            longestWord = currentWord;
        }
    }

    // 4. Retornar la palabra más larga encontrada al finalizar el recorrido
    return longestWord;
}

// Ejemplo de uso
const text = "JavaScript es un lenguaje de programación increíble para aprender.";

console.log("BÚSQUEDA DE LA PALABRA MÁS LARGA");
console.log("Texto analizado:", text);

// Llama a la función y muestra el resultado
const palabraMasLarga = findLongestWord(text);
console.log("Resultado esperado: 'programación'");
console.log("Resultado obtenido:", palabraMasLarga);


const otroTexto = "El desarrollo web requiere constancia y mucha dedicacion";
console.log("\nPrueba extra:");
console.log("Texto:", otroTexto);
console.log("Palabra más larga:", findLongestWord(otroTexto));
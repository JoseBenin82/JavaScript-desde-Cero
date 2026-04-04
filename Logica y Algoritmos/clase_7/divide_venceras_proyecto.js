/**
 * PROYECTO: Divide y Vencerás
 * Problema: Búsqueda del Máximo en un Arreglo
 */

const findMax = (arr) => {

    // 1- Caso base (para detener la recursión)
    // Si el arreglo está vacío, retornamos -Infinity para no afectar comparaciones futuras
    if (arr.length === 0) {
        return -Infinity;
    }
    // Si el arreglo se redujo a un solo elemento, ese único elemento es el "máximo" de esa mitad
    if (arr.length === 1) {
        return arr[0];
    }

    // 2- Dividir el arreglo en dos mitades (Divide)
    const mid = Math.floor(arr.length / 2); // Calculamos la mitad exacta
    const left = arr.slice(0, mid);         // Cortamos desde el inicio hasta la mitad
    const right = arr.slice(mid);           // Cortamos desde la mitad hasta el final

    // 3- Llamar recursivamente a la función para ambas mitades (Conquer / Vence)
    // Esto seguirá partiendo las mitades hasta que solo quede 1 elemento (el caso base de arriba)
    const leftMax = findMax(left);
    const rightMax = findMax(right);

    // 4- Combinar las soluciones comparando los máximos obtenidos (Combine)
    // Usamos Math.max para saber cuál de las dos mitades devolvió el número más grande
    return Math.max(leftMax, rightMax);
}



console.log("BÚSQUEDA DEL MÁXIMO (DIVIDE Y VENCERÁS)");

// Ejemplo de entrada original
const numbers = [3, 8, 2, 10, 5, 7];
console.log("Arreglo 1:", numbers);
console.log("El máximo es:", findMax(numbers));
// Salida esperada: 10


const moreNumbers = [15, -4, 56, 42, 99, 0, 23, 8];
console.log("\nArreglo 2:", moreNumbers);
console.log("El máximo es:", findMax(moreNumbers));
// Salida esperada: 99
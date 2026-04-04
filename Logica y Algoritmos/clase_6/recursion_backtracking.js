/**
 * PROYECTO: Recursión y Backtracking
 * Problema: Buscar un objeto en una lista de regalos
 */

// Lista de regalos
const gifts = ["Muñeca", "Carro de juguete", "Rompecabezas", "Lego", "Pelota"];

// Función para buscar recursivamente el regalo en la lista
function findGift(gifts, giftName, index = 0) {

    // 1er Caso base: Si llegamos al final de la lista (el índice es igual a la longitud del arreglo)
    // Esto significa que recorrimos todo y no encontramos el regalo.
    if (index === gifts.length) {
        return `${giftName} no está en la lista.`;
    }

    // 2do Caso base: Si encontramos el regalo en la posición actual.
    // Detenemos la recursión y devolvemos el mensaje de éxito.
    if (gifts[index] === giftName) {
        return `${giftName} está en la posición ${index}.`;
    }

    // Llamada recursiva: Si no se cumplió ninguno de los casos base anteriores,
    // significa que el regalo no está en la posición 'index'. 
    // Llamamos de nuevo a la función, pero sumando 1 al índice para buscar en la siguiente posición.
    return findGift(gifts, giftName, index + 1);
}



console.log("BÚSQUEDA DE REGALOS (RECURSIÓN)");

// Caso 1: El regalo sí está en la lista
let giftToFind = "Lego";
console.log("Buscando:", giftToFind);
console.log(findGift(gifts, giftToFind));
// Salida esperada: "Lego está en la posición 3."


// Caso 2: El regalo no está en la lista
giftToFind = "Camión";
console.log("Buscando:", giftToFind);
console.log(findGift(gifts, giftToFind));
// Salida esperada: "Camión no está en la lista."
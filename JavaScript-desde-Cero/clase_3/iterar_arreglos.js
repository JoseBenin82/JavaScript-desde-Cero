// 1. Declarar el arreglo con frutas
const frutas = ["manzana", "pera", "manzana", "naranja", "pera", "manzana", "uva"];

// 2. Crear un objeto vacío para el conteo
const conteoFrutas = {};

// 3. Usar ciclo FOR para recorrer el arreglo
for (let i = 0; i < frutas.length; i++) {
    let frutaActual = frutas[i];

    // Verificamos si la fruta ya existe en nuestro objeto
    if (conteoFrutas[frutaActual]) {
        // Si existe, le sumamos 1 a su cantidad
        conteoFrutas[frutaActual] += 1;
    } else {
        // Si NO existe, la inicializamos con valor 1
        conteoFrutas[frutaActual] = 1;
    }
}


console.log(conteoFrutas); 

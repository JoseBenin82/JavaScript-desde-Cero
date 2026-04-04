

// Array para guardar los destinos. 
// Usamos 'const' porque la referencia al arreglo no cambiará, aunque su contenido sí.
const destinos = [];

// Función de flecha para calcular el costo del viaje (función auxiliar, privada al módulo)
const calcularCosto = (destino, transporte, personas) => {
    // Usamos 'let' porque el costo irá mutando con los cálculos
    let costoBase = 0;

    // Costo base por destino
    if (destino === "Paris") {
        costoBase = 500;
    } else if (destino === "Londres") {
        costoBase = 400;
    } else if (destino === "New York") {
        costoBase = 600;
    } else if (destino === "Tokio") { // Funcionalidad extendida
        costoBase = 800;
    }

    // Costo adicional por tipo de transporte
    if (transporte === "Avión") {
        costoBase += 200;
    } else if (transporte === "Tren") {
        costoBase += 100;
    } else if (transporte === "Barco") { // Funcionalidad extendida
        costoBase += 150;
    }

    // Calculamos el costo por el total de personas
    let costoTotal = costoBase * personas;

    // Funcionalidad extendida: Aplicar descuento del 10% si son más de 3 personas
    if (personas > 3) {
        costoTotal *= 0.9;
    }

    return costoTotal;
};

// Función de flecha exportada para registrar un destino de viaje
// Se incluye 'personas' con un parámetro por defecto de 1
export const registrarDestino = (destino, fecha, transporte, personas = 1) => {

    // Crear un objeto con los datos del destino.
    // Usamos Object Property Shorthand (propiedades abreviadas) de ES6.
    const nuevoViaje = {
        destino,
        fecha,
        transporte,
        personas,
        costo: calcularCosto(destino, transporte, personas)
    };

    destinos.push(nuevoViaje);
};

// Función de flecha exportada para mostrar el itinerario
export const mostrarItinerario = () => {
    // Reemplazamos el for clásico por un método moderno de arreglos (forEach)
    destinos.forEach((viaje) => {
        // Reemplazamos la concatenación (+) por Template Literals (``)
        console.log(`Destino: ${viaje.destino}`);
        console.log(`Fecha: ${viaje.fecha}`);
        console.log(`Transporte: ${viaje.transporte}`);
        console.log(`Número de Personas: ${viaje.personas}`);
        console.log(`Costo Total: $${viaje.costo}`);
        console.log("---------------------------");
    });
};
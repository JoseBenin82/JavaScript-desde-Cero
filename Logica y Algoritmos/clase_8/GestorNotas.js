const fs = require('fs');

// Ruta del archivo de notas
const filePath = './notas.json';

/**
 * Agrega una nueva nota al archivo.
 * @param {string} titulo - El título de la nota.
 * @param {string} contenido - El contenido de la nota.
 */
function agregarNota(titulo, contenido) {
    let notas = [];

    if (fs.existsSync(filePath)) {
        // Leer las notas existentes antes de agregar la nueva.
        const data = fs.readFileSync(filePath, 'utf8');

        // Verificamos que el archivo no esté vacío para evitar errores al parsear
        if (data.trim() !== '') {
            notas = JSON.parse(data);
        }
    }

    const nuevaNota = { titulo, contenido };
    notas.push(nuevaNota);

    // Sobrescribir el archivo con las notas actualizadas.
    fs.writeFileSync(filePath, JSON.stringify(notas, null, 2));
    console.log(`Nota "${titulo}" agregada con éxito.`);
}

/**
 * Lista todas las notas guardadas.
 */
function listarNotas() {
    if (fs.existsSync(filePath)) {
        // Leer y parsear el contenido del archivo.
        const data = fs.readFileSync(filePath, 'utf8');

        if (data.trim() === '') {
            console.log('El archivo está vacío. No hay notas guardadas.');
            return;
        }

        const notas = JSON.parse(data);

        console.log('\n--- Lista de Notas ---');
        notas.forEach((nota, index) => {
            console.log(`${index + 1}. Título: ${nota.titulo}`);
            console.log(`   Contenido: ${nota.contenido}\n`);
        });
        console.log('----------------------\n');
    } else {
        console.log('No hay notas guardadas.');
    }
}

/**
 * Elimina una nota por su título.
 * @param {string} titulo - El título de la nota a eliminar.
 */
function eliminarNota(titulo) {
    if (fs.existsSync(filePath)) {
        // Primero lee todas las notas.
        const data = fs.readFileSync(filePath, 'utf8');
        let notas = [];

        if (data.trim() !== '') {
            notas = JSON.parse(data);
        }

        // Filtra las notas y elimina la que coincida con el título.
        const notasRestantes = notas.filter((nota) => nota.titulo !== titulo);

        // Verificamos si realmente se eliminó alguna nota
        if (notas.length === notasRestantes.length) {
            console.log(`No se encontró ninguna nota con el título "${titulo}".`);
        } else {
            // Sobrescribe el archivo con las notas actualizadas.
            fs.writeFileSync(filePath, JSON.stringify(notasRestantes, null, 2));
            console.log(`Nota con título "${titulo}" eliminada.`);
        }
    } else {
        console.log('No hay notas para eliminar.');
    }
}


// Ejecución de ejemplo para probar el código


console.log('>>> Agregando notas...');
agregarNota('Compras', 'Comprar leche y pan.');
agregarNota('Trabajo', 'Terminar reporte semanal y enviarlo al jefe.');

console.log('\n>>> Listando notas guardadas...');
listarNotas();

console.log('>>> Eliminando nota de Compras...');
eliminarNota('Compras');

console.log('\n>>> Listando notas nuevamente...');
listarNotas();
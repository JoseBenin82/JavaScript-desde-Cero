/*
  Proyecto: Gestión de una Biblioteca de Libros
  Tema: JSON + Callbacks (asincronía simulada con setTimeout)

  Objetivo:
    1. Consultar libros almacenados en formato JSON.
    2. Agregar libros a la colección.
    3. Actualizar la disponibilidad ('disponible' | 'prestado').
    4. Simular lectura/escritura de un archivo JSON usando callbacks.
*/

// 1) Datos iniciales en memoria (simulan el contenido de libros.json)
let biblioteca = {
  libros: [
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez", genero: "Realismo mágico", disponible: true },
    { titulo: "1984", autor: "George Orwell", genero: "Distopía", disponible: true },
    { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", genero: "Novela", disponible: true },
    { titulo: "Rayuela", autor: "Julio Cortázar", genero: "Novela", disponible: false },
    { titulo: "Pedro Páramo", autor: "Juan Rulfo", genero: "Realismo mágico", disponible: true }
  ]
};

// 2) Simulación de LECTURA asincrónica del "archivo" JSON.
//    Convención Node.js: callback(error, datos).
function leerDatos(callback) {
  console.log("Leyendo datos de la biblioteca...");
  setTimeout(() => {
    // Se devuelve una copia para evitar mutaciones accidentales desde afuera.
    const copia = JSON.parse(JSON.stringify(biblioteca));
    callback(null, copia);
  }, 1000);
}

// 3) Simulación de ESCRITURA asincrónica en el "archivo" JSON.
function escribirDatos(nuevosDatos, callback) {
  console.log("Guardando cambios en la biblioteca...");
  setTimeout(() => {
    biblioteca = nuevosDatos;
    callback(null, "Datos guardados correctamente.");
  }, 1000);
}

// 4) Mostrar inventario completo.
function mostrarLibros(callback) {
  leerDatos((err, datos) => {
    if (err) {
      console.error("❗  Error al leer:", err);
      if (callback) callback(err);
      return;
    }
    console.log("\n Inventario de libros");
    console.log("───────────────────");
    datos.libros.forEach((libro, i) => {
      const estado = libro.disponible ? "Disponible" : " Prestado";
      console.log(`${i + 1}. "${libro.titulo}" — ${libro.autor} [${libro.genero}]  ${estado}`);
    });
    console.log("─────────────────────────────────────────────\n");
    if (callback) callback(null, datos);
  });
}

// 5) Agregar un libro nuevo (lee → modifica → escribe).
function agregarLibro(titulo, autor, genero, disponible, callback) {
  leerDatos((err, datos) => {
    if (err) return callback && callback(err);

    const yaExiste = datos.libros.some(
      (l) => l.titulo.toLowerCase() === titulo.toLowerCase()
    );
    if (yaExiste) {
      const mensaje = `  El libro "${titulo}" ya existe en la biblioteca.`;
      console.log(mensaje);
      return callback && callback(null, mensaje);
    }

    datos.libros.push({ titulo, autor, genero, disponible });

    escribirDatos(datos, (err, mensaje) => {
      if (err) return callback && callback(err);
      console.log(`Libro agregado: "${titulo}". ${mensaje}`);
      if (callback) callback(null, mensaje);
    });
  });
}

// 6) Cambiar la disponibilidad de un libro (true = disponible, false = prestado).
function actualizarDisponibilidad(titulo, nuevoEstado, callback) {
  leerDatos((err, datos) => {
    if (err) return callback && callback(err);

    const libro = datos.libros.find(
      (l) => l.titulo.toLowerCase() === titulo.toLowerCase()
    );
    if (!libro) {
      const mensaje = `No se encontró el libro "${titulo}".`;
      console.log(mensaje);
      return callback && callback(null, mensaje);
    }

    libro.disponible = nuevoEstado;

    escribirDatos(datos, (err, mensaje) => {
      if (err) return callback && callback(err);
      const etiqueta = nuevoEstado ? "disponible" : "prestado";
      console.log(`  "${titulo}" ahora está ${etiqueta}. ${mensaje}`);
      if (callback) callback(null, mensaje);
    });
  });
}

// 7) Extra: buscar libros por autor.
function buscarPorAutor(autor, callback) {
  leerDatos((err, datos) => {
    if (err) return callback && callback(err);
    const encontrados = datos.libros.filter((l) =>
      l.autor.toLowerCase().includes(autor.toLowerCase())
    );
    if (encontrados.length === 0) {
      console.log(` Sin resultados para "${autor}".`);
    } else {
      console.log(`\n  Libros de "${autor}":`);
      encontrados.forEach((l) => console.log(`    • ${l.titulo}  (${l.genero})`));
      console.log("");
    }
    if (callback) callback(null, encontrados);
  });
}

/*
  8) Flujo de ejecución.
     Encadenamos los callbacks para garantizar el orden:
       mostrar → agregar → actualizar → buscar → mostrar final
     Esto evita que los setTimeout se crucen y el output quede desordenado.
*/
console.log("=== Sistema de gestión de biblioteca ===\n");

mostrarLibros(() => {
  agregarLibro("El principito", "Antoine de Saint-Exupéry", "Fábula", true, () => {
    actualizarDisponibilidad("1984", false, () => {
      buscarPorAutor("Gabriel", () => {
        console.log("=== Estado final de la biblioteca ===");
        mostrarLibros(() => {
          console.log("✔️   Operaciones finalizadas.");
        });
      });
    });
  });
});

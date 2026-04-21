/*
  App web de la biblioteca.
  Mantiene la misma lógica con callbacks que biblioteca.js,
  pero renderiza en el DOM en lugar de la consola.
*/

// Datos iniciales en memoria (simula libros.json).
let biblioteca = {
  libros: [
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez", genero: "Realismo mágico", disponible: true },
    { titulo: "1984", autor: "George Orwell", genero: "Distopía", disponible: true },
    { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", genero: "Novela", disponible: true },
    { titulo: "Rayuela", autor: "Julio Cortázar", genero: "Novela", disponible: false },
    { titulo: "Pedro Páramo", autor: "Juan Rulfo", genero: "Realismo mágico", disponible: true }
  ]
};

// ─── Referencias al DOM ────────────────────────────────────────────────
const $tbody       = document.getElementById("tbody-libros");
const $log         = document.getElementById("log");
const $estado      = document.getElementById("estado");
const $formAgregar = document.getElementById("form-agregar");
const $titulo      = document.getElementById("titulo");
const $autor       = document.getElementById("autor");
const $genero      = document.getElementById("genero");
const $disponible  = document.getElementById("disponible");
const $buscarAutor = document.getElementById("buscar-autor");
const $btnBuscar   = document.getElementById("btn-buscar");
const $btnLimpiar  = document.getElementById("btn-limpiar-busqueda");
const $resultado   = document.getElementById("resultado-busqueda");

// ─── Helpers de UI ─────────────────────────────────────────────────────
function log(msg) {
  const hora = new Date().toLocaleTimeString();
  $log.textContent += `[${hora}] ${msg}\n`;
  $log.scrollTop = $log.scrollHeight;
}

function setEstado(texto, cargando = false) {
  $estado.textContent = texto;
  $estado.classList.toggle("loading", cargando);
}

// ─── Simulación de I/O asincrónico con callbacks ───────────────────────
function leerDatos(callback) {
  setEstado("Leyendo...", true);
  log("⏳ Leyendo datos de la biblioteca...");
  setTimeout(() => {
    const copia = JSON.parse(JSON.stringify(biblioteca));
    setEstado("Listo");
    callback(null, copia);
  }, 700);
}

function escribirDatos(nuevosDatos, callback) {
  setEstado("Guardando...", true);
  log("💾 Guardando cambios...");
  setTimeout(() => {
    biblioteca = nuevosDatos;
    setEstado("Listo");
    callback(null, "Datos guardados correctamente.");
  }, 700);
}

// ─── Render del inventario ─────────────────────────────────────────────
function renderLibros(lista) {
  $tbody.innerHTML = "";
  if (!lista.length) {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td colspan="6" class="muted" style="text-align:center;padding:1.5rem">
      No hay libros para mostrar.
    </td>`;
    $tbody.appendChild(tr);
    return;
  }

  lista.forEach((libro, i) => {
    const tr = document.createElement("tr");
    const chip = libro.disponible
      ? `<span class="estado-chip disponible">Disponible</span>`
      : `<span class="estado-chip prestado">Prestado</span>`;
    const accion = libro.disponible
      ? `<button class="btn btn-sm btn-danger"  data-accion="prestar"  data-titulo="${escapar(libro.titulo)}">Prestar</button>`
      : `<button class="btn btn-sm btn-success" data-accion="devolver" data-titulo="${escapar(libro.titulo)}">Devolver</button>`;

    tr.innerHTML = `
      <td>${i + 1}</td>
      <td><strong>${escapar(libro.titulo)}</strong></td>
      <td>${escapar(libro.autor)}</td>
      <td>${escapar(libro.genero)}</td>
      <td>${chip}</td>
      <td>${accion}</td>
    `;
    $tbody.appendChild(tr);
  });
}

function escapar(txt) {
  return String(txt)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// ─── Operaciones del dominio (mismos callbacks que biblioteca.js) ──────
function mostrarLibros() {
  leerDatos((err, datos) => {
    if (err) return log("❗ Error: " + err);
    renderLibros(datos.libros);
    log(`📚 Inventario cargado: ${datos.libros.length} libros.`);
  });
}

function agregarLibro(titulo, autor, genero, disponible) {
  leerDatos((err, datos) => {
    if (err) return log("❗ " + err);

    const existe = datos.libros.some(
      (l) => l.titulo.toLowerCase() === titulo.toLowerCase()
    );
    if (existe) {
      log(`⚠️  "${titulo}" ya existe. No se agregó.`);
      return;
    }

    datos.libros.push({ titulo, autor, genero, disponible });
    escribirDatos(datos, (err, mensaje) => {
      if (err) return log("❗ " + err);
      log(`✅ Libro agregado: "${titulo}". ${mensaje}`);
      renderLibros(datos.libros);
    });
  });
}

function actualizarDisponibilidad(titulo, nuevoEstado) {
  leerDatos((err, datos) => {
    if (err) return log("❗ " + err);
    const libro = datos.libros.find((l) => l.titulo === titulo);
    if (!libro) {
      log(`⚠️  No se encontró "${titulo}".`);
      return;
    }
    libro.disponible = nuevoEstado;
    escribirDatos(datos, (err, mensaje) => {
      if (err) return log("❗ " + err);
      const etiqueta = nuevoEstado ? "disponible" : "prestado";
      log(`🔄 "${titulo}" ahora está ${etiqueta}. ${mensaje}`);
      renderLibros(datos.libros);
    });
  });
}

function buscarPorAutor(autor) {
  leerDatos((err, datos) => {
    if (err) return log("❗ " + err);
    const encontrados = datos.libros.filter((l) =>
      l.autor.toLowerCase().includes(autor.toLowerCase())
    );
    renderLibros(encontrados);
    if (encontrados.length === 0) {
      $resultado.textContent = `Sin resultados para "${autor}".`;
      log(`🔍 Sin resultados para "${autor}".`);
    } else {
      $resultado.textContent = `${encontrados.length} resultado(s) para "${autor}".`;
      log(`🔍 ${encontrados.length} resultado(s) para "${autor}".`);
    }
  });
}

// ─── Eventos ───────────────────────────────────────────────────────────
$formAgregar.addEventListener("submit", (e) => {
  e.preventDefault();
  const titulo = $titulo.value.trim();
  const autor  = $autor.value.trim();
  const genero = $genero.value.trim();
  if (!titulo || !autor || !genero) {
    log("⚠️  Faltan campos por llenar.");
    return;
  }
  agregarLibro(titulo, autor, genero, $disponible.checked);
  $formAgregar.reset();
  $disponible.checked = true;
});

// Delegación de eventos para los botones Prestar / Devolver.
$tbody.addEventListener("click", (e) => {
  const btn = e.target.closest("button[data-accion]");
  if (!btn) return;
  const titulo = btn.dataset.titulo;
  const accion = btn.dataset.accion;
  actualizarDisponibilidad(titulo, accion === "devolver");
});

$btnBuscar.addEventListener("click", () => {
  const q = $buscarAutor.value.trim();
  if (!q) {
    $resultado.textContent = "";
    mostrarLibros();
    return;
  }
  buscarPorAutor(q);
});

$buscarAutor.addEventListener("keydown", (e) => {
  if (e.key === "Enter") $btnBuscar.click();
});

$btnLimpiar.addEventListener("click", () => {
  $buscarAutor.value = "";
  $resultado.textContent = "";
  mostrarLibros();
});

// Carga inicial.
log("=== Sistema de gestión de biblioteca iniciado ===");
mostrarLibros();

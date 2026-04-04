// 1. Crea un arreglo vacío llamado listaDeCompras.
let listaDeCompras = [];

// 2 y 5. Implementa una función agregarProducto(producto)
// Asegúrate de que no haya productos duplicados en la lista.
const agregarProducto = (producto) => {
    // Limpiamos los espacios en blanco
    const productoLimpio = producto.trim();
    if (!productoLimpio) return;

    // Verificamos si ya existe (ignorando mayúsculas/minúsculas)
    const existeDuplicado = listaDeCompras.some(
        item => item.toLowerCase() === productoLimpio.toLowerCase()
    );

    if (existeDuplicado) {
        console.log(`El producto "${productoLimpio}" ya está en la lista.`);
    } else {
        // Agregamos al final de la lista
        listaDeCompras.push(productoLimpio);
        console.log(`"${productoLimpio}" agregado con éxito.`);
    }
};

// 3. Implementa una función eliminarProducto(producto)
const eliminarProducto = (producto) => {
    const longitudOriginal = listaDeCompras.length;

    // Filtramos la lista para quedarnos con todos menos el que queremos eliminar
    listaDeCompras = listaDeCompras.filter(
        item => item.toLowerCase() !== producto.trim().toLowerCase()
    );

    if (listaDeCompras.length < longitudOriginal) {
        console.log(`"${producto}" eliminado correctamente.`);
    } else {
        console.log(`El producto "${producto}" no se encontró en la lista.`);
    }
};

// 4. Implementa una función mostrarLista() que imprima todos los productos.
const mostrarLista = () => {
    console.log("--- MI LISTA DE COMPRAS ---");

    if (listaDeCompras.length === 0) {
        console.log("La lista está vacía.");
    } else {
        // Usamos forEach (característica de ES6) para imprimir cada elemento
        listaDeCompras.forEach((producto, indice) => {
            console.log(`${indice + 1}. ${producto}`);
        });
    }

    console.log("---------------------------");
};

// ==========================================
// Pruebas de funcionamiento (puedes borrarlas)
// ==========================================
/*
mostrarLista(); // Debería mostrar lista vacía
agregarProducto("Manzanas");
agregarProducto("Leche");
agregarProducto("Pan");
agregarProducto("leche"); // Debería avisar que está duplicado
mostrarLista(); // Debería mostrar 3 productos
eliminarProducto("Leche");
mostrarLista(); // Debería mostrar 2 productos
*/
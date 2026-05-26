import { useState } from 'react'
import FormularioProducto from './components/FormularioProducto'
import ListaCompras from './components/ListaCompras'
import './App.css'

function App() {
  const [productos, setProductos] = useState([])

  const agregarProducto = (nuevoProducto) => {
    setProductos((listaActual) => [...listaActual, nuevoProducto])
  }

  const eliminarProducto = (id) => {
    setProductos((listaActual) =>
      listaActual.filter((producto) => producto.id !== id),
    )
  }

  const alternarComprado = (id) => {
    setProductos((listaActual) =>
      listaActual.map((producto) =>
        producto.id === id
          ? { ...producto, comprado: !producto.comprado }
          : producto,
      ),
    )
  }

  const limpiarLista = () => setProductos([])

  const totalProductos = productos.length
  const comprados = productos.filter((producto) => producto.comprado).length
  const pendientes = totalProductos - comprados

  return (
    <main className="app">
      <header className="encabezado">
        <h1>Lista de Compras</h1>
        <p>Organiza tu próximo viaje al supermercado</p>
      </header>

      <FormularioProducto onAgregar={agregarProducto} />

      <section className="resumen">
        <span>Total: {totalProductos}</span>
        <span>Pendientes: {pendientes}</span>
        <span>Comprados: {comprados}</span>
        {totalProductos > 0 && (
          <button
            type="button"
            className="boton-limpiar"
            onClick={limpiarLista}
          >
            Limpiar lista
          </button>
        )}
      </section>

      <ListaCompras
        productos={productos}
        onToggleComprado={alternarComprado}
        onEliminar={eliminarProducto}
      />
    </main>
  )
}

export default App

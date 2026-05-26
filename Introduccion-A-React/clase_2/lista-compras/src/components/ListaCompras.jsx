import ItemProducto from './ItemProducto'

function ListaCompras({ productos, onToggleComprado, onEliminar }) {
  if (productos.length === 0) {
    return (
      <p className="lista-vacia">
        Aún no has agregado productos. ¡Empieza tu lista!
      </p>
    )
  }

  return (
    <ul className="lista">
      {productos.map((producto) => (
        <ItemProducto
          key={producto.id}
          producto={producto}
          onToggleComprado={onToggleComprado}
          onEliminar={onEliminar}
        />
      ))}
    </ul>
  )
}

export default ListaCompras

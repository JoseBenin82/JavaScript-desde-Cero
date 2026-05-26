function ItemProducto({ producto, onToggleComprado, onEliminar }) {
  return (
    <li className={`item ${producto.comprado ? 'item-comprado' : ''}`}>
      <label className="item-info">
        <input
          type="checkbox"
          checked={producto.comprado}
          onChange={() => onToggleComprado(producto.id)}
        />
        <span className="item-nombre">{producto.nombre}</span>
        <span className="item-cantidad">
          {producto.cantidad} {producto.unidad}
        </span>
      </label>
      <button
        type="button"
        className="boton-eliminar"
        onClick={() => onEliminar(producto.id)}
        aria-label={`Eliminar ${producto.nombre}`}
      >
        Eliminar
      </button>
    </li>
  )
}

export default ItemProducto

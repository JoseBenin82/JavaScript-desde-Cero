import { useState, memo } from 'react'

const ProductRow = memo(function ProductRow({ product, onRemove, onUpdateQuantity, onEdit }) {
  const [editing, setEditing] = useState(false)
  const [editName, setEditName] = useState(product.name)
  const [editPrice, setEditPrice] = useState(product.price)

  const handleSaveEdit = () => {
    if (!editName.trim()) return
    onEdit(product.id, { name: editName, price: Number(editPrice) })
    setEditing(false)
  }

  const handleCancelEdit = () => {
    setEditName(product.name)
    setEditPrice(product.price)
    setEditing(false)
  }

  return (
    <tr>
      {editing ? (
        <>
          <td>
            <input value={editName} onChange={e => setEditName(e.target.value)} className="inline-input" />
          </td>
          <td>{product.category}</td>
          <td>{product.quantity}</td>
          <td>
            <input
              type="number"
              min="0"
              step="0.01"
              value={editPrice}
              onChange={e => setEditPrice(e.target.value)}
              className="inline-input price-input"
            />
          </td>
          <td className="actions-cell">
            <button className="btn-sm btn-save" onClick={handleSaveEdit}>Guardar</button>
            <button className="btn-sm btn-cancel" onClick={handleCancelEdit}>Cancelar</button>
          </td>
        </>
      ) : (
        <>
          <td className="product-name">{product.name}</td>
          <td><span className="badge">{product.category}</span></td>
          <td>{product.quantity}</td>
          <td>${product.price.toFixed(2)}</td>
          <td className="actions-cell">
            <div className="qty-controls">
              <button
                className="btn-sm"
                onClick={() => onUpdateQuantity(product.id, -1)}
                disabled={product.quantity <= 0}
                aria-label="Disminuir cantidad"
              >&minus;</button>
              <button
                className="btn-sm"
                onClick={() => onUpdateQuantity(product.id, 1)}
                aria-label="Aumentar cantidad"
              >+</button>
            </div>
            <button className="btn-sm btn-edit" onClick={() => setEditing(true)}>Editar</button>
            <button className="btn-sm btn-danger" onClick={() => onRemove(product.id)}>Eliminar</button>
          </td>
        </>
      )}
    </tr>
  )
})

function InventoryTable({ products, onRemove, onUpdateQuantity, onEdit }) {
  if (products.length === 0) {
    return (
      <section className="card">
        <h2>Inventario</h2>
        <p className="empty-state">No hay productos. Agrega el primero usando el formulario.</p>
      </section>
    )
  }

  return (
    <section className="card table-card">
      <h2>Inventario ({products.length})</h2>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Producto</th>
              <th>Categoría</th>
              <th>Cantidad</th>
              <th>Precio</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {products.map(p => (
              <ProductRow
                key={p.id}
                product={p}
                onRemove={onRemove}
                onUpdateQuantity={onUpdateQuantity}
                onEdit={onEdit}
              />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default InventoryTable

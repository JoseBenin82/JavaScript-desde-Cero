import { useState, useRef, useEffect } from 'react'

const emptyProduct = { name: '', category: '', quantity: '', price: '' }

function ProductForm({ onAdd }) {
  const [product, setProduct] = useState(emptyProduct)
  const [isOpen, setIsOpen] = useState(false)
  const nameInput = useRef(null)

  useEffect(() => {
    if (isOpen) nameInput.current?.focus()
  }, [isOpen])

  const handleChange = (e) => {
    const { name, value } = e.target
    setProduct(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!product.name || !product.category || !product.quantity || !product.price) return
    onAdd({
      name: product.name,
      category: product.category,
      quantity: Number(product.quantity),
      price: Number(product.price)
    })
    setProduct(emptyProduct)
    nameInput.current?.focus()
  }

  return (
    <section className="card form-card">
      <div className="card-header">
        <h2>{isOpen ? 'Nuevo Producto' : 'Agregar Producto'}</h2>
        <button
          className="toggle-btn"
          onClick={() => setIsOpen(o => !o)}
          aria-expanded={isOpen}
        >
          {isOpen ? 'Cancelar' : '+ Nuevo'}
        </button>
      </div>

      {isOpen && (
        <form onSubmit={handleSubmit} className="product-form">
          <div className="form-row">
            <label>
              <span>Producto</span>
              <input
                ref={nameInput}
                name="name"
                value={product.name}
                onChange={handleChange}
                placeholder="Ej. Monitor"
                required
              />
            </label>
            <label>
              <span>Categoría</span>
              <select name="category" value={product.category} onChange={handleChange} required>
                <option value="">Seleccionar</option>
                <option>Electrónica</option>
                <option>Ropa</option>
                <option>Hogar</option>
                <option>Deportes</option>
                <option>Juguetes</option>
              </select>
            </label>
          </div>
          <div className="form-row">
            <label>
              <span>Cantidad</span>
              <input
                name="quantity"
                type="number"
                min="0"
                value={product.quantity}
                onChange={handleChange}
                placeholder="0"
                required
              />
            </label>
            <label>
              <span>Precio ($)</span>
              <input
                name="price"
                type="number"
                min="0"
                step="0.01"
                value={product.price}
                onChange={handleChange}
                placeholder="0.00"
                required
              />
            </label>
          </div>
          <button type="submit" className="btn-primary">Guardar Producto</button>
        </form>
      )}
    </section>
  )
}

export default ProductForm

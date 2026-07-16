import { useMemo } from 'react'

function StatsPanel({ products }) {
  const stats = useMemo(() => {
    const totalProducts = products.length
    const totalItems = products.reduce((s, p) => s + p.quantity, 0)
    const totalValue = products.reduce((s, p) => s + p.quantity * p.price, 0)
    const avgPrice = totalProducts > 0
      ? products.reduce((s, p) => s + p.price, 0) / totalProducts
      : 0
    const lowStock = products.filter(p => p.quantity < 10).length

    const categories = [...new Set(products.map(p => p.category))]
    const categoryCount = categories.length

    return { totalProducts, totalItems, totalValue, avgPrice, lowStock, categoryCount }
  }, [products])

  return (
    <section className="card stats-card">
      <h2>Estadísticas</h2>
      <div className="stats-grid">
        <div className="stat">
          <span className="stat-value">{stats.totalProducts}</span>
          <span className="stat-label">Productos</span>
        </div>
        <div className="stat">
          <span className="stat-value">{stats.totalItems}</span>
          <span className="stat-label">Unidades</span>
        </div>
        <div className="stat">
          <span className="stat-value">${stats.totalValue.toLocaleString()}</span>
          <span className="stat-label">Valor total</span>
        </div>
        <div className="stat">
          <span className="stat-value">${stats.avgPrice.toFixed(2)}</span>
          <span className="stat-label">Precio prom.</span>
        </div>
        <div className="stat">
          <span className="stat-value">{stats.lowStock}</span>
          <span className="stat-label">Stock bajo</span>
        </div>
        <div className="stat">
          <span className="stat-value">{stats.categoryCount}</span>
          <span className="stat-label">Categorías</span>
        </div>
      </div>
    </section>
  )
}

export default StatsPanel

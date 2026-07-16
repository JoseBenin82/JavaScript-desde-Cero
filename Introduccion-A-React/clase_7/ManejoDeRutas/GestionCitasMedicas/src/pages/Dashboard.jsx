import { Link } from 'react-router-dom'

const stats = [
  { label: 'Proximas Citas', value: 3 },
  { label: 'Citas Completadas', value: 12 },
  { label: 'Doctores', value: 5 },
  { label: 'Pendientes', value: 1 },
]

export default function Dashboard() {
  return (
    <section className="page dashboard">
      <h2>Dashboard</h2>
      <div className="stats-grid">
        {stats.map(({ label, value }) => (
          <div key={label} className="stat-card">
            <span className="stat-value">{value}</span>
            <span className="stat-label">{label}</span>
          </div>
        ))}
      </div>
      <div className="dashboard-actions">
        <Link to="/citas" className="btn btn-primary">Ver Mis Citas</Link>
        <Link to="/doctores" className="btn btn-outline">Buscar Doctores</Link>
      </div>
    </section>
  )
}

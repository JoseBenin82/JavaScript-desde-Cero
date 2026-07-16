import { Link } from 'react-router-dom'

const citas = [
  { id: 1, doctor: 'Dr. Garcia', especialidad: 'Cardiologia', fecha: '2026-07-20', hora: '10:00' },
  { id: 2, doctor: 'Dra. Lopez', especialidad: 'Pediatria', fecha: '2026-07-22', hora: '15:30' },
  { id: 3, doctor: 'Dr. Martinez', especialidad: 'Dermatologia', fecha: '2026-07-25', hora: '09:00' },
]

export default function Citas() {
  return (
    <section className="page citas">
      <h2>Mis Citas</h2>
      <div className="citas-list">
        {citas.map((cita) => (
          <div key={cita.id} className="cita-card">
            <div className="cita-info">
              <h3>{cita.doctor}</h3>
              <p>{cita.especialidad}</p>
              <p className="cita-fecha">{cita.fecha} - {cita.hora}</p>
            </div>
            <Link to={`/citas/${cita.id}`} className="btn btn-outline">Ver Detalle</Link>
          </div>
        ))}
      </div>
    </section>
  )
}

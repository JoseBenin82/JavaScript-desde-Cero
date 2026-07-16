import { useParams, Link } from 'react-router-dom'

const citasDB = {
  1: { doctor: 'Dr. Garcia', especialidad: 'Cardiologia', fecha: '2026-07-20', hora: '10:00', consultorio: '101', notas: 'Traer estudios previos' },
  2: { doctor: 'Dra. Lopez', especialidad: 'Pediatria', fecha: '2026-07-22', hora: '15:30', consultorio: '203', notas: 'Vacunacion programada' },
  3: { doctor: 'Dr. Martinez', especialidad: 'Dermatologia', fecha: '2026-07-25', hora: '09:00', consultorio: '305', notas: 'Revision de lunar' },
}

export default function CitaDetalle() {
  const { id } = useParams()
  const cita = citasDB[id]

  if (!cita) {
    return (
      <section className="page">
        <h2>Cita no encontrada</h2>
        <p>La cita con ID {id} no existe.</p>
        <Link to="/citas" className="btn btn-primary">Volver a Mis Citas</Link>
      </section>
    )
  }

  return (
    <section className="page cita-detalle">
      <h2>Detalle de Cita</h2>
      <div className="detalle-card">
        <div className="detalle-row">
          <span className="detalle-label">Doctor:</span>
          <span>{cita.doctor}</span>
        </div>
        <div className="detalle-row">
          <span className="detalle-label">Especialidad:</span>
          <span>{cita.especialidad}</span>
        </div>
        <div className="detalle-row">
          <span className="detalle-label">Fecha:</span>
          <span>{cita.fecha}</span>
        </div>
        <div className="detalle-row">
          <span className="detalle-label">Hora:</span>
          <span>{cita.hora}</span>
        </div>
        <div className="detalle-row">
          <span className="detalle-label">Consultorio:</span>
          <span>{cita.consultorio}</span>
        </div>
        <div className="detalle-row">
          <span className="detalle-label">Notas:</span>
          <span>{cita.notas}</span>
        </div>
      </div>
      <Link to="/citas" className="btn btn-outline">Volver a Mis Citas</Link>
    </section>
  )
}

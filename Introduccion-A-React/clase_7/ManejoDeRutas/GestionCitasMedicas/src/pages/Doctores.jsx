const doctores = [
  { nombre: 'Dr. Carlos Garcia', especialidad: 'Cardiologia', experiencia: 15 },
  { nombre: 'Dra. Maria Lopez', especialidad: 'Pediatria', experiencia: 10 },
  { nombre: 'Dr. Jose Martinez', especialidad: 'Dermatologia', experiencia: 8 },
  { nombre: 'Dra. Ana Rodriguez', especialidad: 'Ginecologia', experiencia: 12 },
  { nombre: 'Dr. Luis Hernandez', especialidad: 'Traumatologia', experiencia: 20 },
]

export default function Doctores() {
  return (
    <section className="page doctores">
      <h2>Directorio de Doctores</h2>
      <div className="doctores-grid">
        {doctores.map((doc) => (
          <div key={doc.nombre} className="doctor-card">
            <div className="doctor-avatar">{doc.nombre.charAt(0)}</div>
            <h3>{doc.nombre}</h3>
            <p>{doc.especialidad}</p>
            <span className="doctor-exp">{doc.experiencia} años de experiencia</span>
          </div>
        ))}
      </div>
    </section>
  )
}

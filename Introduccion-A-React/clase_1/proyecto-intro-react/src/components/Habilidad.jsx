function Habilidad({ icono, nombre }) {
  return (
    <li className="habilidad">
      <span className="habilidad-icono" aria-hidden="true">{icono}</span>
      <span className="habilidad-nombre">{nombre}</span>
    </li>
  )
}

export default Habilidad

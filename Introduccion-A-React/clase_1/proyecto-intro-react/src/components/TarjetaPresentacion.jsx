import Habilidad from './Habilidad'

function TarjetaPresentacion() {
  const nombre = 'Jose Rodriguez'
  const profesion = 'Desarrollador Frontend'
  const mensaje =
    'React es una herramienta poderosa y flexible para construir aplicaciones web modernas. Su enfoque basado en componentes, el uso de JSX y su gestión eficiente del estado lo convierten en una de las opciones más populares para el desarrollo frontend.'

  const habilidades = [
    { icono: '⚛️', nombre: 'React' },
    { icono: '🟨', nombre: 'JavaScript' },
    { icono: '🎨', nombre: 'CSS' },
    { icono: '🌐', nombre: 'HTML' },
  ]

  return (
    <article className="tarjeta">
      <div className="tarjeta-avatar" aria-hidden="true">
        {nombre
          .split(' ')
          .map((parte) => parte[0])
          .join('')}
      </div>

      <h1 className="tarjeta-nombre">{nombre}</h1>
      <p className="tarjeta-profesion">{profesion}</p>
      <p className="tarjeta-mensaje">{mensaje}</p>

      <ul className="tarjeta-habilidades">
        {habilidades.map((h) => (
          <Habilidad key={h.nombre} icono={h.icono} nombre={h.nombre} />
        ))}
      </ul>

      <div className="tarjeta-redes">
        <a href="https://github.com/JoseBenin82" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href="mailto:jgarciag@ises.com.co">Email</a>
      </div>
    </article>
  )
}

export default TarjetaPresentacion

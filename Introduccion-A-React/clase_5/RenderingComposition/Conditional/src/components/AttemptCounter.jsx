function AttemptCounter({ attempts }) {
  return (
    <div className="attempts">
      <span className="attempts__label">Intentos:</span>
      <span className="attempts__count">{attempts}</span>
    </div>
  )
}

export default AttemptCounter

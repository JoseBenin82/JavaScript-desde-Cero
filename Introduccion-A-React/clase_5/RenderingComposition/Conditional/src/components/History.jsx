function History({ guesses }) {
  if (guesses.length === 0) return null

  return (
    <div className="history">
      <h3>Historial de intentos</h3>
      <ul className="history__list">
        {guesses.map((g, i) => (
          <li key={i} className={`history__item history__item--${g.type}`}>
            <span className="history__index">#{i + 1}</span>
            <span className="history__value">{g.value}</span>
            <span className="history__hint">{g.hint}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default History

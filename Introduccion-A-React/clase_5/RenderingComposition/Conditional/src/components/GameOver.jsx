function GameOver({ secretNumber, attempts, onRestart }) {
  return (
    <div className="gameover">
      <h2 className="gameover__title">¡Felicidades! 🏆</h2>
      <p className="gameover__text">
        Adivinaste el número <strong>{secretNumber}</strong> en{' '}
        <strong>{attempts}</strong> intento{attempts !== 1 ? 's' : ''}.
      </p>
      <button className="gameover__btn" onClick={onRestart}>
        Jugar de nuevo
      </button>
    </div>
  )
}

export default GameOver

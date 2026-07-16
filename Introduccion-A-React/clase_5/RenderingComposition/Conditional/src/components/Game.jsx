import { useState, useCallback } from 'react'
import GuessInput from './GuessInput'
import FeedbackMessage from './FeedbackMessage'
import AttemptCounter from './AttemptCounter'
import GameOver from './GameOver'
import History from './History'

function generateSecret() {
  return Math.floor(Math.random() * 100) + 1
}

function getHint(guess, secret) {
  if (guess === secret) return { message: '¡Número correcto! Has ganado.', type: 'success' }
  if (Math.abs(guess - secret) <= 5) return { message: '¡Estás muy cerca!', type: 'warning' }
  if (guess < secret) return { message: 'El número es mayor. Sigue intentando.', type: 'hint' }
  return { message: 'El número es menor. Sigue intentando.', type: 'hint' }
}

function Game() {
  const [secret, setSecret] = useState(generateSecret)
  const [attempts, setAttempts] = useState(0)
  const [feedback, setFeedback] = useState(null)
  const [gameOver, setGameOver] = useState(false)
  const [history, setHistory] = useState([])

  const handleGuess = useCallback((value) => {
    const newAttempts = attempts + 1
    const { message, type } = getHint(value, secret)
    const won = value === secret

    setAttempts(newAttempts)
    setFeedback({ message, type })
    setHistory((prev) => [
      ...prev,
      { value, hint: message, type: won ? 'success' : type },
    ])

    if (won) {
      setGameOver(true)
    }
  }, [attempts, secret])

  const handleRestart = useCallback(() => {
    setSecret(generateSecret())
    setAttempts(0)
    setFeedback(null)
    setGameOver(false)
    setHistory([])
  }, [])

  return (
    <div className="game">
      <header className="game__header">
        <h1 className="game__title">Adivina el Número</h1>
        <p className="game__subtitle">
          Estoy pensando en un número entre <strong>1</strong> y{' '}
          <strong>100</strong>. ¿Puedes adivinarlo?
        </p>
      </header>

      <AttemptCounter attempts={attempts} />

      <GuessInput onGuess={handleGuess} disabled={gameOver} />

      <FeedbackMessage message={feedback?.message} type={feedback?.type} />

      {gameOver && (
        <GameOver
          secretNumber={secret}
          attempts={attempts}
          onRestart={handleRestart}
        />
      )}

      <History guesses={history} />
    </div>
  )
}

export default Game

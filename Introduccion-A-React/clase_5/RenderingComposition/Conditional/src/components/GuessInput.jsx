function GuessInput({ onGuess, disabled }) {
  function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    const input = form.elements.guess
    const value = parseInt(input.value, 10)
    if (isNaN(value) || value < 1 || value > 100) return
    onGuess(value)
    input.value = ''
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        name="guess"
        min="1"
        max="100"
        placeholder="1 - 100"
        disabled={disabled}
        required
      />
      <button type="submit" disabled={disabled}>
        Adivinar
      </button>
    </form>
  )
}

export default GuessInput

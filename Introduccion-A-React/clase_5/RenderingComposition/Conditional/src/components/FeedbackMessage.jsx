function FeedbackMessage({ message, type }) {
  if (!message) return null

  const emoji = type === 'success' ? '🎉' : type === 'error' ? '💥' : '💡'

  return (
    <div className={`feedback feedback--${type}`}>
      <span className="feedback__emoji">{emoji}</span>
      <p className="feedback__text">{message}</p>
    </div>
  )
}

export default FeedbackMessage

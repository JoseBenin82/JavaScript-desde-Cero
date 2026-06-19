// Tarjeta que muestra un único tweet.
function formatDate(iso) {
  const date = new Date(iso)
  return date.toLocaleString('es', {
    day: 'numeric',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit',
  })
}

export default function Tweet({ tweet }) {
  const initial = tweet.authorName?.charAt(0).toUpperCase() || '?'

  return (
    <article className="tweet">
      <div className="avatar" aria-hidden="true">
        {initial}
      </div>
      <div className="tweet-body">
        <div className="tweet-header">
          <span className="tweet-name">{tweet.authorName}</span>
          <span className="tweet-handle">@{tweet.authorUsername}</span>
          <span className="tweet-dot">·</span>
          <span className="tweet-date">{formatDate(tweet.createdAt)}</span>
        </div>
        <p className="tweet-text">{tweet.text}</p>
      </div>
    </article>
  )
}

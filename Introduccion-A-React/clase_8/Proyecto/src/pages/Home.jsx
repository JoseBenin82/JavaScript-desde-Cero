import { useState } from 'react'
import { useAuth } from '../context/useAuth'
import { getTweets, saveTweets } from '../utils/storage'
import Tweet from '../components/Tweet'

const MAX_LENGTH = 280

export default function Home() {
  const { user } = useAuth()
  // Inicializador perezoso: leemos los tweets de localStorage una sola vez,
  // al crear el estado, sin necesidad de un useEffect.
  const [tweets, setTweets] = useState(() => getTweets())
  const [text, setText] = useState('')

  function handlePublish(e) {
    e.preventDefault()
    const content = text.trim()
    if (!content) return

    const newTweet = {
      id: crypto.randomUUID(),
      authorName: user.name,
      authorUsername: user.username,
      text: content,
      createdAt: new Date().toISOString(),
    }

    // Los más nuevos van arriba.
    const updated = [newTweet, ...tweets]
    setTweets(updated)
    saveTweets(updated)
    setText('')
  }

  const remaining = MAX_LENGTH - text.length

  return (
    <section className="timeline">
      <h1 className="page-title">Inicio</h1>

      {/* Solo los usuarios autenticados llegan aquí, así que pueden publicar. */}
      <form className="composer" onSubmit={handlePublish}>
        <div className="avatar" aria-hidden="true">
          {user.name.charAt(0).toUpperCase()}
        </div>
        <div className="composer-main">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="¿Qué está pasando?"
            maxLength={MAX_LENGTH}
            rows={3}
          />
          <div className="composer-actions">
            <span className={`counter ${remaining < 20 ? 'counter-low' : ''}`}>
              {remaining}
            </span>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={!text.trim()}
            >
              Publicar
            </button>
          </div>
        </div>
      </form>

      <div className="feed">
        {tweets.length === 0 ? (
          <p className="empty">Aún no hay tweets. ¡Sé el primero en publicar!</p>
        ) : (
          tweets.map((tweet) => <Tweet key={tweet.id} tweet={tweet} />)
        )}
      </div>
    </section>
  )
}

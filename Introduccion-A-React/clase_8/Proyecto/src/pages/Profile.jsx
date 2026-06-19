import { useState } from 'react'
import { useAuth } from '../context/useAuth'
import { getTweets } from '../utils/storage'
import Tweet from '../components/Tweet'

export default function Profile() {
  const { user } = useAuth()
  // Filtramos los tweets del usuario autenticado una sola vez al montar.
  const [myTweets] = useState(() =>
    getTweets().filter((t) => t.authorUsername === user.username)
  )

  const memberSince = new Date(user.createdAt).toLocaleDateString('es', {
    month: 'long',
    year: 'numeric',
  })

  return (
    <section className="profile">
      <div className="profile-header">
        <div className="avatar avatar-lg" aria-hidden="true">
          {user.name.charAt(0).toUpperCase()}
        </div>
        <div>
          <h1>{user.name}</h1>
          <p className="tweet-handle">@{user.username}</p>
          <p className="muted">Se unió en {memberSince}</p>
        </div>
      </div>

      <h2 className="page-title">Mis tweets ({myTweets.length})</h2>

      <div className="feed">
        {myTweets.length === 0 ? (
          <p className="empty">Todavía no has publicado nada.</p>
        ) : (
          myTweets.map((tweet) => <Tweet key={tweet.id} tweet={tweet} />)
        )}
      </div>
    </section>
  )
}

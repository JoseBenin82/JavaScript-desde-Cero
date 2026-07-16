import { useEffect } from 'react'

function Planeta({ nombre }) {
  useEffect(() => {
    console.log(`¡El planeta ${nombre} ha aparecido!`)

    return () => {
      console.log(`¡El planeta ${nombre} ha desaparecido!`)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <div className="planeta-card">{nombre}</div>
}

export default Planeta

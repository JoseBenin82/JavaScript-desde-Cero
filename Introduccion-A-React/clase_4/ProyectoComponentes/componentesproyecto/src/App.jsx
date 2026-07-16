import { useState, useEffect, useMemo } from 'react'
import Planeta from './Planeta'
import './App.css'

function App() {
  const [distancia, setDistancia] = useState(0)
  const [combustible, setCombustible] = useState(100)
  const [estadoNave, setEstadoNave] = useState('En órbita')
  const [planetasVisitados, setPlanetasVisitados] = useState([])
  const [nuevoPlaneta, setNuevoPlaneta] = useState('')

  useEffect(() => {
    console.log('¡El panel de control está listo!')

    const intervalo = setInterval(() => {
      setCombustible(c => {
        if (c <= 0) {
          setEstadoNave('Sin combustible')
          return 0
        }
        return c - 1
      })
      setDistancia(d => d + 10)
    }, 1000)

    return () => {
      clearInterval(intervalo)
      console.log('El panel de control se ha apagado.')
    }
  }, [])

  useEffect(() => {
    if (combustible > 0 && combustible < 100) {
      console.log('¡Combustible actualizado!')
    }
  }, [combustible])

  const mensajeEstado = useMemo(() => {
    return `Estado: ${estadoNave}`
  }, [estadoNave])

  const aterrizar = () => {
    if (!nuevoPlaneta.trim()) return
    setEstadoNave('Aterrizando')
    setPlanetasVisitados(prev => [...prev, nuevoPlaneta.trim()])
    setNuevoPlaneta('')
    setTimeout(() => setEstadoNave('En órbita'), 2000)
  }

  return (
    <div className="panel">
      <h1>Panel de Control del Explorador Espacial</h1>

      <div className="info">
        <p>Distancia recorrida: <strong>{distancia} km</strong></p>
        <p>Combustible restante: <strong>{combustible}%</strong></p>
        <p>{mensajeEstado}</p>
      </div>

      <div className="accion">
        <input
          type="text"
          placeholder="Nombre del planeta"
          value={nuevoPlaneta}
          onChange={e => setNuevoPlaneta(e.target.value)}
        />
        <button onClick={aterrizar}>Aterrizar</button>
      </div>

      <h2>Planetas Visitados</h2>
      <div className="planetas">
        {planetasVisitados.length === 0 ? (
          <p className="vacio">Aún no has visitado ningún planeta.</p>
        ) : (
          planetasVisitados.map((planeta, index) => (
            <Planeta key={index} nombre={planeta} />
          ))
        )}
      </div>
    </div>
  )
}

export default App

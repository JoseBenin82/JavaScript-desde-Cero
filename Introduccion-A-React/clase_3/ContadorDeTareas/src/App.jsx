import { useState, useEffect, useMemo } from 'react'
import './App.css'

function App() {
  const [tareas, setTareas] = useState(() => {
    const guardadas = localStorage.getItem('tareas')
    return guardadas ? JSON.parse(guardadas) : []
  })
  const [nuevaTarea, setNuevaTarea] = useState('')
  const [duracion, setDuracion] = useState('')
  const [horaActual, setHoraActual] = useState(new Date())
  const [filtro, setFiltro] = useState('todas')

  // useEffect: reloj en tiempo real
  useEffect(() => {
    const intervalo = setInterval(() => {
      setHoraActual(new Date())
    }, 1000)
    return () => clearInterval(intervalo)
  }, [])

  // useMemo: calcular tiempo total solo cuando cambian las tareas
  const tiempoTotal = useMemo(() => {
    console.log('Calculando tiempo total...')
    return tareas.reduce((total, tarea) => total + tarea.duracion, 0)
  }, [tareas])

  // useEffect: actualizar título del documento
  useEffect(() => {
    document.title = `Total: ${tiempoTotal} min | Contador de Tareas`
  }, [tiempoTotal])

  // useEffect: persistir tareas en localStorage
  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas))
  }, [tareas])

  // useMemo: tareas filtradas
  const tareasFiltradas = useMemo(() => {
    if (filtro === 'todas') return tareas
    if (filtro === 'cortas') return tareas.filter(t => t.duracion <= 15)
    if (filtro === 'medianas') return tareas.filter(t => t.duracion > 15 && t.duracion <= 45)
    if (filtro === 'largas') return tareas.filter(t => t.duracion > 45)
    return tareas
  }, [tareas, filtro])

  const agregarTarea = (e) => {
    e.preventDefault()
    if (!nuevaTarea.trim() || !duracion) return

    const nuevaTareaObj = {
      id: Date.now(),
      nombre: nuevaTarea.trim(),
      duracion: parseInt(duracion),
    }
    setTareas([...tareas, nuevaTareaObj])
    setNuevaTarea('')
    setDuracion('')
  }

  const eliminarTarea = (id) => {
    setTareas(tareas.filter(t => t.id !== id))
  }

  const formatearHora = (fecha) => {
    return fecha.toLocaleTimeString('es-MX', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    })
  }

  return (
    <div className="app">
      <header className="header">
        <h1>Contador de Tareas</h1>
        <p className="reloj">{formatearHora(horaActual)}</p>
      </header>

      <form className="formulario" onSubmit={agregarTarea}>
        <input
          type="text"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          placeholder="Nombre de la tarea"
          className="input-text"
        />
        <input
          type="number"
          value={duracion}
          onChange={(e) => setDuracion(e.target.value)}
          placeholder="Minutos"
          min="1"
          className="input-number"
        />
        <button type="submit" className="btn-agregar">
          Agregar
        </button>
      </form>

      <div className="filtro">
        <span>Filtrar:</span>
        {['todas', 'cortas', 'medianas', 'largas'].map((opcion) => (
          <button
            key={opcion}
            className={`btn-filtro ${filtro === opcion ? 'activo' : ''}`}
            onClick={() => setFiltro(opcion)}
            type="button"
          >
            {opcion.charAt(0).toUpperCase() + opcion.slice(1)}
          </button>
        ))}
      </div>

      <div className="stats">
        <div className="stat">
          <span className="stat-numero">{tareas.length}</span>
          <span className="stat-label">Tareas</span>
        </div>
        <div className="stat">
          <span className="stat-numero">{tiempoTotal}</span>
          <span className="stat-label">Minutos totales</span>
        </div>
        <div className="stat">
          <span className="stat-numero">
            {tareas.length > 0 ? Math.round(tiempoTotal / tareas.length) : 0}
          </span>
          <span className="stat-label">Promedio min/tarea</span>
        </div>
      </div>

      <h2>Tareas {filtro !== 'todas' && `(${filtro})`}</h2>

      {tareasFiltradas.length === 0 ? (
        <p className="vacio">
          {tareas.length === 0
            ? 'No hay tareas. Agrega una arriba.'
            : 'No hay tareas en esta categoría.'}
        </p>
      ) : (
        <ul className="lista-tareas">
          {tareasFiltradas.map((tarea) => (
            <li key={tarea.id} className="tarea">
              <div className="tarea-info">
                <span className="tarea-nombre">{tarea.nombre}</span>
                <span className="tarea-duracion">{tarea.duracion} min</span>
              </div>
              <button
                className="btn-eliminar"
                onClick={() => eliminarTarea(tarea.id)}
                type="button"
              >
                x
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default App

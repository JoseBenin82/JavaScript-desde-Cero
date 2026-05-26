import { useState } from 'react'

const UNIDADES = ['pza', 'kg', 'g', 'lt', 'paq']

function FormularioProducto({ onAgregar }) {
  const [nombre, setNombre] = useState('')
  const [cantidad, setCantidad] = useState(1)
  const [unidad, setUnidad] = useState('pza')

  const manejarEnvio = (evento) => {
    evento.preventDefault()
    const textoLimpio = nombre.trim()
    if (textoLimpio === '') return

    onAgregar({
      id: crypto.randomUUID(),
      nombre: textoLimpio,
      cantidad: Number(cantidad) || 1,
      unidad,
      comprado: false,
    })

    setNombre('')
    setCantidad(1)
    setUnidad('pza')
  }

  return (
    <form className="formulario" onSubmit={manejarEnvio}>
      <input
        type="text"
        className="campo-nombre"
        placeholder="Ej. Manzanas"
        value={nombre}
        onChange={(evento) => setNombre(evento.target.value)}
      />
      <input
        type="number"
        className="campo-cantidad"
        min="0"
        step="0.1"
        value={cantidad}
        onChange={(evento) => setCantidad(evento.target.value)}
      />
      <select
        className="campo-unidad"
        value={unidad}
        onChange={(evento) => setUnidad(evento.target.value)}
      >
        {UNIDADES.map((opcion) => (
          <option key={opcion} value={opcion}>
            {opcion}
          </option>
        ))}
      </select>
      <button type="submit" className="boton-agregar">
        Agregar
      </button>
    </form>
  )
}

export default FormularioProducto

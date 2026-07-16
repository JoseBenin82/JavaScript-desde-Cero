import { useReducer, useRef, useCallback } from 'react'
import ProductForm from './components/ProductForm'
import InventoryTable from './components/InventoryTable'
import StatsPanel from './components/StatsPanel'
import './App.css'

const inventoryReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT': {
      if (state.products.some(p => p.name.toLowerCase() === action.payload.name.toLowerCase())) {
        return { ...state, error: 'Ese producto ya existe en el inventario' }
      }
      return {
        ...state,
        products: [...state.products, { ...action.payload, id: Date.now() }],
        error: null
      }
    }
    case 'REMOVE_PRODUCT':
      return {
        ...state,
        products: state.products.filter(p => p.id !== action.payload)
      }
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        products: state.products.map(p =>
          p.id === action.payload.id
            ? { ...p, quantity: Math.max(0, p.quantity + action.payload.delta) }
            : p
        )
      }
    case 'EDIT_PRODUCT':
      return {
        ...state,
        products: state.products.map(p =>
          p.id === action.payload.id ? { ...p, ...action.payload.data } : p
        )
      }
    case 'CLEAR_ERROR':
      return { ...state, error: null }
    default:
      return state
  }
}

const initialState = {
  products: [
    { id: 1, name: 'Laptop', category: 'Electrónica', quantity: 10, price: 15000 },
    { id: 2, name: 'Audífonos', category: 'Electrónica', quantity: 25, price: 800 },
    { id: 3, name: 'Camiseta', category: 'Ropa', quantity: 50, price: 350 },
  ],
  error: null
}

function App() {
  const [state, dispatch] = useReducer(inventoryReducer, initialState)
  const mainHeading = useRef(null)
  const addButtonRef = useRef(null)

  const handleAdd = useCallback((product) => {
    dispatch({ type: 'ADD_PRODUCT', payload: product })
    addButtonRef.current?.focus()
  }, [])

  const handleRemove = useCallback((id) => {
    dispatch({ type: 'REMOVE_PRODUCT', payload: id })
  }, [])

  const handleUpdateQuantity = useCallback((id, delta) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, delta } })
  }, [])

  const handleEdit = useCallback((id, data) => {
    dispatch({ type: 'EDIT_PRODUCT', payload: { id, data } })
  }, [])

  const handleClearError = useCallback(() => {
    dispatch({ type: 'CLEAR_ERROR' })
  }, [])

  return (
    <div className="app">
      <header className="app-header">
        <h1 ref={mainHeading} tabIndex={-1}>Gestor de Inventario</h1>
        <p className="subtitle">
          useReducer + useRef + useCallback · React + Vite
        </p>
      </header>

      {state.error && (
        <div className="error-banner" role="alert" onClick={handleClearError}>
          {state.error}
          <button className="error-close" aria-label="Cerrar">&times;</button>
        </div>
      )}

      <main className="app-main">
        <ProductForm onAdd={handleAdd} addButtonRef={addButtonRef} />
        <InventoryTable
          products={state.products}
          onRemove={handleRemove}
          onUpdateQuantity={handleUpdateQuantity}
          onEdit={handleEdit}
        />
        <StatsPanel products={state.products} />
      </main>
    </div>
  )
}

export default App

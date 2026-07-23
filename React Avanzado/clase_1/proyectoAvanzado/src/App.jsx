import { useForm } from 'react-hook-form'

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-8">DevfSeek</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md space-y-4"
      >
        <input
          type="text"
          placeholder="Escribe tu mensaje..."
          {...register('message', { required: 'El mensaje es obligatorio' })}
          className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-purple-500"
        />
        {errors.message && (
          <p className="text-red-400 text-sm">{errors.message.message}</p>
        )}

        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-purple-600 hover:bg-purple-700 font-semibold cursor-pointer"
        >
          Enviar
        </button>
      </form>
    </div>
  )
}

export default App

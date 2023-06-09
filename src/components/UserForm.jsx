import { useState } from "react"
import ErrorMessage from "./ErrorMessage"

// eslint-disable-next-line react/prop-types
function UserForm({ setData }) {
  const [error, setError] = useState(false)
  let label = "block text-sm font-bold leading-6 text-white-900"
  let input = "block w-full rounded-md border-0 p-1.5 text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
  const submit = (e) => {
    e.preventDefault()
    if(e.target.nombre.value.trim()!==""){
      setData(e.target.nombre.value, e.target.altura.value, e.target.peso.value)
      setError(false)
    }
    else
      setError(true)
  }

  return (
    <>
      <form className="space-y-4 sm:w-full sm:max-w-2xl" action="#" onSubmit={submit}>
        <div>
          {error ? <ErrorMessage error={"Name cannot be empty"} /> : <p></p>}
          <label className={label} htmlFor="nombre">Nombre</label>
          <input className={input} type="text" name="nombre" id="nombre" onChange={() => setError(false)}/>
        </div>
        <div>
          <label className={label} htmlFor="altura">Altura</label>
          <input className={input} type="number" name="altura" id="altura" value={0} required/>
        </div>
        <div>
          <label className={label} htmlFor="peso">Peso</label>
          <input className={input} type="number" name="peso" id="peso" value={0} required/>
        </div>
        <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Enviar</button>
      </form>
    </>
  )
}

export default UserForm
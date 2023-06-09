/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import LoadingSpinner from './Loading'

function ListUsers({ user }) {
  const [data, setData] = useState([])

  useEffect(() => {
    const handle = async() => {
      const response = await fetch("https://swapi.dev/api/people/?format=json")
      let datos = await response.json()
      const { results } = datos
      console.log(results)
      let datos2 = results.map(({name,mass,height}) => {
        return {name,mass,height}
      })
      setData(datos2)
    }
    handle()
  },[])

  useEffect(() => {
    if(user.name!="" && data.length != 0){
      if(!checkExists(user.name,data))
        push()
    }
    console.log(user)
  },[user])
  
  const push = () => {
    let copy = structuredClone(data)
    copy.unshift(user)
    setData(copy)
  }
  
  const deleteUser = (index) => {
    let copy = structuredClone(data)
    copy.splice(index,1)
    setData(copy)
  }
  return (
    <>
    {data.length != 0 ?
      <div id="tasks" className="flex-1 my-5 overflow-y-auto rounded-lg bg-slate-800">
        {data === undefined ? <p></p> : data.map((item, index) =>    
        <div key={index} id="task" className="flex items-center justify-between px-2 py-3 border-b border-l-4 border-slate-200 border-l-transparent">
            <div className="inline-flex items-center space-x-2">
              <div>{"Nombre: "+item.name+", Peso: "+item.mass+", Altura: "+item.height}</div>
            </div>
            <button className='p-0 ml-2 outline-none bg-inherit' onClick={() => deleteUser(index)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
              </svg>
            </button>
        </div>
        )}
      </div>
      : <LoadingSpinner />}
    </>
  )
}

function checkExists(value, array = []){
  for(let v of array.values()) {
    if(value.toLocaleLowerCase()===v.name.toLocaleLowerCase())
      return true
  }
  return false
}

export default ListUsers
import { useState } from 'react'
import './App.css'
import UserForm from './components/UserForm'
import ListUsers from './components/ListUsers'

function App() {
  const [user, setUser] = useState({name:"",mass:"",height:""})

  const push = (name,mass,height) => {
    setUser({name:name,mass:mass,height:height})
  }
  
  return (
    <>
      <h1 className='mb-4 font-bold leading-9 text-center text-white text-4x2'>SWAPI</h1>
      <div className='flex justify-center place-items-center'>
        <div className='w-full mr-10'>
          <UserForm setData={push} />
        </div>
        <ListUsers user={user}/>
      </div>
    </>
  )
}

export default App

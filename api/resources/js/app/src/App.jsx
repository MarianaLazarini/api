import { useState } from 'react'
import Rotas from './routes/Routes'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserFormUpdate from './views/user/UserFormUpdate'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Rotas/>
    </>
  )
}

export default App

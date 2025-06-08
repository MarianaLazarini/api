
import ContextProvider from './context/ContextProvider'
import Rotas from './Routes/Routes'

function App() {

  return (
    <>
     <ContextProvider>
        <Rotas/>
     </ContextProvider>
    </>
  )
}

export default App

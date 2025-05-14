import './App.css';
import Rotas from './routes/Routes';
import ContextProvider from './context/ContextProvider';   // <- default

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
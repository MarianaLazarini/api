import './App.css';
import ContextProvider from './Context/ContextProvider';   // <- default
import Rotas from './routes/Routes';

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
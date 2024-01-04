import { AppContainer } from './components/AppContainer.tsx'
import { createContext } from 'react'

export const AddBookContext = createContext(false)

function App() {
  return (
    <>
      <AppContainer />
    </>
  )
}

export default App

import { useState } from 'react'
import Rotas from './routes/Routes'
import ContextProvider from './context/ContextProvider'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserFormUpdate from './views/user/UserFormUpdate'
import DefaultLayout from './components/DefaultLayout'
import { LoginContext } from './context/ContextProvider'

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

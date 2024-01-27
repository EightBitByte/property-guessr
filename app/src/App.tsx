import { useState } from 'react'
import Toolbar from "./components/Toolbar"
import Game from './components/Game'
import SelectMenu from './components/Select'

function App() {

  return (
    <> 
      <Game></Game>
      <Toolbar></Toolbar>
      <SelectMenu></SelectMenu>
    </>
  )
}

export default App

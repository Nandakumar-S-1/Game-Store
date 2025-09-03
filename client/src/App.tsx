import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import RPS from './pages/RPS'
import Whiteboard from './pages/Whiteboard'
import { div } from 'framer-motion/client'
const App = () => {

  return (
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/games/rps' element={<RPS/>}/>
        <Route path='/games/whiteboard' element={<Whiteboard/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

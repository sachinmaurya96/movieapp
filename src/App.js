import React from 'react'
import Home from './components/Home'
import Error from './components/Error'
import Moviedetails from "./components/Moviedetails"
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import "./App.css"

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/movieapp' element={<Home/>}/>
      <Route path='movie/:id' element={<Moviedetails/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

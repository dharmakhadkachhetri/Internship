import { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import Nodep from './nodep'; 
import Home from './Home'
import Springp from './Springp'

function App() {
  return(
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/node-server' element={<Nodep />} /> 
        <Route path='/spring-server' element={<Springp />} /> 
      </Routes>     
    </>
  )
}

export default App;

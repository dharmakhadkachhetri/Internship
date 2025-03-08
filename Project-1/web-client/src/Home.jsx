import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>This is Home</h1>
      <Link to="/node-server"> <button>Go to Node Server</button></Link>
      <Link to="/spring-server"> <button>Go to Spring Server</button></Link>
    </div>
  )
}

export default Home

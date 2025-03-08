import React, { useState } from 'react'
import axios from 'axios'
import './index.css' 

const Nodep = () => {
  const [data, setdata] = useState([])
  const getData=async ()=>{
    const response=await axios.get('http://localhost:3001/dummy')
    setdata(response.data)
  }
  return (
    <>
      <button onClick={getData}>Get data</button>
      <div>
        {data.map(function(elem,ind){
          return <div key={ind} className="data-box">
          <h3>ID: {elem.id}</h3>
          <ul>
            <li>Name: {elem.name}</li>
            <li>Des: {elem.description}</li>
            <li>Created At: {elem.created_at}</li>
            <li>Updated At: {elem.updated_at}</li>
            <li>Status: {elem.status}</li>
          </ul>
        </div>
        
        })}
      </div>
    </>
  )
}

export default Nodep
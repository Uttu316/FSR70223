import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'




function App() {
  const name = "Utkarsh"
  const x = 2;
  const y = 5;
  const user = {
    name:"Utkarsh",
    age:24,
    city:"Agra"
  }
  const users = [
    {
      name:"Ramesh"
    },
    {
      name:"Esha"
    },
    {
      name:"Payal"
    },{
      name:"Raja"
    }
  ]
  return (
    <React.Fragment>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Utkarsh Gupta</h1>
      <div className="card">
      {user.name}
      {user.age}
      {user.city}
      <p>
        {x+y}
      </p>
      {<span>Hello</span>}
      <ul>
      { users.map((item)=>(
        <li>{item.name}</li>
      ))
      }
      </ul>
      
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
       I am a Software Engineer
      </p>
    </React.Fragment>
  )
}

export default App



// Expression rules

/*

  - String
  - Number
  - Jsx Element
  - Array of Jsx Element
*/

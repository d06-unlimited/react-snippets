import { useState } from 'react'
import './App.css'
import Button, { Panel }  from './Button'
// IMPORT and EXPORT DEFAULT 
// import Buttomwski from './Button'
// NAMED IMPORT

function App() {
 
  // get my last stored status from local storage
  // if nothing is stored in local storage => use some start / default value 
  const countDefault = localStorage.getItem("COUNTY") || 1

  // setup state
  const [count, setCount] = useState(parseInt(countDefault))

  const handleCountUpdate = () => {
    console.log("Updating....")
    // setters are ASYNCHRONOUS
    setCount(count + 1) // triggert re-rendering
    // store updated STATE in local storage
    localStorage.setItem("COUNTY", count + 1)
  }

  // RENDER layout
  return (
    <div className="App">
      <header className="App-header">
        {/* CALLBACK SYNTAX for event listener */}
        <button onClick={ handleCountUpdate } >{count}</button>
        {/* <button onClick={ () => handleCountUpdate() } >{count}</button> */}
      </header>
    </div>
  )
}

export default App

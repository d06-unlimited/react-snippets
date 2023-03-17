import { useState } from 'react'
import './App.css'


const displayArray = (arr: Array<string> ) => {
  return arr.map(item => item)
}


const str = displayArray(["0", "1", "2", "3"])


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        Hallo
        <button onClick={ () => setCount(count + 1) } >{count}</button>
      </header>
    </div>
  )
}

export default App

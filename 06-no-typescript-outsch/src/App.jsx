import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const upcount = "1"

  const user = {
    name: "Claudi"
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={ () => setCount(count + upcount) }>{count}</button>
        { user.nameeeeyy }
      </header>
    </div>
  )
}

export default App

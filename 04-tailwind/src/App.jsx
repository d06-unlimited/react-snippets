import './App.css'
import { Card } from './components/card/Card'
import { Card2 } from './components/card2/Card2'

function App() {

  const numby = 10
  const stringy = "hallo"
  const obj = { name: "Radina" }
  const arr = [ "1", "2", "3" ]
  const arrObjects = [
    { name: "Claudia" },
    { name: "Maddy" },
    { name: "Steven" },
  ]

  return (
    <div className="App">
      <header className="App-header">
        {/* <div>{ numby }</div>        
        <div>{ stringy }</div> */}
        {/* we can NEVER output a whole object in curly braces! */}
        {/* <div>{ obj }</div> */}
        {/* <div>{ obj.name }</div> */}
        {/* outputting a FLAT array is possible (but often not really meaningful) */}
        {/* <div>{ arr }</div> */}
        {/* we can NEVER output an array of objects in curly braces */}
        {/* <div>{ arrObjects }</div> */}
        <Card>OK</Card>
        <Card2>DONE</Card2>
      </header>
    </div>
  )
}

export default App

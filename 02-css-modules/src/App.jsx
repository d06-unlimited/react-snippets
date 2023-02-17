import './App.css'
import { Card } from './components/card/Card'
import { Card2 } from './components/card2/Card2'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Card2 />
        <Card />
      </header>
    </div>
  )
}

export default App

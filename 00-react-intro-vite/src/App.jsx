import './App.css'
import { Button } from './components/button/Button'
import { Card } from './components/card/Card'
import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Button title="Schlag mich tot" padding="10" />
        {/* actually this will get executed: Button({ title: "Schlag mich tot", padding: "10" }) */}
        <Button title="Click mich tot" />
        <Button title="Gib mir C2 jetzt" />
        <div style={{ display: 'flex', gap: 10 }}>
          <Card>Card 1 </Card>
          <Card>Card 2</Card>
          <Card>Card 3</Card>
          <Card>Card 4</Card>
          <Card>Card 5</Card>
          <Card>Card 6</Card>

        </div>
        <Footer />
      </header>
    </div>
  )
}

export default App

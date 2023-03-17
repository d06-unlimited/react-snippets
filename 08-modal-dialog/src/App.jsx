import { useRef, useState } from 'react'
import './App.css'

function App() {
  const refDialog = useRef()

  const onDialogOpen = () => {
    refDialog.current.showModal()
  }

  const onDialogClose = () => {
    refDialog.current.close();
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>Jugendschutz</h2>
        <dialog ref={refDialog}>
          Jugenschutz-Hinweise:
          <ul>
            <li>Alkohol erst ab 16</li>
            <li>Magic Mushrooms ab 12</li>
            <button onClick={onDialogClose}>Hinweise gelesen! Tschüss!</button>
          </ul>
        </dialog>
        <button onClick={onDialogOpen }>Show Jugenschutz-Hinweise</button>
      </header>
    </div>
  );
}

export default App

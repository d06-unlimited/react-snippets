import { useContext } from 'react'
import './App.css'
import { DataContext } from './DataProvider'

// EXPRESSIONS JA (=> die EINEN FLAT WERT zurückgeben!)
// STATEMENTS NEIN


function App() {

  // get everything we can
  const { state, dispatch } = useContext(DataContext)

  const onTodoAdd = () => {
    dispatch({
      type: "TODO_ADD",
      payload: { _id: "t4", title: "Einschlafen", status: false },
    });
  }

  const onTodoDelete = (id) => {

    dispatch({
      type: "TODO_DELETE",
      payload:  id
    })
  }

  const onCountUpdate = () => {
    dispatch({
      type: "COUNT_ADD", payload: 1
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>Use Reducer Demo</h2>
        {state.todos.map((todo) => (
          <div key={todo._id}>
            <span>{todo.title}</span>
            <button onClick={ () => onTodoDelete(todo._id) } >X</button>
          </div>
        ))}
        <button onClick={onTodoAdd}>Add todo</button>
        <div>
          <button onClick={ onCountUpdate }>{state.count}</button>
        </div>
      </header>
    </div>
  );
}

export default App

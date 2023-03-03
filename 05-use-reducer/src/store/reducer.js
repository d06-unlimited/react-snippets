
// action = { type: "BUY_LATTE", payload: 3 }
export const reducer = (state, action) => {

  const { type, payload } = action 

  // Kaffeeautomat => welcher button wurde vom user gedrückt?
  switch(type) {
    case "COUNT_ADD":
      return { ...state, count: state.count + payload }
    case "TODO_ADD":  // payload new todo item: { title: "Show adding in useReducer" }
      return { ...state, todos: [ ...state.todos, payload ] }
    case "TODO_DELETE": // payload: ID to delete
      return { ...state, todos: state.todos.filter(todo => todo._id !== payload) }
    case "TODO_UPDATE": // payload updated toto item:
      return { ...state, todos: state.todos.map(todo => todo._id === payload._id ? 
        { ...todo, ...payload } : todo) }
  }

}
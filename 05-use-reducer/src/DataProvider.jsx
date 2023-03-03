import { createContext, useReducer, useState } from "react"
import { reducer } from "./store/reducer"
import { initialState } from "./store/state"

// create me the fridge for all my data to share
export const DataContext = createContext()

export const DataProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState)

  // const [user, setUser] = useState({ username: "Roberto" })
  // const [todos, setTodos] = useState([{ _id: "t1", title: "Show useReducer" }])
  // const [posts, setPosts] = useState([])
  // const [error, setError] = useState("")

  const sharedData = { 
    state, dispatch
    // todos, setTodos, posts, setPosts,
    // user, setUser,
    // error, setError,
  }

  return <DataContext.Provider value={sharedData}>
    { children }
  </DataContext.Provider>
}
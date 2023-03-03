import { createContext, useState } from "react";

// create me the fridge for all my data to share
export const BierContext = createContext();
export const CokeContext = createContext();

export const DataProvider = ({ children }) => {
  const [user, setUser] = useState({ username: "Roberto" });
  const [todos, setTodos] = useState([{ _id: "t1", title: "Show useReducer" }]);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  const sharedData = {
    todos,
    setTodos,
    posts,
    setPosts,
    user,
    setUser,
    error,
    setError,
  };

  return (
    <CokeContext.Provider value={}>
      <BierContext.Provider value={sharedData}>{children}</BierContext.Provider>
    </CokeContext.Provider>
  );
};

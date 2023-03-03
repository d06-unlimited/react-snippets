// WARENLAGER für ALLE DATEN
export const initialState = {
  count: 0,
  user: { username: "Roberto" },
  todos: [
    { _id: "t1", title: "Show useReducer", status: true },
    { _id: "t2", title: "Show sending actions", status: false },
    { _id: "t3", title: "Send Weekend action", status: false }
  ],
  posts: [],
  error: ""
}
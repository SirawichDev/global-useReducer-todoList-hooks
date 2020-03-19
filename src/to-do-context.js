import React, { useReducer, createContext } from "react";
import {
  toDoReducer,
  initState,
  addAction,
  markAction,
  deleteAction
} from "./components/todoReducer";
import "./App.css";

const TodosContext = createContext(null);
export function TodoProvider({ children }) {
  const [todoList, dispatch] = useReducer(toDoReducer,initState);
  const actions = {
    add(text) {
      dispatch(addAction(text));
    },
    mark(taskId, done) {
      dispatch(markAction(taskId, done));
    },
    remove(taskId) {
      dispatch(deleteAction(taskId));
    }
  };
  return (
    <TodosContext.Provider value={{ todoList, actions }}>
      {children}
    </TodosContext.Provider>
  );
}

export const TodosCosumer = TodosContext.Consumer;

export default TodosContext;

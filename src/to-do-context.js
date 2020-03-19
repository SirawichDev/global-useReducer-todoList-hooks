import React, { useReducer, createContext } from "react";
import {
  toDoReducer,
  initState,
  addAction,
  markAction,
  deleteAction
} from "./components/todoReducer";
import "./App.css";
import { useLogger } from "./utils";

const TodosContext = createContext(null);
export function TodoProvider({ children }) {
  const [todoListState, dispatch] = useReducer(useLogger(toDoReducer), initState);
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
    <TodosContext.Provider value={{ todoListState, actions }}>
      {children}
    </TodosContext.Provider>
  );
}

export const TodosCosumer = TodosContext.Consumer;

export default TodosContext;

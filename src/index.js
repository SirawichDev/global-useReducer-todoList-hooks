import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {TodoProvider} from './to-do-context'
import * as serviceWorker from "./serviceWorker";
import { InputTask } from "./components/input-task";
import { TaskList } from "./components/task-list";

ReactDOM.render(
  <TodoProvider>
    <InputTask/>
    <TaskList/>
  </TodoProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

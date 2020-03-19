import React from "react";

import { TodosCosumer } from "../to-do-context";

export const TaskList = () => {
  return (
    <TodosCosumer>
      {({ todoListState, actions: { mark, remove } }) => (
        <ol>
          {todoListState.map((task, i) => {
            return (
              <li key={i}>
                <span>
                  <input
                    id={`c-${i}`}
                    type="checkbox"
                    checked={task.done}
                    onClick={() => mark(i, !task.done)}
                  />
                  <label>{task.name}</label>
                </span>
                <button onClick={() => remove(i)}>
                    Delete
                </button>
              </li>
            );
          })}
        </ol>
      )}
    </TodosCosumer>
  );
};

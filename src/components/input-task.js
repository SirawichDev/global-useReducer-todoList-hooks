import React, { memo,useState, useContext } from "react";
import TodosContext from "../to-do-context";

export const InputTask = memo(function TaskForm() {
  const [task, setTask] = useState("");
  const { actions: { add } } = useContext(TodosContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    add(task);
    setTask("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <input
          type="text"
          name="task"
          className="add-task"
          onChange={e => {
            setTask(e.target.value);
          }}
          autoComplete="off"
          value={task}
          placeholder="Add a task"
        />
        <button className="add" type="submit">
          Add
        </button>
      </p>
    </form>
  );
});

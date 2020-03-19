export const initState = [
  {
    name: "เพิ่ม Task",
    done: false
  }
];

const ADD = "ADD";
const MARK = "MARK";
const DELETE = "DELETE";

export function toDoReducer(state, action) {
  switch (action.type) {
    case ADD:
      return [...state, action.payload.task];
    case MARK:
      return state.map((task, i) => {
        if (i === action.payload.taskId)
          return { ...task, done: action.payload.done };

        return task;
      });
    case DELETE:
      return state.filter((_task, i) => action.payload.taskId !== i);
    default:
      return state;
  }
}



// ACTION อยู่นี่นะจ๊๊ะ
export function addAction(taskText) {
  return {
    type: ADD,
    payload: {
      task: {
        name: taskText,
        done: false
      }
    }
  };
}

export function markAction(taskId, done) {
  return {
    type: MARK,
    payload: {
      taskId,
      done
    }
  };
}

export function deleteAction(taskId) {
  return {
    type: DELETE,
    payload: {
      taskId
    }
  };
}

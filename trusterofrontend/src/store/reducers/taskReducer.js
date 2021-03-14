import merge from "lodash/merge";
import { LOAD_TASKS, DELETE_TASK, CREATE_TASK, CLEAR_TASKS} from "../actions/taskActions";

export default function reducer(state = {}, action) {
  Object.freeze(state);

  switch (action.type) {
    case LOAD_TASKS: {
      const tasks = action.tasks.map((task) => ({ [task.id]: task }));
      return merge({}, state, ...tasks);
    }

    case DELETE_TASK: {
      let obj = {};
      Object.keys(state.tasks).forEach((id) => {
        if (parseInt(id) !== action.id) obj[id] = state.tasks[id];
      });
      return { ...state, tasks: obj };
    }
    case CLEAR_TASKS: {
      return {};
    }
    case CREATE_TASK: {
      let obj = state.tasks;
      obj[action.task.id] = action.task;
      return { ...state, tasks: obj };
    }
    default:
      return state;
  }
}

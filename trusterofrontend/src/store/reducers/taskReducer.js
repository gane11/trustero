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
      delete state[action.id];
    }
    case CLEAR_TASKS: {
      return {};
    }
    case CREATE_TASK: {
      return {
        ...state,
        id: action.id,
        titel: action.title,
        description: action.description,
        isComplete: action.isComplete
      };
    }
    default:
      return state;
  }
}

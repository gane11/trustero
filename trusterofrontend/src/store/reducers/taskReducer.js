import merge from "lodash/merge";
import { LOAD_TASKS} from "../actions/taskActions";

export default function reducer(state = {}, action) {
  Object.freeze(state);

  switch (action.type) {
    case LOAD_TASKS: {
      const tasks = action.tasks.map((task) => ({ [task.id]: task }));
      return merge({}, state, ...tasks);
    }

    default:
      return state;
  }
}

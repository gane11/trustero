import merge from "lodash/merge";
import { LOAD } from "../actions/taskActions";

export default function reducer(state = {}, action) {
  Object.freeze(state);

  switch (action.type) {
    case LOAD: {
      const tasks = action.tasks.map((task) => ({ [task.id]: task }));
      return merge({}, state, ...tasks);
    }

    default:
      return state;
  }
}

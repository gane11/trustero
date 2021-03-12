import merge from "lodash/merge";
import { LOAD } from "../actions/commentActions";

export default function reducer(state = {}, action) {
  Object.freeze(state);

  switch (action.type) {
    case LOAD: {
      const comments = action.comments.map((comment) => ({ [comment.id]: comment }));
      return merge({}, state, ...comments);
    }

    default:
      return state;
  }
}

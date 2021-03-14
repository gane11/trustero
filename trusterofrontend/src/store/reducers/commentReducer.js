import merge from 'lodash/merge';
import { LOAD_COMMENTS, DELETE_COMMENT, CREATE_COMMENT, CLEAR_COMMENTS, EDIT_COMMENT} from "../actions/commentActions";

export default function reducer(state = {}, action) {
  Object.freeze(state);

  switch (action.type) {
    case LOAD_COMMENTS: {
      const comments = action.comments.map((comment) => ({ [comment.id]: comment }));
      return merge({}, state, ...comments);
    }
    case DELETE_COMMENT: {
      delete state[action.id];
    }

    case CREATE_COMMENT: {
      return {
        ...state,
        id: action.id,
        description: action.description
      }
    }
    case EDIT_COMMENT: {
        let newState = { ...state };
        newState[action.comment.id] = action.comment;
        return newState;
    }

    case CLEAR_COMMENTS: {
      return {};
    }

    default:
      return state;
  }
}

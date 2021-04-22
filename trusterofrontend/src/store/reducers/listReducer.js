import merge from 'lodash/merge';
import {LOAD, CLEAR_LISTS,DELETE_LIST, CREATE_LIST, EDIT_LIST} from '../actions/listActions';



export default function reducer(state= {}, action) {
    Object.freeze(state);

    switch (action.type) {
      case LOAD: {
        const lists = action.lists.map((list) => ({ [list.id]: list }));
        return merge({}, state, ...lists);
      }

      case DELETE_LIST: {
        let obj = {};
        Object.keys(state.lists).forEach((id) => {
          if (parseInt(id) !== action.id) obj[id] = state.lists[id];
        });
        return { ...state, lists: obj };
      }
      case CLEAR_LISTS: {
        return {};
      }
      case CREATE_LIST: {
        let obj = state.lists;
        obj[action.list.id] = action.list;
        return { ...state, lists: obj };
      }

      case EDIT_LIST: {
        let newState = { ...state };
        newState[action.list.id] = action.list;
        return newState;
      }

      default:
        return state;
    }
}


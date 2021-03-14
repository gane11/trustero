import merge from 'lodash/merge';
import {LOAD, DELETE_LIST, CREATE_LIST} from '../actions/listActions';

const CLEAR_LISTS = "CLEAR_LISTS";

export const clearAllLists = () => ({
  type: CLEAR_LISTS,
});


export default function reducer(state= {}, action) {
    Object.freeze(state);

    switch (action.type) {
        case LOAD: {
            const lists = action.lists.map((list) => ({[list.id]: list}));
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
            return {}
        }
        case CREATE_LIST: {
        let obj = state.lists;
        obj[action.list.id] = action.list;
        return { ...state, lists: obj };
        }

        default:
            return state
    }
}
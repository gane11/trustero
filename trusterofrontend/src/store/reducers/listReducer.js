import merge from 'lodash/merge';
import {LOAD, DELETE_LIST} from '../actions/listActions';

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
            delete state[action.id]
        }
        case CLEAR_LISTS: {
            return {}
        }

        default:
            return state
    }
}
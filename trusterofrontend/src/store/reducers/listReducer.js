import merge from 'lodash/merge';
import {LOAD} from '../actions/listActions';


export default function reducer(state= {}, action) {
    Object.freeze(state);

    switch (action.type) {
        case LOAD: {
            const lists = action.lists.map((list) => ({[list.id]: list}));
            return merge({}, state, ...lists);
        }

        default:
            return state
    }
}
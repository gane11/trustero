import {baseUrl} from '../../config';

export const LOAD = 'LOAD';
export const load = (lists) => ({type: LOAD, lists});

export const getAllLists =() => async (dispatch) => {
    const res = await fetch(`${baseUrl}/lists`);

    if(res.ok) {
        const {lists} = await res.json();
        dispatch(load(lists))
    }
}
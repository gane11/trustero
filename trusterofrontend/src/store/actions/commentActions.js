import {baseUrl} from '../../config';

export const LOAD = 'LOAD';

export const load = (comment) => ({type: LOAD, comment});

export const getAllComments = () => async (dispatch) => {
    const res = await fetch(`${baseUrl}/comments`);

    if(res.ok) {
        const {comments} = await res.json();
        dispatch(load(comments));
    }
}
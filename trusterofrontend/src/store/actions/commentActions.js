import {baseUrl} from '../../config';

export const LOAD_COMMENTS = 'LOAD_COMMENTS';

export const load = (comments) => ({type: LOAD_COMMENTS, comments});

export const getAllComments = () => async (dispatch) => {
    const res = await fetch(`${baseUrl}/comments`);

    if(res.ok) {
        const {comments} = await res.json();
        dispatch(load(comments));
    }
}
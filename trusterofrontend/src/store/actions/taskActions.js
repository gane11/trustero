import {baseUrl} from '../../config';

export const LOAD = 'LOAD';
export const load = (task) => ({type: LOAD, task});

export const getAllTasks = () => async(dispatch) => {
    const res = await fetch(`${baseUrl}/tasks`);

    if(res.ok) {
        const {tasks} = await res.json();
        dispatch(load(tasks));
    }
};
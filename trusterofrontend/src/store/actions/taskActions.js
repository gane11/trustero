import {baseUrl} from '../../config';

export const LOAD_TASKS = 'LOAD_TASKS';
export const load = (tasks) => ({type: LOAD_TASKS, tasks});

export const getAllTasks = () => async(dispatch) => {
    const res = await fetch(`${baseUrl}/tasks`);

    console.log(res)
    if(res.ok) {
        const {tasks} = await res.json();
        dispatch(load(tasks));
    }
};
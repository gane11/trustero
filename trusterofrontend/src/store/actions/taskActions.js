import {baseUrl} from '../../config';

export const LOAD_TASKS = 'LOAD_TASKS';
export const CREATE_TASK = 'CREATE_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const CLEAR_TASKS = 'CLEAR_TASKS';
export const EDIT_TASK = 'EDIT_TASK';

export const clearAllTasks = () => ({
  type: CLEAR_TASKS,
});


export const load = (tasks) => ({type: LOAD_TASKS, tasks});

export const getAllTasks = () => async(dispatch) => {
    const res = await fetch(`${baseUrl}/tasks`);

    console.log(res)
    if(res.ok) {
        const {tasks} = await res.json();
        dispatch(load(tasks));
    }
};



export const deleteTask = (id) => {
  return async (dispatch) => {
    try {
      const res = await fetch(`${baseUrl}/tasks/${id}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        const data = await res.json();
        return dispatch({
          type: DELETE_TASK,
          id: data.id,
        });
      }
    } catch (e) {
      console.log(e);
    }
  };
};

export const createTask = (task) => async (dispatch) => {
  try {
    const res = await fetch(`${baseUrl}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(task),
    });

    if (res.ok) {
      const data = await res.json();
      dispatch({
        type: CREATE_TASK,
      });
    }
  } catch (error) {
    console.log(error);
  }
};




export const editTask = (task, id) => {
  return async (dispatch) => {
    try {
      const res = await fetch(`${baseUrl}/tasks/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(task),
      });
      if (res.ok) {
        const task = await res.json();
        dispatch({ type: EDIT_TASK, task});
      }
    } catch (error) {
      console.log(error);
    }
  };
};


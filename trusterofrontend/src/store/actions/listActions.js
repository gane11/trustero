import {baseUrl} from '../../config';

export const LOAD = 'LOAD';
export const DELETE_LIST = 'DELETE_LIST'
export const CREATE_LIST = 'CREATE_LIST'

export const load = (lists) => ({type: LOAD, lists});

export const getAllLists =() => async (dispatch) => {
    const res = await fetch(`${baseUrl}/lists`);

    if(res.ok) {
        const {lists} = await res.json();
        dispatch(load(lists))
    }
}


export const deleteList = (id) => {
  return async (dispatch) => {
    try {
      const res = await fetch(`${baseUrl}/lists/${id}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        const data = await res.json();
        return dispatch({
          type: DELETE_LIST,
          id: data.id,
        });
      }
    } catch (e) {
      console.log(e);
    }
  };
};

export const createList = (list) => async (dispatch) => {
  try {
    const res = await fetch(`${baseUrl}/lists`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(list),
    });

    if (res.ok) {
      const data = await res.json();
      dispatch({
        type: CREATE_LIST,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

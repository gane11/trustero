import {baseUrl} from '../../config';

export const LOAD_COMMENTS = 'LOAD_COMMENTS';
export const CREATE_COMMENT = 'CREATE_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const CLEAR_COMMENTS = 'CLEAR_COMMENTS';
export const EDIT_COMMENT = 'EDIT_COMMENT';

export const clearAllComments = () => (
    {
        type: CLEAR_COMMENTS
    }
)

export const load = (comments) => ({type: LOAD_COMMENTS, comments});

export const getAllComments = () => async (dispatch) => {
    const res = await fetch(`${baseUrl}/comments`);

    if(res.ok) {
        const {comments} = await res.json();
        dispatch(load(comments));
    }
}



export const deleteComment = (id) => {
  return async (dispatch) => {
    try {
      const res = await fetch(`${baseUrl}/comments/${id}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        const data = await res.json();
        return dispatch({
          type: DELETE_COMMENT,
          id: data.id,
        });
      }
    } catch (e) {
      console.log(e);
    }
  };
};

export const createComment = (comment) => async (dispatch) => {
  try {
    const res = await fetch(`${baseUrl}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(comment),
    });

    if (res.ok) {
      const data = await res.json();
      dispatch({
        type: CREATE_COMMENT,
      });
    }
  } catch (error) {
    console.log(error);
  }
};


export const editComment= (comment, id) => {
  return async (dispatch) => {
    try {
      const res = await fetch(`${baseUrl}/comments/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(comment),
      });
      if (res.ok) {
        const comment = await res.json();
        dispatch({ type: EDIT_COMMENT, comment});
      }
    } catch (error) {
      console.log(error);
    }
  };
};
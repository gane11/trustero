import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import "./CommentCard.css";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import {deleteComment, clearAllComments, getAllComments} from "../store/actions/commentActions"



const CommentCard = ({ handleSetComment,comment, getAllComments, comments }) => {
  const dispatch = useDispatch();

  const onDelete = async (id) => {
    await dispatch(deleteComment(id));
    dispatch(clearAllComments());
    getAllComments();
    handleSetComment(null)
  };

  return (
    <div className="comment-card">
      <h2>{comment.description}</h2>
      <div className="comment-buttons">
        <EditIcon color="primary" />
        <DeleteIcon color="primary" onClick={() => onDelete(comment.id)} />
      </div>
    </div>
  );
};


const CommentCardContainer = ({comment, handleSetComment}) => {
   const comments = useSelector((state) => Object.values(state.comments));

    const dispatch = useDispatch();
  return (
    <CommentCard
      comment={comment}
      comments={comments}
      getAllComments={() => dispatch(getAllComments())}
      handleSetComment={handleSetComment}
    />
  );
}

export default CommentCardContainer;

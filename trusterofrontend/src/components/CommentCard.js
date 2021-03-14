import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import "./CommentCard.css";
import DeleteIcon from "@material-ui/icons/Delete";
import {deleteComment, clearAllComments, getAllComments} from "../store/actions/commentActions"
import EditCommentModal from './EditCommentModal';


const CommentCard = ({ taskId,handleSetComment,comment, getAllComments, comments }) => {
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
        <EditCommentModal taskId={taskId} commentId={comment.id}/>
        <DeleteIcon color="primary" onClick={() => onDelete(comment.id)} />
      </div>
    </div>
  );
};


const CommentCardContainer = ({comment, handleSetComment, taskId}) => {
   const comments = useSelector((state) => Object.values(state.comments));

    const dispatch = useDispatch();
  return (
    <CommentCard
    taskId={taskId}
      comment={comment}
      comments={comments}
      getAllComments={() => dispatch(getAllComments())}
      handleSetComment={handleSetComment}
    />
  );
}

export default CommentCardContainer;

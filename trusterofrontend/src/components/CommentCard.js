import React from "react";
import "./CommentCard.css";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

const CommentCard = ({ comment}) => {
  return (
    <div className="comment-card">
      <h2>{comment.description}</h2>
      <div className="comment-buttons">
        <EditIcon color="primary" />
        <DeleteIcon color="primary" />
        
      </div>
    </div>
  );
};

export default CommentCard;

import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import CommentCard from './CommentCard';
import {getAllComments} from '../store/actions/commentActions';
import {getAllTasks} from '../store/actions/taskActions';
import './Comments.css';
import Button from "@material-ui/core/Button";
import CreateCommentModal from './CreateCommentModal';

const Comments = ({
  handleSetComment,
  commentsSection,
  getAllComments,
  comments,
  getAllTasks,
  tasks,
}) => {
  let selectedTask;

  tasks.map((task) => {
    if (task.id == commentsSection) {
      selectedTask = task;
    }
  });
  useEffect(() => {
    getAllTasks();
  }, []);

  useEffect(() => {
    getAllComments();
  }, []);

  console.log(comments)
  console.log(commentsSection)

  const handleClick = () => {};

  if (!commentsSection) {
    return null;
  }

  return (
    <div className="comments__container">
        <h1>Task Description</h1>
      <h2 className="task-description">{selectedTask.description}</h2>
      <h1>Comments</h1>
      {comments.map((comment) => {
        if (comment.taskId == commentsSection) {
          return (
            <>
              <CommentCard
                taskId={commentsSection}
                comment={comment}
                handleSetComment={handleSetComment}
              />
            </>
          );
        }
      })}
      <CreateCommentModal taskId={commentsSection} />
    </div>
  );
};


const CommentsContainer = ({ commentsSection, handleSetComment }) => {
  const tasks = useSelector((state) => Object.values(state.tasks));
  const comments = useSelector((state) => Object.values(state.comments));
  const dispatch = useDispatch();

  return (
    <Comments
      handleSetComment={handleSetComment}
      tasks={tasks}
      getAllTasks={() => dispatch(getAllTasks())}
      comments={comments}
      getAllComments={() => dispatch(getAllComments())}
      commentsSection={commentsSection}
    />
  );
};

export default CommentsContainer;
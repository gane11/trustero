import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import CommentCard from './CommentCard';
import {getAllComments} from '../store/actions/commentActions';
import {getAllTasks} from '../store/actions/taskActions';
import './Lists.css';
import Button from "@material-ui/core/Button";

const Comments = ({commentsSection, getAllComments, comments, getAllTasks, tasks}) => {

    useEffect(()=>{
        getAllTasks()
    }, [])

    useEffect(()=>{
        getAllComments()
    }, [])

    const handleClick = () => {};
    if(!commentsSection) {
        return null
    }
    return (
      <div className="comments__container">
          <h2>{tasks[commentsSection].description}</h2>
        {comments.map((comment) => {
          if (comment.taskId == commentsSection) {
            return (
              <>
                <CommentCard comment={comment} />
              </>
            );
          }
        })}
        <Button variant="contained" color="primary" onClick={handleClick}>
          ADD Comment
        </Button>
      </div>
    );
};


const CommentsContainer = ({commentsSection}) => {
    const tasks = useSelector((state) => Object.values(state.tasks));
    const comments = useSelector((state) => Object.values(state.comments));
    const dispatch = useDispatch();

    return (
        <Comments
            tasks={tasks}
            getAllTasks={() => dispatch(getAllTasks())}
            comments={comments}
            getAllComments={() =>dispatch(getAllComments())}
            commentsSection={commentsSection}
        />
    );
};

export default CommentsContainer;
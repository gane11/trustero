import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import CommentCard from './CommentCard';
import {getAllComments} from '../store/actions/commentActions';
import {getAllTasks} from '../store/actions/taskActions';
import './Lists.css';

const Comments = ({commentsSection, getAllComments, comments, getAllTasks, tasks}) => {

    useEffect(()=>{
        getAllTasks()
    }, [])

    useEffect(()=>{
        getAllComments()
    }, [])


    return (
      <div className="comments__container">
        {comments.map((comment) => {
          return (
            <>
              <CommentCard comment={comment} />
            </>
          );
        })}
      </div>
    );
};


const CommentsContainer = ({}) => {
    const tasks = useSelector((state) => Object.values(state.tasks));
    const comments = useSelector((state) => Object.values(state.comments));
    const dispatch = useDispatch();

    return (
        <Comments
            tasks={tasks}
            getAllTasks={() => dispatch(getAllTasks())}
            comments={comments}
            getAllComments={() =>dispatch(getAllComments())}
        />
    );
};

export default CommentsContainer;
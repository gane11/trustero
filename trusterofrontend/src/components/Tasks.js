import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import './Tasks.css';
import TaskCard from './TaskCard';
import {getAllTasks} from '../store/actions/taskActions';
import Button from "@material-ui/core/Button";

const Tasks = ({tasksSection, tasks, getAllTasks, handleSetComment }) => {

    useEffect(() => {
        getAllTasks();
    }, []);

      const handleClick = () => {};

    if(!tasksSection) {
        return(
            <>
            <h2 className="tasks">TASKS</h2>
            <div className="tasks__container">
                {tasks.map((task)=> {
                    return (
                        <TaskCard task={task} handleSetComment={handleSetComment}/>
                    )
                })}
            </div>
            </>
        );
    };

    return (
      <div className="tasks__container">
        TASKS
        <Button variant="contained" color="primary" onClick={handleClick}>
          ADD TASK
        </Button>
        {tasks.map((task) => {
          if (task.listId == tasksSection) {
            return <TaskCard task={task} handleSetComment={handleSetComment} />;
          }
        })}
      </div>
    );



};


const TaskContainer = ({handleSetComment, tasksSection}) => {
    const tasks = useSelector((state) => Object.values(state.tasks));
    const dispatch = useDispatch();

    return (
        <Tasks
            tasks={tasks}
            getAllTasks={() => dispatch(getAllTasks())}
            handleSetComment={handleSetComment}
            tasksSection={tasksSection}
        />
    );
};


export default TaskContainer;
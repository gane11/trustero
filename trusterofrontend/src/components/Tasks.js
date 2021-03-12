import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import './Lists.css';
import TaskCard from './TaskCard';
import {getAllTasks} from '../store/actions/taskActions';

const Tasks = ({tasksSection, tasks, getAllTasks, handleSetComment }) => {

    useEffect(() => {
        getAllTasks();
    }, []);
    return(
        <div className="tasks__container">
            TASKS
            {tasks.map((task)=> {
                return (
                    <TaskCard task={task} handleSetComment={handleSetComment}/>
                )
            })}
        </div>
    );
};


const TaskContainer = ({handleSetComment}) => {
    const tasks = useSelector((state) => Object.values(state.tasks));
    const dispatch = useDispatch();

    return (
        <Tasks
            tasks={tasks}
            getAllTasks={() => dispatch(getAllTasks())}
            handleSetComment={handleSetComment}
        />
    );
};


export default TaskContainer;
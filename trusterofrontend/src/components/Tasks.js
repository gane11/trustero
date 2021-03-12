import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import './Lists.css';
import TaskCard from './TaskCard';
import {getAllTasks} from '../store/actions/taskActions';

const Tasks = ({tasksSection,setCommentsSection, tasks, getAllTasks }) => {

    useEffect(() => {
        getAllTasks();
    }, []);

    return(
        <div>
            {tasks.map((task)=> {
                <TaskCard task={task}/>
            })}
        </div>
    );
};


const TaskContainer = ({setCommentsSection}) => {
    const tasks = useSelector((state) => Object.values(state.tasks));
    const dispatch = useDispatch();

    return (
        <Tasks
            tasks={tasks}
            getAllTasks={() => dispatch(getAllTasks())}
            setCommentsSection={setCommentsSection}
        />
    );
};


export default TaskContainer;
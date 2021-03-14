import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import './Tasks.css';
import TaskCard from './TaskCard';
import {getAllTasks} from '../store/actions/taskActions';
import Button from "@material-ui/core/Button";
import CreateTaskModal from './CreateTaskModal'

const Tasks = ({tasksSection, tasks, getAllTasks, handleSetComment }) => {

    useEffect(() => {
        getAllTasks();
    }, []);


    if(!tasksSection) {
        return (
          <>
            <div className="tasks__container">
              <h2 className="lists-header">TASKS</h2>
              {tasks.map((task) => {
                return (
                  <TaskCard task={task} handleSetComment={handleSetComment} taskId={tasksSection}/>
                );
              })}
            </div>
          </>
        );
    };

    return (
      <div className="tasks__container">
        <h2 className="lists-header">TASKS</h2>
        <div className="add-list__button">
            <CreateTaskModal listId={tasksSection} />
        </div>
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
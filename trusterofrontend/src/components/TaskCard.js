import React, {useState}from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './TaskCard.css';
import Checkbox from "@material-ui/core/Checkbox";
import {deleteTask, getAllTasks, clearAllTasks} from '../store/actions/taskActions'
import EditTaskModal from './EditTaskModal';


const TaskCard = ({listId,task, handleSetComment, getAllTasks, tasks}) => {
    const dispatch = useDispatch()
    const [checked, setChecked] = useState(false);
    const id = task.id

    const handleChange = async (id) => {
      await dispatch(deleteTask(id));
      handleSetComment(null);
      dispatch(clearAllTasks());
      getAllTasks();
    };



    return (
      <div className="task-card">
        <div className="task-buttons">
          <Checkbox
          color="primary"
            checked={checked}
            onChange={()=>handleChange(task.id)}
            inputProps={{ "aria-label": "primary checkbox" }}
          />
          <EditTaskModal handleSetComment={handleSetComment} taskId={id} listId={listId}/>
        </div>
        <div className="task-main" onClick={() => handleSetComment(task.id)}>
          <h2>{task.title}</h2>
        </div>
      </div>
    );
};

const TaskCardContainer = ({task, handleSetComment, listId}) => {
    const tasks = useSelector((state) => Object.values(state.tasks));
    const dispatch = useDispatch();
    return (
        <TaskCard
            listId={listId}
            tasks={tasks}
            getAllTasks={()=> dispatch(getAllTasks())}
            task={task}
            handleSetComment={handleSetComment}
        />
    )
}

export default TaskCardContainer;



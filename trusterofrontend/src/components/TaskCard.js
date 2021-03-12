import React, {useState}from 'react';
import './TaskCard.css';
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Checkbox from "@material-ui/core/Checkbox";


const TaskCard = ({task}) => {
    
    const [checked, setChecked] = useState(false);

    const handleChange = (event) => {
      setChecked(event.target.checked);
    };


    return(
        <div className="task-card">
            <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'primary checkbox' }}
            />
            <h2>{task.title}</h2>
        </div>
    )
};

export default TaskCard;
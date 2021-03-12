import React from 'react';
import './ListCard.css';
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

const ListCard = ({list, handleSetTask}) => {



    return (
      <div className="list-card" onClick={()=> handleSetTask(list.id)}>
        <h2>{list.title}</h2>
        <div className="list-buttons">
          <EditIcon color="primary" />
          <DeleteIcon color="primary" />
        </div>
      </div>
    );
};


export default ListCard;
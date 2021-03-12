import React from 'react';
import './ListCard.css';
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

const ListCard = ({list}) => {

    return(
        <div className="list-card">
            <h2>{list.title}</h2>
            <div className="list-buttons">
                <EditIcon/>
                <DeleteIcon/>
            </div>
        </div>
    );
};


export default ListCard;
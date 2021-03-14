import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import './ListCard.css';
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import {deleteList} from '../store/actions/listActions';
import Button from "@material-ui/core/Button";
import { getAllLists, clearAllLists } from "../store/actions/listActions";
import EditListModal from "./EditListModal";

const ListCard = ({list, handleSetTask, getAllLists}) => {
    const dispatch = useDispatch();

    
     const onDelete = async (id) => {
        await dispatch(deleteList(id));
        dispatch(clearAllLists());
        getAllLists();
        handleSetTask(null)
     };
  

    return (
      <div className="list-card">
        <div className="list-main" onClick={() => handleSetTask(list.id)}>
          <h2 className="list-title">{list.title}</h2>
        </div>
        <div className="list-buttons">
          <EditListModal listId={list.id}/>
          <DeleteIcon
            variant="contained"
            color="primary"
            className="delete-icon"
            onClick={() => onDelete(list.id)}
          ></DeleteIcon>
        </div>
      </div>
    );
};

const ListCardContainer = ({ list, handleSetTask }) => {
    const lists = useSelector((state) => Object.values(state.lists));
    const dispatch = useDispatch();
    return (
      <ListCard
        lists={lists}
        getAllLists={() => dispatch(getAllLists())}
        list={list}
        handleSetTask={handleSetTask}
      />
    );
};
export default ListCardContainer;
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import './ListCard.css';
import DeleteIcon from "@material-ui/icons/Delete";
import {deleteList} from '../store/actions/listActions';
import { getAllLists, clearAllLists } from "../store/actions/listActions";
import EditListModal from "./EditListModal";

const ListCard = ({list, handleSetTask, getAllLists}) => {
    const dispatch = useDispatch();
    // const [selected, setSelected] = useState(false)
    
    const handleClick = () => {
      handleSetTask(list.id);
      // setSelected(true)
    }
 
    
     const onDelete = async (id) => {
        await dispatch(deleteList(id));
        dispatch(clearAllLists());
        getAllLists();
        handleSetTask(null)
     };
  

    return (
      <div className="list-card">
        {/* {selected ? (
          <div className="list-main" onClick={handleClick}>
            <h2 className="list-title__selected">{list.title}</h2>
          </div>
        ) : (
          <div className="list-main" onClick={handleClick}>
            <h2 className="list-title">{list.title}</h2>
          </div>
        )} */}
        <div className="list-main" onClick={handleClick}>
          <h2 className="list-title">{list.title}</h2>
        </div>
        <div className="list-buttons">
          <EditListModal listId={list.id} />
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
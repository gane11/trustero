import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import './Lists.css';
import ListCard from './ListCard';
import {getAllLists} from '../store/actions/listActions';
import Button from "@material-ui/core/Button";
import CreateListModal from './CreateListModal';


const Lists = ({handleSetTask, getAllLists, lists}) => {

    useEffect(() => {
        getAllLists();
    }, []);
  
      return (
        <div className="lists__container">
          <h1 className="lists-header">LISTS</h1>
          <div className="add-list__button">
            <CreateListModal
                getAllLists={getAllLists}
            />
          </div>
          <div className="list-card">
            <h2 onClick={() => handleSetTask(null)} >All Tasks</h2>
          </div>
          {lists.map((list) => {
            console.log(list.title);
            return (
              <>
                <ListCard list={list} handleSetTask={handleSetTask} />
              </>
            );
          })}
        </div>
      );
    

    
};


const ListsContainer = ({handleSetTask}) => {
    const lists = useSelector((state) => Object.values(state.lists));
    const dispatch = useDispatch();

    return (
        <Lists
            lists={lists}
            getAllLists={() => dispatch(getAllLists())}
            handleSetTask={handleSetTask}
        />
    );
};


export default ListsContainer;
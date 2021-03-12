import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import './Lists.css';
import ListCard from './ListCard';
import {getAllLists} from '../store/actions/listActions';
import Button from "@material-ui/core/Button";

const Lists = ({handleSetTask, getAllLists, lists}) => {

    useEffect(() => {
        getAllLists();
    }, []);

    const handleClick =() => {

    }
    return (
      <div className="lists__container">
        <Button variant="contained" color="primary" onClick={handleClick}>
            ADD LIST
        </Button>
        {lists.map((list) => {
          return (
            <>
            
              <ListCard list={list} handleSetTask={handleSetTask}/>
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
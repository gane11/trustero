import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import './Lists.css';
import ListCard from './ListCard';
import {getAllLists} from '../store/actions/listActions';

const Lists = ({setTasksSection, getAllLists, lists}) => {

    useEffect(() => {
        getAllLists();
    }, []);


    return(
        <div className="lists__container">
            {lists.map((list) => {
                <ListCard list={list} />
            })}
        </div>
    );
};


const ListsContainer = ({setTasksSection}) => {
    const lists = useSelector((state) => Object.values(state.lists));
    const dispatch = useDispatch();

    return (
        <Lists
            lists={lists}
            getAllLists={() => dispatch(getAllLists())}
            setTasksSection={setTasksSection}
        />
    );
};


export default ListsContainer;
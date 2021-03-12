import React, {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import './Home.css';
import Lists from './Lists';
import Tasks from './Tasks';
import Comments from './Comments';

const Home = () => {

    const [tasksSection, setTasksSection] = useState(undefined);
    const [commentsSection, setCommentsSection] = useState(undefined);

    return (
        <>
            <Lists setTasksSection={setTasksSection}/>
            <Tasks tasksSection={tasksSection} setCommentsSection={setCommentsSection}/>
            <Comments commentsSection={commentsSection}/>
        </>
    )
};


export default Home;






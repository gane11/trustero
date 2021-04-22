import React, {useState} from 'react';
import './Home.css';
import Lists from './Lists';
import Tasks from './Tasks';
import Comments from './Comments';

const Home = () => {

    const [tasksSection, setTasksSection] = useState(null);
    const [commentsSection, setCommentsSection] = useState(null);

    const handleSetTask = (list) => {
        setCommentsSection(null)
        setTasksSection(list)
    }

    const handleSetComment = (task) => {
        setCommentsSection(task)
    }
    return (
      <>
        <div className="home__container">
          <Lists handleSetTask={(list) => handleSetTask(list)} />
          <Tasks
            tasksSection={tasksSection}
            handleSetComment={(task) => handleSetComment(task)}
            
          />
          <Comments
            handleSetComment={(task) => handleSetComment(task)}
            commentsSection={commentsSection}
          />
        </div>
      </>
    );
};


export default Home;





import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Info } from './Info';
import { TaskList } from './Task';

            //tasks.map(task => <Task key={ task._id } task={ task }/>) }

const App = () => {

    return (
      <div>
        <TaskList/>
      </div>
    );
};

export default App;

import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { TaskCollection } from '../api/tasks';

export const TaskList = () => {
  const tasks = useTracker(() => {
    return TaskCollection.find().fetch();
  });

  return (
    <div>
      <h2>My Tasks:</h2>
      <ul>{tasks.map(
        task => <li key={task._id}>{task.text}</li>
      )}</ul>
    </div>
  );
};

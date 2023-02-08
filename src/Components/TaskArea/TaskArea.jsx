import React from 'react';
import { useSelector } from 'react-redux';

import Task from '../Task/Task';
import css from './TaskArea.module.css';

const TaskArea = ({ userId}) => {

  const tasks = useSelector(state => state.tasks)
    .filter((task) => {
      return task.userId === userId;
    });

  return (
    <ol className={css.taskArea}>
      {tasks.map(({id, completed, title}) =>
        <Task 
          key={id}
          completed={completed}
          title={title}
        />
      )}
    </ol>
  );
}

// .filter(
//   task => task.title.includes(taskQuery)
// )

export default TaskArea;
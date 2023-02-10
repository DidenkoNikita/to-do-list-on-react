import React from 'react';
import { useSelector } from 'react-redux';

import Task from '../Task/Task';
import css from './TaskArea.module.css';

const TaskArea = ({id}) => {

  const tasks = useSelector(state => state.tasks)
    .filter((task) => {
      return task.id === id;
    });

  return (
    <ol className={css.taskArea}>
      {tasks.map(({idT, completed, titleT}) =>
        <Task 
          key={idT}
          completed={completed}
          title={titleT}
        />
      )}
    </ol>
  );
}

// .filter(
//   task => task.title.includes(taskQuery)
// )

export default TaskArea;
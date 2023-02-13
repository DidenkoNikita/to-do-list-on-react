import React from 'react';
// import { useSelector } from 'react-redux';

import Task from '../Task/Task';
import css from './TaskArea.module.css';

const TaskArea = ({id}) => {
console.log('TaskArea::', id);
  return (
    <ol className={css.taskArea}>
        <Task id={id} />
    </ol>
  );
}

export default TaskArea;
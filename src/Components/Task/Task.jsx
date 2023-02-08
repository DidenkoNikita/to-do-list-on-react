import React from 'react';

import css from './Task.module.css'


const Task = ({completed, title}) => {

  return (
    <li className={css.task}>
      <span className={completed === false ? css.notCompleted : css.done}>
        <input
          type='checkbox' 
          className={css.checkBox}  
        />
        {/* <strong className={css.sequenceNumber}>
          {counter}
        </strong> */}
        {title}
      </span>
      <button className={css.delete}>
        &times;
      </button>
    </li>
  );
}

export default Task;
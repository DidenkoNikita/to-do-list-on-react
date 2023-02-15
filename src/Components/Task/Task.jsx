import React from 'react';
import { useSelector } from 'react-redux';

import css from './Task.module.css'

const Task = ({id}) => {
  const tasks = useSelector(state => state.tasks)
  .filter((task) => {
      return id === task.id;
      })
      return (
        <ol className={css.taskArea}>
          {tasks.map(({idT, completed, titleT}) => {
            return (
              <li className={css.task} key={idT} >
                <span className={completed === false ? css.notCompleted : css.done}>
                  <input
                    type='checkbox' 
                    className={css.checkBox}  
                    />
                    {titleT}
                </span>
                <button className={css.delete}>
                  &times;
                </button>
              </li>
            );
          })}
        </ol>
      )

}

export default Task;
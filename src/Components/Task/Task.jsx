import React from 'react';
import { useSelector } from 'react-redux';
import { completedTask, removeTask } from '../../store/store';

import css from './Task.module.css'

const Task = ({id}) => {
  // useEffect
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
                    onClick={() => completedTask(idT, completed, titleT, id)}
                    />
                    {titleT}
                </span>
                <button 
                  className={css.delete}
                  onClick={() => removeTask(idT)}
                  >
                  &times;
                </button>
              </li>
            );
          })}
        </ol>
      )

}

export default Task;
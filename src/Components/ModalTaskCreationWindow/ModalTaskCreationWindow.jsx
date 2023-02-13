import React from 'react';

import Button from '../Button/Button';
import css from './ModalTaskCreationWindow.module.css'

const ModalTaskCreationWindow =(props, onCreate) => {

const {state} = props
 
  return (
    <dialog
      className={css.taskCreationWindow}
      open={state}
    >
        <div className={css.taskShape} >
            <input 
              type="text" 
              className={css.taskName} 
              placeholder="Введите название задачи" 
              autoComplete="off" 
              autoFocus 
              required 
              />
            <textarea className={css.descriptionTask} cols="20" rows="5" placeholder="Введите описание задачи"></textarea>
            <div className={css.containerForButtons}>
                <Button text='Добавить задачу' />
                <Button text='Отмена' />
            </div>
        </div>
    </dialog>
  );
}

export default ModalTaskCreationWindow;
import React from 'react';

import Button from '../Button/Button';
import ModalTaskCreationWindow from '../ModalTaskCreationWindow/ModalTaskCreationWindow';

import css from './Board.module.css';
import { addTask } from '../../store/store';
import Task from '../Task/Task';

const BoardsArea = ({  filter }) => {
    let key = 1;
    if(!filter) return null
    return (
        <div className={css.area}>
            {filter.map(({id, title}) => { 
                return (
                    <div className={css.board} key={key++}>
                        <div className={css.headerArea}>
                            <span className={css.boardName}>
                                {title}
                            </span>
                            <img
                                src='https://cdn-icons-png.flaticon.com/512/8345/8345018.png' 
                                className={css.deleted}
                                alt='-'
                                />
                        </div>
                        <Task id={id}/>
                        <Button 
                            text='Добавить задачу' 
                            onClick={() => {addTask(id)}}
                        />
                        <ModalTaskCreationWindow />
                    </div>
                )
            })}
        </div>
    );
}

export default BoardsArea;
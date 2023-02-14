import React from 'react';

import Button from '../Button/Button';
import ModalTaskCreationWindow from '../ModalTaskCreationWindow/ModalTaskCreationWindow';

import css from './Board.module.css';
import { addTask, removeBoard } from '../../store/store';
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
                            <button 
                                className={css.deletedButton}
                                onClick={() => {removeBoard(id)}}
                                >
                                <img
                                    src='https://cdn-icons-png.flaticon.com/512/8345/8345018.png' 
                                    className={css.deleted}
                                    alt='-'
                                    // onClick={console.log('click')}
                                    />
                            </button>
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
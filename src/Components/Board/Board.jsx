import React from 'react';
import { useSelector } from 'react-redux';

import Button from '../Button/Button';
import TaskArea from '../TaskArea/TaskArea';
import ModalTaskCreationWindow from '../ModalTaskCreationWindow/ModalTaskCreationWindow';

import css from './Board.module.css';
import { addTask } from '../../store/store';

const BoardsArea = ({  filter }) => {
    let key = 1;
    // const boards = useSelector(state => state.boards);
if(!filter) return null
    return (
        <div className={css.area}>
            {filter.map(({id, title}) => { 
                    return (
                        <div className={css.board} key={key++}>
                            <span className={css.boardName}>
                                {title}
                            </span>
                            <TaskArea userId={id} />
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

// .filter(
//     board => board.title === search
// )

export default BoardsArea;
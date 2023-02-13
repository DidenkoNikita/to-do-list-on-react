import React from 'react';
import BoardsArea from '../Board/Board';

import css from './BoardAddArea.module.css';

const BoardAddArea = ({ filter }) => {
    return (
        <div className={css.area}>
            <BoardsArea  filter={filter} />
        </div>
    );
}

export default BoardAddArea;
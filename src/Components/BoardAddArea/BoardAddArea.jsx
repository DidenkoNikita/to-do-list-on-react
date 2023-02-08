import React from 'react';
import BoardsArea from '../Board/Board';

import css from './BoardAddArea.module.css';

const BoardAddArea = ({ boards, filter, query }) => {

    return (
        <div className={css.area}>
            <BoardsArea  filter={filter} />
        </div>
    );
}

export default BoardAddArea;
import Board from '../Board/Board';
import css from './BoardAddArea.module.css';

const BoardAddArea = () => {
    return (
        <div className={css.area}>
            <Board />
        </div>
    );
}

export default BoardAddArea;
import Button from '../Button/Button';
import css from './Board.module.css';

const Board = (props) => {
    const {text = '', onClick = () => {console.log('click')}, className = ''} = props;
    return (
        <div className={css.board}>
            <span className={css.boardName}>Название доски</span>
            <ol></ol>
            <Button text='Добавить задачу'/>
        </div>
    );
}

export default Board;
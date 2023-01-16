import css from './Button.module.css'
const Button = (props) => {

    const {text = 'Добавить доску', onClick = () => {console.log('click')}, className = ''} = props;

    return (
            <button className={css.button} onClick={onClick}>
                {text}
            </button>
    );
}

export default Button;
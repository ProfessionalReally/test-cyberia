import classes from './Button.module.css'

function Button(props) {
    return (
        <button className={classes.button}>
            <span className={classes.button_text}>{props.name}</span>
        </button>
    );
}

export default Button;

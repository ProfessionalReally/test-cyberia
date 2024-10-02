import classes from './Checkbox.module.css';

function Checkbox(props) {
    return (
        <div>
            <input className={classes.checkbox} type='checkbox' id={props.name} name={props.name} value="true"/>
            <label htmlFor={props.name}>{props.label}</label>
        </div>
    );
}

export default Checkbox;

import classes from './TextInput.module.css';
import '../FormField/FormField.css';

function TextInput(props) {
    return (
        <input className={'text_field' + ' ' + classes.text_field_input} type={props.type}
               placeholder={props.placeholder} required/>
    );
}

export default TextInput;

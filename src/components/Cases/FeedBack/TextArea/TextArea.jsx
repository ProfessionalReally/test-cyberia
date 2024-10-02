import classes from './TextArea.module.css';
import '../FormField/FormField.css';

function TextArea(props) {
    return (
        <textarea className={'text_field' + ' ' + classes.text_field_textarea}
                  placeholder={props.placeholder}/>
    );
}

export default TextArea;

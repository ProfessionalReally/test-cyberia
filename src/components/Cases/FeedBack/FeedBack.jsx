import classes from './FeedBack.module.css';
import TextInput from "./TextInput/TextInput";
import TextArea from "./TextArea/TextArea";
import Checkbox from "./Checkbox/Checkbox";

function FeedBack() {
    return (
        <div>
            <div className={classes.container_feedback_title}>
                 <span className={classes.title_text}>
                    Расскажите <br/>о вашем проекте:
                 </span>
            </div>
            <form className={classes.form_feedback}>
                <TextInput type="text" placeholder="Ваше имя*"/>
                <TextInput type="email" placeholder="Email*"/>
                <TextInput type="tel" placeholder="Телефон*"/>
                <div className={classes.textarea}>
                    <TextArea placeholder="Сообщение*"/>
                </div>
                <div className={classes.checkbox_block}>
                    <Checkbox name="accept" label="Согласие на обработку персональных данных"/>
                </div>
            </form>
            {/*TODO: -убрать дублирование кода(использовать компонент Button)*/}
            <div className={classes.button_block}>
                <button className={classes.button}>
                    <span className={classes.button_text}>Обсудить проект</span>
                </button>
            </div>
        </div>
    );
}

export default FeedBack;

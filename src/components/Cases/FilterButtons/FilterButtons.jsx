import classes from './FilterButtons.module.css'
import Button from "../../ui/Button/Button";

function FilterButtons() {
    return (
        <div className={classes.filter_buttons}>
            <Button text='Продвижение'/>
            <Button text='Разработка'/>
            <Button text='Мобильные приложения'/>
            <Button text='Юзабилити - аудит'/>
        </div>
    );
}

export default FilterButtons;

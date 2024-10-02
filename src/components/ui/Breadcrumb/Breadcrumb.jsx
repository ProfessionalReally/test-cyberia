import classes from './Breadcrumb.module.css'

function Breadcrumb() {

    return (
        <ul className={classes.breadcrumb}>
            <li>
                <a href="#">Главная</a>
            </li>
            <li>
                Кейсы
            </li>
        </ul>
    );
}

export default Breadcrumb;

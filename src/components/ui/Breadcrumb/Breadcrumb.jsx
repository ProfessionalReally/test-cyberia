import classes from './Breadcrumb.module.css'

function Breadcrumb() {

    return (
        <div className={classes.container_breadcrumb}>
            <ul className={classes.breadcrumb}>
                <li>
                    <a href="#">Главная</a>
                </li>
                <li>
                    Кейсы
                </li>
            </ul>
        </div>
    );
}

export default Breadcrumb;

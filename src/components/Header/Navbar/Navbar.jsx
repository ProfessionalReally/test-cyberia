import classes from './Navbar.module.css'

function Navbar() {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <span>Агентство</span>
            </div>
            <div className={classes.item}>
                <span>Услуги</span>
            </div>
            <div className={classes.item}>
                <span>Кейсы</span>
            </div>
            <div className={classes.item}>
                <span>Блог</span>
            </div>
            <div className={classes.item}>
                <span>Контакты</span>
            </div>
        </nav>
    );
}

export default Navbar;

import classes from './Navbar.module.css'

function Navbar() {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <a href='#'>Агентство</a>
            </div>
            <div className={classes.item}>
                <a href='#'>Услуги</a>
            </div>
            <div className={classes.item}>
                <a href='#'>Кейсы</a>
            </div>
            <div className={classes.item}>
                <a href='#'>Блог</a>
            </div>
            <div className={classes.item}>
                <a href='#'>Контакты</a>
            </div>
        </nav>
    );
}

export default Navbar;

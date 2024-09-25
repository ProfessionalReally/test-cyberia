import classes from './Navbar.module.css'

function Navbar() {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>Агентство</div>
            <div className={classes.item}>Услуги</div>
            <div className={classes.item}>Кейсы</div>
            <div className={classes.item}>Блог</div>
            <div className={classes.item}>Контакты</div>
        </nav>
    );
}

export default Navbar;

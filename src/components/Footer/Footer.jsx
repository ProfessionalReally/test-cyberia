import classes from './Footer.module.css'
import {LogoCompany} from "../LogoCompany/LogoCompany";

function Footer() {
    return (
        <footer className={classes.footer}>
            <div className={classes.title_footer}>
                <LogoCompany className={classes.logo_company}/>
                <div>
                    <span className={classes.text_footer}>
                        Веб-разработка и <br/> усиление IT-команд
                    </span>
                </div>
            </div>
            <div className={classes.grid_footer}>
                <div className={classes.grid_item}>
                    <a className={classes.text_footer} href='#'>+7 999 123 45 67</a>
                    <a className={classes.text_footer} href='#'>hello@cyberia.studio</a>
                    <span className={classes.text_footer}>
                        ул.Ярных, д.35, оф.10
                    </span>
                </div>
                <div className={classes.grid_item}>
                    <a className={classes.text_footer} href='#'>Агентство</a>
                    <a className={classes.text_footer} href='#'>Услуги</a>
                    <a className={classes.text_footer} href='#'>Кейсы</a>
                </div>
                <div className={classes.grid_item}>
                    <a className={classes.text_footer} href='#'>Блог</a>
                    <a className={classes.text_footer} href='#'>Контакты</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

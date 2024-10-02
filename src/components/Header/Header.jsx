import classes from './Header.module.css'
import {LogoCompany} from "../ui/LogoCompany/LogoCompany";
import Navbar from "./Navbar/Navbar";

function Header() {
    return (
        <header className={classes.container_header}>
            <div className={classes.header}>
                <LogoCompany className={classes.logo_company}/>
                <div className={classes.container_navbar}>
                    <Navbar/>
                </div>
            </div>
        </header>
    );
}

export default Header;

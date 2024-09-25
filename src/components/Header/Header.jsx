import classes from './Header.module.css'
import {LogoCompany} from "../LogoCompany/LogoCompany";
import Navbar from "./Navbar/Navbar";

function Header() {
    return (
        <header className={classes.container_header}>
            <div className={classes.header}>
                <LogoCompany/>
                <Navbar/>
            </div>
        </header>
    );
}

export default Header;

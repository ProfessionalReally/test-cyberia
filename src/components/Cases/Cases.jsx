import classes from './Cases.module.css'
import FilterButtons from "./FilterButtons/FilterButtons";

function Cases() {
    return (
        <main>
            <div className={classes.container_title}>
                <span className={classes.title_main}>
                    Кейсы
                </span>
            </div>
            <FilterButtons/>
        </main>
    );
}

export default Cases;

import classes from './Cases.module.css'
import FilterButtons from "./FilterButtons/FilterButtons";
import GalleryProject from "./GalleryProject/GalleryProject";

function Cases() {
    return (
        <main>
            <div className={classes.container_title}>
                <span className={classes.title_main}>
                    Кейсы
                </span>
            </div>
            <FilterButtons/>
            <GalleryProject/>
        </main>
    );
}

export default Cases;

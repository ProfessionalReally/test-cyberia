import classes from './Cases.module.css'
import FilterButtons from "./FilterButtons/FilterButtons";
import GalleryProject from "./GalleryProject/GalleryProject";
import FeedBack from "./FeedBack/FeedBack";

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
            <div className={classes.container_feedback}>
                <FeedBack/>
            </div>
        </main>
    );
}

export default Cases;

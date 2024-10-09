import classes from './Project.module.css'
import {CornerIcon} from "../../../ui/CornerIcon/CornerIcon";

function Project(props) {
    return (
        <div className={classes.project}>
            <img src={props.imageLink} alt={props.title}/>
            <div className={classes.block_project_info}>
                <CornerIcon className={classes.corner_icon}/>
                <div className={classes.block_project_title}>
                    <span className={classes.project_text}>
                        {props.title}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Project;

import React, {Component} from 'react'
import classes from './GalleryProject.module.css'
import Project from "./Project/Project";
import {getProjects} from "../../../redux/actions/projects";
import {connect} from "react-redux";

class GalleryProject extends Component {

    componentDidMount() {
        this.props.getProjects();
    }

    render() {

        const {projects} = this.props.projects

        return (
            <div className={classes.gallery_project}>
                {
                    projects && projects.items?.map(project =>
                        <Project key={project.id} title={project.title} imageLink={project.image}/>
                    )
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    projects: state.projects
})

export default connect(mapStateToProps, {getProjects})(GalleryProject)

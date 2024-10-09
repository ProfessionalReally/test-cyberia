import React, {Component} from 'react'
import classes from './FilterButtons.module.css'
import Button from "../../ui/Button/Button";
import {getProjectCategories} from "../../../redux/actions/projectCategories";
import {connect} from "react-redux";

class FilterButtons extends Component {

    componentDidMount() {
        this.props.getProjectCategories();
    }

    render() {
        const {items} = this.props.projectCategories.items

        return (
            <div className={classes.filter_buttons}>
                {
                    items && items.map(category =>
                        <Button key={category.id} name={category.name}/>
                    )
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    projectCategories: state.projectCategories
})

export default connect(mapStateToProps, {getProjectCategories})(FilterButtons)

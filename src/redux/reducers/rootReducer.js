import {combineReducers} from "redux";
import projectReducer from './projectReducer';
import projectCategoriesReducer from "./projectCategoriesReducer";

export default combineReducers({
    projects: projectReducer,
    projectCategories: projectCategoriesReducer
})
import {GET_PROJECTS} from "../types";
import API from '../../api/api';
import {PROJECTS_ENDPOINT} from "../../api/api";

export const getProjects = () => async dispatch => {
    try {
        const res = await API.get(`${PROJECTS_ENDPOINT}`)
        dispatch({
            type: GET_PROJECTS,
            payload: res.data,
            loading: true
        })
    } catch (e) {
        console.error("Ошибка при получении проектов:", e);
    }
}
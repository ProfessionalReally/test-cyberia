import {GET_PROJECT_CATEGORIES} from "../types";
import API from '../../api/api';
import {PROJECT_CATEGORIES_ENDPOINT} from "../../api/api";

export const getProjectCategories = () => async dispatch => {
    try {
        const res = await API.get(`${PROJECT_CATEGORIES_ENDPOINT}`)
        dispatch({
            type: GET_PROJECT_CATEGORIES,
            payload: res.data,
            loading: true
        })
    } catch (e) {
        console.error("Ошибка при получении категорий проектов:", e);
    }
}
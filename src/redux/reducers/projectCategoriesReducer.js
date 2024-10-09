import {GET_PROJECT_CATEGORIES} from "../types";

const initialState = {
    items: [],
    loading: false
}
export default function (state = initialState, action) {
    switch (action.type) {
        case GET_PROJECT_CATEGORIES:
            return {
                ...state,
                items: action.payload,
                loading: false
            }
        default:
            return state;
    }
}
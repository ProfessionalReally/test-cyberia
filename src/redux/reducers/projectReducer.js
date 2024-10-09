import {GET_PROJECTS} from "../types";

const initialState = {
    projects: [],
    loading: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_PROJECTS:
            return {
                ...state,
                projects: action.payload,
                loading: false
            }
        default:
            return state;
    }
}
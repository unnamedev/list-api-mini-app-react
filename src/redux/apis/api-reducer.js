import {SET_CATEGORIES, SET_ERROR, SET_LOADING, SET_TAGS} from "./api-actions"

/** ✨ Initial State */
const initialState = {
    categories: [],
    tags: [],
    loading: false,
    error: null
}

/** ✨ Reducer */
export const apiReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case SET_CATEGORIES:
            return {
                ...state,
                categories: payload,
            }
        case SET_TAGS:
            return {
                ...state,
                tags: payload,
            }
        case SET_LOADING:
            return {
                ...state,
                loading: payload
            }
        case SET_ERROR:
            return {
                ...state,
                error: payload
            }
        default:
            return state
    }
}
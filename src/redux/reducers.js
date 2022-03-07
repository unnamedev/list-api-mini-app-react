import {combineReducers} from "redux"
import {apiReducer} from "./apis/api-reducer"

/** ✨Root Reducer */
export const rootReducer = combineReducers({
    apiLists: apiReducer
})
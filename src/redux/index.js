import {rootReducer} from "./reducers"
import {applyMiddleware, createStore} from "redux"
import thunk from "redux-thunk";
import {composeWithDevTools} from "@redux-devtools/extension"

/** ✨Store */
export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)
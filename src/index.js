import React from "react"
import {render} from "react-dom"
import Root from "./Root"
import {Provider} from "react-redux"
import {store} from "./redux"
/** ✨ Styles */
import "./index.scss"

/** ✨ Render */
render(
    <Provider store={store}>
        <Root/>
    </Provider>,
    document.getElementById("root")
)

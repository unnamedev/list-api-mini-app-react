import axios from "axios"

/** ✨ Constants */
export const SET_CATEGORIES = "SET_CATEGORIES"
export const SET_TAGS = "SET_TAGS"
export const SET_LOADING = "SET_LOADING"
export const SET_ERROR = "SET_ERROR"

/** ✨ Actions */
export const apisActions = {
    setCategories: (payload) => ({type: SET_CATEGORIES, payload}),
    setTags: (payload) => ({type: SET_TAGS, payload}),
    setLoading: (payload) => ({type: SET_LOADING, payload}),
    setError: (payload) => ({type: SET_ERROR, payload})
}

export const fetchData = (name, params, type) => async (dispatch) => {
    try {
        dispatch(apisActions.setLoading(true))
        const {data} = await axios.get(`https://api.publicapis.org/${name}`, params)
        if (type === "entries") dispatch(apisActions.setCategories(data.entries))
        if (type === "categories") dispatch(apisActions.setTags(data.categories))
        dispatch(apisActions.setLoading(false))
    } catch (e) {
        apisActions.setError(e.message)
    } finally {
        apisActions.setLoading(false)
    }
}
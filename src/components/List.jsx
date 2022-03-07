import {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {fetchData} from "../redux/apis/api-actions"
import {Card} from "./index"

/**
 * 👋🏻 List Component
 * @returns {JSX.Element}
 * @constructor
 */
const List = () => {
    /** ✨ Hooks */
    const dispatch = useDispatch()
    const {categories, loading} = useSelector(({apiLists}) => apiLists)

    useEffect(() => {
        dispatch(fetchData("entries", {params: {category: "Animals"}}, "entries"))
    }, [])

    /** ✨ Render */
    if (loading) {
        return <div className="mt-2 grid md:grid-cols-3 gap-4 animate-pulse">
            {[...Array(6).keys()].map(n => (
                <div key={n} className="h-28 w-full bg-gray-300 gap-2 rounded-sm"/>
            ))}
        </div>
    }

    /** ✨ Render */
    if (!categories) {
        return <p className="text-xl text-center text-slate-600">Something wrong 😔</p>
    }

    /** ✨ Render */
    return <div className="mb-10">
        <h3 className="font-semibold text-xl text-slate-600 mb-3">List API {categories.length !== 0 ? `(${categories.length})` : ""}</h3>
        <ul className="grid gap-4 md:grid-cols-3">
            {categories && categories.map((o, i) => <Card key={i} {...o}/>)}
        </ul>
    </div>
}

/**
 * 👋🏻 Default props
 */
List.defaultProps = {
    entries: [{}],
    loading: false
}

export default List

import {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux";
import {fetchData} from "../redux/apis/api-actions";

/**
 * 👋🏻 Tags Component
 * @returns {JSX.Element}
 * @constructor
 */
const Tags = () => {
    /** ✨ Hooks */
    const dispatch = useDispatch()
    const {tags, loading} = useSelector(({apiLists}) => apiLists)

    useEffect(() => {
        dispatch(fetchData("categories", "", "categories"))
    }, [])

    /** ✨ Functions */
    const onClickTag = (category) => dispatch(fetchData("entries", {params: {category}}, "entries"))

    /** ✨ Render */
    if (loading) {
        return <div className="animate-pulse my-5 inline-block text-center">
            {[...Array(35).keys()].map(n => (
                <div key={n} className="h-7 w-20 bg-gray-300 m-1 rounded-sm inline-block"/>
            ))}
        </div>
    }

    /** ✨ Render */
    return <div className="flex flex-wrap justify-center gap-2 py-5">
        {tags && tags.map(tag =>
            <button
                key={tag}
                className="bg-[#111827] text-white p-2 rounded-sm hover:bg-[#313e5b]"
                onClick={() => onClickTag(tag)}
            >
                {tag}
            </button>
        )}
    </div>
}

export default Tags

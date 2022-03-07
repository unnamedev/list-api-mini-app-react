import useAxios from "../hooks/useAxios"
import {useEffect} from "react"
import PropTypes from "prop-types";

/**
 * 👋🏻 Tags Component
 * @returns {JSX.Element}
 * @constructor
 */
const Tags = ({fetchData: fetchTag}) => {
    /** ✨ Hooks */
    const {fetchData, response: {categories}, loading} = useAxios("categories")

    useEffect(() => {
        fetchData()
    }, [])

    /** ✨ Functions */
    const onClickTag = (category) => fetchTag({params: {category}})

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
        {categories && categories.map(tag =>
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

/**
 * 👋🏻 Check props
 */
Tags.propTypes = {
    fetchTag: PropTypes.func
}

export default Tags

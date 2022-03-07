import {HiOutlineSearch} from "react-icons/hi"
import {useState} from "react"
import PropTypes from "prop-types"

/**
 * Jumbotron Component
 * @returns {JSX.Element}
 * @constructor
 */
const Panel = ({fetchData}) => {
    /** ✨ Hooks */
    const [value, setValue] = useState("")

    /** ✨ Functions */
    const handleSubmit = (e) => {
        e.preventDefault()
        if (value.length === 0) return
        fetchData({params: {title: value}})
        setValue("")
    }

    /** ✨ Render */
    return <div className="py-20 px-2" style={{backgroundColor: "#111827"}}>
        <h3 className="text-2xl text-center text-white font-semibold uppercase mb-4">Search APIs</h3>
        <form
            className="flex flex-col gap-2 mx-auto max-w-md md:flex-row md:gap-0"
            onSubmit={handleSubmit}
        >
            <input
                type="text"
                className="px-2 py-2 rounded-md focus:outline-none md:rounded-r-none md:w-8/12"
                placeholder="Enter API name"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button
                className="inline-flex justify-center items-center gap-1 w-full px-2 py-2 bg-gray-700 hover:bg-gray-500 hover:transition-all text-white rounded-md md:rounded-l-none md:w-4/12">
                <HiOutlineSearch size={20} color="#fff"/>
                Search
            </button>
        </form>
    </div>
}

/**
 * 👋🏻 Check props
 */
Panel.propTypes = {
    fetchData: PropTypes.func
}

export default Panel

import {Card} from "./index"
import PropTypes from "prop-types"

/**
 * 👋🏻 List Component
 * @param entries
 * @param loading
 * @returns {JSX.Element}
 * @constructor
 */
const List = ({response: {entries}, loading}) => {
    /** ✨ Render */
    if (loading) {
        return <div className="mt-2 grid md:grid-cols-3 gap-4 animate-pulse">
            {[...Array(6).keys()].map(n => (
                <div key={n} className="h-28 w-full bg-gray-300 gap-2 rounded-sm"/>
            ))}
        </div>
    }

    /** ✨ Render */
    if (!entries) {
        return <p className="text-xl text-center text-slate-600">Something wrong 😔</p>
    }

    /** ✨ Render */
    return <div className="mb-10">
        <h3 className="font-semibold text-xl text-slate-600 mb-3">List API</h3>
        <ul className="grid gap-4 md:grid-cols-3">
            {entries && entries.map((o, i) => <Card key={i} {...o}/>)}
        </ul>
    </div>
}

/**
 * 👋🏻 Check props
 */
List.propTypes = {
    entries: PropTypes.arrayOf(PropTypes.object),
    loading: PropTypes.bool.isRequired
}

/**
 * 👋🏻 Default props
 */
List.defaultProps = {
    entries: [{}],
    loading: false
}

export default List

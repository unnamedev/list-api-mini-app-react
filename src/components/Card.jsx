import PropTypes from "prop-types"

/**
 * 👋🏻 Card Component
 * @param API
 * @param Auth
 * @param Link
 * @param Category
 * @param Cors
 * @param Description
 * @param HTTPS
 * @returns {JSX.Element}
 * @constructor
 */
const Card = ({API, Auth, Link, Category, Cors, Description, HTTPS}) => {
    /** ✨ Functions */
    const renderData = (title, value) => <p><span className="font-semibold">{title}</span>: {value || "-"}</p>

    /** ✨ Render */
    return <li>
        <a href={Link} target="_blank"
           className="block p-4 border-2 border-grey-400 text-gray-600 rounded-md bg-gray-100 hover:bg-gray-200 hover:transition-all h-full"
           title={API}
        >
            {renderData("Title", API)}
            {renderData("Description", Description)}
            {renderData("Category", Category)}
            {renderData("Auth", Auth)}
            {renderData("Cors", Cors)}
            {renderData("HTTPS", HTTPS ? "yes" : "no")}
        </a>
    </li>
}

/**
 * 👋🏻 Check props
 */
Card.propTypes = {
    API: PropTypes.string,
    Auth: PropTypes.string,
    Link: PropTypes.string,
    Category: PropTypes.string,
    Cors: PropTypes.string,
    Description: PropTypes.string,
    HTTPS: PropTypes.bool
}

export default Card

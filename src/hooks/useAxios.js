import React, {useState} from "react"
import axios from "axios";
import PropTypes from "prop-types"

/**
 * 👋🏻 useAxios - Custom Hook
 * @param term
 * @returns {{fetchData: (function(*): Promise<void>), response: {}, loading: boolean, error: unknown}}
 */
const useAxios = (term) => {
    const [response, setResponse] = useState({})
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const fetchData = async (params) => {
        try {
            setLoading(true)
            const {data} = await axios.get(`https://api.publicapis.org/${term}`, params)
            setResponse(data)
        } catch (e) {
            setError(e.message)
        } finally {
            setLoading(false)
        }
    }

    return {
        fetchData: (params) => fetchData(params),
        response,
        loading,
        error
    }
}

/**
 * 👋🏻 Check props
 */
useAxios.propTypes = {
    term: PropTypes.string.isRequired
}

/**
 * 👋🏻 Default props
 */
useAxios.defaultProps = {
    term: ""
}

export default useAxios

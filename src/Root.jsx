import {Tags, List, Panel} from "./components"
import useAxios from "./hooks/useAxios"
import {useEffect} from "react"

/**
 * 👋🏻 Root Component
 * @returns {JSX.Element}
 * @constructor
 */
const Root = () => {
    /** ✨ Hooks */
    const {fetchData, response, loading} = useAxios("entries")

    useEffect(() => {
        fetchData({params: {category: "Animals"}})
    }, [])

    return <>
        <Panel fetchData={fetchData}/>
        <div className="container mx-auto max-w-4xl px-2">
            <Tags fetchData={fetchData}/>
            <List response={response} loading={loading}/>
        </div>
    </>
}


export default Root

import {Tags, List, Panel} from "./components"

/**
 * 👋🏻 Root Component
 * @returns {JSX.Element}
 * @constructor
 */
const Root = () =>
    <>
        <Panel/>
        <div className="container mx-auto max-w-4xl px-2">
            <Tags/>
            <List/>
        </div>
    </>


export default Root

import AddUpdateBlog from "./addupdateblog"
import BlogList from "./list"
import SearchBar from "./searchbar"
import { useState } from "react"

const BlogIndex = () => {

    const [formShow, setFormShow] = useState(false);
    const handleFormClose = () => setFormShow(false);
    const handleFormShow = () => setFormShow(true);



    return (

        <>

            <SearchBar handleFormShow={handleFormShow} />
            <div className="table-container">
                <BlogList />
            </div>
            <AddUpdateBlog formShow={formShow} handleFormClose={handleFormClose} />
        </>
    )


}

export default BlogIndex
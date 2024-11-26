import { Routes, Route } from "react-router-dom"
import AdminLayout from "../layout/layout"
import "../style.css"
import BlogIndex from "../page/blog"

const AdminRoutes = () => {

    return (

        <>
            <Routes>
                <Route path="/admin" element={<AdminLayout />}>
                    <Route path="blogs" element={<BlogIndex />} />

                </Route>

            </Routes>


        </>
    )

}

export default AdminRoutes
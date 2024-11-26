import { Outlet } from "react-router-dom"
import Navbar from "./navbar"
import SideBar from "./sidebar"

const AdminLayout = () => {

    return (

        <>

            {/* <Navbar/>
            <main>
                <Outlet/>
            </main> */}

            <div className="admin-layout d-flex flex-column">
                <Navbar />
                <div className="d-flex flex-grow-1">
                    <SideBar/>
                    <div className="admin-content flex-grow-1 p-3">
                        <Outlet />
                    </div>
                </div>
            </div>

        </>
    )

}


export default AdminLayout
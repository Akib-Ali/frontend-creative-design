import React, { useState } from "react";
import { TbBrandBlogger } from "react-icons/tb";


const SideBar = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };


    return (

        <>
            <div className={`d-flex ${isOpen ? "sidebar-expanded" : "sidebar-collapsed"}`}>
      {/* Sidebar */}
      <div
        className={`bg-dark text-white sidebar d-flex flex-column ${
          isOpen ? "expanded" : "collapsed"
        }`}
      >
        <button
          className="btn btn-light close-btn mt-3 mb-2"
          onClick={toggleSidebar}
        >
          {isOpen ? "Close" : "Open"}
        </button>
        <ul className="nav flex-column p-2">
          <li className="nav-item mb-3">
            <a href="/admin" className="nav-link text-white">
              Dashboard
            </a>
          </li>
          <li className="nav-item mb-3">
         
            <a href="/admin/blog" className="nav-link text-white">
            <TbBrandBlogger />  &nbsp;
 
              Blog Management
            </a>
          </li>
          <li className="nav-item mb-3">
            <a href="/admin/users" className="nav-link text-white">
              User Management
            </a>
          </li>
          <li className="nav-item mb-3">
            <a href="/admin/home" className="nav-link text-white">
              Home Sidebar
            </a>
          </li>
          <li className="nav-item mb-3">
            <a href="/admin/contact" className="nav-link text-white">
              Contact Us
            </a>
          </li>
          <li className="nav-item">
            <a href="/admin/settings" className="nav-link text-white">
              Settings
            </a>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      {/* <div className="main-content p-3">
        <h1>Admin Content Area</h1>
        <p>This is where your main content goes.</p>
      </div> */}
    </div>
        </>
    )

}


export default SideBar
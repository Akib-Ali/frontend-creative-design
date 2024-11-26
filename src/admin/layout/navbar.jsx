const Navbar = () => {

    return (

        <>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="container-fluid">
                    {/* Logo */}
                    <a className="navbar-brand d-flex align-items-center" href="/admin">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTj-MM_UyJqsvN2GeGKQKLEHNaL-cfeoLa-Q&s"
                            alt="Company Logo"
                            className="me-2"
                            style={{ height: "30px" }}
                        />
                        Creative Design
                    </a>

                    {/* Toggler for Small Screens */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarAdmin"
                        aria-controls="navbarAdmin"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Navbar Content */}
                    <div className="collapse navbar-collapse" id="navbarAdmin">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <span className="nav-link">Admin Name</span>
                            </li>
                            <li className="nav-item">
                                <button className="btn btn-primary me-2">Login</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )


}

export default Navbar
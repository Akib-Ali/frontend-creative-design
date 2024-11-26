import { Link } from "react-router-dom"

const Navbar = () => {

    return (

        <>
            <nav class="navbar navbar-expand-md ">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01"
                        aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <a class="navbar-brand" href="#">Creative Designs</a>
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/ourdesign">Our Designs</a>
                            </li>
                            <li class="nav-item">
                                <Link to="/contactus" class="nav-link">Contact Us</Link>
                            </li>
                        </ul>
                        <form class="d-flex" role="search">
                            <img src="https://api.logoisus.com/wm/6453ebd4b73b16d381c7f530?watermark=2&height=600&width=600"
                                style={{ height: "90px" }} />
                        </form>

                    </div>
                </div>
            </nav>

        </>
    )


}

export default Navbar
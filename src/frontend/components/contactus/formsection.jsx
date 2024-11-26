
const FormSection = () => {

    return (

        <>
            <div class="contact-us-maincontainer">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-md-12 col-sm-12">
                            <img src="https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?cs=srgb&dl=pexels-olly-789822.jpg&fm=jpg" height="200px" width="50%" />
                        </div>
                        <div class="col-lg-6 col-md-12 col-sm-12">

                            {/* <!-- contact us form --> */}

                            <form>
                                <div class="form-group">
                                    <label for="exampleInputPassword1" class="label">Name</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Name" />
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail1" class="label">Email address</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1"
                                        aria-describedby="emailHelp" placeholder="Enter email" />
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1" class="label">Phone Number</label>
                                    <input type="text" class="form-control" id="exampleInputPassword1"
                                        placeholder="Phone Number" />
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1" class="label">What are you looking for</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1"
                                        placeholder="What are you looking for" />
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1" class="label">Breif your Project</label>
                                    <textarea type="password" class="form-control" id="exampleInputPassword1"
                                        placeholder="What are you looking for" />
                                </div>
                                <div>
                                    <a href="#" class="animated-button">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        Submit
                                    </a>
                                </div>
                            </form>
                            {/* <!-- contact us form end --> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FormSection
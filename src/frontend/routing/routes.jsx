import { Routes, Route } from "react-router-dom"
import Home from "../pages/home"
import About from "../pages/about"
import ContactUs from "../pages/contact"
import Layout from "../layout/layout"
import "../index.css"
import Blogs from "../pages/blogs"
import Faq from "../pages/faq"


const FrontendRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contactus" element={<ContactUs />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/faq" element={<Faq/>}/>
      </Route>
    </Routes>
  );
};

export default FrontendRoutes
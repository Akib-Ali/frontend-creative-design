
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Import JavaScript for components like navbar togg
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import FrontendRoutes from './frontend/routing/routes';
import AdminRoutes from './admin/routes/route';

import "bootstrap/dist/js/bootstrap.bundle.min.js";



function App() {
  return (
    <div className="App">
      <FrontendRoutes/>
      <AdminRoutes/>
  
     
    </div>
  );
}

export default App;

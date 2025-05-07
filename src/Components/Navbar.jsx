import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    return (
        <section className="row">
        <div className="col-md-12">
           <div className="navbar navbar-expand-md navbar-light bg-light">
              <Link to="./" className="navbar-brand">Tycoon Brand </Link>
              <button className="navbar-toggler" data-bs-target="#ivy" data-bs-togg="collapse">
                 <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="ivy">
                 <div className="navbar-nav">
                  <Link to="/" className="nav-link">Home</Link>
                    <Link to="/addproduct" className="nav-link">add product</Link>
                    <Link to="/Getproducts" className="nav-link">Getproducts</Link>
                    <Link to="/PlaceOrder" className="nav-link">PlaceOrder</Link>
                    <Link to="/AboutUs" className="nav-link">AboutUs</Link>
                    <Link to="/Chatbot" className="nav-link">Chatbot</Link>
                    <Link to="/Cart" className="nav-link">Cart</Link>




                 </div>

                 <div className="navbar-nav ms-auto"><Link to="/signin" className="nav-link">signin</Link>
                 <Link to="/signup" className="nav-link">signup</Link></div>

              </div>


           </div>
        </div>

      </section>
        
        
     );
}
 
export default Navbar;
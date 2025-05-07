import React from 'react';
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import { Link } from 'react-router-dom';
import Footer from './Footer';


const AboutUs = () => {
    <div className="row justify-content-center mt-4">

    <nav className="m-4">
              {/* <Link className="btn btn-dark mx-2" to="/">Home</Link> */}
              <Link className="btn btn-dark mx-2" to="/addproduct">Add Product</Link>
              <Link className="btn btn-dark mx-2" to="/signin">Sign In</Link>
              <Link className="btn btn-dark mx-2" to="/signup">Sign Up</Link>
              <Link className="btn btn-dark mx-2" to="/Chatbot">Chatbot</Link>
              <Link className="btn btn-dark mx-2" to="/PlaceOrder">PlaceOrder</Link>
              <Link className="btn btn-dark mx-2" to="/">Home</Link>
              <Link className="btn btn-dark mx-2" to="/AboutUs">AboutUs</Link>



              

              </nav>
    
    </div>

  return (

    <section className='row'>
        <h2>AboutUs</h2>
        <div className='col-md-6'>
            
            <div className='card'>

            <div className='card-header'>
                <h3>Our story</h3>
            </div>
            <div className='card-body'>
                <p>At [Brand Name], we believe clothing is more than what you wear—it's how you show up in the world. Born from a passion for design, sustainability, and self-expression, our collections blend timeless silhouettes with modern edge. Each piece is crafted to move with you, tell your story, and last beyond the seasons. We're not just building a brand—we're creating a community that values quality, authenticity, and conscious living.

                </p>
            </div>
            <div className='card-body'>
                <img src="images/home cloth.webp" alt="" width="100px" height="100px" />
            </div>
        </div>
        <Footer/>
        </div>
    </section>

  );
};

export default AboutUs;

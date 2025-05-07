import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./PlaceOrder.css";
import { Link } from 'react-router-dom';

const PlaceOrder = () => {
  const [orderDetails, setOrderDetails] = useState({
    name: '',
    email: '',
    product: '',
    quantity: 1,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrderDetails({ ...orderDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Order placed successfully!\nDetails:\n${JSON.stringify(orderDetails, null,2)}`);
    setOrderDetails({ name: '', email: '', product: '', quantity: '' });
  };

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
    
    
    <div className="place-order-container PlaceOrder">
      <div className="carousel-container">
        <div id="productCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="images/pant1.jpg" className="d-block w-100" alt="Product 1" height="400" width= "100" />
            </div>
            <div className="carousel-item">
              <img src="images/pant2.jpg" className="d-block w-100" alt="Product 2" height="400" width= "100" />
            </div>
            <div className="carousel-item">
              <img src="images/pant5.webp" className="d-block w-100" alt="Product 3" height="400" width= "100" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#productCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#productCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="order-form-container">
        <h2>Place Your Order</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={orderDetails.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={orderDetails.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="product" className="form-label">Product</label>
            <input
              type="text"
              className="form-control"
              id="product"
              name="product"
              value={orderDetails.product}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="quantity" className="form-label">quantity</label>
            <input
              type="number"
              className="form-control"
              id="quantity"
              name="quantity"
              value={orderDetails.quantity}
              onChange={handleInputChange}
              min="1"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Place Order</button>
        </form>
      </div>
    </div>
  );
};

export default PlaceOrder;
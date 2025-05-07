import React from "react";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
      <img
        src="images/home cloth.webp"
        alt="Product"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "down",
        }}
      />
      <Link
        to="/SignIn"
        style={{
          position: "absolute",
          top: "5%",
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: "#007BFF",
          color: "white",
          padding: "15px 20px",
          textDecoration: "none",
          fontSize: "20px",
          borderRadius: "5px",
        }}
      >
        View Product
      </Link>
    </div>
  );
};

export default Product;

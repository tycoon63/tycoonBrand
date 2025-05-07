import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Carousel from "./Carousel";


const GetProducts = () => { 

  const image_url = "https://nyati.pythonanywhere.com/static/images/"

  let[products, setProducts] = useState([]);
  let[error,setError] = useState("");
  let[loading,setLoading] = useState("");
  let[filteredProducts,setFilteredProducts] = useState([]);

  const navigate = useNavigate();

  const getproducts = async () => {
    setError("");
    setLoading("Please Wait, Receiving Products...")

  
    try {
      const response = await axios.get("https://nyati.pythonanywhere.com/api/getproducts")
      console.log(response);
      setProducts(response.data);
      setLoading("");
      setFilteredProducts(response.data)
    } catch (error) {
      setLoading("");
      setError(error.message)
    }
  }
  const handleSearch=(value)=>{
    const filtered = products.filter((product)=>product.product_name.toLowerCase().includes(value.toLowerCase()))
    setFilteredProducts(filtered)
  }
//  useEffect(function, list of dependancies)
  useEffect(() => {
    getproducts();
  },[])
  return ( 
   <div className="row GetProducts">
    {/* header component */}

    {/* navbar component */}

    <Navbar/>
    <br />
    <Carousel/>

    <h3 className="mt-5">Available products</h3>
    <b className="text-warning">{loading}</b>
    <b className="text-danger">{error}</b>
    <div className="row justify-content-center">
    <div className="col-md-4 justify-content-center">
      <input type="text" placeholder="search product" className="form-control" onChange={(e)=>handleSearch(e.target.value)} />
      <br />
    </div>
    </div>
    {filteredProducts.map((product)=>(
        <div className="col-md-3 justify-content-center mb-4">
        <div className="card shadow card-margin">
              <img src={image_url+product.product_photo} alt="" className="product_img mt-4" />
            <div className="card-body">
              <h5 className="card-body">{product.product_name}</h5>
              <p className="text-muted">{product.product_desc.slice(0,10)}</p>

              <b className="text-warning">{product.product_cost} KES</b>
              <button  className="btn btn-dark mt-2 w-100" onClick={()=>navigate("/product",{state:{product}})}>view details</button>
            </div>
        </div>
      </div>
    ))}
  
    <Footer/>
   </div>
   );
}
 
export default GetProducts;
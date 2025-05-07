import { useRef, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Addproducts = () => {
    let [product_name, setProductName] = useState("")
    let [product_desc, setProductDesc] = useState("")
    let [product_cost, setProductCost] = useState("")
    let [product_photo, setProductPhoto] = useState("")

    let [loading,setLoading]=useState("");
    let [success,setSuccess]=useState("");
    let [error,setError]=useState("");
    
    const fileInputRef= useRef(null)

    const submitForm= async (e)=>{
        console.log(e)
        e.preventDefault();
        setError("")
        setSuccess("")
        setLoading("please wait..")
        try {
            setLoading("please wait as we submit data")
            const data = new FormData()
            data.append("product_name",product_name)
            data.append("product_desc",product_desc)
            data.append("product_cost",product_cost)
            data.append("product_photo",product_photo)

            const responce = await axios.post("https://nyati.pythonanywhere.com/api/addproduct",data)
            setLoading("");
            console.log(responce)
            setSuccess(responce.data.message);
            setProductName("")
            setProductDesc("")
            setProductCost("")
            setProductPhoto("")
            fileInputRef.current.value=""

            
            
        } catch (error) {
            setLoading("")
            setError(error.message)
            
        }
    }

        
    return ( 
        <div className="row justify-content-center mt-4">
            <nav className="m-4 Addproducts">
                {/* <Link className="btn btn-dark mx-2" to="/">Home</Link> */}
                <Link className="btn btn-dark mx-2" to="/Getproducts">Get products</Link>
                <Link className="btn btn-dark mx-2" to="/signin">Sign In</Link>
                <Link className="btn btn-dark mx-2" to="/signup">Sign Up</Link>
                <Link className="btn btn-dark mx-2" to="/Chatbot">Chatbot</Link>
                <Link className="btn btn-dark mx-2" to="/PlaceOrder">PlaceOrder</Link>
                <Link className="btn btn-dark mx-2" to="/">Home</Link>
                <Link className="btn btn-dark mx-2" to="/AboutUs">AboutUs</Link>



                

                </nav>
            <div className="col-md-6 card shadow p-4">
                <h2>Add Product</h2>
                <b className="text-success">{success}</b>
                <b className="text-danger">{loading}</b>
                <b className="text-warning">{error}</b>

                <form onSubmit={submitForm}>
                    <input type="text"className="form-control" placeholder="enter product name"required onChange={(e)=>setProductName(e.target.value)}value={product_name}/>
                    <br />
                    <textarea name="" id=""className="form-control" placeholder="enter product description"required onChange={(e)=>setProductDesc(e.target.value)}value={product_desc}></textarea>
                    <br />
                    <input type="number"className="form-control" placeholder="enter product cost"required onChange={(e)=>setProductCost(e.target.value)}value={product_cost}/>
                    <br />
                    <label htmlFor="">product photo</label>
                    <br />
                    <input type="file"className="form-control"required onChange={(e)=>setProductPhoto(e.target.files[0])} ref={fileInputRef}/>
                    <br />
                    <button className="btn btn-primary">Add product</button>
                </form>
            </div>
        </div>
     );
}
 
export default Addproducts;
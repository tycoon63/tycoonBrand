import axios from "axios";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "./Navbar";



const SingleProduct = () => {

    let [phone,setPhone]=useState("")
    let [loading,setLoading]=useState("")
    let [error,setError]=useState("")
    let [success,setSuccess]=useState("")
    


    const submitForm = async (e)=>{
        e.preventDefault()
        setLoading("proccessing payment")
        setSuccess("")
        try {
            const data = new FormData()
            data.append("amount",product.product_cost)
            data.append("phone",phone)
            const responce = await axios.post("https://nyati.pythonanywhere.com/api/mpesa_payment",data)
            setLoading("")
            setSuccess(responce.data.message)
            
        } catch (error) {
            setError(error.message)
            
        }
    }

    const {product}= useLocation().state || {};
    const img_url= "https://nyati.pythonanywhere.com/static/images/"
    return (
        <div className="SingleProduct">
            <Navbar/>
            <div className="justify-content-center row mt-3">
            
                <div className="col-md-3 card shadow">
                    <img src= {img_url+product.product_photo} alt="" />
                </div>
                <div className="col-md-3 card shadow background-secondary">
                    <h2>{product.product_name}</h2>
                    <h3 className="text-warning">{product.product_cost}</h3>
                    <p className="text-muted">{product.product_desc}</p>
                    <b className="text-warning">{loading}</b>
                    <b className="text-danger">{error}</b>
                    <b className="text-success">{success}</b>

                    <form onSubmit={submitForm}>
                        <input type="number" className="form-control" placeholder="enter amount" required readOnly value={product.product_cost}/><br />
                        <input type="tel" className="form-control" placeholder="enter mpesa No 2547XXXXXXX"required onChange={(e)=>setPhone(e.target.value)} /> <br />
                        <button className="btn btn-primary">pay now</button>
                    </form>
                </div>
            </div>
            
        </div>
        
    );
}
 
export default SingleProduct;


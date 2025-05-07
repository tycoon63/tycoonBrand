
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Signup = () => {
    let [username,setUsername]=useState(""); 
    let navigate = useNavigate()
    
    let [phone,setPhone]=useState("");
    let [email,setEmail]=useState("");
    let [password,setPassword]=useState("");
    let [loading,setLoading]=useState("");
    let [success,setSuccess]=useState("");
    let [error,setError]=useState("");
    

    const submitForm= async (e)=>{
        console.log(e)
        e.preventDefault();
        try {
            setLoading("please wait as we submit data")
            const data =new FormData()
            data.append("username",username)
            data.append("email",email)
            data.append("phone",phone)
            data.append("password",password)

            const responce = await axios.post("https://nyati.pythonanywhere.com/api/signup",data)
            setLoading("");
            setSuccess(responce.data.message);
            setUsername("");
            setPhone("");
            setEmail("");
            setPassword("");
            navigate("/signin")
            
        } catch (error) {
            setLoading("")
            setError("something went wrong")
            
        }
    }

    return ( 
        <div className="row justify-content-center mt-4">
            <div className="col-md-6 card shadow p-4 bg-secondary">
                <h2>Tycoon Brand</h2>
                <h2>Signup</h2>
                <b className="text-warning">{loading}</b>
                <b className="text-success">{success}</b>
                <b className="text-danger">{error}</b>
                <form onSubmit={submitForm}>    
                    <input type="text" className="form-control" placeholder="Enter Username" required onChange={(e)=>setUsername(e.target.value)}value={username}/><br />
                    <input type="email" className="form-control" placeholder="Enter Email" required onChange={(e)=>setEmail(e.target.value)}value={email}/><br />
                    <input type="tel" className="form-control" placeholder="Enter Phone No" required onChange={(e)=>setPhone(e.target.value)}value={phone}/><br />
                    <input type="password" className="form-control" placeholder="Enter Password" required onChange={(e)=>setPassword(e.target.value)}value={password}/><br />

                    <br />
                    <button type="submit" className="btn btn-primary">signup</button>
                
   
                </form>
            </div>
        </div>  
     );
}
 
export default Signup;
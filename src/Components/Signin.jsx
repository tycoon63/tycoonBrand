import axios from "axios";
import { useState } from "react";
import { useNavigate,Link} from "react-router-dom";


const SignIn = () => {
    let [username,setUsername]=useState("")
    let [password,setPassword]=useState("")
    let [success,setSucces]=useState("")
    let [loading,setLoading]=useState("")
    let [error, setError] = useState("")
    const navigate = useNavigate()

    const submitForm = async(e) => {
        e.preventDefault();
        try {
            setError("")
            setSucces("")
            setLoading("please wait...")
            const data = new FormData()
            data.append("username",username)
            data.append("password",password)

            const response = await axios.post("http://nyati.pythonanywhere.com/api/signin",data)

            if(response.data.user){
                localStorage.setItem("user",JSON.stringify(response.data.user))
                navigate("/Getproducts")

            }else{
                setLoading("")
                setError(response.data.message)
            }
    
                
        } catch (error) {
            setLoading("")
            setError("something went wrong")
            
        }
    }
 <h1>Ecomas-online</h1>
    return (  
        <div className="row justify-content-center mt-4">
            <div className="col-md-6 card shadow p-4 bg-secondary">
                <h2>Tycoon Brand</h2>
                
                <h2>signin</h2>
                <b className="text-warning">{success}</b>
                <b className="text-warning">{loading}</b>
                <b className="text-warning">{error}</b>
                <form onSubmit={submitForm}>
                    <input type="text"placeholder="enter username"required className="form-control" onChange={(e)=>setUsername (e.target.value)}/> <br />
                    <input type="password"placeholder="enter password"required className="form-control" onChange={(e)=>setPassword(e.target.value)} /> <br />
                    <button className="btn btn-primary"type="submit">Signin</button> <br />
                </form>
                <p>Dont have an account?<Link to = "/signup">signup</Link> </p>
            </div>
        </div>
    );
}
 
export default SignIn;
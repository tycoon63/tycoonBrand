import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import Signup from './Components/Signup';
import Signin from './Components/Signin';
import GetProducts from './Components/Getproduct';
import Addproducts from './Components/Addproduct';
import SingleProduct from './Components/Singleproduct';
import PlaceOrder from './Components/PlaceOrder';
import Home from './Components/Home'
import AboutUs from './Components/AboutUs'
import Chatbot from './Components/Chatbot'

function App() {
  return (
    <Router>
      <div className="App">
        

        <Routes>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/addproduct" element={<Addproducts/>}/>
          <Route path="/Getproducts" element={<GetProducts/>}/>
          <Route path="/product" element={<SingleProduct/>}/>
          <Route path='/PlaceOrder' element={<PlaceOrder/>}/>
          <Route path='/'element={<Home/>}/>
          <Route path='/AboutUs' element={<AboutUs/>}/>
          <Route path='/Chatbot' element={<Chatbot/>}/>
        </Routes>
    </div>
    </Router>

  );
}

export default App;

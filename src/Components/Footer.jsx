import { Link } from "react-router-dom"
import './Footer.css';

const Footer = () => {
  return (
     <div className="footer-container">
          <section className="row text-white bg-info p-4">
            <h2 className="text-center">Clothing Brand</h2>
            <p className="text-center colour-dark">Dont miss the new outfits </p>
            <div className="col-md-4">
              <h4 className="text-center text-dark">Location</h4>
              <p className="text-dark">We are located at second floor westigate</p>
              <p className="text-dark">Address: 00100-45670</p>
              
            
            </div>

            <div className="col-md-4">
              <h4 className="text-center">Contact Us</h4>
              <form>
                <input type="email" placeholder="Enter your Email" className="form-control"/> <br/>
                <textarea name="" id="" className="form-control" placeholder="Send us a message" rows="7"></textarea> <br/>
                <input type="submit" value="Send Message" className="btn btn-outline-danger"/>
              </form>
            </div>

            <div className="col-md-4">
              <h4 className="text-center">Stay Connected</h4> <br/>
              <Link to="images/face.jpeg">
                <img src="images/face.jpeg" alt="Facebook"/>
              </Link>
              <Link to="images/inst.jpeg">
                <img src="images/inst.jpeg" alt="Instagram"/>
              </Link>
              <p className="text-dark">You can contact us on our social platforms. You can buy outfits through our various platforms easily. Always remember to stay connected through our brand platform on Amazon, Facebook, and Instagram.</p>
            </div>
           </section>
           <footer className="bg-light text-dark text-center p-2">
            <h5>Clothing brand &copy;2025. All rights reserved.</h5>
           </footer>
     </div>
    );
}
export default Footer;
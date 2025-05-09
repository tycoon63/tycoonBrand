import React from "react";
import Navbar from "./Navbar";

const AboutUs = () => {
  return (
<section className="row">
    {<Navbar/>}
    <section className="row AboutUs">
        <div className="col-md-6">
            <div className="card shadow">
                <div className="card-body">
                    <img src="images/about2.jpg" alt="" width="550px" height="400px"/>
                </div>
                

            </div>

        </div>
        <div className="col-md-6">
            <div className="card-shadow">
            <div className="card-body">
                    <p>
                    In the ever-evolving world of fashion, [Tycoon Brand] stands as a beacon of style, innovation, and quality. Founded with a vision to redefine modern apparel, the brand seamlessly blends timeless elegance with contemporary trends, ensuring every piece resonates with individuality and sophistication. Whether it's everyday essentials or statement-making outfits, [Tycoon Brand] prioritizes premium craftsmanship, ethically sourced materials, and a commitment to sustainability.
                    </p>
                </div>
            </div>
       
        </div>

    </section>
</section>
  );
};

export default AboutUs;

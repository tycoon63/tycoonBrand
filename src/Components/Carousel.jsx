import React from 'react'

const Carousel = () => {
    return (
         <section className="row">
         <div className="col-md-12">
            <div id="mycarousel" className="carousel slide" data-bs-ride="carousel">
               <div className="carousel-inner">
                  <div className="carousel-item active">
                     <img src="images/carosel2.jpg" alt="" />
                  </div>
                  <div className="carousel-item">
                     <img src="images/carosel3.jpg" alt="" />
                  </div>
                  <div className="carousel-item">
                     <img src="images/carosel4.jpg" alt="" />
                  </div>
                  {/* <div className="carousel-item">
                     <img src="" alt="" />
                     <div className="carousel-caption">
                        <h2>Najka</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, neque.</p>
                        <button className="btn btn-outline-danger">Buy now</button>
                     </div>
                  </div> */}
               </div>
               <a href="#mycarousel" className="carousel-control-prev" data-bs-slide="prev"><span className="carousel-control-prev-icon"></span></a>
               <a href="#mycarousel" className="carousel-control-next" data-bs-slide="next"><span className="carousel-control-next-icon"></span></a>


            </div>
         </div>
       </section>
      

     );
}
 
export default Carousel
;
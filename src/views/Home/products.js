import React, { Component } from 'react';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';

class Products extends Component {
  render() {
    return (
        
      <div className="row">

      <div className="col-lg-9">
       {/* Product Cards */}
       <div className="row mt-5">

        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100">
            <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""/></a>
            <div className="card-body">
              <h4 className="card-title">
                <span className="major-header green fw-900 text-left">ANIMAL FEED PROCESSING</span>
              </h4>            
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
            </div>
            <div className="">
              <Link to="/" className="btn green-btn wfull quote-text d-block my-5 w-80 py-3 mx-auto" href="#" role="button"> 
              <span className="h5 fw-900 font-italic"> More Information </span>
              </Link>   
            </div>
          </div>
        </div>


        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100">
            <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""/></a>
            <div className="card-body">
              <h4 className="card-title">
                <span className="major-header green fw-900 text-left">ANIMAL FEED PROCESSING</span>
              </h4>            
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
            </div>
            <div className="">
              <Link to="/" className="btn green-btn wfull quote-text d-block my-5 w-80 py-3 mx-auto" href="#" role="button"> 
              <span className="h5 fw-900 font-italic"> More Information </span>
              </Link>   
            </div>
          </div>
        </div>


        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100">
            <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""/></a>
            <div className="card-body">
              <h4 className="card-title">
                <span className="major-header green fw-900 text-left">ANIMAL FEED PROCESSING</span>
              </h4>            
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
            </div>
            <div className="">
              <Link to="/" className="btn green-btn wfull quote-text d-block my-5 w-80 py-3 mx-auto" href="#" role="button"> 
              <span className="h5 fw-900 font-italic"> More Information </span>
              </Link>   
            </div>
          </div>
        </div>


        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100">
            <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""/></a>
            <div className="card-body">
              <h4 className="card-title">
                <span className="major-header green fw-900 text-left">ANIMAL FEED PROCESSING</span>
              </h4>            
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
            </div>
            <div className="">
              <Link to="/" className="btn green-btn wfull quote-text d-block my-5 w-80 py-3 mx-auto" href="#" role="button"> 
              <span className="h5 fw-900 font-italic"> More Information </span>
              </Link>   
            </div>
          </div>
        </div>


        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100">
            <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""/></a>
            <div className="card-body">
              <h4 className="card-title">
                <span className="major-header green fw-900 text-left">ANIMAL FEED PROCESSING</span>
              </h4>            
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
            </div>
            <div className="">
              <Link to="/" className="btn green-btn wfull quote-text d-block my-5 w-80 py-3 mx-auto" href="#" role="button"> 
              <span className="h5 fw-900 font-italic"> More Information </span>
              </Link>   
            </div>
          </div>
        </div>


        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100">
            <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""/></a>
            <div className="card-body">
              <h4 className="card-title">
                <span className="major-header green fw-900 text-left">ANIMAL FEED PROCESSING</span>
              </h4>            
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
            </div>
            <div className="">
              <Link to="/" className="btn green-btn wfull quote-text d-block my-5 w-80 py-3 mx-auto" href="#" role="button"> 
              <span className="h5 fw-900 font-italic"> More Information </span>
              </Link>   
            </div>
          </div>
        </div>

        </div>
   
      </div>
    
      
      <div className="col-lg-3">
        <div className="mt-5">
          <Fade bottom big>
            <h4 className="my-7 quote-text text-bold text-left font-italic">
              "A pinnacle of Nigerian Industry. The meeting point of enterprise and innovation."
            </h4>
          </Fade>     

          <Fade top>
            <h4 className="my-7 quote-text text-bold text-left font-italic position-bottom">
              "TMDK will have its roots in every sector of the Nigerian Agro-Industry and become a beloved member of each and every family."
            </h4>
          </Fade>                       

        </div>   
      </div>

    </div>
  
    );
  }
}

export default Products;

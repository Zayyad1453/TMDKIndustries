import React, { Component } from 'react';
import Nav from './../nav';
import { HashLink as Link } from 'react-router-hash-link';

import WhatWeDo from './whatwedo';
import Products from './products';
import Footer from './../footer';
import Fade from 'react-reveal/Fade';
import farmerImg from './../../images/TMDKIndustry-images/african-agri.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight, faAngleRight } from '@fortawesome/free-solid-svg-icons';

class Main extends Component {
  render() {
    return (
      
      <section>
      <Nav/> 
       
      <header className="masthead">    
        <div className="headershowcase row justify-content-center no-gutters mb-5 mb-lg-0">        
        </div>              
      </header>
      
      <div id="main-section" className="pb-5">
        <div className="container">
          
          <div className="row">
            <div className="col-lg-3">

              <h1 className="mb-4 mt-neg-0-5 text-white text-left major-header fw-900 font-italic">TMDK AGRO-INDUSTRIAL PARK</h1>
              <div className="list-group">
                <Link smooth to="/Our-Industries#industry-oil-refinery" className="list-group-item green text-lg-left">
                  <span className="font-italic fw-900">Oil Refining</span>
                  <span className="fa-icon float-right"><FontAwesomeIcon icon={faAngleRight} /></span>
                </Link>
                <Link smooth to="/Our-Industries#industry-animal-feed-production" className="list-group-item green text-lg-left">
                  <span className="font-italic fw-900">Animal Feed Processing</span>
                  <span className="fa-icon float-right"><FontAwesomeIcon icon={faAngleRight} /></span>
                </Link>
                <Link smooth to="/Our-Industries#industry-bottle-blowing" className="list-group-item green text-lg-left">
                  <span className="font-italic fw-900">Packaging</span>
                  <span className="fa-icon float-right"><FontAwesomeIcon icon={faAngleRight} /></span>
                </Link>                
                <Link smooth to="/Our-Industries" className="list-group-item major-header green-btn h5 fw-900 font-italic  text-lg-left">
                  <span className="">VIEW MORE</span>
                  <span className="fa-icon float-right"><FontAwesomeIcon icon={faAngleDoubleRight} /></span>
                </Link>                
              </div>

            </div>
            

            <div className="col-lg-9">
              {/* Carousel */}

              <div id="homepage-carousel" className="carousel slide my-4" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#homepage-carousel" data-slide-to="0" className="active"></li>
                  <li data-target="#homepage-carousel" data-slide-to="1"></li>
                  <li data-target="#homepage-carousel" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner" role="listbox">
                  <div className="carousel-item active">
                    <img className="d-block img-fluid" src="http://placehold.it/900x350" alt="First slide"/>
                  </div>
                  <div className="carousel-item">
                    <img className="d-block img-fluid" src="http://placehold.it/900x350" alt="Second slide"/>
                  </div>
                  <div className="carousel-item">
                    <img className="d-block img-fluid" src="http://placehold.it/900x350" alt="Third slide"/>
                  </div>
                </div>
                <a className="carousel-control-prev" href="#homepage-carousel" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#homepage-carousel" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>


          </div>

          <div className="row">
            <div className="col-lg-3">
              <div className="mt-5">
                <Fade bottom big>
                  <h3 className="my-7 quote-text text-bold text-left font-italic">
                    "A pinnacle of Nigerian Industry. The meeting point of enterprise and innovation."
                  </h3>
                </Fade>                
 
              </div>    
            </div>            

            <div className="col-lg-9">
              {/* Intro Message */}
              <div className="mt-5">
                <h2 className="my-4 text-black text-left major-header fw-900 font-italic">WHAT IS THE <span className="green">TMDK AGRO-INDUSTRIAL PARK </span> ?</h2>

                <div className="row">
                <div className="col-md-6">
                  <p className="sub-text pt-10 h5 text-justify">
                    It’s about Nigeria as a country, to offer great opportunity for business with agriculture among the top areas that offers opportunity for growth. 
                    Health and education are byproducts of good nutrition and nutrition comes from food. 
                  </p>
                  <p className="sub-text pt-10 h5 text-justify">
                    From our population to economic and increasing urbanization and globalization, put together when properly harnessed, can provide a big opportunity for growth, that platform that bridges the effort of our rual people with the favourable policies of our progressive governments, the untiring spirit for entrreprise is the platfrom that TMDK Industries is creating. 
                  </p>                  
                </div>
                <div className="col-md-6">
                  <img src={farmerImg} className="img-fluid" alt="farmer"/>
                </div>                  
                </div>
              </div>
            </div>
          </div>
        
          
        </div>

        <WhatWeDo/>
        <div className="container">
          <Products/>          
        </div>

      </div>
      
      <Footer/>
      </section>     
    );
  }
}

export default Main;

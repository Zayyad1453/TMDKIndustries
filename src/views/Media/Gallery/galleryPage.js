import React, { Component } from 'react';
import Nav from './../../nav';
import Footer from './../../footer';
import GalleryComponent from './galleryComponent';
import { Link } from 'react-router-dom';

class OurIndustries extends Component {
  render() {
    return (
      
      <section>
      <Nav/> 
       
      <header className="masthead">    
        <div className="headershowcase row justify-content-center no-gutters mb-5 mb-lg-0">        
          <h1 className="page-header-text text-white text-left major-header fw-900 font-italic px-3">GALLERY</h1>
        </div>              
      </header>
      
      <div className="py-5">
        <div className="container">
          <div className="row">
            <GalleryComponent/>
            <GalleryComponent/>
            <GalleryComponent/>
          </div>          
        </div>
      </div>
      
      <Footer/>
      </section>     
    );
  }
}

export default OurIndustries;

import React, { Component } from 'react';
import logo from './../images/logos/logo.png';
import { Link } from 'react-router-dom';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import {Navbar, NavDropdown} from 'react-bootstrap/Navbar';

// import { HashLink as Link } from 'react-router-hash-link';
// import Modal from 'react-modal';
// import SlidingPane from 'react-sliding-pane';
// import 'react-sliding-pane/dist/react-sliding-pane.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

class Nav extends Component {

  render() {
    return (   


      <div className="w-100 d-block">

        <nav className="navbar navbar-expand-lg navbar-light tmdk-nav">
          <div className="container">
            <a className="navbar-brand js-scroll-trigger" href="#page-top">
              <img className="mb-3 mb-lg-0 logo" src={logo} alt=""/>
            </a>
            <ul className="navbar-nav">
              <li className="nav-item">                
                <p>This is the header quote</p> 
              </li>
            </ul>                                

          </div>
        </nav>

        <nav id="mainNav" className="navbar navbar-expand-lg">
          <div className="container">
          <button className="navbar-toggler navbar-toggler-right major-header fw-900 white mx-auto" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            
            <span className="fa-icon float-right px-1"><FontAwesomeIcon icon={faBars} /></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav nav-fill w-100 mx-auto">
              <li className="nav-item">                
                <Link to="/" className="nav-link major-header fw-900  js-scroll-trigger" >HOME</Link>
              </li>
              <li className="nav-item">                
                <Link to="/Our-Industries" className="nav-link major-header fw-900  js-scroll-trigger" >OUR INDUSTRIES</Link>
              </li>
              <li className="nav-item">                
                <Link to="/Our-Brands" className="nav-link major-header fw-900  js-scroll-trigger" >OUR BRANDS</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link major-header fw-900  dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  OUR COMPANY
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">                  
                  <Link to="/Our-Vision" className="dropdown-item" >Vision &amp; Mission</Link>                
                  <Link to="/Our-Founder" className="dropdown-item" >The Founder</Link>
                  <div className="dropdown-divider"></div>
                  <Link to="/Board-of-Directors" className="dropdown-item" >Board of Directors</Link>
                  <Link to="/Our-Management-Team" className="dropdown-item" >Management Team</Link>
                </div>
              </li>  
              <li className="nav-item dropdown">
                <a className="nav-link major-header fw-900  dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  MEDIA
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link to="/Press" className="dropdown-item" >Press</Link>
                  <Link to="/Gallery" className="dropdown-item" >Gallery</Link>
                </div>
              </li>                
              <li className="nav-item">                
                <Link to="/Contact" className="nav-link major-header fw-900  js-scroll-trigger" >CONTACT US</Link>
              </li>                          
            </ul>                                
          </div>
          </div>
        </nav>        
      
      </div>     
   
   );
  }
}

export default Nav;

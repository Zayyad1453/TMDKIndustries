import React, { Component } from 'react';
// import { HashLink as Link } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

class SecondaryNav extends Component {
  render() {
    return (

      <section id="whatdowedo" className="projects-section bg-light mt-5 py-5 ">  

      
        <div className="container">
          <div className="white">
            <h1 className="major-header text-left font-italic fw-900"> WHAT DO WE DO?</h1>           
          </div>
          <p className="sub-text pt-10 h4 text-justify white"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in pretium risus. Nulla quis posuere diam, at vehicula velit. In scelerisque augue id tellus efficitur molestie. Nulla facilisi. Phasellus facilisis, ligula vel condimentum finibus, ipsum lacus sollicitudin ante, in ultricies felis ante quis odio. Proin ac consectetur ante, eget rutrum libero. Nullam dolor neque, placerat ac lacinia sed, pretium at ipsum. Nulla dignissim, nunc nec rhoncus tempus, eros dolor dictum odio, in iaculis enim ipsum quis velit.</p>
          
          
          <Link to="/" className="btn green-btn w300 major-header d-block my-5 shade py-3" href="#" role="button"> 
            <span className="h5 fw-900 font-italic"> SEE OUR BRANDS </span>
          </Link>          
        </div>      

    </section>
    
    );
  }
}

export default SecondaryNav;

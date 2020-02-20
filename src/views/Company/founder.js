import React, { Component } from 'react';
import Nav from './../nav';
import Footer from './../footer';

class Contact extends Component {
  render() {
    return (
      
      <section>
      <Nav/>       
      <div className="py-5 my-5">      
        <div className="container">
                  
            <div className="col-lg-10 mx-auto">     
            <h1 className="text-left major-header fw-900 font-italic green">A Message From The Founder</h1>
              <div className="row my-5">

                <div className="col-md-6">
                  <img className="img-fluid" src="http://placehold.it/700x400"/>
                </div>                      
                <div className="col-md-6 quote-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>                       
              </div>
            </div>
          
        </div>
      </div>
      
      <Footer/>
      </section>     
    );
  }
}

export default Contact;

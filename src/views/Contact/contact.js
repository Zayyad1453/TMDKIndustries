import React, { Component } from 'react';
import Nav from './../nav';
import Footer from './../footer';

class Contact extends Component {
  render() {
    return (
      
      <section>
      <Nav/> 
       
      <header className="masthead">    
        <div className="headershowcase row justify-content-center no-gutters mb-5 mb-lg-0">        
          <h1 className="page-header-text text-white text-left major-header fw-900 font-italic px-3">CONTACT US</h1>
        </div>              
      </header>
      
      <div className="py-5">
        <div className="container">
          {/* <div className="row"> */}
            <div className="col-lg-10 mx-auto">     

              <div className="row my-3">

                <h3 className="text-left major-header fw-900 w-100">Office Contact Information</h3>
                <div className="col-md-4 card py-3 mx-3 my-1">
                  <address>
                    <strong>Kaduna Office</strong><br/>
                    1234 Example Street<br/>
                    Antartica, Example 0987<br/>
                    Phone: <a href="tel:+234812213456">+234 812 3456789</a>
                  </address>

                  <address>
                    <strong>Contact email</strong><br/>
                    <a href="mailto:contact@tmdkindustry.ng">Contact@tmdkindustry.ng</a>
                  </address>
                </div> 

                <div className="col-md-4 card py-3 mx-3 my-1">
                  <address>
                    <strong>Abuja Office</strong><br/>
                    1234 Example Street<br/>
                    Antartica, Example 0987<br/>
                    Phone: <a href="tel:+234812213456">+234 812 3456789</a>
                  </address>

                  <address>
                    <strong>Contact email</strong><br/>
                    <a href="mailto:contact@tmdkindustry.ng">Contact@tmdkindustry.ng</a>
                  </address>
                </div>                


                
              </div>


                
              <div className="row my-3">

                <h3 className="text-left major-header fw-900 w-100">Factory Contact Information</h3>
                <div className="col-md-4 card py-3 mx-3 my-1">
                  <address>
                    <strong>Kaduna Factory</strong><br/>
                    Plot no. 266862 <br/>
                    D.O. 5 Sobawa Layout<br/>
                    Rigachukum Kaduna State<br/>
                    Phone: <a href="tel:+2348066269300">+234 806 626 9300</a>
                  </address>

                  <address>
                    <strong>Contact email</strong><br/>
                    <a href="mailto:contact@tmdkindustry.ng">Contact@tmdkindustry.ng</a>
                  </address>
                </div>       
              </div>

            </div>
          {/* </div> */}
        </div>
      </div>
      
      <Footer/>
      </section>     
    );
  }
}

export default Contact;

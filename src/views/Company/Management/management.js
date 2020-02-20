import React, { Component } from 'react';
import Nav from './../../nav';
import Footer from './../../footer';

import ManagementList from './managementList';
class Contact extends Component {
  render() {
    return (
      
      <section>
      <Nav/>     
      <div className="py-5">
        <div className="container">
          <ManagementList/>          
        </div>
      </div>
      
      <Footer/>
      </section>     
    );
  }
}

export default Contact;

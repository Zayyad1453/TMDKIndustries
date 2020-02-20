import React, { Component } from 'react';
import Nav from './../../nav';
import Footer from './../../footer';

import BoardList from './boardList';

class Contact extends Component {
  render() {
    return (
      
      <section>
      <Nav/> 
       
      
      <div className="py-5">
        <div className="container">        
          <BoardList/>
        </div>
      </div>
      
      <Footer/>
      </section>     
    );
  }
}

export default Contact;

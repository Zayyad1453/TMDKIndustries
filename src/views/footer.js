import React, { Component } from 'react';
// import '../../../story.css';


 class Footer extends Component {
  render() {
    return (
      
      <section id="contact"  className="contact-section shade-top pb-5">

        <div  className="container">
        <div className="banner-white mt-3 py-5 ">
          <h1 className="major-header green fw-900 font-italic"> Contact </h1>           
        </div>  

          <div  className="row">
              <div  className="col-lg-3 col-md-3 col-sm-3">
                <div  className="single-footer-widget">
                    <h4>Quick Links</h4>
                    <p>
                    


                    </p>
                    <p  className="footer-text">
                      Copyright ©<script type="text/javascript" async="" src="https://www.google-analytics.com/analytics.js"></script><script type="text/javascript">document.write(new Date().getFullYear());</script>2019 All rights reserved.
                    </p>
                </div>                
              </div>
              
              <div  className="col-lg-3 col-md-3 col-sm-3">
                <div  className="single-footer-widget">
                    <h4>Office Addresses</h4>
                    {/* <p>Stay updated with our latest trends</p> */}
                    <div className="This" id="mc_embed_signup">                      
                      <p>Lagos: No.13, Udi Road, Osborne Estate, Off Osborne Road, Ikoyi, Lagos</p>
                      <p>Abuja: 124, Ademola Adetukunbo Cres., Wuse 2, Abuja</p>

                    </div>
                </div>               
              </div>

              <div  className="col-lg-3 col-md-3 col-sm-3 social-widget">
                <div  className="single-footer-widget">
                    <h4>Contact</h4>
                    {/* <p>Stay updated with our latest trends</p> */}
                    <div className="This" id="mc_embed_signup">                      
                      <p>+2340000000</p>
                      <p>Contact@tmdkindustries.ng</p>
                    </div>
                </div> 
              </div>

              <div  className="col-lg-3 col-md-3 col-sm-3 social-widget">
                <div  className="single-footer-widget">
                    <h4>Subsidiaries</h4>                    
                    <div  className="">
                      <p><a className="contact-link" href="#" onClick={ (event) => event.preventDefault() }>Tamaidukka Group </a></p>
                      <p><a className="contact-link" href="#">TMDK Oil</a></p>
                      {/* <a className="upvotes" onClick={this.upvote.bind(this)}>upvote</a> */}
                      <p><a className="contact-link" href="#">TMDK Real Estate</a></p>
                      <p><a className="contact-link" href="#">TMDK Industries</a></p>
                    </div>
                </div>
              </div>
          </div>
        </div>

      </section>
    
    );
  }
}

export default Footer;

import React, { Component } from 'react';
import Nav from './../../nav';
import Footer from './../../footer';

import Microlink from '@microlink/react';

class Press extends Component {
  render() {
    return (
      
      <section>
      <Nav/> 
       
      <header className="masthead">    
        <div className="headershowcase row justify-content-center no-gutters mb-5 mb-lg-0">        
          <h1 className="page-header-text text-white text-left major-header fw-900 font-italic px-3">PRESS </h1>
        </div>              
      </header>
      
      <div className="py-5">
        <div className="container">
          
            <div className="col-lg-10 mx-auto">     

              <div className="row my-3">
                              
                <div className="news-item w-100 mx-auto">
                  <Microlink
                    url='https://nipc.gov.ng/2019/07/22/tmdk-group-to-invest-25m-in-agro-allied-industrial-park/'
                    style={{ 
                      // fontFamily: 'Nitti, "Microsoft YaHei", 微软雅黑, monospace',
                      minWidth: '100%'
                    }}
                  />                  
                </div>

                <div className="news-item w-100 mx-auto">
                  <Microlink
                    url='https://www.vanguardngr.com/2019/07/company-to-develop-25-million-industrial-park-in-kaduna/'
                    style={{ 
                      // fontFamily: 'Nitti, "Microsoft YaHei", 微软雅黑, monospace',
                      minWidth: '100%'
                    }}
                  />                  
                </div>

                <div className="news-item w-100 mx-auto">
                  <Microlink
                    url='https://www.proshareng.com/news/Investors%20NewsBeat/Nigerian-Breweries-Plc-Issues-Update-on-TMDK-Oil-Traders-and-Police-Investigation/33561'
                    style={{ 
                      // fontFamily: 'Nitti, "Microsoft YaHei", 微软雅黑, monospace',
                      minWidth: '100%'
                    }}
                  />                  
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

export default Press;

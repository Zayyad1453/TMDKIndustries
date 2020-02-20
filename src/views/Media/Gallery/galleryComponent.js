import React, { Component } from 'react';
import Slider from 'react-slick';
import Lightbox from 'react-image-lightbox';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";                                                 

import img1 from './../../../images/TMDKIndustry-images/mealpacking-1.jpg'                                                     
import img2 from './../../../images/TMDKIndustry-images/mealpacking-2.jpg'                                                    
import img3 from './../../../images/TMDKIndustry-images/meeting-1.jpg'                                                         
import img4 from './../../../images/TMDKIndustry-images/meeting-2.jpg'                                                         
import img5 from './../../../images/TMDKIndustry-images/meeting-3.jpg'                                                         
import img6 from './../../../images/TMDKIndustry-images/meeting-4.jpg'                                                         
import img7 from './../../../images/TMDKIndustry-images/oilpacking-1.jpg'                                                      
import img8 from './../../../images/TMDKIndustry-images/oilrefining-1.jpg'                                                     
import img9 from './../../../images/TMDKIndustry-images/solventextraction-1.jpg'                                               
import img10 from './../../../images/TMDKIndustry-images/solventextraction-2.jpg'                                               
import img11 from './../../../images/TMDKIndustry-images/steamboiler-1.jpg'                                                     
import img12 from './../../../images/TMDKIndustry-images/steamboiler-2.jpg'                                                     
import img13 from './../../../images/TMDKIndustry-images/steelstructure-1.jpg'                                                  
import img14 from './../../../images/TMDKIndustry-images/steelstructure-2.jpg'                                                  
import img15 from './../../../images/TMDKIndustry-images/steelstructure-3.jpg' 
import img16 from './../../../images/TMDKIndustry-images/steelstructure-4.jpg'   
import img17 from './../../../images/TMDKIndustry-images/treatment0.jpg'                                                
import img18 from './../../../images/TMDKIndustry-images/treatment1.jpg'                                                        
import img19 from './../../../images/TMDKIndustry-images/treatment2.jpg'                                                        
import img20 from './../../../images/TMDKIndustry-images/treatment3.jpg'                                                        
import img21 from './../../../images/TMDKIndustry-images/treatment4.jpg'                                                        
import img22 from './../../../images/TMDKIndustry-images/treatment5.jpg'                                                        
import img23 from './../../../images/TMDKIndustry-images/treatment6.jpg'                                                       
import img24 from './../../../images/TMDKIndustry-images/truck-1.jpg'   


class GalleryComponent extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,      
      slidesToScroll: 1,
      className: 'slick-slides',

      centerMode: true,
      centerPadding: "60px",
      slidesToShow: 1,
      height: '400px',
      
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="col-10 mx-auto my-5 h-25">
        <h2 className="major-header fw-900">Oil Refinery</h2>
        <div className="my-3">
          <Slider {...settings}>
            <div>              
              <img className="img-fluid px-2" src={img1}/>
            </div>
            <div>              
              <img className="img-fluid px-2" src={img2}/>
            </div>
            <div>              
              <img className="img-fluid px-2" src={img3}/>
            </div>
            <div>              
              <img className="img-fluid px-2" src={img4}/>
            </div>
            <div>              
              <img className="img-fluid px-2" src={img5}/>
            </div>
            <div>              
              <img className="img-fluid px-2" src={img6}/>
            </div>     
            <div>              
              <img className="img-fluid px-2" src={img7}/>
            </div>
            <div>              
              <img className="img-fluid px-2" src={img8}/>
            </div>
            <div>              
              <img className="img-fluid px-2" src={img9}/>
            </div>
            <div>              
              <img className="img-fluid px-2" src={img10}/>
            </div>
            <div>              
              <img className="img-fluid px-2" src={img11}/>
            </div>
            <div>              
              <img className="img-fluid px-2" src={img12}/>
            </div>
            <div>              
              <img className="img-fluid px-2" src={img13}/>
            </div>
            <div>              
              <img className="img-fluid px-2" src={img14}/>
            </div>
            <div>              
              <img className="img-fluid px-2" src={img15}/>
            </div>
            <div>              
              <img className="img-fluid px-2" src={img16}/>
            </div>
            <div>              
              <img className="img-fluid px-2" src={img17}/>
            </div>
            <div>              
              <img className="img-fluid px-2" src={img18}/>
            </div>     
            <div>              
              <img className="img-fluid px-2" src={img19}/>
            </div>
            <div>              
              <img className="img-fluid px-2" src={img20}/>
            </div>
            <div>              
              <img className="img-fluid px-2" src={img21}/>
            </div>
            <div>              
              <img className="img-fluid px-2" src={img22}/>
            </div>
            <div>              
              <img className="img-fluid px-2" src={img23}/>
            </div>
            <div>              
              <img className="img-fluid px-2" src={img24}/>
            </div>                                  

 
          </Slider>
                  
        </div>
      </div>
    );
  }
}
export default GalleryComponent;

import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import slide1 from '../../../images/carousel-1.png';
import slide2 from '../../../images/carousel-2.png';
import slide3 from '../../../images/carousel-3.png';
import slide4 from '../../../images/carousel-4.png';
import slide5 from '../../../images/carousel-5.png';
import './WorkSlider.css';

const WorkSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <div style={{backgroundColor: '#111430', height: '600px'}}>
      <div className="container">
        <h2 className="text-center mt-5 mb-5 section-heading" style={{color: '#FFF', paddingTop: '30px'}}> Here are some of <span className="green-highlight">our works</span> </h2>
        <Slider {...settings}>
          <div>
            <img style={{width: '465px', height: '335px'}} className="img-fluid" src={slide1} alt=""/>
          </div>
          <div>
            <img style={{width: '465px', height: '335px'}} className="img-fluid" src={slide2} alt=""/>    
          </div>
          <div>
            <img style={{width: '465px', height: '335px'}} className="img-fluid" src={slide3} alt=""/>
          </div>
          <div>
            <img style={{width: '465px', height: '335px'}} className="img-fluid" src={slide4} alt=""/>    
          </div>
          <div>
            <img style={{width: '465px', height: '335px'}} className="img-fluid" src={slide5} alt=""/>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default WorkSlider;
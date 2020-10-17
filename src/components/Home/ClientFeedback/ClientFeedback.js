import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import SingleFeedback from '../SingleFeedback/SingleFeedback';
import customer1 from '../../../images/customer-1.png';
import customer2 from '../../../images/customer-2.png';
import customer3 from '../../../images/customer-3.png';

const ClientFeedback = () => {
  const feedbackData = [
    {
      name: 'Nash Patrik',
      position: 'CEO, Manpol',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ',
      image: customer1
    },
    {
      name: 'Miriam Barron',
      position: 'CEO, Manpol',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ',
      image: customer2
    },
    {
      name: 'Bria Malone',
      position: 'CEO, Manpol',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ',
      image: customer3,
    },
    {
      name: 'Bria Malone',
      position: 'CEO, Manpol',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ',
      image: customer3,
    }
  ];

  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <div style={{height: '600px'}} className="container">
      <h2 className="text-center mt-5 mb-5 section-heading">Clients <span className="green-highlight">Feedback</span></h2>
      <Slider {...settings}>
         {
           feedbackData.map(feedback => <SingleFeedback feedback={feedback}></SingleFeedback>)
         } 
      </Slider>
    </div>
  );
};

export default ClientFeedback;
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import webDesign from '../../../images/icons/service1.png';
import graphicDesign from '../../../images/icons/service2.png';
import webDevelopment from '../../../images/icons/service3.png';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
  const [serviceData, setServiceData] = useState([]);

 useEffect(() => {
      fetch('http://localhost:5000/services')
          .then(res => res.json())
          .then(data => setServiceData(data));
  }, [])
  // const serviceData = [
  //   {
  //     name: 'Web & Mobile design',
  //     description: 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.',
  //     image: webDesign
  //   },
  //   {
  //     name: 'Web & Mobile design',
  //     description: 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.',
  //     image: webDesign
  //   },
  //   {
  //     name: 'Graphic design',
  //     description: 'Amazing flyers, social media posts and brand representations that would make your brand stand out.',
  //     image: graphicDesign
  //   },
  //   {
  //     name: 'Web development',
  //     description: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.',
  //     image: webDevelopment
  //   },
  //   {
  //     name: 'Web development',
  //     description: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.',
  //     image: webDevelopment
  //   },
  //   {
  //     name: 'Web development',
  //     description: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.',
  //     image: webDevelopment
  //   }
  // ]
  return (
    <div className="container">
      <h2 className="text-center mt-5 mb-5 section-heading">Provide awesome <span className="green-highlight">services</span></h2>
      <div className="row d-flex justify-content-between card-container mr-0">
        {
          serviceData.map(service => <Service service={service}></Service>)
        }
      </div>
    </div>
  );
};

export default Services;
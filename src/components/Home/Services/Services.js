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
      fetch('https://agile-escarpment-89620.herokuapp.com/services')
          .then(res => res.json())
          .then(data => setServiceData(data));
  }, [])
  
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
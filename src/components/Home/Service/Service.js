import React from 'react';
import './Service.css';

const Service = ({service}) => {
  return (
    <div className="col-md-4 col-sm-6">
      <div className="service-card d-flex flex-column align-items-center p-5">
        <img src={`data:image/png;base64,${service.image.img}`} alt=""/>
        <h4 className="mt-3">{service.title}</h4>
        <p className="text-center">{service.description}</p>
      </div>
    </div>
  );
};

export default Service;
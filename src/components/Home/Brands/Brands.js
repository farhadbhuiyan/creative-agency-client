import React from 'react';
import slack from '../../../images/logos/slack.png';
import google from '../../../images/logos/google.png';
import uber from '../../../images/logos/uber.png';
import netflix from '../../../images/logos/netflix.png';
import airbnb from '../../../images/logos/airbnb.png';
import './Brands.css';
const Brands = () => {
  return (
    <section className="container w-75">
      <div className="row d-flex justify-content-between mr-0 brand-items mb-5">
        <div className="col-md-2">
          <img style={{width: '140px', height: '36px'}} className="img-fluid" src={slack} alt=""/>
        </div>
        <div className="col-md-2">
          <img style={{width: '129px', height: '44px'}} className="img-fluid" src={google} alt=""/>
        </div>
        <div className="col-md-2">
          <img style={{width: '99px', height: '56px'}} className="img-fluid" src={uber} alt=""/>
        </div>
        <div className="col-md-2">
          <img style={{width: '120px', height: '67px'}} className="img-fluid" src={netflix} alt=""/>
        </div>
        <div className="col-md-2">
          <img style={{width: '161px', height: '51px'}} className="img-fluid" src={airbnb} alt=""/>
        </div>
      </div>
    </section>
  );
};

export default Brands;
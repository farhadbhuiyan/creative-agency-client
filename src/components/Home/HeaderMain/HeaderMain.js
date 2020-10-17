import React from 'react';
import headerImage from '../../../images/logos/Frame.png';
import './HeaderMain.css';

const HeaderMain = () => {
  return (
    <div className="row mr-0 d-flex align-items-center main-header">
      <div className="col-md-4 offset-md-1 header-discription"> 
        <h1 style={{fontFamily: 'Poppins,sans-serif', fontWeight: '700', fontSize: '3em'}}>Let’s Grow Your <br/> Brand To The <br/> Next Level</h1>
        <p style={{fontFamily: 'Poppins,sans-serif', lineHeight: '24px', fontSize: '16px', letterSpacing: '2px', margin: '15px 0'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat 
        </p>
        <button className="btn btn-primary black-button">Hire us</button>
      </div>
      <div className="col-md-6">
        <img style={{width: '624.6px', height: '422.8px'}} className="img-fluid header-image" src={headerImage} balt=""/>
      </div>
    </div>
  );
};

export default HeaderMain;
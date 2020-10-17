import React from 'react';
import './SingleFeedback.css';

const SingleFeedback = ({ feedback }) => {
  return (
    <div style={{width: 'auto', marginRight: '10px'}}>
      <div className="feedback-card">
        <div className="d-flex align-items-center">
          <div>
            <img src={feedback.image} alt="" />
          </div>
          <div>
            <h4>{feedback.name}</h4>
            <h5>{feedback.position}</h5>
          </div>
        </div>
        <p>{feedback.comment}</p>
      </div>
    </div>
  );
};

export default SingleFeedback;
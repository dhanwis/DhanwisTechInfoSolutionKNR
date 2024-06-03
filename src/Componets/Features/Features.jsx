import React from 'react';
import './Features.css';

const Feature = ({ title, text, icon }) => (
  <div className="gpt3__features-container__feature">
    <div className="gpt3__features-container__feature-title">
      <span className='mb-2'>{icon && <i className={icon}></i>}</span>
      <h1>{title}</h1>
    </div>
    <div className="gpt3__features-container_feature-text">
      <p>{text}</p>
    </div>
  </div>
);

export default Feature;

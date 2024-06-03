import React from 'react';
import Feature from '../Features/Features';
import './Business.css';

const Business = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature
        title="Banking &amp; Finance"
        text="Our team of experienced developers, designers, and strategists collaborates closely with financial institutions to develop innovative software solutions, mobile applications, and responsive websites that enhance customer experiences, optimize internal processes, and drive business growth."
        icon={'fa-solid fa-building-columns'}
      />
    </div>
    
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <a href="/contact" style={{color:"#ffcc33"}}>Contact us</a>
    </div>

    <div className="gpt3__whatgpt3-container">
      <Feature
        icon={'fa-solid fa-cart-shopping'}
        title="Online Shopping"
        text="Our team of skilled developers, designers, and strategists collaborates closely with retailers to develop custom e-commerce websites and mobile applications that drive sales, enhance user experiences, and foster brand loyalty."
      />
      <Feature
        icon={'fa-solid fa-hotel'}
        title="Hotels &amp; Restaurants"
        text="Our team of expert developers and designers combines industry knowledge with technical expertise to deliver solutions that streamline operations, improve guest satisfaction, and increase revenue."
      />
      <Feature
        icon={'fa-solid fa-school'}
        title="Education"
        text="Our team of skilled developers, designers, and educators collaborates closely with educational institutions, edtech startups, and corporate training programs to develop cutting-edge software solutions that empower learners, educators, and administrators alike."
      />
    </div>
  </div>
);

export default Business;

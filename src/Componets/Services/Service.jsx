import React from 'react';
import './Service.css';
import Features2 from '../Features/Features2';

const featuresData = [
  {
    title: 'Web Design Development',
    text: 'We specialize in creating unique and impactful websites that incorporate cutting-edge design techniques...',
    path: "/webDevelopment", // Corrected path
  },
  {
    title: 'Graphic Design',
    text: 'Our team specializes in providing tailored software development solutions using the latest technologies and industry best practices...',
    path: "/graphicDesign", // Corrected path
  },
  {
    title: 'Mobile App Development',
    text: 'Our team specializes in creating mobile apps that seamlessly work across various mobile devices and online platforms. We offer end-to-end solutions, from designing and integrating the app to managing its entire lifecycle.',
    path: "/appDevelopment", // Corrected path
  },
  {
    title: 'Digital Marketing',
    text: 'Our company offers digital marketing services that can help you expand your business and reach a global audience in a cost-effective manner...',
    path: "/digital-marketing", // Corrected path
  },
];

const Service = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <div className="gpt3__whatgpt3-heading">
        <a href="/about" className="about-link">Explore more</a>
      </div>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Features2 title={item.title} text={item.text} key={item.title + index} path={item.path}/>
      ))}
    </div>
  </div>
);

export default Service;

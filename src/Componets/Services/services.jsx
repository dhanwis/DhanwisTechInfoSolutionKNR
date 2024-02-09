import React from "react";
import "./services.css";
import { NavLink } from "react-router-dom";

export default function Services() {
  return (
    <div className="container  py-5" id="services">


      <div class="line-long-area" data-aos="fade-up-right">
        <div class="line-long"></div>
      </div>

      <div className="row mt-3">
        <div
          className="col-xl-4 col-md-6"
          data-aos="zoom-out-up"
          data-aos-duration={500}
          data-aos-delay={300}
        >
          <div className="colbox">
            <div className="boxicon">

              <span className="services-icon">
                <i class="fa-solid fa-globe"></i>
              </span>
            </div>
            {/* boxicon */}
            <a
              href="https://srvinfotech.com/web-design-development"
              className="h4"
            >
              Web Design &amp; Development
            </a>
            <div className="boxcont">
              <div className="boxdesc">
                <p style={{textAlign: "justify", marginTop:"5px"}}>
                  We craft creative and effective websites using the best
                  design techniques in the business. Our design uses the
                  finest elements that help the business to elevate its
                  brand presence in the web space.
                </p>
              </div>
            </div>
            {/* boxcont */}
          </div>
          {/* colbox */}
        </div>
        {/* col */}
        <div
          className="col-xl-4 col-md-6"
          data-aos="zoom-out-up"
          data-aos-duration={500}
          data-aos-delay={300}
        >
          <div className="colbox">
            <div className="boxicon">

              <span className="services-icon">
                <i class="fa-solid fa-computer"></i>
              </span>
            </div>
            {/* boxicon */}
            <a
              href="https://srvinfotech.com/web-design-development"
              className="h4"
            >
              Software Development
            </a>
            <div className="boxcont">
              <div className="boxdesc">
                <p style={{textAlign: "justify", marginTop:"5px"}}>
                  We offer custom software development services using all
                  accepted and development technologies. Our software
                  development service adapts seamlessly to your project
                  requirements and business needs.
                </p>
              </div>
            </div>
            {/* boxcont */}
          </div>
          {/* colbox */}
        </div>
        {/* col */}
        <div
          className="col-xl-4 col-md-6"
          data-aos="zoom-out-up"
          data-aos-duration={500}
          data-aos-delay={300}
        >
          <div className="colbox">
            <div className="boxicon">

              <span className="services-icon">
                <i class="fa-solid fa-mobile-screen"></i>
              </span>
            </div>
            {/* boxicon */}
            <a
              href="https://srvinfotech.com/web-design-development"
              className="h4"
            >
              Mobile App Development
            </a>
            <div className="boxcont">
              <div className="boxdesc">
                <p style={{textAlign: "justify", marginTop:"5px"}}>
                  We build mobile applications that function perfectly with
                  the whole spectrum of mobile devices and online platforms.
                  Our experts cover an entire cycle of application design,
                  integration, and management services.
                </p>
              </div>
            </div>
            {/* boxcont */}
          </div>
          {/* colbox */}
        </div>
        {/* col */}
        <div
          className="col-xl-4 col-md-6"
          data-aos="zoom-out-up"
          data-aos-duration={500}
          data-aos-delay={300}
        >
          <div className="colbox">
            <div className="boxicon">

              <span className="services-icon">
                <i class="fa-solid fa-bullhorn"></i>
              </span>
            </div>
            {/* boxicon */}
            <a
              href="https://srvinfotech.com/web-design-development"
              className="h4"
            >
              Digital Marketing
            </a>
            <div className="boxcont">
              <div className="boxdesc">
                <p style={{textAlign: "justify", marginTop:"5px"}}>
                  Expand your products and services to reach the global
                  level with the most cost-effective method. Our digital
                  marketing service ensures the best rates of conversion of
                  potential leads to customers.
                </p>
              </div>
            </div>
            {/* boxcont */}
          </div>
          {/* colbox */}
        </div>
        {/* col */}
        <div
          className="col-xl-4 col-md-6"
          data-aos="zoom-out-up"
          data-aos-duration={500}
          data-aos-delay={300}
        >
          <div className="colbox">
            <div className="boxicon">

              <span className="services-icon">
                <i class="fa-solid fa-gear"></i>
              </span>
            </div>
            {/* boxicon */}
            <a
              href="https://srvinfotech.com/web-design-development"
              className="h4"
            >
              ERP Development
            </a>
            <div className="boxcont">
              <div className="boxdesc">
                <p style={{textAlign: "justify", marginTop:"5px"}}>
                  The evolution of the ERP industry, which is driven by
                  trends such as extensibility and integration, human-ERP
                  interaction, SaaS adoption, vertical-specific
                  standardization,
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="col-xl-4 col-md-6"
          data-aos="zoom-out-up"
          data-aos-duration={500}
          data-aos-delay={300}
        >
          <div className="colbox">
            <div className="boxicon">
              <span className="services-icon">
                {/* <i class="fa-solid fa-gear"></i> */}
                <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
              </span>
            </div>
            {/* boxicon */}
            <a
              href="https://srvinfotech.com/web-design-development"
              className="h4"
            >
              Search Engine Optimisation
            </a>
            <div className="boxcont">
              <div className="boxdesc">
                <p style={{textAlign: "justify", marginTop:"5px"}}>
                  Enhance your business on the world’s top search engines.
                  We will help you improve the organic visibility of your
                  business keywords and organic traffic to the website.
                </p>
              </div>
            </div>
            {/* boxcont */}
          </div>
          {/* colbox */}
        </div>

        <div className="col-12 btngroup mt-4">
          <NavLink to={'/comming-soon'}><button className="btn btn-outline-warning" >Explore More</button></NavLink>

          <NavLink to={'/comming-soon'}><button className="btn btn-warning">Get a Quote</button></NavLink>

        </div>
      </div>
    </div>
  );
}

import React from "react";
import "./services.css";

export default function Services() {
  return (
    <>
      <div class="about" id="services">
        <div class="container-fluid cmpad py-5">
          <div class="row">
            <div class="col-12 overview" data-aos="fade-right">
              <h1 class="mainhead bighead center" style={{ color: "white" }}>
                Why <span style={{ color: "#ffcc33" }}>Dhanwis Tech Info</span>
              </h1>
              <p class="big  ">
                We are here precision engineered for excellence in quality. Our
                work is to design and develop the best websites in the market
                with a time and quality guarantee. Your journey with us here
                provides us to capture it with a user-friendly experience and
                utmost trust.
              </p>
            </div>
            <div class="col-12">
              {/* <ul class="partnerslist">
                            <li><img class="loadimg" src="https://srvinfotech.com/public/img/partners/g-cloud.png" data-src="https://srvinfotech.com/public/img/partners/g-cloud.png" alt="Google Cloud" data-loaded="true"></li>
                            <li><img class="loadimg" src="https://srvinfotech.com/public/img/partners/duns.png" data-src="https://srvinfotech.com/public/img/partners/duns.png" alt="DUNS" data-loaded="true"></li>
                            <li><img class="loadimg" src="https://srvinfotech.com/public/img/partners/clutch.png" data-src="https://srvinfotech.com/public/img/partners/clutch.png" alt="Clutch" data-loaded="true"></li>
                            <li><img class="loadimg" src="https://srvinfotech.com/public/img/partners/nasscom.svg" data-src="https://srvinfotech.com/public/img/partners/nasscom.svg" alt="NASSCOM" data-loaded="true"></li>
                        </ul> */}
            </div>
          </div>
        </div>
      </div>

      <section className="services py-5">
        <div className="container-fluid cmpad">
          <div class="row">
            <div
              class="col-lg-8 mx-auto"
              data-aos="fade-left"
              data-aos-duration={500}
              data-aos-delay={300}
            >
              <h2 class="mainhead center" style={{ color: "white" }}>
                We Offers the best{" "}
                <span style={{ color: "#ffcc33" }}>Technology Enhancement</span>
              </h2>
              <p class="hddesc center">
                {" "}
                Everything you require to deliver a better project will be
                provided for you. We'll guide your project through every stage
                of development, starting with requirements gathering and moving
                on to design, development, testing, and deployment.{" "}
              </p>
            </div>
          </div>

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
                  {/* <img
                                        className="loadimg"
                                        src="https://srvinfotech.com/public/img/icons/arts.svg"
                                        data-src="https://srvinfotech.com/public/img/icons/arts.svg"
                                        alt="graphic designing |srv infotech"
                                        data-loaded="true"
                                    /> */}
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
                    <p>
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
                  {/* <img
                                        className="loadimg"
                                        src="https://srvinfotech.com/public/img/icons/arts.svg"
                                        data-src="https://srvinfotech.com/public/img/icons/arts.svg"
                                        alt="graphic designing |srv infotech"
                                        data-loaded="true"
                                    /> */}
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
                    <p>
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
                  {/* <img
                                        className="loadimg"
                                        src="https://srvinfotech.com/public/img/icons/arts.svg"
                                        data-src="https://srvinfotech.com/public/img/icons/arts.svg"
                                        alt="graphic designing |srv infotech"
                                        data-loaded="true"
                                    /> */}
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
                    <p>
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
                  {/* <img
                                        className="loadimg"
                                        src="https://srvinfotech.com/public/img/icons/arts.svg"
                                        data-src="https://srvinfotech.com/public/img/icons/arts.svg"
                                        alt="graphic designing |srv infotech"
                                        data-loaded="true"
                                    /> */}
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
                    <p>
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
                  {/* <img
                                        className="loadimg"
                                        src="https://srvinfotech.com/public/img/icons/arts.svg"
                                        data-src="https://srvinfotech.com/public/img/icons/arts.svg"
                                        alt="graphic designing |srv infotech"
                                        data-loaded="true"
                                    /> */}
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
                    <p>
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
                    <i class="fa-solid fa-gear"></i>
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
                    <p>
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

            <div className="col-12 btngroup mt-5">
              <button className="btn btn-outline-warning">Explore More</button>
              <button className="btn btn-warning">Get a Quote</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// <div class="row">
//                     <div class="col-lg-8 mx-auto">
//                         <h2 class="mainhead center">We Offers the best <span class="red">Technology Enhancement</span></h2>
//                         <p class="hddesc center">Everything you require to deliver a better project will be provided for you. We'll guide your project through every stage of development, starting with requirements gathering and moving on to design, development, testing, and deployment. </p>
//                     </div>
//                 </div>

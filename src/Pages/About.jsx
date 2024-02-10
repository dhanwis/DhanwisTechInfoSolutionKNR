import React from "react";
import "./About.css";

export default function About() {
  return (
    <>
      <section>
        <div className="container">
          <div className="row ">
            <div className="col-12">
              <div className="w-full px-4 md:w-8/12 lg:w-7/12">
                <div className="heading-plus-sub mb-5">
                  <small className="text-muted">
                    Technology is best when it brings people together. ...
                  </small>
                  <h1 className="mb-3 mt-5">
                    Dhanwis
                    <br />
                    TechInfo Solutions
                  </h1>
                </div>
              </div>
            </div>

            <div className={`cmpad`}>
              <div className="row">
                <div className={`col-lg-6`}>
                  <h2 className="mainhead">
                    About US
                    <br />{" "}
                    <span style={{ color: "#ffcc33", fontSize: "medium" }}>
                      Power of Technology
                    </span>
                  </h2>
                  <p
                    style={{ textAlign: "justify" }}
                    className="description mt-3"
                  >
                    For over a decade, the world has dramatically changed its
                    course using IT technologies.Dhanwis understand the
                    necessity and have started giving our contribution in this
                    new generation business era to offer our clients, solutions
                    for their every Business and Social Network. Presently
                    catering to clients from India, Canada and Middle Easte
                    Dhanwis is synonymous with a heady mix of enthusiastic,
                    young and experienced engineering professionals and systems
                    development tech wizards, adept at brewing innovative and
                    dynamic e-solutions. Our value-added business services and
                    solutions add a spring to your portfolio of services to
                    enhance user satisfaction. Individually we have experience
                    in variegated fields like designing and developing apt apps
                    (both web and mobile) for start-ups, CRM, Attendance and
                    payroll management, apart from providing seamless e-service
                    platforms suitable across different segments of business and
                    government.
                  </p>
                </div>

                <div className="col-lg-6">
                  <img
                    src="img/web.jpeg"
                    width={"500"}
                    alt="img"
                    className="img-fluid mt-10"
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="200"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

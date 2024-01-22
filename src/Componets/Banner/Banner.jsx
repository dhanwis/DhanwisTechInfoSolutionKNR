import React from "react";


export default function Banner() {

  return (
    <>


      <section className="hero-marketing  d-flex align-items-center">
        <div>
          <div className="row align-items-center">
            <div class="col-lg-6">
              <div class="mr-hero-content">
                <span class="xb-item--subtitle">
                  <span>
                    <img src="/img/icon/hr_icon.png" alt="" />
                  </span>{" "}
                  Hey there! We’re Dhanwis
                </span>
                <h2 class="xb-item--title">
                  Driving{" "}
                  <span class="icon">
                    <img src="/img/icon/m_star.png" alt="" />
                  </span>{" "}
                  Growth Through Digital Solutions{" "}
                  <img id="reload" src="/img/icon/decor2.png" alt="" />
                </h2>
                <p
                  class="xb-item--content mb-50"
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="400"
                >
                  Digital marketing involves leveraging online channels <br />{" "}
                  and platforms to connect with potential customers.
                </p>
                <div
                  class="xb-item--btn"
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="600"
                >
                  <a class="xb-btn xb-btn--marketing" href="#services">
                    <div class="btn-anim-wrap">
                      <span class="button-text">let’s get started</span>
                      <span class="button-text">let’s get started</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="mr-hero-img pos-rel">
                <img
                  data-aos="fade-left"
                  data-aos-duration={500}
                  data-aos-delay={300}
                  src="/img/hero/mr_img.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="xb-backtotop style-marketing active">
        <a href="#" class="scroll">
          <i class="fa-solid fa-arrow-up"></i>
        </a>
      </div>
      <div className="gap-down"></div>
    </>
  );
}

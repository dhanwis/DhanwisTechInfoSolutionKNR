import React from "react";
import ChatbotAI from "../Chatbot/ChatbotAI";

export default function Banner() {
  return (
    <>
      <section
        class="hero-marketing pos-rel d-flex align-items-center"
        data-background="/img/bg/mr_hero_bg.jpg"
      >
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="mr-hero-content">
                <span
                  class="xb-item--subtitle"
                  data-aos="fade-up"
                  data-aos-duration="500"
                >
                  <span>
                    <img src="/img/icon/hr_icon.png" alt="" />
                  </span>{" "}
                  Hey there! We’re seargin
                </span>
                <h2
                  class="xb-item--title"
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="200"
                >
                  Driving{" "}
                  <span class="icon">
                    <img src=" /img/icon/m_star.png" alt="" />
                  </span>{" "}
                  Growth Through Digital Marketing{" "}
                  <img id="reload" src="assets/img/icon/decor2.png" alt="" />
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
                  <a class="xb-btn xb-btn--marketing" href="about.html">
                    <div class="btn-anim-wrap">
                      <span class="button-text">let’s get started</span>
                      <span class="button-text">let’s get started</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="mr-hero-img pos-rel">
                <img
                  data-aos="fade-left"
                  data-aos-duration="500"
                  data-aos-delay="300"
                  src=" /img/hero/mr_img.png"
                  alt=""
                />
                <div class="mr-hero-img-inner">
                  <div class="chart chart--1">
                    <img
                      data-aos="zoom-in"
                      data-aos-duration="600"
                      data-aos-delay="500"
                      src=" /img/hero/chat1.png"
                      alt=""
                    />
                  </div>
                  <div class="chart chart--2">
                    <img
                      data-aos="zoom-in"
                      data-aos-duration="600"
                      data-aos-delay="600"
                      src=" /img/hero/chat2.png"
                      alt=""
                    />
                  </div>
                  <div class="chart chart--3">
                    <img
                      data-aos="zoom-in"
                      data-aos-duration="600"
                      data-aos-delay="700"
                      src="/img/hero/chat3.png"
                      alt=""
                    />
                  </div>
                  <div class="chart chart--4" data-aos="zoom-in"
                    data-aos-duration="600"
                    data-aos-delay="800">

                    <ChatbotAI />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mr-hero-shape">
          <img src="/img/shape/mr_shape.png" alt="" />
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

import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';
import './Banner.css'
import { useEffect } from 'react';

export default function Banner() {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        // data-background="/img/bg/mr_hero_bg.jpg"
        <>
            <section className="mt-5 mr-bg pos-rel d-flex align-items-center" id='home'>
                <div className='row align-items-center'>
                    <div className='col-lg-6'>
                        <div className='mr-hero-content'>
                            <img src="/img/icon/hr_icon.png" alt="" className='me-1 mb-1' />
                            <span className='xb-item--subtitle'>Hey there! We’re seargin</span>
                            <h2 className='xb-item--title' style={{ color: 'white' }}>Driving <span className='icon'><img src="/img/icon/m_star.png" alt="icon" /></span> Growth Through Digital Marketing <img   src=" /img/icon/decor2.png" alt="" /> </h2>
                            <p class="xb-item--content mb-50" data-aos="fade-up" data-aos-duration="500" data-aos-delay="400">Digital marketing involves leveraging online channels <br /> and platforms to connect with potential customers.</p>
                            <div class="xb-item--btn" data-aos="fade-up" data-aos-duration="500" data-aos-delay="600">
                                <a class="xb-btn xb-btn--marketing" href="about.html">
                                    <div class="btn-anim-wrap">
                                        <span class="button-text">let’s get started</span>
                                        <span class="button-text">let’s get started</span>
                                    </div>
                                    
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* image section right */}
                    <div className="col-lg-6">
                        <div className="mr-hero-img pos-rel">
                            <img
                                data-aos="fade-left"
                                data-aos-duration={500}
                                data-aos-delay={300}
                                src="/img/hero/mr_img.png"

                                alt="img-right"
                            />
                        </div>
                    </div>

                </div>
                <div class="mr-hero-shape">
                    <img src="/img/shape/mr_shape.png" alt="" />
                </div>
            </section>
            <div className='gap-down'></div>

            {/* style="width: ; transform: translateX(0px); animation: 33.29s linear 0s infinite normal none running marqueeAnimation-703358;" */}
            {/* <section class="marquee" data-bg-color="#131313" style={{ backgroundColor: 'rgb(19, 19, 19)' }}>
                <div className="mr-marquee marquee-left">
                    <div
                        style={{
                            width: "100000px",
                            transform: "translateX(0px)",
                            animation:
                                "33.29s linear 0s infinite normal none running marqueeAnimation-916010"
                        }}
                        className="js-marquee-wrapper"
                    >
                        <div className="js-marquee" style={{ marginRight: 0, float: "left" }}>
                            <div className="mr-marquee__item">
                                <span>
                                    <img src=" /img/shape/marquee_01.png" alt="" />
                                </span>
                                Branding
                            </div>
                            <div className="mr-marquee__item">
                                <span>
                                    <img src=" /img/shape/marquee_02.png" alt="" />
                                </span>
                                Illustration
                            </div>
                            <div className="mr-marquee__item">
                                <span>
                                    <img src=" /img/shape/marquee_03.png" alt="" />
                                </span>
                                Software
                            </div>
                            <div className="mr-marquee__item">
                                <span>
                                    <img src=" /img/shape/marquee_04.png" alt="" />
                                </span>
                                Digital Solution
                            </div>
                            <div className="mr-marquee__item">
                                <span>
                                    <img src=" /img/shape/marquee_05.png" alt="" />
                                </span>
                                Ideas
                            </div>
                            <div className="mr-marquee__item">
                                <span>
                                    <img src=" /img/shape/marquee_03.png" alt="" />
                                </span>
                                Software
                            </div>
                            <div className="mr-marquee__item">
                                <span>
                                    <img src=" /img/shape/marquee_04.png" alt="" />
                                </span>
                                Digital Marketing
                            </div>
                            <div className="mr-marquee__item">
                                <span>
                                    <img src=" /img/shape/marquee_01.png" alt="" />
                                </span>
                                Branding
                            </div>
                            <div className="mr-marquee__item">
                                <span>
                                    <img src="  /img/shape/marquee_03.png" alt="" />
                                </span>
                                Marketing
                            </div>
                        </div>
                        <div className="js-marquee" style={{ marginRight: 0, float: "left" }}>
                            <div className="mr-marquee__item">
                                <span>
                                    <img src=" /img/shape/marquee_01.png" alt="" />
                                </span>
                                Branding
                            </div>
                            <div className="mr-marquee__item">
                                <span>
                                    <img src=" /img/shape/marquee_02.png" alt="" />
                                </span>
                                Illustration
                            </div>
                            <div className="mr-marquee__item">
                                <span>
                                    <img src=" /img/shape/marquee_03.png" alt="" />
                                </span>
                                Software
                            </div>
                            <div className="mr-marquee__item">
                                <span>
                                    <img src=" /img/shape/marquee_04.png" alt="" />
                                </span>
                                Digital Solution
                            </div>
                            <div className="mr-marquee__item">
                                <span>
                                    <img src=" /img/shape/marquee_05.png" alt="" />
                                </span>
                                Ideas
                            </div>
                            <div className="mr-marquee__item">
                                <span>
                                    <img src=" /img/shape/marquee_03.png" alt="" />
                                </span>
                                Software
                            </div>
                            <div className="mr-marquee__item">
                                <span>
                                    <img src=" /img/shape/marquee_04.png" alt="" />
                                </span>
                                Digital Marketing
                            </div>
                            <div className="mr-marquee__item">
                                <span>
                                    <img src=" /img/shape/marquee_01.png" alt="" />
                                </span>
                                Branding
                            </div>
                            <div className="mr-marquee__item">
                                <span>
                                    <img src=" /img/shape/marquee_03.png" alt="" />
                                </span>
                                Marketing
                            </div>
                        </div>
                    </div>
                </div>
            </section > */}
        </>
    )
}

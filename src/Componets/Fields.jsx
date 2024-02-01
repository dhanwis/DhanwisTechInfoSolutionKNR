import React from 'react'
import './Fields.css'

export default function Fields() {
    return (
        <div className=' '>

            <div className="mt-5 row" data-aos="fade-right" id="services">
                <div class="col">
                    <div className="why-dhanwis" style={{marginTop:"5px"}}>
                        <h1 class="mainhead bighead center" >
                            Why <span style={{ color: "#ffcc33" }}>Dhanwis TechInfo</span>
                        </h1>
                        <p className="description">
                            We are here precision engineered for excellence in quality. Our
                            work is to design and develop the best websites in the market
                            with a time and quality guarantee. Your journey with us here
                            provides us to capture it with a user-friendly experience and
                            utmost trust.
                        </p></div>
                    <div
                        data-aos="fade-left"
                        data-aos-duration={500}
                        data-aos-delay={300}
                    >
                        <div className="offers">
                            <h2 class="mainhead center"  >
                                We Offers the best{" "}
                                <span style={{ color: "#ffcc33" }}>Technology Enhancement</span>
                            </h2>
                            <p class="description" >
                                {" "}
                                Everything you require to deliver a better project will be
                                provided for you. We'll guide your project through every stage
                                of development, starting with requirements gathering and moving
                                on to design, development, testing, and deployment.{" "}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`p-4 cmpad`}>
                <div className="row">
                    <div className={`col-lg-6`}>
                        <h2 className="mainhead">
                            Business niches that
                            <br /> <span style={{ color: '#ffcc33' }}>love work with us</span>
                        </h2>
                        <p className="description mt-3" style={{textAlign:'justify'}}>
                        We are here to assist you with all your virtual base arrangements, at simply a tick. Getting you carefully assembled innovation arrangements with a spot of dynamic and customized contact. DHANWIS is a developing and natural plan organization, in fact and inventively gifted to make an interpretation of your image into its genuine computerized life.
                        </p>
                    </div>

                    <div className="col-lg-6" data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="500">
                        <ul className="typelist pl-lg-5">
                            <li>
                                <a href="#">
                                    <span className="icon">
                                        <i class="fa-solid fa-building-columns"></i>
                                    </span>

                                    <h6>Banking &amp; Finance</h6>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span className="icon">
                                        <i class="fa-solid fa-cart-shopping"></i>
                                    </span>

                                    <h6>Online Shopping</h6>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span className="icon">
                                        <i class="fa-solid fa-school"></i>
                                    </span>

                                    <h6>Educational Institutions</h6>
                                </a>
                            </li>
                        </ul>

                        <ul className="typelist pr-lg-5">
                            <li>
                                <a href="#">
                                    <span className="icon">
                                        <i class="fa-solid fa-hotel"></i>
                                    </span>

                                    <h6>Hotels &amp; Restaurents</h6>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span className="icon">
                                        <i class="fa-solid fa-gear"></i>
                                    </span>

                                    <h6>Service Sectors</h6>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span className="icon">
                                        <i class="fa-solid fa-car"></i>
                                    </span>

                                    <h6>Tours &amp; Travel</h6>
                                </a>
                            </li>
                        </ul>

                    </div>

                </div>




            </div>
        </div>
    )
}

import React from 'react'
import './Fields.css'

export default function Fields() {
    return (
        <div >
            <div className={`cmpad`}>
                <div className="row">
                    <div className={`col-lg-6`}>
                        <h2 className="mainhead">
                            Business niches that
                            <br /> <span style={{ color: '#ffcc33' }}>love work with us</span>
                        </h2>
                        <p className="description mt-3">
                            We use the right mix of digital marketing services. we are here to
                            provide the best content to break your marketing efforts. get the best
                            content marketing strategies. we create the most amazing customer
                            experiences. Successful campaigns that deliver on business objectives.
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

import React from 'react'
import './appDevelopment.css'
import { Container, Row, Col } from 'react-bootstrap-v5'

export default function WebDevelopment() {
    return (
        <div className='container'>
            <div className='row'>
                <Col>
                    <div style={{ width: '100%' }}>
                        <div className="py-3 ld-fancy-heading ld_fancy_heading_6585270055965">
                            {" "}
                            <h1 className="ld-fh-element lqd-highlight-underline lqd-highlight-grow-left text-decoration-default">
                                {" "}
                                Web Design &amp; Development
                            </h1>
                        </div>
                    </div>
                </Col>

                <section className="section1">
                    <Container>
                        <Row className="mt-2">
                            <Col  >
                                <div className="android p-5 one">
                                    <div className="left-side">
                                        <div>
                                            <h1>Web Application Development</h1>
                                        </div>

                                        <div>
                                            <p className="mt-3">
                                                Our master web application designers utilize programming processes, as PHP, Python, Java, ASP.net and HTML to create a progressive web application. Our team has the hands on experience in the industry by which we can ensure the most optimized, light weight and error free solutions. And so Foxiom is popular in the industry and considered the best web development company.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="mt-4">
                                        <img src="/img/448385ef910b3d95b93303d6614c219b.service-4.webp" alt="" width={'500px'} height={'auto'} />
                                    </div>



                                </div>
                            </Col>

                            <div className="line-long-area">
                                <div className="line-long"></div>
                            </div>

                            <Col  >
                                <div className="android p-5 one">
                                    <div className="left-side mt-4">
                                        <div>
                                            <h1>E-commerce Development</h1>
                                        </div>

                                        <div>
                                            <p className="mt-3">
                                                E-commerce development plays a crucial role in enabling businesses to reach a global audience, increase sales, and adapt to the changing landscape of online commerce. Successful e-commerce websites prioritize user experience, security, and seamless transaction processes to build trust and loyalty among customers.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="mt-4">
                                        <img src="/img/showing-cart-trolley-shopping-online-sign-graphic.jpg" alt="" width={'500px'} height={'auto'} />
                                    </div>
                                </div>
                            </Col>

                            <div className="mt-5 text-center">
                                <div className="wpb_wrapper">
                                    <div className="ld-fancy-heading ld_fancy_heading_658527062806c">
                                        {" "}
                                        <h2 className="ld-fh-element lqd-highlight-underline lqd-highlight-grow-left text-decoration-default">
                                            {" "}
                                            Our Technologies
                                        </h2>
                                    </div>
                                    <div className="ld-fancy-heading ld_fancy_heading_658527062c148">
                                        {" "}
                                        <p className="ld-fh-element lqd-highlight-underline lqd-highlight-grow-left text-decoration-default">
                                            {" "}
                                            We unleash your business potential by maximising the innovation.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* strip animated */}

                            <div class="col-12 mt-2 mb-5">
                                <ul class="partnerslist mt-5">
                                    <li><img class="loadimg" src="/img/development/icons8-react-100.png" data-src="https://srvinfotech.com/public/img/partners/g-cloud.png" alt="Google Cloud" data-loaded="true" /></li>
                                    <li><img class="loadimg" src="/img/development/icons8-kotlin-48.png" data-src="https://srvinfotech.com/public/img/partners/duns.png" alt="DUNS" data-loaded="true" /></li>
                                    <li><img class="loadimg" src="/img/development/icons8-flutter-48.png" data-src="https://srvinfotech.com/public/img/partners/clutch.png" alt="Clutch" data-loaded="true" /></li>
                                    <li><img class="loadimg" src="/img/development/icons8-nodejs-48.png" data-src="https://srvinfotech.com/public/img/partners/nasscom.svg" alt="NASSCOM" data-loaded="true" /></li>

                                    <li><img class="loadimg" src="/img/development/icons8-python-48.png" data-src="https://srvinfotech.com/public/img/partners/duns.png" alt="DUNS" data-loaded="true" /></li>
                                    <li><img class="loadimg" src="/img/development/icons8-c++-48.png" data-src="https://srvinfotech.com/public/img/partners/clutch.png" alt="Clutch" data-loaded="true" /></li>
                                    <li><img class="loadimg" src="/img/development/icons8-swift-48.png" data-src="https://srvinfotech.com/public/img/partners/nasscom.svg" alt="NASSCOM" data-loaded="true" /></li>


                                    <li><img class="loadimg" src="/img/development/icons8-html-48.png" data-src="https://srvinfotech.com/public/img/partners/duns.png" alt="DUNS" data-loaded="true" /></li>
                                    <li><img class="loadimg" src="/img/development/icons8-javascript-48.png" data-src="https://srvinfotech.com/public/img/partners/clutch.png" alt="Clutch" data-loaded="true" /></li>
                                    <li><img class="loadimg" src="/img/development/icons8-css-48.png" data-src="https://srvinfotech.com/public/img/partners/nasscom.svg" alt="NASSCOM" data-loaded="true" /></li>

                                    <li><img class="loadimg" src="/img/development/icons8-angular-48.png" data-src="https://srvinfotech.com/public/img/partners/g-cloud.png" alt="Google Cloud" data-loaded="true" /></li>
                                </ul>
                            </div>
                        </Row>
                    </Container>
                </section>
            </div>
        </div >
    )
}

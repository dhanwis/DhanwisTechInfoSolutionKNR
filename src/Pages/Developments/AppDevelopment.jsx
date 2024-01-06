import React from 'react'
import './appDevelopment.css'
import { Container, Row, Col } from 'react-bootstrap-v5'

export default function AppDevelopment() {

    return (
        <div className='container'>
            <div className='row'>
                <Col>
                    <div style={{ width: '100%' }}>
                        <div className="p-5 ld-fancy-heading ld_fancy_heading_6585270055965">
                            {" "}
                            <h1 className="ld-fh-element lqd-highlight-underline lqd-highlight-grow-left text-decoration-default">
                                {" "}
                                App Development
                            </h1>
                        </div>
                    </div>
                </Col>

                {/* <div className='col-lg-6'>
                    <div class="effect">

                        <img src="https://res.cloudinary.com/websway/image/upload/v1538242836/img_vkgzwy.png" />
                        <img src="https://res.cloudinary.com/websway/image/upload/v1538242836/img_vkgzwy.png" />
                        <img src="https://res.cloudinary.com/websway/image/upload/v1538242836/img_vkgzwy.png" />
                        <img src="https://res.cloudinary.com/websway/image/upload/v1538242836/img_vkgzwy.png" />

                    </div>
                </div> */}

                <section className="section1">
                    <Container>
                        <Row className="mt-2">
                            <Col  >
                                <div className="p-5 one">
                                    <div className="left-side">
                                        <div>
                                            <h1>Android Development</h1>
                                        </div>

                                        <div>
                                            <p className="mt-3">
                                                We are a fully-fledged team of developers which works together for building exports in Android platform.
                                                Our developers are devoted to building top notch and versatile mobile applications that suit the requirements of any undertaking.
                                                Apart from standalone applications,
                                                we also develop management apps and solutions which will be served as part of the enterprise solutions we provide.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="">
                                        <img src="/img/android-dev.jpeg" alt="" width={'500px'} height={'auto'} />
                                    </div>


                                    {/* <img src="https://res.cloudinary.com/websway/image/upload/v1538242836/img_vkgzwy.png" /> */}
                                    {/* <img src="https://res.cloudinary.com/websway/image/upload/v1538242836/img_vkgzwy.png" />
                                        <img src="https://res.cloudinary.com/websway/image/upload/v1538242836/img_vkgzwy.png" />
                                        <img src="https://res.cloudinary.com/websway/image/upload/v1538242836/img_vkgzwy.png" /> */}
                                </div>
                            </Col>

                            <div className="line-long-area">
                                <div className="line-long"></div>
                            </div>

                            <div className="p-5 one">
                                <div className="">
                                    <img src="/img/448385ef910b3d95b93303d6614c219b.service-4.webp" alt="" />
                                </div>

                                <div className="left-side ">
                                    <div>
                                        <h1>IOS Development</h1>
                                    </div>

                                    <div>
                                        <p className="mt-3">
                                            Some solutions are effective only on the go.
                                            For the purpose, we have our team equipped with iOS development skill sets.
                                            We are the experts to develop the apps with different
                                            technologies which we shall be recommending to our clients based on the requirement,
                                            feasibility,
                                            and optimization of the technology with respective to the solution required.
                                        </p>
                                    </div>
                                </div>
                            </div>

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

                            
                        </Row>
                    </Container>
                </section>
            </div>
        </div >
    )
}





import React from 'react'
import './About.css'

export default function About() {
    return (
        <>
            <section>
                <div className='container'>
                    <div className='row '>
                        <div className='col-12'>
                            <div className="w-full px-4 md:w-8/12 lg:w-7/12">
                                <div className="heading-plus-sub mb-5">
                                    <small className='text-muted'>Technology is best when it brings people together. ...</small>
                                    <h1 className="mb-3 mt-5">
                                        Dhanwis
                                        <br />
                                        TechInfo Solution
                                    </h1>
                                </div>
                            </div>
                        </div>

                        <div className={`cmpad`}>
                            <div className="row">
                                <div className={`col-lg-6`}>
                                    <h2 className="mainhead">
                                        About US
                                        <br /> <span style={{ color: '#ffcc33', fontSize: 'medium' }}>Power of Technology</span>
                                    </h2>
                                    <p className="description mt-3">
                                        We use the right mix of digital marketing services. we are here to
                                        provide the best content to break your marketing efforts. get the best
                                        content marketing strategies. we create the most amazing customer
                                        experiences. Successful campaigns that deliver on business objectives.
                                    </p>
                                </div>

                                <div className="col-lg-6 "  >
                                    <img src="img/web.jpeg" width={'500'} alt="img" className='mt-3 ' data-aos="fade-up"
                                        data-aos-duration="500"
                                        data-aos-delay="200" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >


        </>
    )
}


// data-animation="fadeInUp"  animated fadeInUp visible


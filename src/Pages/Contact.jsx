import React, { useEffect } from 'react'
import './Contact.css'

export default function Contact() {


    return (
        <div>
            <div class="container" id='contact'>
                <div class="row ld-row ld-row-outer ">
                    <div class="wpb_column vc_column_container vc_col-sm-12 liquid-column-657e0f4f7e242">
                        <div class="vc_column-inner  ">
                            <div class="wpb_wrapper">
                                <div class="vc_separator wpb_content_element vc_separator_align_left vc_sep_width_100 vc_sep_pos_align_center vc_custom_1654234394106 vc_separator-has-text">
                                    <span class="vc_sep_holder vc_sep_holder_l"><span style={{ borderColor: '#191c5f border-color:rgba(25,28,95,.12)' }} class="vc_sep_line"></span>
                                    </span><h4 style={{ color: 'white', marginTop: '7px' }}>SAY HELLO!</h4><span class="vc_sep_holder vc_sep_holder_r"><span style={{ borderColor: '#191c5f border-color:rgba(25,28,95,.12)' }} class="vc_sep_line"></span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='row'>
                    <div className='col-lg-6'>
                        <div className="mt-5 ld_fancy_heading_657e0f4f82117 ">
                            <h3 className="ld-fh-element" >
                                Searching for perfect business partner in SaaS?
                            </h3>
                        </div>

                        <div className="mt-3 ld-fancy-heading ld_fancy_heading_657e0f4f82bc6">

                            <p className="ld-fh-element lqd-highlight-underline lqd-highlight-grow-left text-decoration-default">
                                Connect with us for further business enquiries for our services
                            </p>
                        </div>
                    </div>


                    <div className='col-lg-6'>
                        <div className="mt-5">
                            <div className="vc_column-inner  ">
                                <div className="wpb_wrapper">
                                    <div className="ld-fancy-heading text-uppercase ld_fancy_heading_657e0f4f83c76">
                                        <h6 className="ld-fh-element lqd-highlight-underline lqd-highlight-grow-left text-decoration-default" >
                                            Locations
                                        </h6>
                                    </div>
                                    <div className="ld-fancy-heading ld_fancy_heading_657e0f4f8486f">

                                        <h6 className="ld-fh-element lqd-highlight-underline lqd-highlight-grow-left text-decoration-default">

                                            <p />
                                        </h6>

                                        <h6 style={{ marginTop: '4 rem' }}>Corporate Office:</h6>{" "}
                                        <p className='contact-descripton'>
                                            FOXIOM LEADS PVT LTD 16&amp;17 2nd floor Neo space 2 Kinfra Techno
                                            Industrial Park Calicut University (po) Kakkanchery Malappuram
                                        </p>{" "}

                                        <div>
                                            <h6>Regional Office:</h6> <p style={{ marginTop: '1em', marginBottom: '1em' }}>26, Mecca Street, Fahaheel, Kuwait</p>
                                        </div>
                                    </div>

                                    <div className="  d-flex justify-content-between">
                                        <div className="wpb_wrapper">
                                            <div className="ld-fancy-heading text-uppercase ld_fancy_heading_657e0f4f855c6">
                                                {" "}
                                                <h6 className="ld-fh-element lqd-highlight-underline lqd-highlight-grow-left text-decoration-default">
                                                    {" "}
                                                    Mail Us
                                                </h6>
                                            </div>
                                            <div className="ld-fancy-heading ld_fancy_heading_657e0f4f8612c">
                                                {" "}
                                                <p className="ld-fh-element lqd-highlight-underline lqd-highlight-grow-left text-decoration-default">
                                                    {" "}
                                                    Connect with us and let’s grow together
                                                </p>
                                            </div>
                                            <div className="ld-fancy-heading ld_fancy_heading_657e0f4f86839">
                                                {" "}
                                                <h6 className="ld-fh-element lqd-highlight-underline lqd-highlight-grow-left text-decoration-default">
                                                    {" "}
                                                    <a
                                                        style={{ color: "red" }}
                                                        href="mailto:hr@foxiom.com"
                                                    >
                                                        hr@foxiom.com
                                                    </a>
                                                </h6>
                                            </div>
                                        </div>

                                        {/* call section */}
                                        <div className="wpb_wrapper">
                                            <div className="ld-fancy-heading text-uppercase ld_fancy_heading_657e0f4f87411">
                                                {" "}
                                                <h6 className="ld-fh-element lqd-highlight-underline lqd-highlight-grow-left text-decoration-default">
                                                    {" "}
                                                    Call Us
                                                </h6>
                                            </div>
                                            <div className="ld-fancy-heading ld_fancy_heading_657e0f4f87ab3">
                                                {" "}
                                                <p className="ld-fh-element lqd-highlight-underline lqd-highlight-grow-left text-decoration-default">
                                                    {" "}
                                                    We are just one call away
                                                </p>
                                            </div>
                                            <div className="ld-fancy-heading ld_fancy_heading_657e0f4f88134">
                                                {" "}
                                                <h6 className="ld-fh-element lqd-highlight-underline lqd-highlight-grow-left text-decoration-default">
                                                    {" "}
                                                    <span style={{ color: "#000080" }}>
                                                        <a
                                                            style={{ color: "red" }}
                                                            href="tel:+919895111400"
                                                        >
                                                            +91 9895111400 |{" "}
                                                        </a>
                                                        <a style={{ color: "red" }} href="tel:+96566011953">
                                                            +965 66011953
                                                        </a>
                                                    </span>
                                                </h6>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
            {/* {window.innerWidth <= 500 ? <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3904.398466150162!2d75.36439217426252!3d11.877317788346453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6ce1316235134b%3A0x52648ce532c58725!2sDhanwis%20Techinfo%20Solutions%20%7C%20Best%20Website%20Development%20%7C%20App%20Development%20%7C%20Digital%20Marketing%20%7C%20Company%20In%20Kannur%20%7C%20Kerala!5e0!3m2!1sen!2sin!4v1704704173460!5m2!1sen!2sin"
                width="400" height="300" style="border:0;"
                allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" /> : ''} */}

            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2760.82306143901!2d75.36421720688162!3d11.877670092596782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6ce1316235134b%3A0x52648ce532c58725!2sDhanwis%20Techinfo%20Solutions%20%7C%20Best%20Website%20Development%20%7C%20App%20Development%20%7C%20Digital%20Marketing%20%7C%20Company%20In%20Kannur%20%7C%20Kerala!5e0!3m2!1sen!2sin!4v1704444011945!5m2!1sen!2sin"
                width={`${window.innerWidth <= 500 ? 400 : '100%'}`}
                height={`${window.innerWidth <= 500 ? 300 : '600'}`}
                style={{ border: 0, marginTop: "4em" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
        </div>
    )
}

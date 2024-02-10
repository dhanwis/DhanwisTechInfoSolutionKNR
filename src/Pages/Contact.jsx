import React, { useEffect } from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div>
      <div class="container" id="contact">
        <div class="row ld-row ld-row-outer ">
          <div class=" ">
            <div class="  ">
              <div class="wpb_wrapper">
                <div class=" ">
                  <h4 className="say_hello">
                    {window.innerWidth <= 991 ? "Hai," : "SAY HELLO!"}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row  pt-lg-5 pt-sm-0">
          <div className="left col-lg-6 col-sm-12">
            <div className="mt-5 ld_fancy_heading_657e0f4f82117 ">
              <h3 className="ld-fh-element">
                Searching for perfect business Solutions?
              </h3>
            </div>

            <div className="mt-3 ld-fancy-heading ld_fancy_heading_657e0f4f82bc6">
              <p className="ld-fh-element lqd-highlight-underline lqd-highlight-grow-left text-decoration-default">
                Connect with us for further business enquiries for our services
              </p>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="mt-5">
              <div className=" ">
                <div className="wpb_wrapper">
                  <div className="ld-fancy-heading text-uppercase ld_fancy_heading_657e0f4f83c76">
                    <h6 className="ld-fh-element lqd-highlight-underline lqd-highlight-grow-left ">
                      Locations
                    </h6>
                  </div>

                  <div className="ld-fancy-heading ld_fancy_heading_657e0f4f8486f">
                    <h6 className="mt-5">Corporate Office:</h6>{" "}
                    <p className="contact-descripton">
                      Dhanwis Techinfo Solutions 1st floor TKH Complex, Opp
                      Jawahar Library,Yogasala Road, Kannur, 670001
                    </p>{" "}
                  </div>

                  <div className="d-lg-flex justify-content-between d-sm-block">
                    <div className="wpb_wrapper mail-us">
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
                        <div>
                          <a href="mailto:info@dhanwis.com">info@dhanwis.com</a>
                        </div>
                        <div>
                          <a href="mailto:dhanwisinfo.com">
                            dhanwisinfo@gmail.com
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* call section */}
                    <div className="wpb_wrapper call-us">
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
                          <span>
                            <a href="tel:+918086 487 219 ">
                              +91 8086 487 219 |{" "}
                            </a>
                            <a href="tel:+96566011953">+9961 487 219</a>
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

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2760.82306143901!2d75.36421720688162!3d11.877670092596782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6ce1316235134b%3A0x52648ce532c58725!2sDhanwis%20Techinfo%20Solutions%20%7C%20Best%20Website%20Development%20%7C%20App%20Development%20%7C%20Digital%20Marketing%20%7C%20Company%20In%20Kannur%20%7C%20Kerala!5e0!3m2!1sen!2sin!4v1704444011945!5m2!1sen!2sin"
        width={`${window.innerWidth <= 500 ? 400 : "100%"}`}
        height={`${window.innerWidth <= 500 ? 300 : "600"}`}
        style={{ border: 0, marginTop: "4em" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

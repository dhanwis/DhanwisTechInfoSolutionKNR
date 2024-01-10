import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [show, setShow] = useState(false);
  //const [showSearch, setShowSearch] = useState(false);

  return (
    <>
      <div className="xb-backtotop style-marketing">
        <a href="#" className="scroll">
          <i className="far fa-arrow-up" />
        </a>
      </div>
      {/* <div id="xb-loadding" className="xb-loader xb-loader-marketing"><div className="loading-spin" /></div> */}

      <header
        id="xb-header-area"
        className="site-header header-marketing is-sticky "
      >
        <div className="xb-header__top">
          <div className="container m-auto ul_li_between  d-flex justify-content-between">
            <div className="xb-social ul_li  p-3">
              <span>Follow us :</span>
              <ul className="ul_li">
                <li>
                  <a href="https://www.instagram.com/dhanwistechinfosolutions/">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/dhanwisinfo">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="https://in.linkedin.com/in/dhanwis-techinfo-solutions-9505622a7">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </li>
                <li>
                  <a href="https://api.whatsapp.com/send?phone=8086487219"><i class="fa-brands fa-whatsapp"></i></a>
                </li>
              </ul>
            </div>
            <div className="">
              <button className="btn btn-warning btn-sm">
                {" "}
                Let's Talk
                <span className="headphone-icon ms-2">
                  <i className="fa-solid fa-headphones"></i>
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="xb-header__wrap xb-header-has-arrow xb-header ">
          <div className="container">
            <div className="ul_li_between">
              <div>
                <a class="navbar-brand" href="#">
                  <div className="d-flex">
                    {/* <NavLink to={'/'}> <h2 style={{ color: "#ffcc33" }}>Dhanwis</h2></NavLink> */}
                    <a href="/">
                      <img class="logo-white" src="img/logo/Dhanwis Logo-01.png" alt="logo" style={{ maxWidth: '150px' }} />
                    </a>
                  </div>
                </a>
              </div>



              <div className="main-menu__wrap ul_li navbar navbar-expand-lg">
                <nav className="main-menu collapse navbar-collapse">
                  <ul>
                    <li className="menu-item-has-children active">
                      <NavLink to={'/'}> <span>Home</span></NavLink>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="/about"><span>About us</span></a>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="/portfolio-section">
                        <span>Portfolio</span>
                      </a>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#services">
                        <span>Services</span>
                      </a>
                      <ul className="submenu">
                        <li>
                          <a href="/appDevelopment"><span>Mobile App Development</span></a>
                        </li>
                        {/* <li>
                          {" "}
                          <NavLink to={"/softwaredevelopment"}>
                            <span>Software Development</span>
                          </NavLink>{" "}
                        </li>
                        <li>
                          <NavLink to={"/digital-marketing"}>
                            <span>Digital Marketing</span>
                          </NavLink>{" "}
                        </li> */}
                        <li>
                          {" "}

                          <a href="/webDevelopment"> <span>Web  Development</span></a>
                        </li>
                        {/* <li><a href="checkout.html"><span>ERP Development</span></a></li> */}
                      </ul>
                    </li>
                    <li>
                      <a href="/careers">
                        <span>Careers</span>
                      </a>
                    </li>

                    <li className="menu-item-has-children">
                      <a href="/contact"><span>Contact</span></a>
                    </li>

                  </ul>
                </nav>
              </div>
              {/* search btn */}

              <div className="xb-header__right ul_li">
                {/* <ul className="xb-header__action ul_li">
                  <li>
                    <a
                      className="header-search-btn"
                      onClick={() => setShowSearch(!showSearch)}
                    >
                      <img src="public/img/icon/ins_search.svg" alt="" />
                    </a>
                  </li>
                </ul> */}
                <div className="d-none d-lg-block">
                  <a
                    className="xb-header-bar offcanvas-sidebar-btn ml-30"
                    onClick={() => setShow(!show)}
                  >
                    <div className="xb-header-bar__icon">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* header end */}
      {/* header search start */}
      {/* <div
        className={`header-search-form-wrapper style-black ${showSearch ? "open" : ""
          }`}
      >
        <div
          className="xb-search-close xb-close"
          onClick={() => setShowSearch(false)}
        />
        <div className="header-search-container">
          <form role="search" className="search-form" action="#">
            <input
              type="search"
              className="search-field"
              placeholder="Search …"
              name="s"
            />
          </form>
        </div>
      </div> */}
      {/* header search end */}
      {/* sidebar-info start */}
      <div className={`offcanvas-sidebar ${show ? "active" : ""}`}>
        <div className="sidebar-menu-close">
          <a className="xb-close" onClick={() => setShow(false)} />
        </div>
        <div className="sidebar-top mb-65">
          <div className="sidebar-logo mb-40">
            <a href="index.html">
              <img src="assets/img/logo/logo3.svg" alt="logo" />
            </a>
          </div>
          <div className="sidebar-content">
            Creative Digital Strategies <br /> for Business Success
          </div>
        </div>
        <div className="sidebar-contact-info mb-65">
          <h4 className="sidebar-heading">Contact Information</h4>
          <ul className="sidebar-info-list list-unstyled">
            <li>
              <span>
                <img src="/img/icon/star-2.svg" alt="" />
              </span>
              Kannur Kerala, India, 670702
            </li>
            <li>
              <a href="#!">
                <span>
                  <img src="/img/icon/star-2.svg" alt="" />
                </span>
                +91 996 148 72 19
              </a>
            </li>
            <li>
              <a href="#!">
                <span>
                  <img src="/img/icon/star-2.svg" alt="" />
                </span>
                +91 808 648 72 19
              </a>
            </li>
            <li>
              <a href="#!">
                <span>
                  <img src="/img/icon/star-2.svg" alt="" />
                </span>
                dhanwistechinfosolutions@gmail.com
              </a>
            </li>
          </ul>
        </div>
        {/* <div className="sidebar-newsletter">
          <h4 className="sidebar-heading">Get Regular Updated</h4>
          <form
            action="#"
            className="sidebar-newsletter-form mr-footer-newsletter"
          >
            <span className="icon">
              <img src="/img/icon/mr-sms-tracking.svg" alt="" />
            </span>
            <input type="text" placeholder="Your Email Address" />
            <button>
              <img src="/img/icon/mr_arrow_up.svg" alt="arrow" />
            </button>
          </form>
        </div> */}
        <div className="sidebar-social mr-footer-info ">
          <h4 className="sidebar-heading">follwo us</h4>
          <ul className="xb-item--social ul_li">
            <li>
              <a href="https://www.facebook.com/dhanwisinfo">
                <i className="fab fa-facebook-f" />
              </a>
            </li>
            <li>
              <a href="#!">
                <i className="fab fa-linkedin-in" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/dhanwistechinfosolutions/">
                <i className="fab fa-instagram" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

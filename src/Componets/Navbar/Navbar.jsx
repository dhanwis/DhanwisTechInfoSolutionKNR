import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [showSide, setShowSide] = useState(false);
  const [showMobile, setShowMobile] = useState(false);

  return (
    <>
      <header
        id="xb-header-area"
        className="site-header header-marketing is-sticky"
      >
        <div className="xb-header__top">
          <div className="container m-auto ul_li_between">
            <div className="xb-social ul_li">
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
                  <a href="https://api.whatsapp.com/send?phone=8086487219">
                    <i class="fa-brands fa-whatsapp"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="xb-header__language pl-70">
              <div className="">
                <button className="btn btn-warning btn-sm mb-2">
                  {" "}
                  Let's Talk
                  <span className="headphone-icon ms-2">
                    <i className="fa-solid fa-headphones"></i>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* xb-header__wrap xb-header-has-arrow xb-header */}
        <div className="mt-3">
          <div className="container">
            <div className="ul_li_between">
              {/* xb-header__logo */}
              <div className="">
                <NavLink to={"/"}>
                  {" "}
                  <h2 style={{ color: "#ffcc33" }}>Dhanwis</h2>
                </NavLink>
              </div>
              <div className="main-menu__wrap ul_li navbar navbar-expand-lg">
                <nav className="main-menu collapse navbar-collapse">
                  <ul>
                    <li className="menu-item-has-children active">
                      <NavLink to={"/"}>
                        {" "}
                        <span>Home</span>
                      </NavLink>
                    </li>
                    <li className="menu-item-has-children">
                      <NavLink to={"/about"}>
                        <span>About us</span>
                      </NavLink>
                    </li>
                    <li className="menu-item-has-children">
                      <NavLink to={"/portfolio-section"}>
                        <span>Portfolio</span>
                      </NavLink>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#services">
                        <span>Services</span>
                      </a>
                      <ul className="submenu">
                        <li>
                          <NavLink to={"/appDevelopment"}>
                            <span>Mobile App Development</span>
                          </NavLink>
                        </li>
                        <li>
                          {" "}
                          <NavLink to={"/softwaredevelopment"}>
                            <span>Software Development</span>
                          </NavLink>{" "}
                        </li>
                        <li>
                          <NavLink to={"/digital-marketing"}>
                            <span>Digital Marketing</span>
                          </NavLink>{" "}
                        </li>
                        <li>
                          {" "}
                          <NavLink to={"/webDevelopment"}>
                            <span>Web Design &amp; Development</span>
                          </NavLink>{" "}
                        </li>
                        {/* <li><a href="checkout.html"><span>ERP Development</span></a></li> */}
                      </ul>
                    </li>
                    <li>
                      <NavLink to={"/careers"}>
                        <span>Careers</span>
                      </NavLink>
                    </li>

                    <li className="menu-item-has-children">
                      <NavLink to={"/contact"}>
                        <span>Contact</span>
                      </NavLink>
                    </li>
                  </ul>
                </nav>

                <div className="xb-header-wrap style-black">
                  <div
                    className={`xb-header-menu ${showMobile ? "active" : ""}`}
                  >
                    <div className="xb-header-menu-scroll">
                      <div
                        className="xb-menu-close xb-hide-xl xb-close"
                        onClick={() => setShowMobile(false)}
                      />
                      <div className="xb-logo-mobile xb-hide-xl">
                        <NavLink to={"/"}>
                          {" "}
                          <h2 style={{ color: "#ffcc33" }}>Dhanwis</h2>
                          <small className="text-muted">TechInfoSolution</small>
                        </NavLink>
                      </div>
                      <nav className="xb-header-nav">
                        <ul className="xb-menu-primary clearfix">
                          <li className="menu-item-has-children active">
                            <NavLink to={"/"}>
                              {" "}
                              <span>Home</span>
                            </NavLink>
                          </li>
                          <li className="menu-item-has-children">
                            <NavLink to={"/about"}>
                              <span>About us</span>
                            </NavLink>
                          </li>
                          <li className="menu-item-has-children">
                            <NavLink to={"/portfolio-section"}>
                              <span>Portfolio</span>
                            </NavLink>
                          </li>
                          <li className="menu-item-has-children">
                            <a href="#services">
                              <span>Services</span>
                            </a>
                            <ul className="submenu">
                              <li>
                                <NavLink to={"/appDevelopment"}>
                                  <span>Mobile App Development</span>
                                </NavLink>
                              </li>
                              <li>
                                {" "}
                                <NavLink to={"/softwaredevelopment"}>
                                  <span>Software Development</span>
                                </NavLink>{" "}
                              </li>
                              <li>
                                <NavLink to={"/digital-marketing"}>
                                  <span>Digital Marketing</span>
                                </NavLink>{" "}
                              </li>
                              <li>
                                {" "}
                                <NavLink to={"/webDevelopment"}>
                                  <span>Web Design &amp; Development</span>
                                </NavLink>{" "}
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
                            <NavLink to={"/contact"}>
                              <span>Contact</span>
                            </NavLink>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <div className="xb-header-menu-backdrop" />
                </div>
              </div>

              <div className="xb-header__right ul_li">
                <div className="d-none d-lg-block">
                  <a
                    className="xb-header-bar offcanvas-sidebar-btn ml-30"
                    //href="javascript:void(0);"
                    onClick={() => setShowSide(!showSide)} // side view btn;
                  >
                    <div className="xb-header-bar__icon">
                      <span />
                      <span />
                      <span />
                      <span />
                    </div>
                  </a>
                </div>
                <div className="header-bar d-lg-none">
                  <a
                    className="xb-header-bar xb-nav-mobile ml-30"
                    // href="javascript:void(0);"
                    onClick={() => setShowMobile(!showMobile)} // mobile view btn;
                  >
                    <div className="xb-header-bar__icon">
                      <span />
                      <span />
                      <span />
                      <span />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className={`offcanvas-sidebar ${showSide ? "active" : ""}`}>
        <div className="sidebar-menu-close">
          <a className="xb-close" onClick={() => setShowSide(false)} />
        </div>
        <div className="sidebar-top mb-65">
          <div className="sidebar-logo mb-40">
            <div>
              <a className="navbar-brand" href="#">
                <div className="d-flex">
                  <NavLink to={"/"}>
                    {" "}
                    <h2 style={{ color: "#ffcc33" }}>Dhanwis</h2>
                  </NavLink>
                </div>
              </a>
            </div>
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
      </div>
    </>
  );
}

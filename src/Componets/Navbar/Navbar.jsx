import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar(props) {
  const [showSide, setShowSide] = useState(false);
  const [showMobile, setShowMobile] = useState(false);

  const location = useLocation();

  return (
    <>
      <header
        id="xb-header-area"
        className={`site-header header-marketing is-sticky `}
      >
        <div className="xb-header__top p-2">
          <div className="container m-auto ul_li_between">
            <div className="xb-social ul_li">
              <span>Follow us : </span>
              <ul className="ul_li">
                <li>
                  <a
                    href="https://www.instagram.com/dhanwistechinfosolutions/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/dhanwisinfo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://in.linkedin.com/in/dhanwis-techinfo-solutions-9505622a7"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://api.whatsapp.com/send?phone=8086487219"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fa-brands fa-whatsapp"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="me-5">
              <span>
                <i
                  class="fa-solid fa-phone me-2"
                  style={{ color: "whitesmoke" }}
                ></i>
                <a href="tel:+96566011953 me-1" style={{ color: "#ffcc33" }}>
                  +91 9946 487 219{" "}
                </a>
                |
                <a href="tel:+8086487219 me-3" style={{ color: "#ffcc33" }}>
                  +91 8086487219{" "}
                </a>
              </span>

              <div>
                <span></span>
              </div>
            </div>

            {/* <div className="xb-header__language pl-70">
              <div className="">
                <button className="btn btn-warning btn-sm mb-2">
                  {" "}
                  Let's Talk
                  <span className="headphone-icon ms-2">
                    <i className="fa-solid fa-headphones"></i>
                  </span>
                </button>
              </div>
            </div> */}
          </div>
        </div>
        {/* xb-header__wrap xb-header-has-arrow xb-header */}
        <div>
          <div className="container">
            <div
              className={`ul_li_between  ${props.scroll ? "fixed-top" : ""}`}
            >
              {/* xb-header__logo */}
              <div className="">
                <Link to={"/"}>
                  {" "}
                  <img
                    src="/img/logo/dhanwis-logo/Dhanwis Logo-01.png"
                    alt=""
                    className="img-fluid"
                    width={111}
                  />
                </Link>
              </div>
              <div className={`navbar navbar-expand-lg `}>
                <nav className="main-menu collapse navbar-collapse  ">
                  <ul className="mx-auto ">
                    <li
                      className={`menu-item-has-children  ${
                        location.pathname === "/" ? "active" : ""
                      }`}
                    >
                      <Link to={"/"}>
                        <span>Home</span>
                      </Link>
                    </li>
                    <li
                      className={`menu-item-has-children  ${
                        location.pathname === "/about" ? "active" : ""
                      }`}
                    >
                      <Link to={"/about"}>
                        <span>About us</span>
                      </Link>
                    </li>
                    <li
                      className={`menu-item-has-children  ${
                        location.pathname === "/portfolio-section"
                          ? "active"
                          : ""
                      }`}
                    >
                      <Link to={"/portfolio-section"}>
                        <span>Portfolio</span>
                      </Link>
                    </li>
                    <li
                      className={`menu-item-has-children  ${
                        location.pathname === "/appDevelopment" ? "active" : ""
                      } ${
                        location.pathname === "/software-development"
                          ? "active"
                          : ""
                      } ${
                        location.pathname === "/webDevelopment" ? "active" : ""
                      } ${
                        location.pathname === "/digital-marketing"
                          ? "active"
                          : ""
                      } ${
                        location.pathname === "/erp-development" ? "active" : ""
                      }`}
                    >
                      <a href="#services">
                        <span>Services</span>
                      </a>
                      <ul className="submenu">
                        <li
                          className={`menu-item-has-children  ${
                            location.pathname === "/appDevelopment"
                              ? "active"
                              : ""
                          }`}
                        >
                          <Link to={"/appDevelopment"}>
                            <span>Mobile App Development</span>
                          </Link>
                        </li>
                        <li
                          className={`menu-item-has-children  ${
                            location.pathname === "/software-development"
                              ? "active"
                              : ""
                          }`}
                        >
                          {" "}
                          <Link to={"/software-development"}>
                            <span>Software Development</span>
                          </Link>{" "}
                        </li>
                        <li
                          className={`menu-item-has-children  ${
                            location.pathname === "/digital-marketing"
                              ? "active"
                              : ""
                          }`}
                        >
                          <Link to={"/digital-marketing"}>
                            <span>Digital Marketing</span>
                          </Link>{" "}
                        </li>

                        <li
                          className={`menu-item-has-children  ${
                            location.pathname === "/erp-developement"
                              ? "active"
                              : ""
                          }`}
                        >
                          <Link to={"/erp-developement"}>
                            <span>Erp Development</span>
                          </Link>{" "}
                        </li>
                        <li
                          className={`menu-item-has-children  ${
                            location.pathname === "/webDevelopment"
                              ? "active"
                              : ""
                          }`}
                        >
                          {" "}
                          <Link to={"/webDevelopment"}>
                            <span>Web Design &amp; Development</span>
                          </Link>{" "}
                        </li>
                        {/* <li><a href="checkout.html"><span>ERP Development</span></a></li> */}
                      </ul>
                    </li>
                    <li
                      className={`menu-item-has-children  ${
                        location.pathname === "/careers" ? "active" : ""
                      }`}
                    >
                      <Link to={"/careers"}>
                        <span>Careers</span>
                      </Link>
                    </li>

                    <li
                      className={`menu-item-has-children  ${
                        location.pathname === "/contact" ? "active" : ""
                      }`}
                    >
                      <Link to={"/contact"}>
                        <span>Contact</span>
                      </Link>
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
                        <Link to={"/"}>
                          {" "}
                          <h2 style={{ color: "#ffcc33" }}>Dhanwis</h2>
                          <small className="text-muted">TechInfoSolution</small>
                        </Link>
                      </div>
                      <nav className="xb-header-nav">
                        <ul className="xb-menu-primary clearfix">
                          <li className="menu-item-has-children active">
                            <Link to={"/"}>
                              {" "}
                              <span>Home</span>
                            </Link>
                          </li>
                          <li className="menu-item-has-children">
                            <Link to={"/about"}>
                              <span>About us</span>
                            </Link>
                          </li>
                          <li className="menu-item-has-children">
                            <Link to={"/portfolio-section"}>
                              <span>Portfolio</span>
                            </Link>
                          </li>
                          <li className="menu-item-has-children">
                            <a href="#services">
                              <span>Services</span>
                            </a>
                            <ul className="submenu">
                              <li>
                                <Link to={"/appDevelopment"}>
                                  <span>Mobile App Development</span>
                                </Link>
                              </li>
                              {/* <li>
                                {" "}
                                <NavLink to={"/softwaredevelopment"}>
                                  <span>Software Development</span>
                                </NavLink>{" "}
                              </li> */}
                              <li>
                                <Link to={"/digital-marketing"}>
                                  <span>Digital Marketing</span>
                                </Link>{" "}
                              </li>
                              <li>
                                {" "}
                                <Link to={"/webDevelopment"}>
                                  <span>Web Design &amp; Development</span>
                                </Link>{" "}
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
                            <Link to={"/contact"}>
                              <span>Contact</span>
                            </Link>
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
                  <Link to={"/"}>
                    {" "}
                    <h2 style={{ color: "#ffcc33" }}>Dhanwis</h2>
                  </Link>
                </div>
              </a>
            </div>
          </div>
          <div className="sidebar-content">
            Creative Digital Solutions <br /> for Business Success
          </div>
        </div>
        <div className="sidebar-contact-info mb-65">
          <h4 className="sidebar-heading">Contact Information</h4>
          <ul className="sidebar-info-list list-unstyled">
            <li>
              <span>
                <img src="/img/icon/star-2.svg" alt="" />
              </span>
              1st Floor, TKH Complex, Opp Jawahar Library
            </li>

            <li>
              <span>
                <img src="/img/icon/star-2.svg" alt="" />
              </span>
              Yogashala Road, Kannur, Kerala, India, 670001
            </li>

            <li>
              <a href="tell:+91 8086 487 219" target="_blank" rel="noreferrer">
                <span>
                  <img src="/img/icon/star-2.svg" alt="" />
                </span>
                +91 8086 487 219
              </a>
            </li>
            <li>
              <a href="tell:+91 9961 487 219" target="_blank" rel="noreferrer">
                <span>
                  <img src="/img/icon/star-2.svg" alt="" />
                </span>
                +91 9961 487 219
              </a>
            </li>

            <li>
              <a href="tel:+91 9946 487 219" target="_blank" rel="noreferrer">
                <span>
                  <img src="/img/icon/star-2.svg" alt="" />
                </span>
                +91 9946 487 219
              </a>
            </li>
            <li>
              <a
                href="mailto:info@dhanwis.com"
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  <img src="/img/icon/star-2.svg" alt="" />
                </span>
                info@dhanwis.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

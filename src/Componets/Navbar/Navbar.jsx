import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [show, setShow] = useState(false);
  const [showNav, setShowNav] = useState(false);
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

        <div className={`xb-header__wrap xb-header-has-arrow xb-header ${showNav ? 'show-nav' : ''}`}>
          <div className="container">
            <div className="ul_li_between">
              <div className="main-menu__wrap ul_li navbar navbar-expand-lg">
                <div className="xb-header__logo">
                  <a href="/" className="navbar-brand">
                    <img src="/img/logo/dhanwis-logo/Icon 1.png" alt="" width={'60'} />
                    <span style={{ color: "#ffcc33", fontSize: '23px', fontWeight: 'bold' }}>Dhanwis</span>
                  </a>
                </div>
                <button 
                  className=" navbar-toggler"
                  type="button"
                  onClick={() => setShowNav(!showNav)}
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <nav className={`main-menu collapse navbar-collapse ${showNav ? 'show' : ''}`} id="navbarNav">
                  <ul className="mx-5 navbar-nav">
                    <li className="nav-item">
                      <NavLink to={'/'} className="nav-link" activeClassName="active-link">
                        <span>Home</span>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/about" className="nav-link" activeClassName="active-link">
                        <span>About us</span>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/portfolio-section" className="nav-link" activeClassName="active-link">
                        <span>Portfolio</span>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <a href="#services" className="nav-link" activeClassName="active-link"><span>Services</span></a>
                      <ul className="submenu">
                        <li className="nav-item">
                          <NavLink to="/appDevelopment" className="nav-link" activeClassName="active-link">
                            <span>Mobile App Development</span>
                          </NavLink>
                        </li>
                        {/* ... add other services ... */}
                        <li className="nav-item">
                          <NavLink to="/webDevelopment" className="nav-link" activeClassName="active-link">
                            <span>Web Development</span>
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/careers" className="nav-link" activeClassName="active-link">
                        <span>Careers</span>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/contact" className="nav-link" activeClassName="active-link">
                        <span>Contact</span>
                      </NavLink>
                    </li>
                  </ul>
                </nav>
              </div>
              
              {showNav && (
                <div
                  className="mobile-menu-overlay"
                  onClick={() => setShowNav(false)}
                ></div>
              )}
              <div className="xb-header__right ul_li">
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
              <img src="/img/logo/Dhanwis Logo-01.png" width={'150'} height={'auto'} alt="logo" />
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

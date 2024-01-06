import { React, useState } from "react";

function Digital() {
    const [show, setShow] = useState(false)

    const [showSearch, setShowSearch] = useState(false)
    const [hiddenSearch, setHiddenSearch] = useState(true)

    const openBtn = () => {
        console.log('open')
        setHidden(false)
    }

    const closeBtn = () => {
        console.log('close')
        setHidden(true)
    }

    return (
        <div>
            <div className="xb-backtotop style-marketing">
                <a href="#" className="scroll">
                    <i className="far fa-arrow-up" />
                </a>
            </div>

            {/* <div id="xb-loadding" className="xb-loader xb-loader-marketing"><div className="loading-spin" /></div> */}

            <div className="">
                {/* header start */}
                <header id="xb-header-area" className="site-header header-marketing is-sticky">
                    <div className="xb-header__top">
                        <div className="container m-auto ul_li_between">
                            <div className="xb-social ul_li  p-2">
                                <span>Follow us :</span>
                                <ul className="ul_li">
                                    <li><a href="#!"><i className="fab fa-twitter" /></a></li>
                                    <li><a href="#!"><i className="fab fa-facebook-f" /></a></li>
                                    <li><a href="#!"><i className="fab fa-linkedin-in" /></a></li>
                                    <li><a href="#!"><i className="fab fa-pinterest-p" /></a></li>
                                </ul>
                            </div>
                            {/* <div className="xb-header__language pl-70">
                                <ul>
                                    <li><a href="#!" className="lang-btn">
                                        <div className="flag"><img src="assets/img/icon/us_flag.png" alt="" /></div>
                                        English
                                        <div className="arrow_down"><img src="assets/img/icon/arrow_down.svg" alt="" /></div>
                                    </a>
                                        <ul className="lang_sub_list">
                                            <li><a href="#">English</a></li>
                                            <li><a href="#">Arabic</a></li>
                                            <li><a href="#">Bangla</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div> */}
                        </div>
                    </div>
                    <div className="xb-header__wrap xb-header-has-arrow xb-header">
                        <div className="container">
                            <div className="ul_li_between">
                                <div className="xb-header__logo">
                                    {/* <a href="index.html"><img src="public/img/logo/dhanwis.jpg" alt="" /></a> */}
                                    <a class="navbar-brand" href="#">
                                        <img src="public/img/logo/dhanwis.jpg" alt="Logo" width="50" height="auto" class="d-inline-block align-text-top" />
                                        <span>Dhanwis</span>
                                    </a>
                                </div>
                                <div className="main-menu__wrap ul_li navbar navbar-expand-lg">
                                    <nav className="main-menu collapse navbar-collapse">
                                        <ul>
                                            <li className="menu-item-has-children active"><a href="index.html"><span>Home</span></a>
                                                <ul className="submenu">
                                                    <li><a href="index.html"><span>Financial Consultant</span></a></li>
                                                    <li><a href="home-business.html"><span>Business Consultant</span></a></li>
                                                    <li className="active"><a href="home-digital-marketing.html"><span>Digital Marketing</span></a></li>
                                                    <li><a href="home-law.html"><span>Lawyer Firms</span></a></li>
                                                    <li><a href="home-insurance.html"><span>Insurance Business</span></a></li>
                                                    <li><a href="home-advisor.html"><span>Personal Advisor</span></a></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <a href="#!"><span>About us</span></a>
                                                <ul className="submenu">
                                                    <li><a href="about.html"><span>About</span></a></li>
                                                    <li><a href="services.html"><span>Services</span></a></li>
                                                    <li><a href="service-single.html"><span>Service Details</span></a></li>
                                                    <li><a href="career.html"><span>Career</span></a></li>
                                                    <li><a href="career-single.html"><span>Career Details</span></a></li>
                                                    <li><a href="team.html"><span>Team</span></a></li>
                                                    <li><a href="team-single.html"><span>Team Details</span></a></li>
                                                    <li><a href="pricing.html"><span>Pricing</span></a></li>
                                                    <li><a href="faq.html"><span>FAQ</span></a></li>
                                                    <li><a href="404.html"><span>404</span></a></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <a href="portfolio.html"><span>Portfolio</span></a>
                                                <ul className="submenu">
                                                    <li><a href="portfolio.html"><span>Portfolio</span></a></li>
                                                    <li><a href="portfolio-single.html"><span>Portfolio Details</span></a></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <a href="shop.html"><span>Services</span></a>
                                                <ul className="submenu">
                                                    <li><a href="shop.html"><span>Shop</span></a></li>
                                                    <li><a href="shop-single.html"><span>Shop Details</span></a></li>
                                                    <li><a href="cart.html"><span>Shop Cart</span></a></li>
                                                    <li><a href="checkout.html"><span>Checkout</span></a></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <a href="blog.html"><span>Careers</span></a>
                                                <ul className="submenu">
                                                    <li><a href="blog.html"><span>Blog</span></a></li>
                                                    <li><a href="blog-single.html"><span>Blog Details</span></a></li>
                                                </ul>
                                            </li>
                                            <li><a href="contact.html"><span>Contact</span></a></li>
                                        </ul>
                                    </nav>
                                    <div className="xb-header-wrap style-black">
                                        <div className="xb-header-menu">
                                            <div className="xb-header-menu-scroll">
                                                <div className="xb-menu-close xb-hide-xl xb-close" />
                                                <div className="xb-logo-mobile xb-hide-xl">
                                                    <a href="index.html" rel="home"><img src="public/img/logo/logo3.svg" alt="" /></a></div>
                                                <div className="xb-header-mobile-search xb-hide-xl">
                                                    <form role="search" action="#">
                                                        <input type="text" placeholder="Search..." name="s" className="search-field" />
                                                    </form>
                                                </div>
                                                <nav className="xb-header-nav">
                                                    <ul className="xb-menu-primary clearfix">
                                                        <li className="menu-item menu-item-has-children">
                                                            <a href="#"><span>Home</span></a>
                                                            <ul className="sub-menu">
                                                                <li className="menu-item active"><a className="active" href="index.html"><span>Financial Consultant</span></a></li>
                                                                <li className="menu-item"><a href="home-business.html"><span>Business Consultant</span></a></li>
                                                                <li className="menu-item"><a href="home-digital-marketing.html"><span>Digital Marketing</span></a></li>
                                                                <li className="menu-item"><a href="home-law.html"><span>Lawyer Firms</span></a></li>
                                                                <li className="menu-item"><a href="home-insurance.html"><span>Insurance Business</span></a></li>
                                                                <li className="menu-item"><a href="home-advisor.html"><span>Personal Advisor</span></a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="menu-item menu-item-has-children">
                                                            <a href="#"><span>Pages</span></a>
                                                            <ul className="sub-menu">
                                                                <li className="menu-item"><a href="about.html"><span>About</span></a></li>
                                                                <li className="menu-item"><a href="services.html"><span>Services</span></a></li>
                                                                <li className="menu-item"><a href="service-single.html"><span>Service Details</span></a></li>
                                                                <li className="menu-item"><a href="career.html"><span>Career</span></a></li>
                                                                <li className="menu-item"><a href="career-single.html"><span>Career Details</span></a></li>
                                                                <li className="menu-item"><a href="team.html"><span>Team</span></a></li>
                                                                <li className="menu-item"><a href="team-single.html"><span>Team Details</span></a></li>
                                                                <li className="menu-item"><a href="pricing.html"><span>Pricing</span></a></li>
                                                                <li className="menu-item"><a href="faq.html"><span>FAQ</span></a></li>
                                                                <li className="menu-item"><a href="404.html"><span>404</span></a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="menu-item menu-item-has-children">
                                                            <a href="portfolio.html"><span>Portfolio</span></a>
                                                            <ul className="sub-menu">
                                                                <li className="menu-item"><a href="portfolio.html"><span>Portfolio</span></a></li>
                                                                <li className="menu-item"><a href="portfolio-single.html"><span>Portfolio Details</span></a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="menu-item menu-item-has-children">
                                                            <a href="shop.html"><span>Shop</span></a>
                                                            <ul className="sub-menu">
                                                                <li className="menu-item"><a href="shop.html"><span>Shop</span></a></li>
                                                                <li className="menu-item"><a href="shop-single.html"><span>Shop Details</span></a></li>
                                                                <li className="menu-item"><a href="cart.html"><span>Shop Cart</span></a></li>
                                                                <li className="menu-item"><a href="checkout.html"><span>Checkout</span></a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="menu-item menu-item-has-children">
                                                            <a href="blog.html"><span>Blog</span></a>
                                                            <ul className="sub-menu">
                                                                <li className="menu-item"><a href="blog.html"><span>Blog</span></a></li>
                                                                <li className="menu-item"><a href="blog-single.html"><span>Blog Details</span></a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="menu-item"><a href="contact.html"><span>Contact</span></a></li>
                                                    </ul>
                                                </nav>
                                            </div>
                                        </div>
                                        <div className="xb-header-menu-backdrop" />
                                    </div>
                                </div>
                                {/* search btn */}

                                <div className="xb-header__right ul_li">
                                    <ul className="xb-header__action ul_li">
                                        <li><a className="header-search-btn" onClick={() => setShowSearch(!show)}><img src="public/img/icon/ins_search.svg" alt="" /></a></li>
                                    </ul>
                                    <div className="d-none d-lg-block">
                                        <a className="xb-header-bar offcanvas-sidebar-btn ml-30" onClick={() => setShow(!show)}>
                                            <div className="xb-header-bar__icon">
                                                <span ></span>
                                                <span ></span>
                                                <span ></span>
                                                <span ></span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="header-bar d-lg-none">
                                        <a className="xb-header-bar xb-nav-mobile ml-30">
                                            <div className="xb-header-bar__icon">
                                                <span ></span>
                                                <span ></span>
                                                <span ></span>
                                                <span ></span>
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
                <div className={`header-search-form-wrapper style-black ${showSearch ? 'open' : ''}`}>
                    <div className="xb-search-close xb-close" onClick={() => setShowSearch(false)} />
                    <div className="header-search-container">
                        <form role="search" className="search-form" action="#">
                            <input type="search" className="search-field" placeholder="Search …" name="s" />
                        </form>
                    </div>
                </div>
                {/* header search end */}
                {/* sidebar-info start */}
                <div className={`offcanvas-sidebar ${show ? 'active' : ''}`} >
                    <div className="sidebar-menu-close" >
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
                            <li><span><img src="/img/icon/star-2.svg" alt="" /></span>Wasington SY, UK, NY 12099</li>
                            <li><a href="#!"><span><img src="/img/icon/star-2.svg" alt="" /></span>+81 800 123 06 78</a></li>
                            <li><a href="#!"><span><img src="/img/icon/star-2.svg" alt="" /></span>seargin@gmail.com</a></li>
                        </ul>
                    </div>
                    <div className="sidebar-newsletter">
                        <h4 className="sidebar-heading">Get Regular Updated</h4>
                        <form action="#" className="sidebar-newsletter-form mr-footer-newsletter">
                            <span className="icon"><img src="/img/icon/mr-sms-tracking.svg" alt="" /></span>
                            <input type="text" placeholder="Your Email Address" />
                            <button><img src="/img/icon/mr_arrow_up.svg" alt="arrow" /></button>
                        </form>
                    </div>
                    <div className="sidebar-social mr-footer-info mt-65">
                        <h4 className="sidebar-heading">follwo us</h4>
                        <ul className="xb-item--social ul_li">
                            <li><a href="#!"><i className="fab fa-facebook-f" /></a></li>
                            <li><a href="#!"><i className="fab fa-linkedin-in" /></a></li>
                            <li><a href="#!"><i className="fab fa-instagram" /></a></li>
                            <li><a href="#!"><svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18" fill="none">
                                <path d="M10.7124 7.62177L17.4133 0H15.8254L10.0071 6.61788L5.35992 0H0L7.02738 10.0074L0 18H1.58799L7.73237 11.0113L12.6401 18H18L10.7121 7.62177H10.7124ZM8.53747 10.0956L7.82546 9.09906L2.16017 1.16971H4.59922L9.17118 7.56895L9.8832 8.56546L15.8262 16.8835H13.3871L8.53747 10.096V10.0956Z" fill="white" />
                            </svg></a></li>
                        </ul>
                    </div>
                </div>
                {/* sidebar-info end */}
                <div className="body-overlay" />
                <main>
                    {/* hero start */}
                    <section className="hero-marketing mr-bg pos-rel d-flex align-items-center" data-background="assets/img/bg/mr_hero_bg.jpg">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="mr-hero-content">
                                        <span className="xb-item--subtitle" data-aos="fade-up" data-aos-duration={500}><span><img src="assets/img/icon/hr_icon.png" alt="" /></span> Hey there! We’re seargin</span>
                                        <h2 className="xb-item--title" data-aos="fade-up" data-aos-duration={500} data-aos-delay={200}>Driving <span className="icon"><img src="assets/img/icon/m_star.png" alt="" /></span> Growth Through Digital Marketing <img id="reload" src="assets/img/icon/decor2.png" alt="" /></h2>
                                        <p className="xb-item--content mb-50" data-aos="fade-up" data-aos-duration={500} data-aos-delay={400}>Digital marketing involves leveraging online channels <br /> and platforms to connect with potential customers.</p>
                                        <div className="xb-item--btn" data-aos="fade-up" data-aos-duration={500} data-aos-delay={600}>
                                            <a className="xb-btn xb-btn--marketing" href="about.html">
                                                <div className="btn-anim-wrap">
                                                    <span className="button-text">let’s get started</span>
                                                    <span className="button-text">let’s get started</span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="mr-hero-img pos-rel">
                                        <img data-aos="fade-left" data-aos-duration={500} data-aos-delay={300} src="assets/img/hero/mr_img.png" alt="" />
                                        <div className="mr-hero-img-inner">
                                            <div className="chart chart--1">
                                                <img data-aos="zoom-in" data-aos-duration={600} data-aos-delay={500} src="assets/img/hero/chat1.png" alt="" />
                                            </div>
                                            <div className="chart chart--2">
                                                <img data-aos="zoom-in" data-aos-duration={600} data-aos-delay={600} src="assets/img/hero/chat2.png" alt="" />
                                            </div>
                                            <div className="chart chart--3">
                                                <img data-aos="zoom-in" data-aos-duration={600} data-aos-delay={700} src="assets/img/hero/chat3.png" alt="" />
                                            </div>
                                            <div className="chart chart--4">
                                                <img data-aos="zoom-in" data-aos-duration={600} data-aos-delay={800} src="assets/img/hero/chart.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mr-hero-shape">
                            <img src="assets/img/shape/mr_shape.png" alt="" />
                        </div>
                    </section>
                    {/* hero end */}
                    {/* marquee start */}
                    <section className="marquee" data-bg-color="#131313">
                        <div className="mr-marquee marquee-left">
                            <div className="mr-marquee__item"><span><img src="assets/img/shape/marquee_01.png" alt="" /></span>Branding</div>
                            <div className="mr-marquee__item"><span><img src="assets/img/shape/marquee_02.png" alt="" /></span>Illustration</div>
                            <div className="mr-marquee__item"><span><img src="assets/img/shape/marquee_03.png" alt="" /></span>Software</div>
                            <div className="mr-marquee__item"><span><img src="assets/img/shape/marquee_04.png" alt="" /></span>Digital Solution</div>
                            <div className="mr-marquee__item"><span><img src="assets/img/shape/marquee_05.png" alt="" /></span>Ideas</div>
                            <div className="mr-marquee__item"><span><img src="assets/img/shape/marquee_03.png" alt="" /></span>Software</div>
                            <div className="mr-marquee__item"><span><img src="assets/img/shape/marquee_04.png" alt="" /></span>Digital Marketing</div>
                            <div className="mr-marquee__item"><span><img src="assets/img/shape/marquee_01.png" alt="" /></span>Branding</div>
                            <div className="mr-marquee__item"><span><img src="assets/img/shape/marquee_03.png" alt="" /></span>Marketing</div>
                        </div>
                    </section>
                    {/* marquee end */}
                    <div className="bg_img" data-background="assets/img/bg/mr_bg_2.jpg">
                        {/* feature start */}
                        <section className="feature pos-rel pt-135 pb-130">
                            <div className="container">
                                <div className="sec-title sec-title--marketing text-center mb-60" data-aos="fade-up" data-aos-duration={600}>
                                    <span className="subtitle">what we do</span>
                                    <h2 className="title">We Solve digital Challenges</h2>
                                </div>
                                <div className="row mt-none-30 row-cols-1 row-cols-xl-5 row-cols-lg-3 row-cols-md-3 row-cols-sm-2 justify-content-center">
                                    <div className="col mt-30">
                                        <div className="mr-feature" data-aos="fade-up" data-aos-duration={600} data-aos-delay={150}>
                                            <div className="xb-item--inner">
                                                <div className="xb-item--icon">
                                                    <img src="assets/img/icon/rm_feat1.png" alt="" />
                                                </div>
                                                <h3 className="xb-item--title">Better <br /> Audiences</h3>
                                                <div className="xb-item--shape">
                                                    <img src="assets/img/icon/rm_feat_shape.png" alt="" />
                                                </div>
                                                <div className="xb-item--bg">
                                                    <img src="assets/img/shape/rm_feat_bg.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col mt-30">
                                        <div className="mr-feature" data-aos="fade-up" data-aos-duration={600} data-aos-delay={300}>
                                            <div className="xb-item--inner">
                                                <div className="xb-item--icon">
                                                    <img src="assets/img/icon/rm_feat2.png" alt="" />
                                                </div>
                                                <h3 className="xb-item--title">Better <br /> Analytics</h3>
                                                <div className="xb-item--shape">
                                                    <img src="assets/img/icon/rm_feat_shape.png" alt="" />
                                                </div>
                                                <div className="xb-item--bg">
                                                    <img src="assets/img/shape/rm_feat_bg.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col mt-30">
                                        <div className="mr-feature" data-aos="fade-up" data-aos-duration={600} data-aos-delay={450}>
                                            <div className="xb-item--inner">
                                                <div className="xb-item--icon">
                                                    <img src="assets/img/icon/rm_feat3.png" alt="" />
                                                </div>
                                                <h3 className="xb-item--title">Better <br /> Outcomes</h3>
                                                <div className="xb-item--shape">
                                                    <img src="assets/img/icon/rm_feat_shape.png" alt="" />
                                                </div>
                                                <div className="xb-item--bg">
                                                    <img src="assets/img/shape/rm_feat_bg.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col mt-30">
                                        <div className="mr-feature" data-aos="fade-up" data-aos-duration={600} data-aos-delay={600}>
                                            <div className="xb-item--inner">
                                                <div className="xb-item--icon">
                                                    <img src="assets/img/icon/rm_feat4.png" alt="" />
                                                </div>
                                                <h3 className="xb-item--title">Focus <br />
                                                    on People</h3>
                                                <div className="xb-item--shape">
                                                    <img src="assets/img/icon/rm_feat_shape.png" alt="" />
                                                </div>
                                                <div className="xb-item--bg">
                                                    <img src="assets/img/shape/rm_feat_bg.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col mt-30">
                                        <div className="mr-feature" data-aos="fade-up" data-aos-duration={600} data-aos-delay={750}>
                                            <div className="xb-item--inner">
                                                <div className="xb-item--icon">
                                                    <img src="assets/img/icon/rm_feat5.png" alt="" />
                                                </div>
                                                <h3 className="xb-item--title">Business <br /> Innovation</h3>
                                                <div className="xb-item--shape">
                                                    <img src="assets/img/icon/rm_feat_shape.png" alt="" />
                                                </div>
                                                <div className="xb-item--bg">
                                                    <img src="assets/img/shape/rm_feat_bg.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mr-feature-shape" data-parallax="{&quot;y&quot;: &quot;-90&quot;}">
                                <img src="assets/img/shape/mr_shape1.png" alt="" />
                            </div>
                        </section>
                        {/* feature end */}
                        {/* about start */}
                        <section className="about pb-115">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-8">
                                        <div className="sec-title sec-title--marketing" data-aos="fade-right" data-aos-duration={600}>
                                            <span className="subtitle">Who we are?</span>
                                            <h2 className="title mb-45">We're passionate digital marketing <br /> experts boosting online business <br /> success
                                                <span className="xb-title--typewriter">
                                                    <span className="xb-item--text highlight">Helping businesses</span>
                                                    <span className="xb-item--text highlight">Targeted advertising</span>
                                                    <span className="xb-item--text highlight">Custom solutions</span>
                                                </span>
                                            </h2>
                                            <p>In today's hyper-connected digital landscape, the success of online <br /> businesses hinges on their ability to stand out, engage audiences <br /> effectively, and adapt to ever-evolving trends. </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="rm-about-img text-center text-lg-end" data-aos="fade-left" data-aos-duration={600} data-aos-delay={200}>
                                            <img className="slide-up-down" src="assets/img/shape/rm_abt1.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* about end */}
                    </div>
                    {/* client section start */}
                    <section className="client-section mr-noise-bg">
                        <div className="client-section__inner has-bg d-flex" data-parallax="{&quot;x&quot;: &quot;-170&quot;}">
                            <div className="client-section__item">
                                <img src="assets/img/brand/rm_brand_01.png" alt="" />
                            </div>
                            <div className="client-section__item">
                                <img src="assets/img/brand/rm_brand_02.png" alt="" />
                            </div>
                            <div className="client-section__item">
                                <img src="assets/img/brand/rm_brand_03.png" alt="" />
                            </div>
                            <div className="client-section__item">
                                <img src="assets/img/brand/rm_brand_04.png" alt="" />
                            </div>
                            <div className="client-section__item">
                                <img src="assets/img/brand/rm_brand_05.png" alt="" />
                            </div>
                            <div className="client-section__item">
                                <img src="assets/img/brand/rm_brand_06.png" alt="" />
                            </div>
                            <div className="client-section__item">
                                <img src="assets/img/brand/rm_brand_07.png" alt="" />
                            </div>
                            <div className="client-section__item">
                                <img src="assets/img/brand/rm_brand_01.png" alt="" />
                            </div>
                            <div className="client-section__item">
                                <img src="assets/img/brand/rm_brand_02.png" alt="" />
                            </div>
                            <div className="client-section__item">
                                <img src="assets/img/brand/rm_brand_03.png" alt="" />
                            </div>
                            <div className="client-section__item">
                                <img src="assets/img/brand/rm_brand_04.png" alt="" />
                            </div>
                        </div>
                        <div className="client-section__inner style-2 d-flex" data-parallax="{&quot;x&quot;: &quot;180&quot;}">
                            <div className="client-section__item">
                                <img src="assets/img/brand/rm_brand_08.png" alt="" />
                            </div>
                            <div className="client-section__item">
                                <img src="assets/img/brand/rm_brand_09.png" alt="" />
                            </div>
                            <div className="client-section__item">
                                <img src="assets/img/brand/rm_brand_10.png" alt="" />
                            </div>
                            <div className="client-section__item">
                                <img src="assets/img/brand/rm_brand_11.png" alt="" />
                            </div>
                            <div className="client-section__item">
                                <img src="assets/img/brand/rm_brand_12.png" alt="" />
                            </div>
                            <div className="client-section__item">
                                <img src="assets/img/brand/rm_brand_13.png" alt="" />
                            </div>
                            <div className="client-section__item">
                                <img src="assets/img/brand/rm_brand_14.png" alt="" />
                            </div>
                            <div className="client-section__item">
                                <img src="assets/img/brand/rm_brand_08.png" alt="" />
                            </div>
                            <div className="client-section__item">
                                <img src="assets/img/brand/rm_brand_09.png" alt="" />
                            </div>
                            <div className="client-section__item">
                                <img src="assets/img/brand/rm_brand_10.png" alt="" />
                            </div>
                            <div className="client-section__item">
                                <img src="assets/img/brand/rm_brand_11.png" alt="" />
                            </div>
                        </div>
                    </section>
                    {/* client section end */}
                    {/* service start */}
                    <section className="service bg_img pt-135 pb-135" data-background="assets/img/bg/mr_bg_2.jpg">
                        <div className="container">
                            <div className="ul_li_between align-items-end mb-35">
                                <div className="sec-title sec-title--marketing mb-20">
                                    <span className="subtitle">services</span>
                                    <h2 className="title">Expertise &amp; Services</h2>
                                </div>
                                <a className="mr-all-link mb-20" href="services.html">view all services<span><img src="assets/img/icon/mr_arrow_right.svg" alt="" /></span></a>
                            </div>
                            <div className="row mt-none-30">
                                <div className="col-lg-7 col-md-6 mt-30">
                                    <ul className="mr-service nav nav-tabs accordion_box clearfix" id="myTab" role="tablist">
                                        <li className="nav-link accordion block active-block active" id="mr-srv-tab-1" data-bs-toggle="tab" data-bs-target="#mr-srv-1" role="tab" aria-controls="mr-srv-1" aria-selected="true">
                                            <div className="acc-btn">
                                                Search Engine Optimization
                                                <span className="arrow" />
                                            </div>
                                            <div className="acc_body current">
                                                <div className="content">
                                                    <p>Search Engine Optimization, often abbreviated as SEO, is a <br /> critical digital marketing strategy that aims.</p>
                                                    <div className="mr-service-btn">
                                                        <a href="service-single.html">See Details<span><img src="assets/img/icon/mr_arrow_right.svg" alt="" /></span></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <span className="number">01</span>
                                        </li>
                                        <li className="nav-link accordion block" id="mr-srv-tab-2" data-bs-toggle="tab" data-bs-target="#mr-srv-2" role="tab" aria-controls="mr-srv-2" aria-selected="false">
                                            <div className="acc-btn">
                                                Pay-Per-Click Advertising
                                                <span className="arrow" />
                                            </div>
                                            <div className="acc_body">
                                                <div className="content">
                                                    <p>Instant Traffic, Maximum Impact! Drive targeted visitors to <br /> your site and boost sales. Start your campaign today</p>
                                                    <div className="mr-service-btn">
                                                        <a href="service-single.html">See Details<span><img src="assets/img/icon/mr_arrow_right.svg" alt="" /></span></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <span className="number">02</span>
                                        </li>
                                        <li className="nav-link accordion block" id="mr-srv-tab-3" data-bs-toggle="tab" data-bs-target="#mr-srv-3" role="tab" aria-controls="mr-srv-3" aria-selected="false">
                                            <div className="acc-btn">
                                                Social Media Marketing
                                                <span className="arrow" />
                                            </div>
                                            <div className="acc_body">
                                                <div className="content">
                                                    <p>Elevate Your Brand Presence Online. Engage, Connect and <br /> Convert with Expert Strategies. Boost Your Business</p>
                                                    <div className="mr-service-btn">
                                                        <a href="service-single.html">See Details<span><img src="assets/img/icon/mr_arrow_right.svg" alt="" /></span></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <span className="number">03</span>
                                        </li>
                                        <li className="nav-link accordion block" id="mr-srv-tab-4" data-bs-toggle="tab" data-bs-target="#mr-srv-4" role="tab" aria-controls="mr-srv-4" aria-selected="false">
                                            <div className="acc-btn">
                                                Email Marketing
                                                <span className="arrow" />
                                            </div>
                                            <div className="acc_body">
                                                <div className="content">
                                                    <p>Drive Sales, Build Relationships! Personalized Campaigns for <br /> Lasting Customer Engagement.</p>
                                                    <div className="mr-service-btn">
                                                        <a href="service-single.html">See Details<span><img src="assets/img/icon/mr_arrow_right.svg" alt="" /></span></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <span className="number">04</span>
                                        </li>
                                        <li className="nav-link accordion block" id="mr-srv-tab-5" data-bs-toggle="tab" data-bs-target="#mr-srv-5" role="tab" aria-controls="mr-srv-5" aria-selected="false">
                                            <div className="acc-btn">
                                                Content Marketing
                                                <span className="arrow" />
                                            </div>
                                            <div className="acc_body">
                                                <div className="content">
                                                    <p> Captivate Audiences, Boost Business! Craft Compelling Stories Informative Blogs, and Engaging Videos</p>
                                                    <div className="mr-service-btn">
                                                        <a href="service-single.html">See Details<span><img src="assets/img/icon/mr_arrow_right.svg" alt="" /></span></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <span className="number">05</span>
                                        </li>
                                        <li className="nav-link accordion block" id="mr-srv-tab-6" data-bs-toggle="tab" data-bs-target="#mr-srv-6" role="tab" aria-controls="mr-srv-6" aria-selected="false">
                                            <div className="acc-btn">
                                                Website Development
                                                <span className="arrow" />
                                            </div>
                                            <div className="acc_body">
                                                <div className="content">
                                                    <p>Your Online Presence, Perfected. Expert Designs, Seamless Navigation Enhanced User Experience.</p>
                                                    <div className="mr-service-btn">
                                                        <a href="service-single.html">See Details<span><img src="assets/img/icon/mr_arrow_right.svg" alt="" /></span></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <span className="number">06</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-5 col-md-6 mt-30">
                                    <div className="tab-content" id="myTabContent">
                                        <div className="tab-pane animated fadeInRight show active" id="mr-srv-1" role="tabpanel" aria-labelledby="mr-srv-tab-1">
                                            <div className="mr-service__img text-end">
                                                <img src="assets/img/service/mr_srv_01.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="tab-pane animated fadeInRight" id="mr-srv-2" role="tabpanel" aria-labelledby="mr-srv-tab-2">
                                            <div className="mr-service__img text-end">
                                                <img src="assets/img/service/mr_srv_02.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="tab-pane animated fadeInRight" id="mr-srv-3" role="tabpanel" aria-labelledby="mr-srv-tab-3">
                                            <div className="mr-service__img text-end">
                                                <img src="assets/img/service/mr_srv_03.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="tab-pane animated fadeInRight" id="mr-srv-4" role="tabpanel" aria-labelledby="mr-srv-tab-4">
                                            <div className="mr-service__img text-end">
                                                <img src="assets/img/service/mr_srv_01.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="tab-pane animated fadeInRight" id="mr-srv-5" role="tabpanel" aria-labelledby="mr-srv-tab-5">
                                            <div className="mr-service__img text-end">
                                                <img src="assets/img/service/mr_srv_02.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="tab-pane animated fadeInRight" id="mr-srv-6" role="tabpanel" aria-labelledby="mr-srv-tab-6">
                                            <div className="mr-service__img text-end">
                                                <img src="assets/img/service/mr_srv_03.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* service end */}
                    {/* project start */}
                    <section className="project mr-noise-bg pos-rel pt-140 pb-140">
                        <div className="container">
                            <div className="ul_li_between align-items-end mb-35">
                                <div className="sec-title sec-title--marketing mb-20">
                                    <span className="subtitle">projects</span>
                                    <h2 className="title">Our Latest Projects</h2>
                                </div>
                                <h3 className="all-project-title mb-20">450+ Projects</h3>
                            </div>
                            <div className="mr-project sticky-coloum-wrap">
                                <div className="mr-project__btn sticky-coloum-item">
                                    <a className="xb-btn xb-btn--marketing" href="portfolio.html">
                                        <div className="btn-anim-wrap">
                                            <span className="button-text">all projects</span>
                                            <span className="button-text">all projects</span>
                                        </div>
                                    </a>
                                </div>
                                <div className="mr-project__lists sticky-coloum-item">
                                    <div className="xb-item--item">
                                        <div className="xb-item--holder">
                                            <h3 className="xb-item--title">SEO Visibility..</h3>
                                            <div className="xb-item--content">
                                                Ensure that the website is technically sound, with fast loading times, mobile optimization,
                                                and proper sitemaps.
                                            </div>
                                            <span className="xb-item--date">December, 13,2023</span>
                                            <span className="xb-item--icon"><img src="assets/img/icon/mr_arrow.svg" alt="" /></span>
                                        </div>
                                        <div className="xb-item--img">
                                            <div className="xb-item--img-inner">
                                                <img src="assets/img/project/mr_01.png" alt="" />
                                            </div>
                                        </div>
                                        <a className="xb-overlay" href="portfolio-single.html" />
                                    </div>
                                    <div className="xb-item--item">
                                        <div className="xb-item--holder">
                                            <h3 className="xb-item--title">E-Commerce Growth..</h3>
                                            <div className="xb-item--content">
                                                This project aims to drive more traffic, increase conversions, and boost revenue for the
                                                e-commerce business.
                                            </div>
                                            <span className="xb-item--date">September, 13,2023</span>
                                            <span className="xb-item--icon"><img src="assets/img/icon/mr_arrow.svg" alt="" /></span>
                                        </div>
                                        <div className="xb-item--img">
                                            <div className="xb-item--img-inner">
                                                <img src="assets/img/project/mr_02.png" alt="" />
                                            </div>
                                        </div>
                                        <a className="xb-overlay" href="portfolio-single.html" />
                                    </div>
                                    <div className="xb-item--item">
                                        <div className="xb-item--holder">
                                            <h3 className="xb-item--title">CRO for Sales..</h3>
                                            <div className="xb-item--content">
                                                CRO for Sales" refers to a digital marketing project focused on Conversion Optimization
                                                (CRO) the specific.
                                            </div>
                                            <span className="xb-item--date">December, 08,2023</span>
                                            <span className="xb-item--icon"><img src="assets/img/icon/mr_arrow.svg" alt="" /></span>
                                        </div>
                                        <div className="xb-item--img">
                                            <div className="xb-item--img-inner">
                                                <img src="assets/img/project/mr_03.png" alt="" />
                                            </div>
                                        </div>
                                        <a className="xb-overlay" href="portfolio-single.html" />
                                    </div>
                                </div>
                            </div>
                            <div className="mr-project__btn-bottom d-lg-none text-center mt-40">
                                <a className="xb-btn xb-btn--marketing" href="portfolio.html">
                                    <div className="btn-anim-wrap">
                                        <span className="button-text">all projects</span>
                                        <span className="button-text">all projects</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="mr-project-shape">
                            <div className="shape shape--1">
                                <img data-parallax="{&quot;x&quot;:-50,&quot;y&quot;:-80}" src="assets/img/shape/prj_01.png" alt="" />
                            </div>
                            <div className="shape shape--2">
                                <img data-parallax="{&quot;x&quot;:50,&quot;y&quot;:80}" src="assets/img/shape/prj_02.png" alt="" />
                            </div>
                        </div>
                    </section>
                    {/* project end */}
                    <div className="bg_img" data-background="assets/img/bg/mr_bg_2.jpg">
                        {/* process start */}
                        <section className="process pos-rel pt-140 pb-130">
                            <div className="container">
                                <div className="sec-title sec-title--marketing text-center mb-90" data-aos="fade-up" data-aos-duration={600}>
                                    <span className="subtitle">Our Process</span>
                                    <h2 className="title">How We Work</h2>
                                </div>
                                <div className="mr-process ul_li_between mt-none-50" data-aos="fade-up" data-aos-duration={600} data-aos-delay={200}>
                                    <div className="mr-process__item mt-50">
                                        <div className="xb-item--icon pos-rel">
                                            <img src="assets/img/icon/mr_feat_01.png" alt="" />
                                            <span className="xb-item--icon-bg"><img src="assets/img/shape/mr_prc_bg.png" alt="" /></span>
                                        </div>
                                        <span className="xb-item--check"><img src="assets/img/icon/mr_check.svg" alt="" /></span>
                                        <h2 className="xb-item--title">Discovery &amp; Analysis</h2>
                                        <p className="xb-item--content">Discovery refers to the act of uncovering something that was previously.</p>
                                        <span className="xb-item--number">01</span>
                                    </div>
                                    <div className="mr-process__item mt-50">
                                        <div className="xb-item--icon style-2 pos-rel">
                                            <img src="assets/img/icon/mr_prc_02.png" alt="" />
                                            <span className="xb-item--icon-bg"><img src="assets/img/shape/mr_prc_bg.png" alt="" /></span>
                                        </div>
                                        <span className="xb-item--check"><img src="assets/img/icon/mr_check.svg" alt="" /></span>
                                        <h2 className="xb-item--title">Strategy Development</h2>
                                        <p className="xb-item--content">Clearly defined and measurable goals are the foundation of any strategy these.</p>
                                        <span className="xb-item--number">02</span>
                                    </div>
                                    <div className="mr-process__item mt-50">
                                        <div className="xb-item--icon pos-rel">
                                            <img src="assets/img/icon/mr_prc_03.png" alt="" />
                                            <span className="xb-item--icon-bg"><img src="assets/img/shape/mr_prc_bg.png" alt="" /></span>
                                        </div>
                                        <span className="xb-item--check"><img src="assets/img/icon/mr_check.svg" alt="" /></span>
                                        <h2 className="xb-item--title">Launch &amp; Execution</h2>
                                        <p className="xb-item--content">The launch phase marks the point at which a product, service, project.</p>
                                        <span className="xb-item--number">03</span>
                                    </div>
                                </div>
                            </div>
                            <div className="mr-process-shape" data-parallax="{&quot;y&quot;: &quot;-90&quot;}">
                                <img src="assets/img/shape/mr_shape1.png" alt="" />
                            </div>
                        </section>
                        {/* process end */}
                        {/* team start */}
                        <section className="team pos-rel pb-140">
                            <div className="container">
                                <div className="sec-title sec-title--marketing text-center mb-60" data-aos="fade-up" data-aos-duration={600}>
                                    <span className="subtitle">out team</span>
                                    <h2 className="title">Our Leaders</h2>
                                </div>
                                <div className="row mt-none-50">
                                    <div className="col-xl-3 col-lg-6 col-md-6 mt-50">
                                        <div className="mr-team" data-aos="fade-up" data-aos-duration={600} data-aos-delay="0ms">
                                            <div className="xb-item--inner text-center">
                                                <div className="xb-item--avatar">
                                                    <img src="assets/img/team/mr_01.png" alt="" />
                                                </div>
                                                <div className="xb-item--holder">
                                                    <h3 className="xb-item--title"><a href="team-single.html">Louis Saville</a></h3>
                                                    <span className="xb-item--desig">SEO Specialist</span>
                                                    <ul className="xb-item--social ul_li_center">
                                                        <li><a href="#!"><svg width={14} height={14} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g>
                                                                <path d="M9.4893 6.77491L15.3176 0H13.9365L8.87577 5.88256L4.8338 0H0.171875L6.28412 8.89547L0.171875 16H1.55307L6.8973 9.78782L11.1659 16H15.8278L9.48896 6.77491H9.4893ZM7.59756 8.97384L6.97826 8.08805L2.05073 1.03974H4.17217L8.14874 6.72795L8.76804 7.61374L13.9371 15.0075H11.8157L7.59756 8.97418V8.97384Z" fill="black" />
                                                            </g>
                                                            <defs>
                                                                <clipPath>
                                                                    <rect width={16} height={16} fill="white" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg></a></li>
                                                        <li><a href="#!"><i className="fab fa-facebook-f" /></a></li>
                                                        <li><a href="#!"><i className="fab fa-linkedin-in" /></a></li>
                                                        <li><a href="#!"><i className="fab fa-instagram" /></a></li>
                                                    </ul>
                                                </div>
                                                <div className="xb-item--bg"><img src="assets/img/bg/mr_team_bg.png" alt="" /></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-6 col-md-6 mt-50">
                                        <div className="mr-team" data-aos="fade-up" data-aos-duration={600} data-aos-delay={200}>
                                            <div className="xb-item--inner text-center">
                                                <div className="xb-item--avatar">
                                                    <img src="assets/img/team/mr_02.png" alt="" />
                                                </div>
                                                <div className="xb-item--holder">
                                                    <h3 className="xb-item--title"><a href="team-single.html">Dave Gerhardt</a></h3>
                                                    <span className="xb-item--desig">Data Analyst</span>
                                                    <ul className="xb-item--social ul_li_center">
                                                        <li><a href="#!"><svg width={14} height={14} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g>
                                                                <path d="M9.4893 6.77491L15.3176 0H13.9365L8.87577 5.88256L4.8338 0H0.171875L6.28412 8.89547L0.171875 16H1.55307L6.8973 9.78782L11.1659 16H15.8278L9.48896 6.77491H9.4893ZM7.59756 8.97384L6.97826 8.08805L2.05073 1.03974H4.17217L8.14874 6.72795L8.76804 7.61374L13.9371 15.0075H11.8157L7.59756 8.97418V8.97384Z" fill="black" />
                                                            </g>
                                                            <defs>
                                                                <clipPath>
                                                                    <rect width={16} height={16} fill="white" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg></a></li>
                                                        <li><a href="#!"><i className="fab fa-facebook-f" /></a></li>
                                                        <li><a href="#!"><i className="fab fa-linkedin-in" /></a></li>
                                                        <li><a href="#!"><i className="fab fa-instagram" /></a></li>
                                                    </ul>
                                                </div>
                                                <div className="xb-item--bg"><img src="assets/img/bg/mr_team_bg.png" alt="" /></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-6 col-md-6 mt-50">
                                        <div className="mr-team" data-aos="fade-up" data-aos-duration={600} data-aos-delay={400}>
                                            <div className="xb-item--inner text-center">
                                                <div className="xb-item--avatar">
                                                    <img src="assets/img/team/mr_03.png" alt="" />
                                                </div>
                                                <div className="xb-item--holder">
                                                    <h3 className="xb-item--title"><a href="team-single.html">Carlo Castillo</a></h3>
                                                    <span className="xb-item--desig">Creative Director</span>
                                                    <ul className="xb-item--social ul_li_center">
                                                        <li><a href="#!"><svg width={14} height={14} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g>
                                                                <path d="M9.4893 6.77491L15.3176 0H13.9365L8.87577 5.88256L4.8338 0H0.171875L6.28412 8.89547L0.171875 16H1.55307L6.8973 9.78782L11.1659 16H15.8278L9.48896 6.77491H9.4893ZM7.59756 8.97384L6.97826 8.08805L2.05073 1.03974H4.17217L8.14874 6.72795L8.76804 7.61374L13.9371 15.0075H11.8157L7.59756 8.97418V8.97384Z" fill="black" />
                                                            </g>
                                                            <defs>
                                                                <clipPath>
                                                                    <rect width={16} height={16} fill="white" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg></a></li>
                                                        <li><a href="#!"><i className="fab fa-facebook-f" /></a></li>
                                                        <li><a href="#!"><i className="fab fa-linkedin-in" /></a></li>
                                                        <li><a href="#!"><i className="fab fa-instagram" /></a></li>
                                                    </ul>
                                                </div>
                                                <div className="xb-item--bg"><img src="assets/img/bg/mr_team_bg.png" alt="" /></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-6 col-md-6 mt-50">
                                        <div className="mr-team" data-aos="fade-up" data-aos-duration={600} data-aos-delay={600}>
                                            <div className="xb-item--inner text-center">
                                                <div className="xb-item--avatar">
                                                    <img src="assets/img/team/mr_04.png" alt="" />
                                                </div>
                                                <div className="xb-item--holder">
                                                    <h3 className="xb-item--title"><a href="team-single.html">Leslyn Felder</a></h3>
                                                    <span className="xb-item--desig">Copywriter</span>
                                                    <ul className="xb-item--social ul_li_center">
                                                        <li><a href="#!"><svg width={14} height={14} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g>
                                                                <path d="M9.4893 6.77491L15.3176 0H13.9365L8.87577 5.88256L4.8338 0H0.171875L6.28412 8.89547L0.171875 16H1.55307L6.8973 9.78782L11.1659 16H15.8278L9.48896 6.77491H9.4893ZM7.59756 8.97384L6.97826 8.08805L2.05073 1.03974H4.17217L8.14874 6.72795L8.76804 7.61374L13.9371 15.0075H11.8157L7.59756 8.97418V8.97384Z" fill="black" />
                                                            </g>
                                                            <defs>
                                                                <clipPath>
                                                                    <rect width={16} height={16} fill="white" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg></a></li>
                                                        <li><a href="#!"><i className="fab fa-facebook-f" /></a></li>
                                                        <li><a href="#!"><i className="fab fa-linkedin-in" /></a></li>
                                                        <li><a href="#!"><i className="fab fa-instagram" /></a></li>
                                                    </ul>
                                                </div>
                                                <div className="xb-item--bg"><img src="assets/img/bg/mr_team_bg.png" alt="" /></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mr-team-shape">
                                <img data-parallax="{&quot;x&quot;:50,&quot;y&quot;:80}" src="assets/img/shape/prj_01.png" alt="" />
                            </div>
                        </section>
                        {/* team end */}
                    </div>
                    {/* testimonial start */}
                    <section className="testimonial mr-noise-bg pt-140 pb-140">
                        <div className="sec-title sec-title--marketing text-center mb-60">
                            <span className="subtitle">testimonial</span>
                            <h2 className="title">Real Client’s Results</h2>
                        </div>
                        <div className="mr-testimonial-slider swiper-container">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide mr-testimonial">
                                    <div className="xb-item--inner">
                                        <div className="xb-item--quote">
                                            <img src="assets/img/icon/mr-quote.png" alt="" />
                                        </div>
                                        <div className="xb-item--content mb-90">
                                            "As a startup founder, I sought a digital marketing partner to establish our online brand. Seargin crafted a powerful strategy and offered invaluable guidance, driving our success through dedication and creativity."
                                        </div>
                                        <div className="xb-item--author ul_li">
                                            <div className="xb-item--avatar">
                                                <img src="assets/img/avatar/mr_tm_01.png" alt="" />
                                            </div>
                                            <div className="xb-item--author-info">
                                                <h3 className="xb-item--name">Jose Herrera</h3>
                                                <span className="xb-item--desig">CEO, Kinshasa Startup</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide mr-testimonial">
                                    <div className="xb-item--inner">
                                        <div className="xb-item--quote">
                                            <img src="assets/img/icon/mr-quote.png" alt="" />
                                        </div>
                                        <div className="xb-item--content mb-90">
                                            "Partnering with Seargin transformed my e-commerce business. Their online advertising and SEO expertise boosted traffic and conversions, resulting in a revenue increase. I'm thrilled with the results!"
                                        </div>
                                        <div className="xb-item--author ul_li">
                                            <div className="xb-item--avatar">
                                                <img src="assets/img/avatar/mr_tm_02.png" alt="" />
                                            </div>
                                            <div className="xb-item--author-info">
                                                <h3 className="xb-item--name">Jordan Eugenio</h3>
                                                <span className="xb-item--desig">CEO, Healthcare</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide mr-testimonial">
                                    <div className="xb-item--inner">
                                        <div className="xb-item--quote">
                                            <img src="assets/img/icon/mr-quote.png" alt="" />
                                        </div>
                                        <div className="xb-item--content mb-90">
                                            "Skeptical at first, I'm now a firm believer in digital marketing thanks to Seargin. Their expertise built our online presence, increasing social media engagement and bringing in a steady flow of new customers."
                                        </div>
                                        <div className="xb-item--author ul_li">
                                            <div className="xb-item--avatar">
                                                <img src="assets/img/avatar/mr_tm_03.png" alt="" />
                                            </div>
                                            <div className="xb-item--author-info">
                                                <h3 className="xb-item--name">Denys Kapush</h3>
                                                <span className="xb-item--desig">Founder of Cambly</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide mr-testimonial">
                                    <div className="xb-item--inner">
                                        <div className="xb-item--quote">
                                            <img src="assets/img/icon/mr-quote.png" alt="" />
                                        </div>
                                        <div className="xb-item--content mb-90">
                                            "As a startup founder, I sought a digital marketing partner to establish our online brand. Seargin crafted a powerful strategy and offered invaluable guidance, driving our success through dedication and creativity."
                                        </div>
                                        <div className="xb-item--author ul_li">
                                            <div className="xb-item--avatar">
                                                <img src="assets/img/avatar/mr_tm_01.png" alt="" />
                                            </div>
                                            <div className="xb-item--author-info">
                                                <h3 className="xb-item--name">Jose Herrera</h3>
                                                <span className="xb-item--desig">CEO, Kinshasa Startup</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide mr-testimonial">
                                    <div className="xb-item--inner">
                                        <div className="xb-item--quote">
                                            <img src="assets/img/icon/mr-quote.png" alt="" />
                                        </div>
                                        <div className="xb-item--content mb-90">
                                            "Partnering with Seargin transformed my e-commerce business. Their online advertising and SEO expertise boosted traffic and conversions, resulting in a revenue increase. I'm thrilled with the results!"
                                        </div>
                                        <div className="xb-item--author ul_li">
                                            <div className="xb-item--avatar">
                                                <img src="assets/img/avatar/mr_tm_02.png" alt="" />
                                            </div>
                                            <div className="xb-item--author-info">
                                                <h3 className="xb-item--name">Jordan Eugenio</h3>
                                                <span className="xb-item--desig">CEO, Healthcare</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* testimonial end */}
                    {/* blog start */}
                    <section className="blog bg_img pt-140 pb-140" data-background="assets/img/bg/mr_bg_2.jpg">
                        <div className="container">
                            <div className="ul_li_between align-items-end mb-35">
                                <div className="sec-title sec-title--marketing mb-20">
                                    <span className="subtitle">our latest news</span>
                                    <h2 className="title">Our Insights &amp; News</h2>
                                </div>
                                <a className="mr-all-link mb-20" href="blog.html">more news<span><img src="assets/img/icon/mr_arrow_right.svg" alt="" /></span></a>
                            </div>
                            <div className="mr-blog xb-mouseenter active">
                                <div className="xb-item--inner ul_li_between">
                                    <div className="xb-item--holder d-flex">
                                        <span className="xb-item--cat"><span><img src="assets/img/icon/cat_01.svg" alt="" /> marketing</span></span>
                                        <h2 className="xb-item--title">Navigating the Ever-Changing of Online Strategies..</h2>
                                    </div>
                                    <span className="xb-item--date">Aug 22, 2023</span>
                                    <span className="xb-item--read">10 min read</span>
                                    <div className="xb-item--img" data-background="assets/img/blog/mr_blog_01.jpg" />
                                    <a className="xb-overlay" href="blog-single.html" />
                                </div>
                            </div>
                            <div className="mr-blog xb-mouseenter">
                                <div className="xb-item--inner ul_li_between">
                                    <div className="xb-item--holder d-flex align-items-center">
                                        <span className="xb-item--cat"><span><img src="assets/img/icon/cat_01.svg" alt="" />digital</span></span>
                                        <h2 className="xb-item--title">The Future of Digital Marketing Emerging Trends..</h2>
                                    </div>
                                    <span className="xb-item--date">Aug 22, 2023</span>
                                    <span className="xb-item--read">10 min read</span>
                                    <div className="xb-item--img" data-background="assets/img/blog/mr_blog_02.jpg" />
                                    <a className="xb-overlay" href="blog-single.html" />
                                </div>
                            </div>
                            <div className="mr-blog xb-mouseenter">
                                <div className="xb-item--inner ul_li_between">
                                    <div className="xb-item--holder d-flex align-items-center">
                                        <span className="xb-item--cat"><span><img src="assets/img/icon/cat_03.svg" alt="" />tips</span></span>
                                        <h2 className="xb-item--title">Unpacking the World of Digital Campaigns..</h2>
                                    </div>
                                    <span className="xb-item--date">Aug 22, 2023</span>
                                    <span className="xb-item--read">10 min read</span>
                                    <div className="xb-item--img" data-background="assets/img/blog/mr_blog_03.jpg" />
                                    <a className="xb-overlay" href="blog-single.html" />
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* blog end */}
                </main>
                {/* footer start */}
                <footer className="xb-footer sticky footer-marketing mr-noise-bg pt-115 pb-45">
                    <div className="container">
                        <div className="mr-footer-cta ul_li_between">
                            <div className="mr-footer-holder mb-30">
                                <div className="ul_li mb-25">
                                    <div className="xb-item--logo">
                                        <img src="assets/img/logo/mr_f_logo.png" alt="" />
                                    </div>
                                    <h2>Let's Work</h2>
                                </div>
                                <div className="ul_li">
                                    <h2>With Us</h2>
                                    <a className="xb-btn xb-btn--marketing" href="contact.html">
                                        <div className="btn-anim-wrap">
                                            <span className="button-text">book a call</span>
                                            <span className="button-text">book a call</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="mr-footer-info mb-30">
                                <h3 className="xb-item--title">Get in touch</h3>
                                <p className="xb-item--info">+91 590088 55 12 <br />
                                    seargin@gmail.com <br />
                                    Sunshine park, Floor No 05</p>
                                <ul className="xb-item--social ul_li">
                                    <li><a href="#!"><i className="fab fa-facebook-f" /></a></li>
                                    <li><a href="#!"><i className="fab fa-linkedin-in" /></a></li>
                                    <li><a href="#!"><i className="fab fa-instagram" /></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-main mb-60">
                            <div className="row mt-none-40">
                                <div className="col-lg-3 footer-col mt-40">
                                    <div className="footer-widget">
                                        <h3 className="widget-title">Newsletter</h3>
                                        <p>Sign up to seargin weekly newsletter <br /> to get the latest updates.</p>
                                        <form action="#" className="mr-footer-newsletter mt-35">
                                            <span className="icon"><img src="assets/img/icon/mr-sms-tracking.svg" alt="" /></span>
                                            <input type="text" placeholder="Your Email Address" />
                                            <button><img src="assets/img/icon/mr_arrow_up.svg" alt="" /></button>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-lg-3 footer-col mt-40">
                                    <div className="footer-widget">
                                        <h3 className="widget-title">Services</h3>
                                        <ul className="footer-links list-unstyled">
                                            <li><a href="#!">SEO Analysis</a></li>
                                            <li><a href="#!">Social Media</a></li>
                                            <li><a href="#!">Website Development</a></li>
                                            <li><a href="#!">Email Marketing</a></li>
                                            <li><a href="#!">Content Marketing</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 footer-col mt-40">
                                    <div className="footer-widget">
                                        <h3 className="widget-title">Information</h3>
                                        <ul className="footer-links list-unstyled">
                                            <li><a href="#!">About</a></li>
                                            <li><a href="#!">Latest Articles</a></li>
                                            <li><a href="#!">Contact Us</a></li>
                                            <li><a href="#!">How it works</a></li>
                                            <li><a href="#!">FAQ’S</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 footer-col mt-40">
                                    <div className="footer-widget">
                                        <h3 className="widget-title">Resources</h3>
                                        <ul className="footer-links list-unstyled">
                                            <li><a href="#!">Help center</a></li>
                                            <li><a href="#!">Support</a></li>
                                            <li><a href="#!">Careers</a></li>
                                            <li><a href="#!">Pricing</a></li>
                                            <li><a href="#!">Products</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mr-footer-copyright ul_li_between">
                            <p className="mt-15">Copyright © 2023 Seargin. All rights reserved.</p>
                            <ul className="mr-footer-nav ul_li mt-15">
                                <li><a href="#!">Terms &amp; Conditions</a></li>
                                <li><a href="#!">Privacy Policy</a></li>
                                <li><a href="#!">Cookie Policy</a></li>
                                <li><a href="#!">Data Preferences</a></li>
                            </ul>
                        </div>
                    </div>
                </footer>
                {/* footer start */}
            </div>
            {/* jquery include */}
            {/* Mirrored from html.xpressbuddy.com/seargin/home-digital-marketing.html by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 03 Jan 2024 04:20:53 GMT */}
        </div>
    );
}

export default Digital;
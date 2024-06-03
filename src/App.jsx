import "./App.css";
import { useEffect, useState } from "react";
import './App.css'
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-chatbot-kit/build/main.css";

import PreventNavigationBtn from "./Pages/PreventNavigationBtn";
import ScrollToTopOnNavigation from "./scrollTopNavigate";

import Navbar from "./Componets/Navbar/Navbar";
import Banner from "./Componets/Banner/Banner";
import Services from "./Componets/Services/services";
import Client from "./Pages/Client-section";
import Contact from "./Pages/Contact";
import Fields from "./Componets/Fields";
import Portfolio from "./Pages/Portfolio/Portfolio";
import DigitalMarketing from "./Pages/Digital/Newdigital";
import ErpDevelopment from "./Pages/Erpdevelopment/ErpDevelopment";
import Softdevelopment from "./Pages/Soft/Softdevelopment";
import ErrorPage from "./Pages/ErrorPage";
import Careers from "./Pages/Careers";
import About from "./Pages/About";
import AppDevelopment from "./Pages/Developments/AppDevelopment";
import WebDevelopment from "./Pages/Developments/WebDevelopment";
import Footer from "./Componets/Footer/Footer";
import Business from "./Componets/What_Business/Business";
import Service from "./Componets/Services/Service";
import Possibility from "./Componets/Positbilities/Possibility";
import GraphicDesign from "./Pages/GraphicDesign/GraphicDesign";
import Blog from "./Componets/Blog/Blog";

function App() {
  const [scroll, setIsScrolled] = useState(false);

  //for animtion setup
  useEffect(() => {
    AOS.init();
  }, []);

  //for scrolling to y direction detect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition >= 195) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      data-aos-delay="0"
      data-aos-easing="ease"
      data-aos-duration="400"
    //className="overflow-hidden"
    >
      <BrowserRouter>
        <Navbar scroll={scroll} />
        <PreventNavigationBtn />
        <ScrollToTopOnNavigation />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/appDevelopment" element={<AppDevelopment />} />
          <Route path="/webDevelopment" element={<WebDevelopment />} />
          {/* <Route path="/digital-marketing" element={<DigitalMarketing />} /> */}
          <Route path="/graphic-design" element={<GraphicDesign />} />
          <Route path="/erp-developement" element={<ErpDevelopment />} />
          <Route path="/software-development" element={<Softdevelopment />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/portfolio-section" element={<Portfolio />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="all-container">
      {loading ? (
        <div className="loading-screen">
          <img
            src="img/logo/Dhanwis Logo-01.png"
            alt="Team Logo"
            className='splash-screen'
            data-aos="zoom-out-down"
            data-aos-duration="1000"
          />
        </div>
      ) : (
        <>
          {" "}
          <Banner />
          <Client />
          <Fields />
          <Business />
          {/* <Services /> */}
          <Service />
          {/* <Blog /> */}
          <Possibility />
        </>
      )}
    </div>
  );
};

export default App;

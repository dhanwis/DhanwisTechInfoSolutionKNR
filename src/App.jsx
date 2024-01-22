import Navbar from "./Componets/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./Componets/Banner/Banner";
import Services from "./Pages/services";
import Client from "./Pages/Client-section";
import Contact from "./Pages/Contact";
import './App.css'
import Fields from "./Componets/Fields";
import 'react-chatbot-kit/build/main.css';

import About from "./Pages/About";
import AppDevelopment from "./Pages/Developments/AppDevelopment";
import WebDevelopment from "./Pages/Developments/WebDevelopment";
import Footer from "./Componets/Footer/Footer";
import Careers from "./Pages/Careers";
import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect, useState } from "react";
import Soon from "./Componets/Soon/Soon";
import Portfolio from "./Pages/Portfolio/Portfolio";

function App() {

  useEffect(() => {
    AOS.init();
  }, []);



  return (
    <div data-aos-delay="0" data-aos-easing="ease" data-aos-duration="400">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" element={<About />} />
          <Route path="/appDevelopment" element={<AppDevelopment />} />
          <Route path="/webDevelopment" element={<WebDevelopment />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/comming-soon" element={<Soon />} />
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
      {loading ?
        <div className="loading-screen">
          <img src="img/logo/Dhanwis Logo-01.png" alt="Team Logo" width="300" height="auto" data-aos="zoom-out-down" data-aos-duration="1000" />
        </div> : <> <Banner />
          <Fields />
          <Services />
          <Client /></>}
    </div>
  );
};

export default App;

import Navbar from "./Componets/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./Componets/Banner/Banner";
import Services from "./Pages/services";
import Client from "./Pages/Client-section";
import Contact from "./Pages/Contact";
import './App.css'
import Fields from "./Componets/Fields";

import About from "./Pages/About";
import AppDevelopment from "./Pages/Developments/AppDevelopment";
import WebDevelopment from "./Pages/Developments/WebDevelopment";
import Footer from "./Componets/Footer/Footer";

function App() {
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
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

const Home = () => {
  return (
    <div className="all-container">
      <Banner />
      <Services />
      <Fields />
      <Client />
    </div>
  );
};

export default App;

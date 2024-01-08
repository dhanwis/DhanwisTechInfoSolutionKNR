import Navbar from "./Componets/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./Componets/Banner/Banner";
//import Services from "./Pages/services";
//import Client from "./Pages/Client-section";
//import Contact from "./Pages/Contact";
//import Fields from "./Componets/Fields";

import About from "./Pages/About";
import AppDevelopment from "./Pages/Developments/AppDevelopment";

function App() {
  return (
    <div data-aos-delay="0" data-aos-easing="ease" data-aos-duration="400">
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" element={<About />} />
          {/* <Route path='/about' element={ } />
          <Route path="/Portfolio" element={ } />
          <Route path="/services" element={ } />
          <Route path="/careers" element={ } />
          <Route path="/contact" element={ } /> */}
           
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const Home = () => {
  return (
    <div className="container">
      <Navbar />
      <Banner />
      {/* <Services />
      <Fields />
      <Client />
      <Contact /> */}
    </div>
  );
};

export default App;

import Navbar from './Componets/Navbar/Navbar'
import { useRef } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Banner from './Componets/Banner/Banner'
import Services from './Pages/services'
import Client from './Pages/Client-section'
import Contact from './Pages/Contact'
import Fields from './Componets/Fields'
import './App.css'
import About from './Pages/About'
import Animation from './Pages/Developments/animation'
import AppDevelopment from './Pages/Developments/AppDevelopment'


function App() {

  return (
    <div className='container' style={{ backgroundImage: `url(${'/mr_hero_bg.jpg'})` }}>
      <BrowserRouter >
        <Routes >
          <Route path='/' Component={Home} />
          <Route path='/about'element = {<About />} />
          {/* <Route path='/about' element={ } />
          <Route path="/Portfolio" element={ } />
          <Route path="/services" element={ } />
          <Route path="/careers" element={ } />
          <Route path="/contact" element={ } /> */}
          <Route path='/appDevelopment' element={<AppDevelopment />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}


const Home = () => {
  return (

    <div className='container'>
      <Navbar />
      <Banner />
      <Services />
      <Fields />
      <Client />
      <Contact />
       
    </div>
  )
}

export default App

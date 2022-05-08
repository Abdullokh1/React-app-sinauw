import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'
import NavItems from './components/Navbar/NavItems';
import Nav from './components/Navbar/Nav';
import HeroSection from './components/HeroPart/Hero';
import Stats from './components/Stats/Stats';
import ClassSection from './components/ClassesPart/Classes';
import Webinar from './components/Webinarpart/Webinar';
import Pricing from './components/PricingPart/Pricing';
import Advert from './components/AdvertPart/Advert';
import Footer from './components/Footer/Footer';


function App(props) {

  return (
    <>
    <Nav/>
    <HeroSection/>
    <Stats/>
    <ClassSection/>
    <Webinar/>
    <Pricing/>
    <Advert/>
    <Footer/>
   </>
  )
}

export default App;
import React, { useState } from "react";
import Slider from "../components/Carousal/Slider";

import NavBar from "../components/NavBar";

import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";


import Layout from "../components/SidebySide/Layout";
import ServicesHome from "../components/ServicesHome/ServicesHome";
import HeroSection from "../components/HeroSection";


const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <HeroSection/>
   
 

    <Layout/> 


  

  <ServicesHome/>
 <Slider/>
   
      <Footer/>
     
      
    
    </>
  );
};

export default Home;

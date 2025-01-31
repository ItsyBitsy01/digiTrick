import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Banner from "../components/SectionBanner/Banner";
import AboutImg from "../images/seo.jpg";
import AboutSection from "../components/AboutUS/AboutSection";
function About() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>z
    <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <Banner cName="banner-mid" bannerImg={AboutImg} title="Dedicated to transforming businesses with innovative services" btnClass="hide" />
      <AboutSection/>
     
      <Footer/>
    </>
  )
}

  export default About;
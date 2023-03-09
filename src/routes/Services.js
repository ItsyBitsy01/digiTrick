import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import NavBar from "../components/NavBar"; 
import Footer from "../components/Footer";
import Banner from "../components/SectionBanner/Banner";
import AboutImg from "../images/ServiceBanner.jpeg";
import InfoSection from "../components/InfoSection";
import { homeObjOne, homeObjThree, homeObjTwo } from "../components/InfoSection/Data";

// import Layout from "../components/SidebySide/Layout";
function Service() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <Banner cName="banner-mid" bannerImg={AboutImg} title="Leveraging Technology for Scaled Digital Experience

" btnClass="hide" />
    <InfoSection  {...homeObjOne}/> 
      <InfoSection {...homeObjTwo}/>

     <InfoSection {...homeObjThree}/>
  {/* <Layout/> */}
   
      <Footer/>
    </>
  )
}

  export default Service;
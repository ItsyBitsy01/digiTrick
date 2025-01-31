import React, {useState} from "react";
import ServiceCard from "../components/ServiceCard";
import NavBar from "./NavBar/index.js";
import Footer from "./Footer/index.js";
import Banner from "./SectionBanner/Banner.js";
import AboutImg from "../images/domain.jpg";
import Sidebar from "./Sidebar/index.js";

function Services() {
  const services = [
    { id: 1, title: "Trainings", description: "Comprehensive trainings across various technical domains.", link: "/trainings", icon: "path-to-trainings-icon" },
    { id: 2, title: "Job Support", description: "Expert assistance to help you navigate job challenges.", link: "/jobsupport", icon: "path-to-job-support-icon" },
    { id: 3, title: "Digital Marketing", description: "Boost your business with our expert digital marketing services.", link: "/marketing", icon: "path-to-digital-marketing-icon" },
    { id: 4, title: "Web Development", description: "Build professional websites tailored to your needs.", link: "/webdevelopment", icon: "path-to-web-development-icon" },
    { id: 5, title: "Mobile App Development", description: "End-to-end mobile app solutions for all platforms.", link: "/mobileappdevelopment", icon: "path-to-mobile-app-development-icon" },
    { id: 6, title: "E-Commerce Setup", description: "Get your online store up and running with our solutions.", link: "/ecommerce", icon: "path-to-e-commerce-setup-icon" },
    { id: 7, title: "C2C and W2 Employment Services", description: "Consulting services for contract-to-contract and direct employment.", link: "/employments", icon: "path-to-employment-services-icon" },
    { id: 8, title: "Software Development", description: "Custom software development tailored to your business needs.", link: "/softwaredevelopment", icon: "path-to-software-development-icon" }
  ];
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <> <Sidebar isOpen={isOpen} toggle={toggle} />
       <NavBar toggle={toggle} />
      <Banner cName="banner-mid" bannerImg={AboutImg} title="Our Services at Digi Trick" btnClass="hide" />
      <div className="service-list">
        {services.map(service => (
          <ServiceCard key={service.id} title={service.title} description={service.description} link={service.link} icon={service.icon} />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Services;

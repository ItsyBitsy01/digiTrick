import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import NavBar from '../components/NavBar'; // Assuming you have a NavBar component
import Footer from '../components/Footer'; // Assuming you have a Footer component
import Sidebar from '../components/Sidebar';
import Banner from '../components/SectionBanner/Banner';
import AboutImg from "../images/seo.jpg";
import { FaCheckCircle } from 'react-icons/fa'; // Import check icon

// Header Section with Image and Text
const HeaderSection = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  background-image: url(${AboutImg});
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Overlay text on the header
const HeaderText = styled.h1`
  position: absolute;
  color: white;
  font-size: 4rem;
  font-weight: 700;
  text-align: center;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.7);
  transition: color 0.3s ease;
  &:hover {
    color: black;
  }
`;

// Container for each section
const Section = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: flex-start; /* Align items to the start */
  padding: 60px 20px;
  background-color: ${({ bgColor }) => bgColor || '#e6f7ff'}; /* Light blue background */
  color: ${({ textColor }) => textColor || '#333'};
  transition: background-color 0.3s ease-in-out;
  position: relative;
  border-bottom: 2px solid #bbd3ef; /* Border for separation */
  &:hover {
    background-color:#bbd3ef;
    color: black;
    & h2, & p {
      color: black;
    }
  }
`;

// Wrapper for text content
const TextWrapper = styled.div`
  max-width: 800px;
  text-align: left; /* Align text to the left */
  margin-left: auto; /* Center align wrapper */
  margin-right: auto; /* Center align wrapper */
`;

// Headings with animation
const Heading = styled(motion.h2)`
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 20px;
  color: ${({ textColor }) => textColor || '#004080'}; /* Dark blue color */
  transition: color 0.3s ease;
`;

// Paragraph text with animation
const Text = styled(motion.p)`
  font-size: 1.2rem;
  margin-bottom: 20px;
  line-height: 1.6;
  transition: color 0.3s ease;
  @media (max-width: 768px) {
    font-size: 1rem; /* Reduce font size on tablets and smaller screens */
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem; /* Further reduce font size on mobile screens */
    margin-bottom: 10px;
  }
`;

// List item container with aligned icon and text
const ListItem = styled.div`
  display: flex;
  align-items: center; /* Align items vertically centered */
  margin-bottom: 15px;
  font-size: 1.2rem;
  color: #333;
`;

// Styled icon with consistent size
const Icon = styled(FaCheckCircle)`
  margin-right: 10px;
  color: #004080; /* Dark blue color */
  font-size: 1.5rem; /* Consistent size for check icons */
  line-height: 1.5; /* Adjust line height to match text */
  vertical-align: middle; /* Align icon vertically with text */
`;

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

// Main About Us Component
const AboutUs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <Banner cName="banner-mid" bannerImg={AboutImg} title="About Us" btnClass="hide" />


      {/* Who Are We Section */}
      <Section initial="hidden" whileInView="visible" variants={fadeIn}>
        <TextWrapper>
          <Heading variants={fadeIn}>Who Are We?</Heading>
          <Text variants={fadeIn}>
            Digi Trick Consultancy is a forward-thinking technology and consulting firm committed to empowering businesses and individuals with the skills and tools necessary to succeed in today’s digital age.
          </Text>
          <Text variants={fadeIn}>
            Founded with a passion for innovation, we specialize in bridging the gap between technology and human potential through a range of services designed to drive both personal and organizational growth.
          </Text>
          <Text variants={fadeIn}>
            From expert-led corporate training to tailored digital solutions, we are your partners in navigating the fast-evolving landscape of business and technology.
          </Text>
        </TextWrapper>
      </Section>

      {/* What We Do Section */}
      <Section initial="hidden" whileInView="visible" variants={fadeIn}>
        <TextWrapper>
          <Heading variants={fadeIn}>What We Do</Heading>
          <Text variants={fadeIn}>
            At Digi Trick Consultancy, we offer a comprehensive suite of services aimed at helping our clients thrive in a competitive market.
          </Text>
          <ListItem>
            
            <Text variants={fadeIn}><Icon />
              <b>Training Programs:</b> We provide cutting-edge corporate and college training in areas such as technology, leadership, and communication.
            </Text>
          </ListItem>
          <ListItem>
            
            <Text variants={fadeIn}><Icon />
              <b>Job Support:</b> Our hands-on job support services help professionals tackle challenges in their roles.
            </Text>
          </ListItem>
          <ListItem>
            
            <Text variants={fadeIn}><Icon />
              <b>Digital Marketing:</b> Our expert digital marketing services boost online visibility and drive measurable results.
            </Text>
          </ListItem>
          <ListItem>
            
            <Text variants={fadeIn}><Icon />
              <b>Web & Mobile App Development:</b> We create custom, user-friendly websites and mobile apps optimized for growth.
            </Text>
          </ListItem>
          <ListItem>
            
            <Text variants={fadeIn}><Icon />
              <b>E-Commerce Setup:</b> We help businesses launch and optimize their online stores with robust solutions.
            </Text>
          </ListItem>
          <ListItem>
            
            <Text variants={fadeIn}><Icon />
              <b>C2C & W2 Employment Services:</b> We streamline the hiring process with specialized employment solutions.
            </Text>
          </ListItem>
        </TextWrapper>
      </Section>

      {/* Why Us Section */}
      <Section initial="hidden" whileInView="visible" variants={fadeIn}>
        <TextWrapper>
          <Heading variants={fadeIn}>Why Us?</Heading>
          <Text variants={fadeIn}>
            Choosing Digi Trick Consultancy means partnering with a team that is dedicated to your success. Here’s why we stand out:
          </Text>
          <ListItem>
            
            <Text variants={fadeIn}><Icon />
              <b>Experienced Professionals:</b> Our team consists of industry veterans with deep expertise across various domains.
            </Text>
          </ListItem>
          <ListItem>
            
            <Text variants={fadeIn}><Icon />
              <b>Tailored Solutions:</b> We offer customized services aligned with your specific goals.
            </Text>
          </ListItem>
          <ListItem>
            
            <Text variants={fadeIn}><Icon />
              <b>Proven Results:</b> We’ve helped numerous businesses enhance their operations and improve their online presence.
            </Text>
          </ListItem>
          <ListItem>
            
            <Text variants={fadeIn}><Icon />
              <b>Customer-Centric Approach:</b> We pride ourselves on our commitment to client satisfaction.
            </Text>
          </ListItem>
        </TextWrapper>
      </Section>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default AboutUs;

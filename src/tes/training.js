import React,{useState} from "react";
import './training.css';
import NavBar from "/Users/shairinmeraj/Desktop/Things/Afucent/digiTrick/src/components/NavBar/index.js";
import Banner from "/Users/shairinmeraj/Desktop/Things/Afucent/digiTrick/src/components/SectionBanner/Banner.js";
import AboutImg from "/Users/shairinmeraj/Desktop/Things/Afucent/digiTrick/src/images/training.jpg";
import Footer from "../components/Footer";
import Fade from 'react-reveal/Fade';
import Sidebar from "../components/Sidebar";
const TrainingServices = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <Banner cName="banner-mid" bannerImg={AboutImg} title="Our Services at Digi Trick" btnClass="hide" />
      
      <div className="training-page">
        <Fade bottom>
          <h1>Training Services at Digi Trick Consultancy</h1>
          <br/>
          <p>
            At Digi Trick Consultancy, we are dedicated to delivering comprehensive training solutions that cater to both corporate professionals and students. Our goal is to empower individuals with the skills and knowledge they need to excel in their careers and drive organizational success. With a focus on practical, hands-on learning, our training programs are designed to meet the demands of today’s rapidly evolving industries.
          </p>
        </Fade>

        <section className="training-section">
          <Fade bottom>
            <br/>
            <h2>Corporate Training</h2>
            <p>
              Our corporate training services are designed to help businesses upskill their employees and stay competitive in a fast-paced market. We understand that every organization is unique, which is why we offer customized training programs that align with your company’s goals and objectives.
            </p>
            <h3>Our Corporate Training Services Include:</h3>
            <br/>
            <ul>
              <li>Technology Training: Stay ahead with our cutting-edge courses in Python, SAP, Cloud Computing, Data Science, and more.</li>
              <li>Leadership and Management Development: Equip your leaders with strategic thinking, decision-making, and team management skills.</li>
              <li>Soft Skills and Communication: Enhance your team's interpersonal skills with workshops on communication, teamwork, and emotional intelligence.</li>
              <li>Industry-Specific Certifications: Get certified in various fields and be recognized for your expertise.</li>
              <li>Customized Workshops: Tailored workshops addressing specific challenges and goals relevant to your business.</li>
            </ul>
          </Fade>
        </section>

        <section className="training-section">
          <Fade bottom>
            <br/><br/>
            <h2>College Training</h2>
            <p>
              Our college training services bridge the gap between academic learning and real-world applications. We partner with educational institutions to provide students with the tools they need to succeed in their careers. Our programs are focused on developing technical skills, enhancing employability, and preparing students for the professional world.
            </p>
            <h3>Our College Training Services Include:</h3>
            <br/>
            <ul>
              <li>Technical Workshops: Hands-on experience in AI, Machine Learning, Web Development, and more.</li>
              <li>Career Development Sessions: Guidance on career planning, resume building, and interview preparation.</li>
              <li>Internship and Placement Preparation: Programs to prepare students for internships and job placements.</li>
              <li>Certification Courses: Validate your skills and gain a competitive edge in the job market.</li>
            </ul>
          </Fade>
        </section>

        <section className="training-section">
          <Fade bottom>
            <br/><br/>
            <h2>Why Choose Digi Trick Consultancy?</h2>
            <ul>
              <li>Experienced Trainers: Industry veterans with real-world experience.</li>
              <li>Tailored Training Programs: Customized to align with your needs.</li>
              <li>Flexible Delivery Options: Choose between online, offline, or hybrid learning.</li>
              <li>Proven Track Record: Success stories with improved performance and better career opportunities.</li>
            </ul>
          </Fade>
        </section>

        <section className="training-section" id="last">
          <Fade bottom>
            <br/><br/>
            <h2>Additional Services</h2>
            <ul>
              <li>Training Needs Analysis: Identifying skill gaps and addressing them.</li>
              <li>Post-Training Support: Ongoing support for applying the skills gained.</li>
              <li>Learning Management Systems (LMS): Consultancy for implementing and optimizing LMS.</li>
            </ul>
          </Fade>
        </section>
      </div>
      <Footer/>
    </>
  );
};

export default TrainingServices;

import React,{useState} from "react";
import './training.css'; // Reusing the same CSS file
import NavBar from "/Users/shairinmeraj/Desktop/Things/Afucent/digiTrick/src/components/NavBar/index.js";
import Banner from "/Users/shairinmeraj/Desktop/Things/Afucent/digiTrick/src/components/SectionBanner/Banner.js";
import AboutImg from "/Users/shairinmeraj/Desktop/Things/Afucent/digiTrick/src/images/job support.jpg";
import Footer from "../components/Footer";
import Fade from 'react-reveal/Fade'; 
import Sidebar from "../components/Sidebar";
const JobSupport = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <Banner cName="banner-mid" bannerImg={AboutImg} title="Job Support at Digi Trick" btnClass="hide" />
      <div className="training-page">
        <Fade bottom>
          <h1>Job Support Services at Digi Trick Consultancy</h1>

          <p>
            At Digi Trick Consultancy, we recognize that the professional world can be demanding, especially when you’re stepping into a new role, handling complex projects, or transitioning to a different technology. Our Job Support services are designed to provide you with the expert assistance you need to navigate these challenges confidently and successfully. Whether you're a seasoned professional or someone new to the field, our goal is to help you thrive in your career.
          </p>
        </Fade>

        <section className="training-section">
          <Fade bottom>
            <h2>Our Job Support Services</h2>
            <h3>1. On-the-Job Assistance</h3>
            <p>
              Our On-the-Job Assistance service provides real-time support as you tackle daily responsibilities, solve problems, understand concepts, and follow best practices.
              <ul>
              <li>Real-time problem-solving for tasks and projects</li>
              <li>Guidance on industry best practices and methodologies</li>
              <li>Support for technical and non-technical challenges</li>
              <li>Help with documentation, coding, and debugging</li>
            </ul>
            </p>
            
          </Fade>

          <Fade bottom>
            <h3>2. Project-Based Support</h3>
            <p>
              We offer support through each stage of your project, from planning to delivery, ensuring successful outcomes with expert guidance.
              <ul>
              <li>Step-by-step project guidance</li>
              <li>Help with complex coding, design, and implementation</li>
              <li>Testing, troubleshooting, and quality assurance support</li>
              <li>Assistance in meeting deadlines</li>
            </ul>
            </p>
            
          </Fade>

          <Fade bottom>
            <h3>3. Technology Transition Support</h3>
            <p>
              Transitioning to new technology? We provide hands-on training and mentoring to help you adapt quickly and efficiently.
              <ul>
              <li>Training in new tools and technologies</li>
              <li>Best practices for smooth technology integration</li>
              <li>Mentoring and coaching for confidence building</li>
            </ul>
            </p>
            
          </Fade>

          <Fade bottom>
            <h3>4. Skill Enhancement</h3>
            <p>
              We help professionals continuously improve their technical and soft skills through personalized learning paths and expert training.
              <ul>
              <li>Tailored learning paths based on your career goals</li>
              <li>Advanced techniques and soft skills development</li>
            </ul>
            </p>
            
          </Fade>

          <Fade bottom>
            <h3>5. Career Development Support</h3>
            <p>
              Looking to advance in your career? We provide resume building, interview preparation, and job search strategies to help you succeed.
              <ul>
              <li>Personalized career planning</li>
              <li>Resume and LinkedIn optimization</li>
              <li>Interview preparation and mock interviews</li>
            </ul>
            </p>
            
          </Fade>
        </section>
<br/>
        <section className="training-section" id="last">
          <Fade bottom>
            <h2>Why Choose Digi Trick Consultancy for Job Support?</h2>
            <ul>
              <li>Expertise Across Industries: Support from professionals with deep industry experience.</li>
              <li>Personalized Attention: Tailored support for your specific needs.</li>
              <li>Flexible and Convenient: Support available at any time you need.</li>
              <li>Confidential and Reliable: We prioritize privacy and trust.</li>
            </ul>
          </Fade>
        </section>
      </div>
      <Footer/>
    </>
  );
};

export default JobSupport;

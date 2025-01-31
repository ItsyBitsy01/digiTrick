import React from "react";
import { Link } from "react-router-dom";
import { FaChalkboardTeacher, FaBriefcase, FaBullhorn, FaCode, FaMobileAlt, FaShoppingCart, FaUserTie, FaLaptop } from "react-icons/fa";
import './ServiceCard.css';

const icons = {
  "Trainings": <FaChalkboardTeacher />,
  "Job Support": <FaBriefcase />,
  "Digital Marketing": <FaBullhorn />,
  "Web Development": <FaCode />,
  "Mobile App Development": <FaMobileAlt />,
  "E-Commerce Setup": <FaShoppingCart />,
  "C2C and W2 Employment Services": <FaUserTie />,
  "Software Development": <FaLaptop />
};

const ServiceCard = ({ title, description, link }) => {
  return (
    <div className="service-card">
      <div className="service-icon">{icons[title]}</div>
      <h2>{title}</h2>
      <p>{description}</p>
      <Link to={link} className="service-link">Learn More</Link>
    </div>
  );
};

export default ServiceCard;

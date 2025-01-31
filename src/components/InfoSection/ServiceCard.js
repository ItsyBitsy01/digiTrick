// src/components/ServiceCard.js
import React from "react";
import { Link } from "react-router-dom";
import './ServiceCard.css';

const ServiceCard = ({ title, description, link }) => {
  return (
    <div className="service-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <Link to={link} className="service-link">Learn More</Link>
    </div>
  );
};

export default ServiceCard;

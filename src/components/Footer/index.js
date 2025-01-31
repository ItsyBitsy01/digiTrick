import React from 'react';
import {  FaLinkedin, FaEnvelope } from 'react-icons/fa';
import {
  FooterContainer,
  FooterLinks,
  FooterLink,
  SocialIcons,
  SocialIconLink,
  FooterText
} from './footerElements';

const Footer = () => {
  return (
    <FooterContainer>
      <SocialIcons>
        
        <SocialIconLink href="mailto:Digitrickk@gmail.com" target="_blank" aria-label="Gmail">
          <FaEnvelope />
        </SocialIconLink>
        <SocialIconLink href="https://www.linkedin.com" target="_blank" aria-label="LinkedIn">
          <FaLinkedin />
        </SocialIconLink>
        
      </SocialIcons>
      <FooterLinks>
        <FooterLink href="#home">Home</FooterLink>
        <FooterLink href="#services">Services</FooterLink>
        <FooterLink href="#about">About Us</FooterLink>
        <FooterLink href="#contact">Contact Us</FooterLink>
      </FooterLinks>
      <FooterText>© Copyright 2024. All rights reserved.</FooterText>
    </FooterContainer>
  );
};

export default Footer;

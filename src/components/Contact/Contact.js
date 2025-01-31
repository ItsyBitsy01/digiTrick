import React, {useState} from 'react'


import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroBtnWrapper,
ArrowForward,ArrowRight} from '../HeroSection/HeroElements'
import { LinkButton } from '../LinkButton';
const Connect = () => {
    const [hover, setHover]=useState(false);
    const onHover=()=>{
        setHover(!hover);
    }
  return (
    <HeroContainer id='home'> 
        <HeroBg>
            <VideoBg alt='team' src={require("../../images/digiTrick.jpeg")} />
        </HeroBg>
        <HeroContent>
            
            <HeroH1>Let's help you navigate your next</HeroH1>
        
            <HeroBtnWrapper>
               <LinkButton  to='/contact' onMouseEnter={onHover} onMouseLeave={onHover} primary={true} dark={true}>Contact Us{hover?<ArrowForward/>:<ArrowRight/>}</LinkButton>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default Connect
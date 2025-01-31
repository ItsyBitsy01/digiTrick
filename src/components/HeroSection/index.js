import React, {useState} from 'react'
import Video from '/Users/shairinmeraj/Desktop/Things/Afucent/digiTrick/src/images/webpage.jpg'
import { Button } from '../ButtonElements'

import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper,
ArrowForward,ArrowRight} from './HeroElements'
const HeroSection = () => {
    const [hover, setHover]=useState(false);
    const onHover=()=>{
        setHover(!hover);
    }
  return (   
    <HeroContainer id='home'>
        <HeroBg>
            <VideoBg src={Video}/>
        </HeroBg> 
        <HeroContent>
            <HeroH1>Digi Trick Consultancy</HeroH1>
            <HeroP>Unlocking Digit Potential Together</HeroP>
            <HeroBtnWrapper>
                <Button to="/about" onMouseEnter={onHover} onMouseLeave={onHover} primary={true} dark={true}>Learn More{hover?<ArrowForward/>:<ArrowRight/>}</Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
import React from 'react'
import "./hover.css"
import Icon1 from '../../images/digiTrick.png'
import Icon2 from '../../images/digiTrick.png'
import Icon3 from '../../images/digiTrick.png'
import { ServicesContainer, Servicesdiv, ServicesWrapper,ServicesBox, ServicesCard, ServicesH1, ServicesH2,
ServicesP, ServicesIcon } from './ServiceElements';
const Services = () => {
  return (<ServicesBox>
  <ServicesH1>Digital Expereince Management Practice</ServicesH1>
    <ServicesContainer >
   
         <ServicesWrapper>
          
            <ServicesCard>
                <ServicesIcon  className='IconS' src={Icon1}/>
                <Servicesdiv className='mm'>
                <ServicesH2  className='sh2'>Content Management Systems</ServicesH2>
                <div className='hide'>
                <ServicesP>Headless CMS</ServicesP>
                <ServicesP> Traditional CMS</ServicesP>
                <ServicesP>Experience Manager  as a Cloud Service</ServicesP></div>
                </Servicesdiv>
                 </ServicesCard>
            <ServicesCard>
                <ServicesIcon className='IconS' src={Icon2}/>
                <Servicesdiv className='mm'>
                <ServicesH2 className='sh2'>Web & Mobile Apps</ServicesH2><div className='hide'>
                <ServicesP>Web Applications</ServicesP>
                <ServicesP>Cross Platform Apps</ServicesP></div>
                </Servicesdiv>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon className='IconS' src={Icon3}/>
                <Servicesdiv className='mm'>
                <ServicesH2  className='sh2'>E-commerce System</ServicesH2><div className='hide'>
                <ServicesP>Business-to-business (B2B) sites</ServicesP>
                <ServicesP>Business-to-consumer (B2C) sites</ServicesP></div>
                </Servicesdiv>
            </ServicesCard>
         </ServicesWrapper>
 
    </ServicesContainer></ServicesBox>
  )
}

export default Services
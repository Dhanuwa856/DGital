import React from 'react'
import Skils from '../../Components/Skils/Skils'
import AboutUs from '../../Components/AboutUs/AboutUs'
import Number from '../../Components/Number/Number'
import OurTeam01 from '../../Components/OurTeam/OurTeam01'
import SecondBg from '../../Components/SecondBg/SecondBg'
import SecondHero from '../../Components/SecondHero/SecondHero'

function About() {
  return (
    <>
    <SecondBg>
      <SecondHero title='About Us' link='About'/>
    </SecondBg>
    <Skils/>
    <AboutUs/>
    <Number/>
    <OurTeam01/>
   
    
    </>
  )
}

export default About
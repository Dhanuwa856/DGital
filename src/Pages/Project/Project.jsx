import React from 'react'
import OurProject from '../../Components/OurProject/OurProject'
import SecondBg from '../../Components/SecondBg/SecondBg'
import SecondHero from '../../Components/SecondHero/SecondHero'

function Project() {
  return (
   <>
   <SecondBg>
    <SecondHero title="Project" link="Project"/>
   </SecondBg>
   <OurProject/>
   </>
  )
}

export default Project
import React from 'react'
import OurProject from '../../Components/OurProject/OurProject'
import OurTeam01 from '../../Components/OurTeam/OurTeam01'
import SecondBg from '../../Components/SecondBg/SecondBg'
import SecondHero from '../../Components/SecondHero/SecondHero'

function OurTeam() {
  return (
    <>
    <SecondBg>
      <SecondHero title="Our Team" link="Our Team" />
    </SecondBg>
    <OurTeam01/>
    </>
  )
}

export default OurTeam
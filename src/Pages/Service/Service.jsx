import React from 'react'
import OurServices from '../../Components/OurServices/OurServices'
import NewsLetter from '../../Components/NewsLetter/NewsLetter'
import Testimonial01 from '../../Components/Testimonial/Testimonial01'
import SecondBg from '../../Components/SecondBg/SecondBg'
import SecondHero from '../../Components/SecondHero/SecondHero'

function Service() {
  return (
    <>
    <SecondBg>
      <SecondHero title="Service" link="Service" />
    </SecondBg>
    <OurServices/>
    <NewsLetter/>
    <Testimonial01/>
    
    </>
  )
}

export default Service
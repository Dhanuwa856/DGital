import React from 'react'
import Hero from '../../Components/Hero/Hero'
import Skils from '../../Components/Skils/Skils'
import AboutUs from '../../Components/AboutUs/AboutUs'
import Number from '../../Components/Number/Number'
import OurServices from '../../Components/OurServices/OurServices'
import NewsLetter from '../../Components/NewsLetter/NewsLetter'
import OurProject from '../../Components/OurProject/OurProject'
import Testimonial from '../../Components/Testimonial/Testimonial'

function Home() {
  return (
   <>
   <Hero/>
   <Skils/>
   <AboutUs/>
   <Number/>
   <OurServices/>
   <NewsLetter/>
   <OurProject/>  
   <Testimonial/>
   
    </>
  )
}

export default Home
import React from 'react'
import ContactFor from '../../Components/ContactFor/ContactFor'
import SecondBg from '../../Components/SecondBg/SecondBg'
import SecondHero from '../../Components/SecondHero/SecondHero'

function Contact() {
  return (
   <>
   <SecondBg>
    <SecondHero title="Contact" link="Contact" />
   </SecondBg>
   <ContactFor/>
   </>
  )
}

export default Contact
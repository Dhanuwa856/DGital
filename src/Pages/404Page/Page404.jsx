import React from 'react'
import NotFound from '../../Components/NotFound/NotFound'
import SecondBg from '../../Components/SecondBg/SecondBg'
import SecondHero from '../../Components/SecondHero/SecondHero'

function Page404() {
  return (
    <>
    <SecondBg>
      <SecondHero title="Not Found" link="404" />
    </SecondBg>
    <NotFound/>
    </>
  )
}

export default Page404
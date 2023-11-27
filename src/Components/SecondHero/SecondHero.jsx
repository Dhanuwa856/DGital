import React from 'react'

function SecondHero(props) {
  return (
    <div className='flex flex-col text-center'>
      <h1 className='text-light font-semibold text-4xl'>{props.title}</h1>
      <hr  className='w-[70%] mx-auto mt-2'/>
      <div className='flex mt-2 justify-center gap-3 text-lg text-light'>
        <span className='side-line cursor-pointer'>Home</span>
        <span className='side-line cursor-pointer'>Pages</span>
        <span>{props.link}</span>
      </div>
    </div>
  )
}

export default SecondHero
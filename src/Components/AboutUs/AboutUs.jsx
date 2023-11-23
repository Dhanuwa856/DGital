import React from 'react'
import { Progress } from 'flowbite-react';
import About_img from '../Assets/about.png'
function AboutUs() {
  return (
    <div className='about-us mt-40 w-[85%] mx-auto flex gap-10'>
      <div className="about-us-left w-1/2">
        <div className="mini-mini-title text-secondary font-medium text-lg relative">ABOUT US <span></span></div>
        <h2 className='text-dark font-bold text-4xl mt-4'>#1 Digital solution with 10 <br /> years of experience</h2>
        <p className='text-[#777] mt-5 w-[80%]'>Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit clita duo justo eirmod magna dolore erat amet</p>
       <div className='flex flex-col gap-3 mt-5'>
        <div className='flex justify-between text-[#777] font-normal'>
          <p>Digital Marketing</p>
          <span>85%</span>
        </div>
        <Progress progress={85} color='purple' size="sm"/>
        <div className='flex justify-between text-[#777] font-normal'>
          <p>SEO & Backlinks</p>
          <span>90%</span>
        </div>
        <Progress progress={90} color='yellow'  size="sm"/>
        <div className='flex justify-between text-[#777] font-normal'>
          <p>Design & Development</p>
          <span>95%</span>
        </div>
        <Progress progress={95} color='dark' size="sm"/>
       </div>
        <button className='mt-7 bg-primary text-light text-lg font-medium rounded-3xl py-3 px-7 about-us-btn'>Read More</button>
      </div>
      <div className="about-us-right">
        <img src={About_img} alt="about image" className='w-[85%]'/>
      </div>
    </div>
  )
}

export default AboutUs
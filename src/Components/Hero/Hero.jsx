import React from "react";
import HeroBg from "../HeroBg/HeroBg";
import Hero_img from '../Assets/hero.png'

function Hero() {
  return (
    <>
    <HeroBg>
     <div className="hero-left w-1/2">
      <h2 className="text-light font-bold text-4xl">A Digital Agency Of <br /> Inteligents & Creative <br /> People</h2>
      <p className="mt-5 text-light font-medium w-[90%] text-lg">Tempor rebum no at dolore lorem clita rebum rebum ipsum rebum stet dolor sed justo kasd. Ut dolor sed magna dolor sea diam. Sit diam sit justo amet ipsum vero ipsum clita lorem</p>
      <div className="hero-left-btns mt-5 flex gap-5 text-dark text-lg">
        <button className="py-3 bg-secondary rounded-3xl px-10 hover:bg-light">Read More</button>
        <button className="py-3 bg-light rounded-3xl px-10 hover:bg-secondary">Contact Us</button>
      </div>
     </div>
     <div className="hero-right w-1/2">
      <img src={Hero_img} alt="" className="w-[80%]"/>
     </div>
    </HeroBg>
  
    </>
  );
}

export default Hero;

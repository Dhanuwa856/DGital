import React from "react";
import Hero_Bg_Center from "../Assets/blob-center.png";
import Bg_Bottom from "../Assets/bg-bottom.png";

function HeroBg(props) {
  return (
    <div className="relative">
      <div className="bg-primary w-full h-screen flex items-center justify-center">
        <img src={Hero_Bg_Center} alt="" />
      </div>
      <img src={Bg_Bottom} alt="" className="w-full absolute top-[82%]"/>
      <div className="absolute top-[24%] w-[85%] flex left-[15%]">
        {props.children}
      </div>
    </div>
  );
}

export default HeroBg;

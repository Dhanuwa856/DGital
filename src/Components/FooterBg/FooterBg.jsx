import React from "react";
import Map from "../Assets/map.png";
import Bg_Top from "../Assets/bg-top.png";

function FooterBg(props) {
  return (
    <div className="relative">
      <img src={Bg_Top} alt="" className="w-full absolute" />
      <div className="bg-primary mt-36 w-full h-[80vh]">
        <img src={Map} alt="" className="w-full h-[80vh]" />
      </div>
      <div className="absolute top-[24%] w-[85%] ml-20 gap-5">
        {props.children}
      </div>
    </div>
  );
}

export default FooterBg;

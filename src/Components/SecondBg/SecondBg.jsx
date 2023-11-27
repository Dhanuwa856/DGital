import React from "react";
import Img_Cener from "../Assets/blob-center.png";
import Bg_Bottom from "../Assets/bg-bottom.png";

function SecondBg(props) {
  return (
    <div className="relative">
      <div className="bg-primary h-[65vh] flex items-center justify-center">
        <img src={Img_Cener} alt="" />
      </div>
      <img src={Bg_Bottom} alt="" className="w-full absolute top-[72%]" />
      <div className="absolute top-1/2 left-1/2 center-text">
      {props.children}
      </div>
    </div>
  );
}

export default SecondBg;

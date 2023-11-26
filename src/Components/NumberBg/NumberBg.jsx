import React from "react";
import Center from "../Assets/blob-center.png";
import './NumberBg.css'

function NumberBg(props) {
  return (
    <div className="bg-primary h-[60vh] flex items-center justify-center number-bg relative overflow-hidden">
      <img src={Center} alt="" />
      <span className="number-span"></span>
      <div className="absolute top-[35%] w-[85%] flex items-center gap-14 mx-auto">
        {props.children}
      </div>
    </div>
  );
}

export default NumberBg;

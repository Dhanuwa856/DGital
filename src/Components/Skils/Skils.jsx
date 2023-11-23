import React from "react";
import Skil_List from '../Assets/SkilsLink'
import SkilLink from "../SkilLink/SkilLink";


function Skils() {
  return (
    <div className="mt-12">
      <div className="skil-boxes w-[85%] mx-auto flex gap-5">
    {Skil_List.map((item,i)=>{
      return(
        <SkilLink  key={i} icon={item.icon} title={item.title} paragraph={item.paragraph} />
      )
    })}
      </div>
    </div>
  );
}

export default Skils;

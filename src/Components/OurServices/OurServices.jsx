import React from "react";
import Services_All from '../Assets/ServicesList'
import ServicesList from "../ServicesList/ServicesList";


function OurServices() {
  return (
    <div className="mt-40">
      <div className="mini-title w-max mx-auto">
        <span>OUR SERVICES</span>
      </div>
      <h3 className="text-center font-bold text-dark mt-5 text-4xl">
        What Solutions We Provide
      </h3>
      <div className="services-boxes w-[85%] mt-10 grid mx-auto gap-y-10">
      {Services_All.map((item,i)=>{
        return (
          <ServicesList key={i} icon={item.icon} title={item.title} />
        )
      })}
      </div>
    </div>
  );
}

export default OurServices;

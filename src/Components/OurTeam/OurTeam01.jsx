import React from "react";
import All_Team from '../Assets/TeamList'
import TeamLink from "../TeamLink/TeamLink";

function OurTeam01() {
  return (
    <div className="mt-10">
      <div className="mini-title w-max mx-auto">
        <span>OUR TEAM</span>
      </div>
      <h3 className="text-center font-bold text-dark mt-5 text-4xl">
        Our Team Members
      </h3>
      <div className="team-boxes w-[85%] mx-auto flex mt-5 justify-center gap-10">
      {All_Team.map((item,i)=>{
        return (
          <TeamLink key={i} name={item.name} image={item.image} position={item.position}/>
        )
      })}
      </div>
    </div>
  );
}

export default OurTeam01;

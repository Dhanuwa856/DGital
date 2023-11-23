import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function SkilLink(props) {
  return (
    <div className="skil-box w-1/3 text-center bg-slate-100 py-5 rounded-lg cursor-pointer hover:-translate-y-4">
      <span className="text-primary text-5xl">
        <FontAwesomeIcon icon={props.icon} />
      </span>
      <h5 className="text-dark mt-3 font-medium text-lg">{props.title}</h5>
      <p className="text-[#777] font-normal text-base w-[60%] text-center mt-2 mx-auto">
        {props.paragraph}
      </p>
    </div>
  );
}

export default SkilLink;

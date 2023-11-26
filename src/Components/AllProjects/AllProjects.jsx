import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

function AllProjects(props) {
  return (
    <div className="project-box w-[90%] bg-slate-100 pb-5 rounded-lg">
      <div className="hover01">
        <figure>
          <img src={props.image} alt="" className="rounded-t-lg" />
          <div className="image-overlay flex justify-center items-center gap-3 text-xl text-light">
            <div className="hidden-icons gap-4 flex">
              <span className="cursor-pointer">
                <FontAwesomeIcon icon={faEye} />
              </span>
              <span className="cursor-pointer">
                <FontAwesomeIcon icon={faLink} />
              </span>
            </div>
          </div>
        </figure>
      </div>
      <h4 className="text-primary mt-5 ml-3 font-medium text-lg cursor-pointer hover:text-secondary">
        UI / UX Design
      </h4>
      <p className="text-dark mt-3 ml-3 font-medium text-xl">
        Digital Agency Website Design And Development
      </p>
    </div>
  );
}

export default AllProjects;

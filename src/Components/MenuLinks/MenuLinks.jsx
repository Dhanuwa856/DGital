import React from "react";
import { NavLink } from "react-router-dom";

function MenuLinks(props) {
  return (
    <div>
      <NavLink to={props.link} className="text-light text-lg font-medium hover:text-secondary delay-100">{props.linkname}</NavLink>
    </div>
  );
}

export default MenuLinks;

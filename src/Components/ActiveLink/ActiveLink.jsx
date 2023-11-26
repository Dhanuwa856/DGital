import React, { useState } from "react";

function ActiveLink(props) {
  const [selectLink, setselectLink] = useState(false);
  return (
    <>
      <div
        className={
          selectLink
            ? "filter-item cursor-pointer active-link"
            : "filter-item cursor-pointer"
        }
        data-filter={props.filter}
        onClick={() => {
          setselectLink(!selectLink);
        }}
      >
        {props.name}
      </div>
    </>
  );
}

export default ActiveLink;

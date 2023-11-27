import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom'

function NotFound() {
  return (
    <div className="mt-20 text-center">
      <span className="text-red-500 font-extrabold text-7xl">
        <FontAwesomeIcon icon={faTriangleExclamation} />
      </span>
      <h1 className="text-dark font-bold mt-4 text-8xl">404</h1>
      <h4 className="text-dark font-bold mt-3 text-5xl">Page Not Found</h4>
      <p className="mt-5 w-1/2 mx-auto text-[#777] text-lg">
        We’re sorry, the page you have looked for does not exist in our website!
        Maybe go to our home page or try to use a search?
      </p>
      <button className="bg-primary mt-5 text-light font-medium rounded-3xl py-3 px-7">
        <Link to="/">Go Back To Home</Link>
      </button>
    </div>
  );
}

export default NotFound;

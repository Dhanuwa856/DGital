import React, { useState } from "react";
import MenuLinks from "../MenuLinks/MenuLinks";
import "./NavBar.css";
import { Link } from "react-router-dom";


function NavBar() {
  const [visible, setvisible] = useState(false);

  return (
    <>
    <div className="nav-bar bg-primary flex justify-between items-center py-7 px-10 relative">
      <div className="nav-logo">
        <Link to="/" className="text-light font-bold text-5xl">
          DGital
        </Link>
      </div>
      <div className="nav-menu flex gap-8 ">
        <MenuLinks link="/" linkname="Home" />
        <MenuLinks link="/about" linkname="About" />
        <MenuLinks link="/service" linkname="Service" />
        <MenuLinks link="/project" linkname="Project" />
        <div className="relative">
          <Link
            to="#"
            className="text-light text-lg font-medium hover:text-secondary delay-100"
            onClick={() => {
              setvisible(!visible);
            }}
          >
            Pages +
          </Link>

          <div
            className={
              visible ? "hidden-content dispaly-none" : "hidden-content "
            }
          >
            <ul className="flex flex-col gap-3 font-medium text-dark ">
              <li className="">
                <Link to="/ourteam" className="hover:text-secondary">
                  Our team
                </Link>
              </li>
              <li>
                <Link to="/testimonial" className="mt-2 hover:text-secondary">
                  Testimonial
                </Link>
              </li>
              <li>
                <Link to="/404" className="mt-2 hover:text-secondary">
                  404 page
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <MenuLinks link="/contact" linkname="Contact" />
      </div>
      <div className="nav-btn">
        <Link href="/">
          <button className="bg-light text-dark font-medium rounded-3xl py-2 px-7 text-lg">
            Get Started
          </button>
        </Link>
      
      </div>
  
    </div>
  
     </>
  );
}

export default NavBar;

import MenuLinks from "../MenuLinks/MenuLinks";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";
import { useState } from "react";

function NavBar() {
  const [visible, setVisible] = useState(false);
  const [fix, setFix] = useState(false);

  function setFixed() {
    if (window.scrollY >= 2) {
      setFix(true);
    } else {
      setFix(false);
    }
  }
  window.addEventListener("scroll", setFixed);
  return (
    <>
      <div className={fix ? "nav-bar fixed container-2xl":"nav-bar container-2xl"}>
        <div className={fix ? 'nav-logo color-change':'nav-logo'}>
          <Link to="/">DGital</Link>
        </div>
        <div className={fix ? "nav-links flex gap-6 font-medium text-light text-lg color-change2" : "nav-links flex gap-6 font-medium text-light text-lg"}>
          <MenuLinks link="/" linkname="Home" />
          <MenuLinks link="/about" linkname="About" />
          <MenuLinks link="/service" linkname="Service" />
          <MenuLinks link="/project" linkname="Project" />
          <div className="relative">
            <Link
              to="#"
              className="hover:text-secondary"
              onClick={() => {
                setVisible(!visible);
              }}
            >
              Pages +
            </Link>
            <div
              className={
                visible ? "hidden-content dispaly-none" : "hidden-content"
              }
            >
              <NavLink to="/ourteam" className="hover:text-secondary">
                Our Team
              </NavLink>
              <NavLink to="/testimonial" className="hover:text-secondary">
                Testimonial
              </NavLink>
              <NavLink to="/404" className="hover:text-secondary">
                404 page
              </NavLink>
            </div>
          </div>

          <MenuLinks link="/contact" linkname="Contact" />
        </div>
        <div className="nav-btn">
          <button className={fix ? "bg-light font-medium text-lg rounded-3xl py-2 px-6 cursor-pointer color-change3":"bg-light font-medium text-lg rounded-3xl py-2 px-6 cursor-pointer"}>
            Get Started
          </button>
        </div>
      </div>
    </>
  );
}

export default NavBar;

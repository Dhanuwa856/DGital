import { NavLink } from "react-router-dom";

function MenuLinks(props) {
  return (
   <>
   <NavLink to={props.link} className="hover:text-secondary">{props.linkname}</NavLink>

   </>
  );
}

export default MenuLinks;

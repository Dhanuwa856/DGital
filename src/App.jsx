import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Service from "./Pages/Service/Service";
import Project from "./Pages/Project/Project";
import OurTeam from "./Pages/OurTeam/OurTeam";
import Testimonial from "./Pages/Testimonial/Testimonial";
import Page404 from "./Pages/404Page/Page404";
import Contact from "./Pages/Contact/Contact";

function App() {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/service" element={<Service/>} />
      <Route path="/project" element={<Project/>} />
      <Route path="/ourteam" element={<OurTeam/>} />
      <Route path="/testimonial" element={<Testimonial/>} />
      <Route path="/404" element={<Page404/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
     
    </>
  );
}

export default App;

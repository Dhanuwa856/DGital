import React from "react";
import Hero from "../../Components/Hero/Hero";
import Skils from "../../Components/Skils/Skils";
import AboutUs from "../../Components/AboutUs/AboutUs";
import Number from "../../Components/Number/Number";
import OurServices from "../../Components/OurServices/OurServices";
import NewsLetter from "../../Components/NewsLetter/NewsLetter";
import OurProject from "../../Components/OurProject/OurProject";
import Testimonial01 from "../../Components/Testimonial/Testimonial01";
import OurTeam01 from "../../Components/OurTeam/OurTeam01";

function Home() {
  return (
    <>
      <Hero />
      <Skils />
      <AboutUs />
      <Number />
      <OurServices />
      <NewsLetter />
      <OurProject />
      <Testimonial01 />
      <OurTeam01 />
    </>
  );
}

export default Home;

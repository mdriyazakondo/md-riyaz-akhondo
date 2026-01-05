import React, { useEffect, useState } from "react";
import HomeRoot from "../components/Home/Home";
import Expreance from "../components/Home/Expreance";
import About from "./About";
import SkillSection from "../components/SkillSection";
import ProjectSection from "../components/ProjectSection";
import Contact from "./Contact";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <HomeRoot />
      <Expreance />
      <About />
      <SkillSection />
      <ProjectSection />
      <Contact />
    </div>
  );
};

export default Home;

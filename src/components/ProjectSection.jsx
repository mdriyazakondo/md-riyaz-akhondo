import React, { useEffect, useState } from "react";
import Projecct from "./Projecct";
import SectionTitle from "./SectionTitle";
import { Link } from "react-router-dom";

const ProjectSection = () => {
  const [porjects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/portfolio.json")
      .then((res) => res.json())
      .then((data) => setProjects(data.slice(0, 3)));
  }, []);

  return (
    <div className="my-12  md:mx-0 space-y-10  ">
      <SectionTitle title={"My Projects"} />
      <div className="max-w-[1210px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {porjects.map((project, index) => (
          <Projecct key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;

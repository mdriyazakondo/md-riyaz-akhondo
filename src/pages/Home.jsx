import HomeRoot from "../components/Home/Home";
import About from "./About";
import SkillSection from "../components/SkillSection";
import ProjectSection from "../components/ProjectSection";
import Contact from "./Contact";

const Home = () => {
  return (
    <div className="">
      <HomeRoot />
      <About />
      <SkillSection />
      <ProjectSection />
      <Contact />
    </div>
  );
};

export default Home;

"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiRedux,
  SiExpress,
  SiGit,
  SiGithub,
  SiVercel,
  SiPostman,
  SiFirebase,
  SiSass,
  SiDocker,
  SiNpm,
  SiYarn,
  SiNodedotjs,
  SiGithubactions,
} from "react-icons/si";
import { RiNextjsFill, RiNextjsLine } from "react-icons/ri";

const skills = [
  { name: "HTML5", icon: <SiHtml5 size={40} color="#E34F26" /> },
  { name: "CSS3", icon: <SiCss3 size={40} color="#1572B6" /> },
  { name: "Tailwind", icon: <SiTailwindcss size={40} color="#38B2AC" /> },
  { name: "JavaScript", icon: <SiJavascript size={40} color="#F7DF1E" /> },
  { name: "TypeScript", icon: <SiTypescript size={40} color="#3178C6" /> },
  { name: "React", icon: <SiReact size={40} color="#61DBFB" /> },
  { name: "Redux", icon: <SiRedux size={40} color="#764ABC" /> },
  {
    name: "Next.js",
    icon: <RiNextjsLine className="bg-white " size={40} color="#000000" />,
  },
  { name: "Node.js", icon: <SiNodedotjs size={40} color="#3C873A" /> },
  {
    name: "Express",
    icon: <SiExpress size={40} color="#FFFFFF" />, // force white color
  },
  { name: "MongoDB", icon: <SiMongodb size={40} color="#47A248" /> },
  { name: "Git", icon: <SiGit size={40} color="#F05032" /> },
  { name: "GitHub", icon: <SiGithubactions size={40} color="#000000" /> },
  { name: "Vercel", icon: <SiVercel size={40} color="#000000" /> },
  { name: "Postman", icon: <SiPostman size={40} color="#FF6C37" /> },
  { name: "Firebase", icon: <SiFirebase size={40} color="#FFCA28" /> },
  { name: "Sass", icon: <SiSass size={40} color="#CD6799" /> },
  { name: "NPM", icon: <SiNpm size={40} color="#CB3837" /> },
  { name: "Yarn", icon: <SiYarn size={40} color="#2C8EBB" /> },
];

const Skills = () => {
  const slidingSkills = [...skills, ...skills]; // duplicate for infinite scroll

  return (
    <section className="my-32 pt-20 overflow-hidden  ">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="flex items-center justify-center">
          <h4 className="text-cyan-400 uppercase tracking-widest text-2xl sm:text-3xl w-[300px] text-center  mb-20 border-b-4 rounded-xl pb-4">
            My Skills
          </h4>
        </div>

        {/* First line - left to right */}
        <div className="relative w-full overflow-hidden mb-8">
          <motion.div
            className="flex gap-10"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            }}
          >
            {slidingSkills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center min-w-[100px]"
              >
                {skill.icon}
                <span className="mt-2 light:text-gray-800 dark:text-gray-200">
                  {skill.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Second line - right to left */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-10"
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            }}
          >
            {slidingSkills.map((skill, index) => (
              <div
                key={index + 100} // unique key
                className="flex flex-col items-center justify-center min-w-[100px]"
              >
                {skill.icon}
                <span className="mt-2 light:text-gray-800 dark:text-gray-200">
                  {skill.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

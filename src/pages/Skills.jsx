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
  SiNpm,
  SiYarn,
  SiNodedotjs,
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

const skills = [
  { name: "HTML5", icon: <SiHtml5 size={40} color="#E34F26" /> },
  { name: "CSS3", icon: <SiCss3 size={40} color="#1572B6" /> },
  { name: "Tailwind", icon: <SiTailwindcss size={40} color="#38B2AC" /> },
  { name: "JavaScript", icon: <SiJavascript size={40} color="#F7DF1E" /> },
  { name: "TypeScript", icon: <SiTypescript size={40} color="#3178C6" /> },
  { name: "React", icon: <SiReact size={40} color="#61DBFB" /> },
  { name: "Redux", icon: <SiRedux size={40} color="#764ABC" /> },
  { name: "Next.js", icon: <RiNextjsFill size={40} color="#FFFFFF" /> },
  { name: "Node.js", icon: <SiNodedotjs size={40} color="#3C873A" /> },
  { name: "Express", icon: <SiExpress size={40} color="#FFFFFF" /> },
  { name: "MongoDB", icon: <SiMongodb size={40} color="#47A248" /> },
  { name: "Git", icon: <SiGit size={40} color="#F05032" /> },
  { name: "GitHub", icon: <SiGithub size={40} color="#FFFFFF" /> },
  { name: "Vercel", icon: <SiVercel size={40} color="#FFFFFF" /> },
  { name: "Postman", icon: <SiPostman size={40} color="#FF6C37" /> },
  { name: "Firebase", icon: <SiFirebase size={40} color="#FFCA28" /> },
  { name: "Sass", icon: <SiSass size={40} color="#CD6799" /> },
  { name: "NPM", icon: <SiNpm size={40} color="#CB3837" /> },
  { name: "Yarn", icon: <SiYarn size={40} color="#2C8EBB" /> },
];

const Skills = () => {
  const slidingSkills = [...skills, ...skills];

  return (
    <section className="py-24 overflow-hidden bg-transparent">
      <div className="max-w-[1440px] mx-auto px-6">
        {/* Modern Section Title */}
        <div className="flex flex-col items-center mb-20">
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-bold mb-4"
          >
            Technical Stack
          </motion.h4>
          <div className="h-1 w-20 bg-cyan-500 rounded-full"></div>
        </div>

        {/* Gradient Mask to fade edges */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-[#0f172a] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-[#0f172a] to-transparent z-10 pointer-events-none" />

          {/* First line - left to right */}
          <div className="relative w-full overflow-hidden mb-12">
            <motion.div
              className="flex gap-12 md:gap-16"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              }}
            >
              {slidingSkills.map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center min-w-[120px] group"
                >
                  <div className="p-5 rounded-2xl bg-slate-800/30 border border-slate-700/50 group-hover:border-cyan-500/50 group-hover:bg-slate-800/50 transition-all duration-300">
                    {skill.icon}
                  </div>
                  <span className="mt-4 text-slate-400 font-medium tracking-wide group-hover:text-cyan-400 transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Second line - right to left */}
          <div className="relative w-full overflow-hidden">
            <motion.div
              className="flex gap-12 md:gap-16"
              animate={{ x: ["-50%", "0%"] }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              }}
            >
              {slidingSkills.map((skill, index) => (
                <div
                  key={index + 100}
                  className="flex flex-col items-center justify-center min-w-[120px] group"
                >
                  <div className="p-5 rounded-2xl bg-slate-800/30 border border-slate-700/50 group-hover:border-cyan-500/50 group-hover:bg-slate-800/50 transition-all duration-300">
                    {skill.icon}
                  </div>
                  <span className="mt-4 text-slate-400 font-medium tracking-wide group-hover:text-cyan-400 transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

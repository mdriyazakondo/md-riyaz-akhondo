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
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import SectionTitle from "./SectionTitle";

const skills = [
  { name: "React", icon: <SiReact size={35} color="#61DBFB" /> },
  { name: "Next.js", icon: <RiNextjsFill size={35} color="#FFFFFF" /> },
  { name: "JavaScript", icon: <SiJavascript size={35} color="#F7DF1E" /> },
  { name: "TypeScript", icon: <SiTypescript size={35} color="#3178C6" /> },
  { name: "Node.js", icon: <SiNodedotjs size={35} color="#3C873A" /> },
  { name: "Express", icon: <SiExpress size={35} color="#FFFFFF" /> },
  { name: "MongoDB", icon: <SiMongodb size={35} color="#47A248" /> },
  { name: "Tailwind", icon: <SiTailwindcss size={35} color="#38B2AC" /> },
  { name: "Redux", icon: <SiRedux size={35} color="#764ABC" /> },
  { name: "Firebase", icon: <SiFirebase size={35} color="#FFCA28" /> },
  { name: "GitHub", icon: <SiGithub size={35} color="#FFFFFF" /> },
  { name: "Vercel", icon: <SiVercel size={35} color="#FFFFFF" /> },
  { name: "Postman", icon: <SiPostman size={35} color="#FF6C37" /> },
  { name: "Docker", icon: <SiDocker size={35} color="#2496ED" /> },
  { name: "Sass", icon: <SiSass size={35} color="#CD6799" /> },
  { name: "Git", icon: <SiGit size={35} color="#F05032" /> },
];

const SkillSection = () => {
  const slidingSkills = [...skills, ...skills];

  return (
    <section className="py-24 relative overflow-hidden bg-transparent">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        <SectionTitle title={"Technical Skills"} />
        <p className="text-center text-slate-400 mb-16 -mt-8 font2 max-w-2xl mx-auto italic">
          Technologies I use to bring ideas to life.
        </p>

        {/* Gradient Mask for fading edges */}
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-[#0f172a] to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-[#0f172a] to-transparent z-20 pointer-events-none" />

          {/* First line - left to right */}
          <div className="flex overflow-hidden mb-10">
            <motion.div
              className="flex gap-6 md:gap-8"
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
                  className="flex flex-col items-center justify-center min-w-[130px] md:min-w-[160px] p-6 rounded-2xl bg-slate-800/20 border border-slate-700/50 backdrop-blur-sm group hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <span className="mt-4 text-slate-300 font-medium text-sm md:text-base group-hover:text-cyan-400">
                    {skill.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Second line - right to left */}
          <div className="flex overflow-hidden">
            <motion.div
              className="flex gap-6 md:gap-8"
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
                  className="flex flex-col items-center justify-center min-w-[130px] md:min-w-[160px] p-6 rounded-2xl bg-slate-800/20 border border-slate-700/50 backdrop-blur-sm group hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <span className="mt-4 text-slate-300 font-medium text-sm md:text-base group-hover:text-cyan-400">
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

export default SkillSection;

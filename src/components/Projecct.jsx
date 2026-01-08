import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";

const Project = ({ project }) => {
  const { id, title, description, techStack, liveUrl, repoUrl, image, tags } =
    project;

  return (
    <motion.div
      className="relative bg-[#1e293b]/40 backdrop-blur-md rounded-2xl border border-slate-700/50 overflow-hidden group flex flex-col h-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
    >
      {/* -------- Project Image with Animation -------- */}
      <div className="relative overflow-hidden h-60">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Hover Overlay Buttons */}
        <div className="absolute inset-0 bg-[#0f172a]/80 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-[2px]">
          {liveUrl && (
            <motion.a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-cyan-500 text-slate-900 rounded-full shadow-lg hover:bg-cyan-400 transition-colors"
              title="Live Link"
            >
              <FaExternalLinkAlt size={18} />
            </motion.a>
          )}
          {repoUrl && (
            <motion.a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-slate-800 text-white rounded-full border border-slate-600 shadow-lg hover:bg-slate-700 transition-colors"
              title="GitHub Repo"
            >
              <FaGithub size={20} />
            </motion.a>
          )}
        </div>

        {/* Floating Category Badge */}
        <div className="absolute top-4 left-4 bg-cyan-500/90 text-slate-950 text-[10px] font-bold px-3 py-1 rounded-lg uppercase tracking-widest backdrop-blur-md">
          Featured Project
        </div>
      </div>

      {/* -------- Project Content -------- */}
      <div className="p-6 flex flex-col flex-grow space-y-4">
        {/* Project Title & Tags */}
        <div className="space-y-2">
          <div className="flex flex-wrap gap-2">
            {tags?.map((tag, index) => (
              <span
                key={index}
                className="text-[10px] font-mono text-cyan-400 uppercase tracking-tighter"
              >
                #{tag}
              </span>
            ))}
          </div>
          <h3 className="font1 text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
            {title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* Tech Stack - Modern Pills */}
        <div className="flex flex-wrap gap-2 pt-2">
          {techStack?.map((tech, idx) => (
            <span
              key={idx}
              className="text-[10px] px-2 py-1 bg-slate-800/50 border border-slate-700/50 text-slate-300 rounded-md font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* View More Button - Bottom Aligned */}
        <div className="pt-4 mt-auto">
          <Link to={`/project/${id}`}>
            <motion.button className="w-full py-3 cursor-pointer bg-slate-800/50 border border-slate-700 text-white rounded-xl flex items-center justify-center gap-2 font-bold group/btn hover:bg-cyan-500 hover:text-slate-950 hover:border-cyan-500 transition-all duration-300">
              View Details
              <HiArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Project;

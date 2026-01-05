import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Project = ({ project }) => {
  const { title, description, techStack, liveUrl, repoUrl, image, tags } =
    project;

  return (
    <motion.div
      className="relative light:bg-white dark:bg-gray-800 shadow-lg rounded-xl 
      border border-gray-300 dark:border-gray-700 overflow-hidden group"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.03 }}
    >
      {/* -------- Project Image with Overlay -------- */}
      <div className="relative overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-[250px] object-cover rounded-t-xl 
          transition-transform duration-500 group-hover:scale-110"
        />

        {/* Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 
          to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 
          flex flex-col items-center justify-center gap-3"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          <motion.h3
            className="text-xl font-bold text-white drop-shadow-md"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {title}
          </motion.h3>

          <div className="flex gap-3">
            {liveUrl && (
              <motion.a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="flex items-center gap-1 bg-cyan-500 text-white px-3 py-1 
                rounded-md text-sm font-semibold shadow-md hover:bg-cyan-400 transition-colors"
              >
                Live <FaExternalLinkAlt />
              </motion.a>
            )}

            {repoUrl && (
              <motion.a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="flex items-center gap-1 bg-gray-700 text-white px-3 py-1 
                rounded-md text-sm font-semibold shadow-md hover:bg-gray-600 transition-colors"
              >
                Code <FaGithub />
              </motion.a>
            )}
          </div>
        </motion.div>
      </div>

      {/* -------- Project Content -------- */}
      <div className="p-5 space-y-3">
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags?.map((tag, index) => (
            <span
              key={index}
              className="text-sm font-semibold text-transparent bg-clip-text 
              bg-gradient-to-r from-cyan-400 to-blue-500"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3
          className="font1 text-2xl font-bold text-transparent bg-clip-text 
        bg-gradient-to-r from-cyan-400 to-blue-500"
        >
          {title}
        </h3>

        {/* Description */}
        {description && (
          <p className="light:text-gray-700 dark:text-gray-300 text-sm lg:text-base line-clamp-3">
            {description}
          </p>
        )}

        {/* Tech Stack */}
        {techStack && (
          <div className="flex flex-wrap gap-2 mt-2">
            {techStack.map((tech, idx) => (
              <span
                key={idx}
                className="text-xs px-2 py-1 border rounded-full border-sky-400 
                light:bg-gray-200 dark:bg-gray-700 light:text-gray-800 dark:text-gray-200"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
        {/* See More Button */}
        <Link to={`/project/${project.id}`}>
          <button className="px-6 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-md shadow-md hover:scale-105 transition-all w-full cursor-pointer mt-2">
            See More
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default Project;

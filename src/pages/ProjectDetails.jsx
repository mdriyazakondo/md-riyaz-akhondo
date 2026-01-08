"use client";

import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  HiOutlineExternalLink,
  HiOutlineCode,
  HiOutlineArrowLeft,
} from "react-icons/hi";
import Loading from "./Loading";

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch("/portfolio.json")
      .then((res) => res.json())
      .then((data) => {
        const selectedProject = data.find((item) => item.id === id);
        setProject(selectedProject);
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (!project) return <Loading />;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen py-20 px-6 bg-transparent"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Back Button */}
        <Link
          to="/project"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors mb-10 group"
        >
          <HiOutlineArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Projects</span>
        </Link>

        {/* Header Section */}
        <div className="flex flex-col lg:flex-row gap-12 mb-16">
          {/* Main Image Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:w-2/3 relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <img
              src={project.image}
              alt={project.title}
              className="relative w-full rounded-2xl shadow-2xl h-[350px] md:h-[500px] object-cover border border-slate-700/50"
            />
          </motion.div>

          {/* Quick Info Sidebar */}
          <div className="lg:w-1/3 space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-black text-white leading-tight">
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-2">
                {project.tags?.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-bold uppercase tracking-widest text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 p-6 bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl">
              <div>
                <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-1">
                  Year
                </p>
                <p className="text-white font-medium">{project.year}</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-1">
                  Role
                </p>
                <p className="text-white font-medium">{project.role}</p>
              </div>
              <div className="col-span-2 border-t border-slate-700/50 pt-4">
                <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-2">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack?.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 bg-slate-900/50 text-slate-300 rounded border border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-4">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 w-full py-4 bg-cyan-500 text-slate-950 font-black rounded-xl hover:bg-cyan-400 transition-all shadow-[0_10px_20px_rgba(34,211,238,0.2)]"
              >
                Live Preview <HiOutlineExternalLink size={20} />
              </a>
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 w-full py-4 bg-slate-800 border border-slate-700 text-white font-bold rounded-xl hover:bg-slate-700 transition-all"
              >
                Source Code <HiOutlineCode size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Detailed Content Grid */}
        <div className="grid lg:grid-cols-3 gap-12 border-t border-slate-800 pt-16">
          <div className="lg:col-span-2 space-y-12">
            {/* Description */}
            <section>
              <h3 className="text-2xl font-bold text-white mb-4">
                The Challenge
              </h3>
              <p className="text-slate-400 leading-relaxed text-lg">
                {project.description}
              </p>
            </section>

            {/* Features */}
            {project.features && (
              <section className="grid md:grid-cols-2 gap-8">
                <div className="bg-slate-800/20 p-8 rounded-3xl border border-slate-700/30">
                  <h3 className="text-xl font-bold text-cyan-400 mb-6">
                    Key Features
                  </h3>
                  <ul className="space-y-4">
                    {project.features.map((f, i) => (
                      <li key={i} className="flex gap-3 text-slate-300 text-sm">
                        <span className="text-cyan-500 font-bold">
                          0{i + 1}.
                        </span>{" "}
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-slate-800/20 p-8 rounded-3xl border border-slate-700/30">
                  <h3 className="text-xl font-bold text-purple-400 mb-6">
                    Highlights
                  </h3>
                  <ul className="space-y-4">
                    {project.highlights?.map((h, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-slate-300 text-sm italic"
                      >
                        <span className="text-purple-500">✦</span> {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}
          </div>

          {/* Problem & Solution Sidebar */}
          <div className="space-y-8">
            {project.challenges && (
              <div className="p-8 bg-red-500/5 border border-red-500/10 rounded-3xl">
                <h4 className="text-red-400 font-bold mb-4 flex items-center gap-2">
                  Challenges
                </h4>
                <ul className="space-y-3 text-sm text-slate-400">
                  {project.challenges.map((c, i) => (
                    <li key={i}>• {c}</li>
                  ))}
                </ul>
              </div>
            )}
            {project.solutions && (
              <div className="p-8 bg-green-500/5 border border-green-500/10 rounded-3xl">
                <h4 className="text-green-400 font-bold mb-4 flex items-center gap-2">
                  Solution
                </h4>
                <ul className="space-y-3 text-sm text-slate-400">
                  {project.solutions.map((s, i) => (
                    <li key={i}>• {s}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetails;

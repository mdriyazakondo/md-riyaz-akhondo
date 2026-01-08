"use client";

import React, { useEffect, useState } from "react";
import SectionTitle from "../components/SectionTitle";
import Projecct from "../components/Projecct";
import { motion, AnimatePresence } from "framer-motion";
import Loading from "./Loading";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // স্ক্রল টপে নিয়ে যাওয়ার জন্য যখন পেজ চেঞ্জ হবে
    window.scrollTo({ top: 0, behavior: "smooth" });

    fetch("/portfolio.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      });
  }, [currentPage]);

  if (loading) {
    return <Loading />;
  }

  // Pagination logic
  const indexOfLast = currentPage * projectsPerPage;
  const indexOfFirst = indexOfLast - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const goToPage = (page) => setCurrentPage(page);

  return (
    <section className="py-24 px-6 min-h-screen relative overflow-hidden bg-transparent">
      {/* Background Decorative Glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px]  rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px]  rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto relative z-10">
        <SectionTitle title={" My Work"} />
        <p className="text-center text-slate-400 mb-12 -mt-8 max-w-2xl mx-auto italic font2">
          A showcase of my projects where I transform complex ideas into
          functional web applications.
        </p>

        {/* Projects Grid with Smooth Page Transitions */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          >
            {currentProjects.map((project, index) => (
              <Projecct key={project.id || index} project={project} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* ---------------- Pagination Controls ---------------- */}
        {totalPages > 1 && (
          <div className="flex flex-col items-center mt-20 space-y-4">
            <div className="flex items-center gap-3">
              {/* Previous Button */}
              <button
                onClick={() => currentPage > 1 && goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className={`p-3 rounded-xl border transition-all duration-300 ${
                  currentPage === 1
                    ? "border-slate-800 text-slate-600 cursor-not-allowed"
                    : "border-slate-700 text-cyan-400 hover:bg-cyan-500 hover:text-slate-950 cursor-pointer shadow-lg"
                }`}
              >
                <HiChevronLeft size={24} />
              </button>

              {/* Page Numbers */}
              <div className="flex gap-2">
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goToPage(i + 1)}
                    className={`w-12 h-12 rounded-xl text-sm font-bold transition-all duration-300 border ${
                      currentPage === i + 1
                        ? "bg-cyan-500 border-cyan-500 text-slate-950 shadow-[0_0_20px_rgba(34,211,238,0.3)]"
                        : "bg-slate-800/40 border-slate-700 text-slate-400 hover:border-cyan-400 hover:text-cyan-400"
                    }`}
                  >
                    {i + 1 < 10 ? `0${i + 1}` : i + 1}
                  </button>
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={() =>
                  currentPage < totalPages && goToPage(currentPage + 1)
                }
                disabled={currentPage === totalPages}
                className={`p-3 rounded-xl border transition-all duration-300 ${
                  currentPage === totalPages
                    ? "border-slate-800 text-slate-600 cursor-not-allowed"
                    : "border-slate-700 text-cyan-400 hover:bg-cyan-500 hover:text-slate-950 cursor-pointer shadow-lg"
                }`}
              >
                <HiChevronRight size={24} />
              </button>
            </div>

            <p className="text-slate-500 text-xs font-mono uppercase tracking-widest">
              Page {currentPage} of {totalPages}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;

import React, { useEffect, useState } from "react";
import SectionTitle from "../components/SectionTitle";
import Projecct from "../components/Projecct";
import { motion, AnimatePresence } from "framer-motion";
import Loading from "./Loading";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/portfolio.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading />;
  }

  // Pagination logic
  const indexOfLast = currentPage * projectsPerPage;
  const indexOfFirst = indexOfLast - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  // Handlers
  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const goToPage = (page) => setCurrentPage(page);

  return (
    <div className="my-12 mx-5">
      <SectionTitle title={"My Projects"} />

      {/* Projects Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {currentProjects.map((project, index) => (
            <Projecct key={index} project={project} />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Pagination Controls */}
      <div className="flex flex-wrap justify-center items-center mt-10 gap-4">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-md font-semibold transition-all duration-300 ${
            currentPage === 1
              ? "bg-gray-300 dark:bg-gray-700 cursor-not-allowed"
              : "bg-cyan-500 hover:bg-cyan-400 text-white shadow-md"
          }`}
        >
          Prev
        </button>

        {/* Page Numbers */}
        <div className="flex gap-2">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => goToPage(i + 1)}
              className={`w-8 h-8 rounded-md text-sm font-semibold transition-all duration-300 ${
                currentPage === i + 1
                  ? "bg-cyan-500 text-white shadow-md"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-cyan-400 hover:text-white"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>

        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-md font-semibold transition-all duration-300 ${
            currentPage === totalPages
              ? "bg-gray-300 dark:bg-gray-700 cursor-not-allowed"
              : "bg-cyan-500 hover:bg-cyan-400 text-white shadow-md"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Projects;

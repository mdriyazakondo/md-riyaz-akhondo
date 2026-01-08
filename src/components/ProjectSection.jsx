import React, { useEffect, useState } from "react";
import Projecct from "./Projecct";
import SectionTitle from "./SectionTitle";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const ProjectSection = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/portfolio.json")
      .then((res) => res.json())
      .then((data) => setProjects(data.slice(0, 3))); // শুরুতে ৩টি প্রজেক্ট দেখাচ্ছে
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // প্রতিটি কার্ডের মাঝে ০.২ সেকেন্ড গ্যাপ
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-24 relative bg-transparent overflow-hidden">
      {/* Background Subtle Light */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6">
        <SectionTitle title={"My Projects"} />

        <p className="text-center text-slate-400 mb-16 -mt-8 font2 max-w-2xl mx-auto">
          Explore some of my best work, ranging from complex full-stack
          applications to sleek frontend designs.
        </p>

        {/* Projects Grid with Stagger Animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Projecct project={project} />
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center mt-16"
        >
          <Link to="/project">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group cursor-pointer flex items-center gap-2 px-8 py-4 bg-slate-800/40 border border-slate-700 text-cyan-400 font-bold rounded-2xl hover:bg-cyan-500 hover:text-slate-950 transition-all duration-300 shadow-xl"
            >
              See All Projects
              <HiOutlineArrowNarrowRight
                className="group-hover:translate-x-2 transition-transform"
                size={20}
              />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectSection;

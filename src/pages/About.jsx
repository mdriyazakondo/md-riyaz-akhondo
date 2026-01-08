import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import { Link } from "react-router-dom";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const About = () => {
  return (
    // bg-[#0f172a] বাদ দেওয়া হয়েছে
    <section className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-3">
        <SectionTitle title={"About Me"} />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24 mt-16"
        >
          {/* Left Side: Image Section */}
          <motion.div variants={item} className="relative flex-1 group">
            {/* Soft Glow behind image */}
            <div className="absolute -inset-10 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none"></div>

            <motion.div
              className="relative z-10"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Image with Professional Frame */}
              <div className="relative border border-slate-700/50 p-4 rounded-[2.5rem] bg-slate-800/20 backdrop-blur-sm">
                <img
                  className="w-full h-[320px] sm:h-[450px] lg:h-[480px] rounded-[2rem] object-cover shadow-2xl transition-all duration-500 group-hover:scale-[1.02]"
                  src="https://ik.imagekit.io/2o23yla4n/Gemini_Generated_Image_8e089v8e089v8e08-removebg-preview.png?updatedAt=1763071776242"
                  alt="MD RIYAZ AKONDO"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side: Narrative Section */}
          <motion.div
            variants={container}
            className="flex-1 space-y-8 text-center lg:text-left"
          >
            <motion.div variants={item} className="space-y-4">
              <span className="text-cyan-400 font-mono tracking-[0.3em] text-xs md:text-sm uppercase">
                Get to know me
              </span>
              <h2 className="text-2xl md:text-3xl xl:text-4xl font-black text-white leading-tight font1">
                A Visionary{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  MERN Developer
                </span>
              </h2>
            </motion.div>

            <motion.div variants={item} className="space-y-6">
              <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed font2">
                I am{" "}
                <span className="text-white font-medium italic">
                  MD RIYAZ AKONDO
                </span>
                . My journey in tech is driven by a passion for creating
                high-performance web applications that bridge the gap between
                user needs and complex business logic.
              </p>
              <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed font2">
                With a deep focus on the{" "}
                <span className="text-cyan-400">MERN Stack</span>, I build
                products that are not only functional but also scalable and
                secure. My goal is to deliver clean, maintainable code with
                every project.
              </p>
            </motion.div>

            {/* Core Tech Grid */}
            <motion.div
              variants={item}
              className="flex flex-wrap justify-center lg:justify-start gap-3"
            >
              {[
                "Frontend",
                "Backend",
                "Rest API",
                "Authentication",
                "Cloud Database",
                "Git Flow",
              ].map((tag, i) => (
                <div
                  key={i}
                  className="px-5 py-2 rounded-xl bg-slate-800/40 border border-slate-700/50 text-slate-300 text-sm font-semibold hover:border-cyan-500/50 transition-colors"
                >
                  {tag}
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={item}
              className="flex flex-wrap justify-center lg:justify-start gap-6 pt-6"
            >
              <a
                href="/Riyaz.pdf"
                download
                className="px-10 py-4 bg-cyan-500 text-slate-950 font-black rounded-2xl shadow-[0_15px_30px_rgba(34,211,238,0.2)] hover:scale-105 transition-transform uppercase tracking-widest text-sm"
              >
                Get CV
              </a>
              <Link
                to="/contact"
                className="px-10 py-4 border-2 border-slate-700 text-white font-bold rounded-2xl hover:bg-white/5 transition-all uppercase tracking-widest text-sm"
              >
                Hire Me
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

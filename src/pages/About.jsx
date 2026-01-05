import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import { Link } from "react-router-dom";

// Parent container for staggered animation
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // প্রতিটি child 0.3 সেকেন্ডে একটার পর একটা animate হবে
    },
  },
};

// Each child animation
const item = {
  hidden: { opacity: 0, y: -30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const About = () => {
  return (
    <div className="my-16 md:my-34">
      <SectionTitle title={"About Me"} />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        className="max-w-7xl md:mx-auto  flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 mx-5"
      >
        {/* Left Image with animation */}
        <motion.div variants={item}>
          <motion.div
            className="border-2 border-white rounded-full overflow-hidden w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px]"
            animate={{
              y: [0, -20, 0], // floating animation বড় স্ক্রিনে
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          >
            <img
              className="w-full h-full border-1 rounded-full border-blue-600 object-cover"
              src="https://ik.imagekit.io/2o23yla4n/Gemini_Generated_Image_8e089v8e089v8e08-removebg-preview.png?updatedAt=1763071776242"
              alt="Profile"
            />
          </motion.div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          variants={container}
          className="space-y-4 text-center md:text-left"
        >
          {/* Title */}
          <motion.div variants={item}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2">
              Who I Am
            </h2>
          </motion.div>

          {/* Bio 1 */}
          <motion.p
            variants={item}
            className="mb-4 sm:mb-6 text-gray-400 leading-relaxed max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl text-sm sm:text-base md:text-lg lg:text-xl"
          >
            Hi, I'm{" "}
            <span className="text-cyan-400 font-semibold">MD RIYAZ AKONDO</span>
            , a passionate <strong>Frontend & MERN Stack Developer</strong>{" "}
            dedicated to building high-quality web applications that provide
            excellent user experiences.
          </motion.p>

          {/* Bio 2 */}
          <motion.p
            variants={item}
            className="mb-6 sm:mb-10 text-gray-400 leading-relaxed max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl text-sm sm:text-base md:text-lg lg:text-xl"
          >
            I specialize in creating responsive, fast, and scalable apps using
            <span className="text-cyan-400 font-semibold">
              {" "}
              React.js, Node.js, Express{" "}
            </span>
            and <span className="text-cyan-400 font-semibold"> MongoDB.</span> I
            enjoy working with modern technologies and continuously learning to
            keep up with industry trends.
          </motion.p>

          {/* Skills */}
          <motion.div
            variants={item}
            className="flex flex-wrap justify-center md:justify-start gap-2"
          >
            {[
              "React.js",
              "Node.js",
              "Express.js",
              "MongoDB",
              "JavaScript",
              "Tailwind CSS",
              "Git & GitHub",
            ].map((skill, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full"
              >
                {skill}
              </span>
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div
            variants={item}
            className="flex flex-wrap justify-center md:justify-start gap-4 mt-6"
          >
            <a
              href="/Riyaz.pdf"
              download
              className="px-6 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-md shadow-md hover:scale-105 transition-all"
            >
              Download Resume
            </a>
            <Link
              to="/contact"
              href="#contact"
              className="px-6 py-2 border border-cyan-400 text-cyan-400 font-semibold rounded-md hover:bg-cyan-400 hover:text-white transition-all"
            >
              Hire Me
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;

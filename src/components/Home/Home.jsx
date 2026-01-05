import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { RiFacebookFill } from "react-icons/ri";
import { PiGithubLogoFill } from "react-icons/pi";
import { ImLinkedin2 } from "react-icons/im";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: -30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Home = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-20 mx-5 md:mx-0 my-20">
      {/* Left Content */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        className="text-center md:text-left"
      >
        <motion.h2
          variants={item}
          className="text-2xl sm:text-3xl md:text-5xl font-semibold font1"
        >
          <span>Hi, </span> MD RIYAZ AKONDO
        </motion.h2>

        <motion.h4
          variants={item}
          className="text-lg sm:text-xl font-medium mt-2"
        >
          I am{" "}
          <span className="text-blue-400 font-semibold tracking-widest">
            <Typewriter
              words={[
                "Frontend Developer",
                "React.js Developer",
                "MERN Stack Developer",
                "Web Enthusiast",
                "Modern Web Creator",
              ]}
              loop={0} // infinite loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </motion.h4>

        <motion.p
          variants={item}
          className="max-w-md mt-4 tracking-widest font2 font-medium text-sm sm:text-base"
        >
          I build modern and responsive web applications using React, Node.js,
          and MongoDB.
        </motion.p>

        <motion.div
          variants={item}
          className="flex items-center mt-5 gap-3 md:gap-5 justify-center md:justify-start"
        >
          <div className="bg-blue-500 rounded-full text-white p-1 md:p-1.5">
            <Link
              to="https://www.facebook.com/junior.deploper.riyaz"
              target="_blank"
            >
              <RiFacebookFill className="w-6 h-6 " />
            </Link>
          </div>
          <div className="bg-gray-700 rounded-full text-white p-1 md:p-1.5">
            <Link to="https://github.com/mdriyazakondo" target="_blank">
              <PiGithubLogoFill className="w-6 h-6 " />
            </Link>
          </div>
          <div className="bg-blue-500 rounded-full text-white p-1 md:p-1.5">
            <Link
              to="https://www.linkedin.com/in/mdriyazakondo/"
              target="_blank"
            >
              <ImLinkedin2 className="w-6 h-6 " />
            </Link>
          </div>
          <div className="bg-orange-500 rounded-full text-white p-1 md:p-1.5">
            <a
              href="https://mail.google.com/mail/?view=cm&to=mdriyazakondo265@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdEmail className="w-6 h-6" />
            </a>
          </div>
        </motion.div>

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

      {/* Right Image */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="border-2  border-sky-600 rounded-full overflow-hidden w-72 h-72 sm:w-80 sm:h-80 md:w-[400px] md:h-[400px]"
          animate={{
            y: [0, -20, 0], // continuous floating animation
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        >
          <img
            className="w-full h-full border-1 rounded-full border-blue-600 object-cover "
            src="https://ik.imagekit.io/2o23yla4n/Gemini_Generated_Image_8e089v8e089v8e08-removebg-preview.png?updatedAt=1763071776242"
            alt="Profile"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;

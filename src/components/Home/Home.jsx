import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { RiFacebookFill, RiReactjsLine } from "react-icons/ri";
import { PiGithubLogoFill } from "react-icons/pi";
import { ImLinkedin2 } from "react-icons/im";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
// Full MERN Stack & Tools Icons
import {
  SiTailwindcss,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiJavascript,
  SiExpress,
  SiFirebase,
  SiRedux,
  SiVercel,
  SiPostman,
} from "react-icons/si";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const Home = () => {
  // MERN + Modern Tools Icons with specific positions
  const techIcons = [
    {
      Icon: RiReactjsLine,
      color: "text-cyan-400",
      pos: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2",
    },
    {
      Icon: SiMongodb,
      color: "text-green-500",
      pos: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
    },
    {
      Icon: SiNodedotjs,
      color: "text-green-400",
      pos: "left-0 top-1/2 -translate-x-1/2 -translate-y-1/2",
    },
    {
      Icon: SiExpress,
      color: "text-slate-300",
      pos: "right-0 top-1/2 translate-x-1/2 -translate-y-1/2",
    },
    {
      Icon: SiJavascript,
      color: "text-yellow-400",
      pos: "top-[15%] left-[15%]",
    },
    {
      Icon: SiTailwindcss,
      color: "text-sky-400",
      pos: "top-[15%] right-[15%]",
    },
    { Icon: SiRedux, color: "text-purple-500", pos: "bottom-[15%] left-[15%]" },
    {
      Icon: SiFirebase,
      color: "text-orange-500",
      pos: "bottom-[15%] right-[15%]",
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center  text-white px-6 overflow-hidden relative py-8 lg:py-0">
      {/* Dynamic Background Glows */}
      <div className="absolute top-[-10%] left-[-5%] w-[400px] h-[400px]  rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px]  rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-16 w-full z-10">
        {/* Left Content */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex-1 text-center lg:text-left"
        >
          <motion.p
            variants={fadeInUp}
            className="text-cyan-400 font-mono tracking-widest text-lg mb-2"
          >
            Expert MERN Stack Developer
          </motion.p>

          <motion.h1
            variants={fadeInUp}
            className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4"
          >
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 uppercase tracking-tighter">
              MD RIYAZ AKONDO
            </span>
          </motion.h1>

          <motion.div
            variants={fadeInUp}
            className="text-xl md:text-3xl font-medium text-slate-300 mb-6"
          >
            Building{" "}
            <span className="text-cyan-400 border-b-2 border-cyan-400/20">
              <Typewriter
                words={[
                  "Full Stack Solutions",
                  "Scalable Web Apps",
                  "Interactive UI/UX",
                  "MERN Stack Systems",
                ]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="text-slate-400 text-base md:text-lg leading-relaxed max-w-xl mb-10 mx-auto lg:mx-0 font2"
          >
            Specialized in building robust web applications using the MERN
            stack. I transform ideas into seamless digital experiences with
            clean architecture.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center lg:justify-start gap-6 mb-12"
          >
            <motion.a
              href="/Riyaz.pdf"
              download
              whileHover={{ scale: 1.05 }}
              className="px-8 py-4 bg-cyan-500 text-slate-950 font-bold rounded-xl shadow-[0_0_20px_rgba(34,211,238,0.4)]"
            >
              Download CV
            </motion.a>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-8 cursor-pointer py-4 border border-slate-700 font-bold text-white rounded-xl hover:bg-white/5"
              >
                Let's Talk
              </motion.button>
            </Link>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            variants={fadeInUp}
            className="flex items-center gap-4 justify-center lg:justify-start"
          >
            {[
              {
                icon: <RiFacebookFill size={22} />,
                link: "https://facebook.com/...",
              },
              {
                icon: <PiGithubLogoFill size={22} />,
                link: "https://github.com/...",
              },
              {
                icon: <ImLinkedin2 size={20} />,
                link: "https://linkedin.com/...",
              },
              { icon: <MdEmail size={22} />, link: "mailto:..." },
            ].map((social, idx) => (
              <motion.a
                key={idx}
                href={social.link}
                whileHover={{ y: -5 }}
                className="w-11 h-11 flex items-center justify-center rounded-lg border border-slate-800 bg-slate-900/50 text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-all"
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Section: Orbiting Tech Cloud */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex-1 flex justify-center items-center"
        >
          {/* Main Orbit Path */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute w-[320px] h-[320px] md:w-[480px] md:h-[480px] border border-dashed border-slate-700/30 rounded-full"
          >
            {/* Tech Icons circling the profile */}
            {techIcons.map((item, index) => (
              <motion.div
                key={index}
                className={`absolute p-2.5 md:p-4 bg-[#1e293b]/80 backdrop-blur-sm border border-slate-700 rounded-2xl shadow-2xl ${item.pos}`}
                whileHover={{ scale: 1.2, borderColor: "#22d3ee" }}
              >
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <item.Icon className={`text-2xl md:text-4xl ${item.color}`} />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Profile Image with Floating Effect */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-64 h-64 md:w-[350px] md:h-[350px] z-10"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl" />
            <img
              className="w-full h-full rounded-full border-[6px] border-[#1e293b] object-cover shadow-[0_0_50px_rgba(0,0,0,0.5)] relative z-10 p-1 bg-gradient-to-b from-cyan-500 to-transparent"
              src="https://ik.imagekit.io/2o23yla4n/Gemini_Generated_Image_8e089v8e089v8e08-removebg-preview.png?updatedAt=1763071776242"
              alt="MD RIYAZ AKONDO"
            />
          </motion.div>

          {/* Small Floating Details */}
          <div className="absolute top-10 right-10 bg-slate-900/80 p-3 rounded-lg border border-slate-700 backdrop-blur-md hidden md:block z-20">
            <p className="text-cyan-400 font-bold text-xs uppercase tracking-widest">
              2+ Years Exp.
            </p>
          </div>
          <div className="absolute bottom-10 left-10 bg-slate-900/80 p-3 rounded-lg border border-slate-700 backdrop-blur-md hidden md:block z-20">
            <p className="text-green-400 font-bold text-xs uppercase tracking-widest">
              Available for Hire
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;

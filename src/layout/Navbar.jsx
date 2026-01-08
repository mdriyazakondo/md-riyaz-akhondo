"use client";

import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navbarLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/project" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0f172a]/90 backdrop-blur-xl  border-white/5 py-3 shadow-2xl"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-[1530px] mx-auto flex items-center justify-between px-6 md:px-12">
          {/* Logo Section */}
          <Link to="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center"
            >
              <img
                className="w-12 md:w-16 h-auto object-contain brightness-125"
                src="https://ik.imagekit.io/2o23yla4n/md-riyaz-akondo.png"
                alt="Logo"
              />
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-10">
              {navbarLinks.map((link, i) => (
                <NavLink
                  key={i}
                  to={link.path}
                  className={({ isActive }) =>
                    `relative text-[13px] uppercase tracking-[0.2em] font-bold transition-all duration-300 hover:text-cyan-400 ${
                      isActive ? "text-cyan-400" : "text-slate-400"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.name}
                      {isActive && (
                        <motion.div
                          layoutId="underline"
                          className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </ul>
          </nav>

          {/* Action Button */}
          <div className="hidden lg:flex items-center">
            <Link to="/contact">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(34,211,238,0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-7 py-2.5 bg-cyan-500 text-slate-950 text-xs font-black rounded-xl transition-all duration-300 uppercase tracking-widest shadow-lg"
              >
                Hire Me
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="lg:hidden text-slate-300 hover:text-cyan-400 cursor-pointer p-2 rounded-lg bg-slate-800/50 border border-slate-700/50"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-[60]"
              onClick={() => setIsOpen(false)}
            />

            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 z-[70] h-screen w-[80%] max-w-sm bg-[#0f172a] border-l border-white/5 p-10 flex flex-col shadow-[-20px_0_50px_rgba(0,0,0,0.5)]"
            >
              <div className="flex justify-between items-center mb-16">
                <span className="text-cyan-400 font-black tracking-widest uppercase text-xl">
                  Menu
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-slate-400 hover:text-white p-2"
                >
                  <X size={32} />
                </button>
              </div>

              <ul className="flex flex-col gap-6">
                {navbarLinks.map((link, i) => (
                  <motion.div
                    key={i}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <NavLink
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `text-3xl font-black uppercase tracking-tighter transition-all duration-300 ${
                          isActive
                            ? "text-cyan-400 pl-4 border-l-4 border-cyan-400"
                            : "text-slate-500 hover:text-slate-200"
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  </motion.div>
                ))}
              </ul>

              <div className="mt-auto">
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  <button className="w-full py-5 bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 font-black rounded-2xl uppercase tracking-[0.2em] shadow-xl">
                    Let's Talk
                  </button>
                </Link>
                <p className="text-center text-slate-600 text-[10px] mt-6 tracking-widest uppercase font-bold">
                  © 2024 Riyaz Akondo
                </p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

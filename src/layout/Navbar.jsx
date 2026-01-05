import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";

const navbarLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Project", path: "/project" },
  // { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  // Load dark mode from localStorage, default true
  const [dark, setDark] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : true;
  });

  const [isOpen, setIsOpen] = useState(false);

  // Update body class & localStorage whenever dark changes
  useEffect(() => {
    document.body.classList.remove(dark ? "light" : "dark");
    document.body.classList.add(dark ? "dark" : "light");
    localStorage.setItem("darkMode", JSON.stringify(dark));
  }, [dark]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 ${
          !dark ? "bg-white" : "bg-gradient-to-r from-[#141E30] to-[#243B55]"
        } shadow-md transition-all duration-300`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
          {/* Logo */}

          <img
            className="w-24 h-12"
            // src="https://ik.imagekit.io/2o23yla4n/image-removebg-preview%20(3).png?updatedAt=1763072976650"
            src="https://ik.imagekit.io/2o23yla4n/Teal_Letter_R_with_Pen_Nib-removebg-preview.png?updatedAt=1763075200907"
            alt=""
          />

          {/* Desktop Menu */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-10">
              {navbarLinks.map((link, i) => (
                <NavLink
                  key={i}
                  to={link.path}
                  className={({ isActive }) =>
                    `relative ${
                      !dark ? "text-black" : "text-white"
                    } text-lg font-medium tracking-wide transition-all duration-300 hover:text-cyan-400 ${
                      isActive ? "text-cyan-400 after:w-full" : "after:w-0"
                    } after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:bg-cyan-400 after:transition-all after:duration-300`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </ul>
          </nav>

          {/* Right Buttons */}
          <div className="flex items-center gap-4">
            {/* Dark/Light Toggle */}
            <button
              onClick={() => setDark(!dark)}
              className="cursor-pointer "
              aria-label="Toggle Dark/Light Mode "
            >
              {dark ? (
                <Sun size={20} className="text-white w-6 h-6" />
              ) : (
                <Moon size={20} className="w-6 h-6" />
              )}
            </button>

            {/* Login Button Desktop */}

            {/* Mobile Menu Button */}
            <button
              className={`lg:hidden ${
                dark ? "text-white" : " text-black"
              } cursor-pointer`}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.45 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.32 }}
              className={`fixed top-0 right-0 z-50 h-screen w-64 px-6 py-6 shadow-lg ${
                dark ? "bg-[#141E30]/95 text-white" : "bg-white text-gray-800"
              }`}
            >
              <div className="flex items-center justify-between">
                <button
                  onClick={() => setIsOpen(false)}
                  className="cursor-pointer"
                >
                  <X
                    size={24}
                    className={dark ? "text-white" : "text-gray-800"}
                  />
                </button>
              </div>

              <ul className="mt-8 flex flex-col gap-6">
                {navbarLinks.map((link, i) => (
                  <NavLink
                    key={i}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium hover:text-cyan-400 transition-colors"
                  >
                    {link.name}
                  </NavLink>
                ))}
              </ul>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

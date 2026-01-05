import React, { useState } from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";

const Contact = () => {
  const [result, setResult] = useState("");

  const socialLinks = [
    {
      icon: <FaEnvelope />,
      label: "Gmail",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=mdriyazakondo265@gmail.com",
    },
    {
      icon: <FaWhatsapp />,
      label: "WhatsApp",
      href: "https://wa.me/8801611188018",
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      href: "https://github.com/mdriyazakondo",
    },
    {
      icon: <FaFacebook />,
      label: "Facebook",
      href: "https://www.facebook.com/junior.deploper.riyaz",
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mdriyazakondo/",
    },
  ];

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", import.meta.env.VITE_CONTACT_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully ✅");
        event.target.reset();
        Swal.fire({
          icon: "success",
          title: "Message Sent!",
          text: "Your message has been submitted successfully 🎉",
          showConfirmButton: false,
          timer: 2000,
          background: "#0d1b2a",
          color: "#fff",
        });
      } else {
        setResult("Submission failed ❌");
        Swal.fire({
          icon: "error",
          title: "Submission Failed!",
          text: "Something went wrong. Please try again later 😢",
          confirmButtonColor: "#3085d6",
          background: "#0d1b2a",
          color: "#fff",
        });
      }
    } catch (error) {
      console.error(error);
      setResult("An error occurred 😔");
      Swal.fire({
        icon: "error",
        title: "Network Error!",
        text: "Unable to send message. Please check your connection.",
        confirmButtonColor: "#d33",
        background: "#0d1b2a",
        color: "#fff",
      });
    }
  };

  return (
    <section
      id="contact"
      className="mt-20 pb-16 px-5 transition-colors duration-500 text-gray-100"
    >
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <SectionTitle title="Contact Me" />
      </motion.div>

      {/* Container */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto md:flex md:gap-10 bg-[#0d1b2a] dark:bg-[#14273d] rounded-2xl shadow-lg p-8 md:p-12"
      >
        {/* ---------------- Form ---------------- */}
        <motion.form
          onSubmit={onSubmit}
          className="flex-1 space-y-6 border rounded-md p-8 border-gray-600"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.div whileFocus={{ scale: 1.02 }}>
            <label
              htmlFor="name"
              className="block text-gray-200 font-medium mb-2"
            >
              Your Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Enter your full name"
              className="w-full p-3 rounded-md border-b-2 border-cyan-400 bg-transparent text-white outline-none focus:border-blue-500 transition-all"
            />
          </motion.div>

          <motion.div whileFocus={{ scale: 1.02 }}>
            <label
              htmlFor="email"
              className="block text-gray-200 font-medium mb-2"
            >
              Your Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Enter your email address"
              className="w-full p-3 rounded-md border-b-2 border-cyan-400 bg-transparent text-white outline-none focus:border-blue-500 transition-all"
            />
          </motion.div>

          <motion.div whileFocus={{ scale: 1.02 }}>
            <label
              htmlFor="message"
              className="block text-gray-200 font-medium mb-2"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows="5"
              placeholder="Write your message here..."
              className="w-full p-3 rounded-md border-b-2 border-cyan-400 bg-transparent text-white outline-none resize-none focus:border-blue-500 transition-all"
            ></textarea>
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full cursor-pointer bg-gradient-to-r from-cyan-400 to-blue-500 font-semibold text-white py-3 rounded-md hover:opacity-90 transition-all"
          >
            Send Message 🚀
          </motion.button>
        </motion.form>

        {/* ---------------- Social / Info ---------------- */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="px-10 flex flex-col items-center justify-center text-center space-y-6 mt-10 md:mt-0 md:border-l-2 border-gray-600"
        >
          <h3 className="text-2xl font-semibold text-cyan-400 mb-4">
            Social Links
          </h3>

          <div className="flex flex-col gap-4 text-lg mt-4">
            {socialLinks.map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, color: "#67e8f9" }}
                className="flex items-start justify-start gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
              >
                {item.icon} <span>{item.label}</span>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-sm text-gray-400 mt-6"
          >
            📍 Dhaka, Bangladesh <br />
            ✉️ mdriyazakondo265@gmail.com
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;

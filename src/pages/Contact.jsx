import React, { useState } from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { HiLocationMarker, HiMail } from "react-icons/hi";
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
      color: "hover:text-red-400",
    },
    {
      icon: <FaWhatsapp />,
      label: "WhatsApp",
      href: "https://wa.me/8801611188018",
      color: "hover:text-green-400",
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      href: "https://github.com/mdriyazakondo",
      color: "hover:text-white",
    },
    {
      icon: <FaFacebook />,
      label: "Facebook",
      href: "https://www.facebook.com/junior.deploper.riyaz",
      color: "hover:text-blue-400",
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mdriyazakondo/",
      color: "hover:text-blue-500",
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
        setResult("");
        event.target.reset();
        Swal.fire({
          icon: "success",
          title: "Message Sent!",
          text: "Your message has been submitted successfully 🎉",
          showConfirmButton: false,
          timer: 2000,
          background: "#1e293b",
          color: "#fff",
        });
      } else {
        setResult("");
        Swal.fire({
          icon: "error",
          title: "Oops!",
          text: "Submission failed.",
          background: "#1e293b",
          color: "#fff",
        });
      }
    } catch (error) {
      setResult("");
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Network issue.",
        background: "#1e293b",
        color: "#fff",
      });
    }
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto relative z-10">
        <SectionTitle title="Get In Touch" />
        <p className="text-center text-slate-400 mb-16 -mt-8 max-w-2xl mx-auto italic font2">
          Feel free to reach out for collaborations or just a friendly hello!
        </p>

        <div className="flex flex-col lg:flex-row gap-16 items-stretch">
          {/* ---------------- Left: Contact Form ---------------- */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-[1.5] bg-slate-800/20 backdrop-blur-xl border border-slate-700/50 p-8 md:p-12 rounded-[2.5rem] shadow-2xl"
          >
            <form onSubmit={onSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-300 ml-1 uppercase tracking-widest">
                    Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="Riyaz Akondo"
                    className="w-full bg-slate-900/50 border border-slate-700 p-4 rounded-xl text-white outline-none focus:border-cyan-400 transition-all shadow-inner"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-300 ml-1 uppercase tracking-widest">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="example@mail.com"
                    className="w-full bg-slate-900/50 border border-slate-700 p-4 rounded-xl text-white outline-none focus:border-cyan-400 transition-all shadow-inner"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-300 ml-1 uppercase tracking-widest">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows="6"
                  placeholder="Tell me about your project..."
                  className="w-full bg-slate-900/50 border border-slate-700 p-4 rounded-xl text-white outline-none focus:border-cyan-400 transition-all resize-none shadow-inner"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 bg-cyan-500 text-slate-950 font-black rounded-xl text-lg uppercase tracking-widest shadow-[0_10px_20px_rgba(34,211,238,0.2)] hover:bg-cyan-400 transition-all cursor-pointer"
              >
                {result || "Send Message"}
              </motion.button>
            </form>
          </motion.div>

          {/* ---------------- Right: Contact Info ---------------- */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex flex-col justify-between space-y-10"
          >
            {/* Contact Details Card */}
            <div className="bg-slate-800/40 border border-slate-700/50 p-10 rounded-[2.5rem] space-y-8">
              <h3 className="text-3xl font-black text-white">
                Let's build <br />
                <span className="text-cyan-400">something great.</span>
              </h3>

              <div className="space-y-6">
                <div className="flex items-center gap-5 group">
                  <div className="w-12 h-12 bg-cyan-500/10 border border-cyan-500/20 rounded-2xl flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all">
                    <HiMail size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">
                      Email Me
                    </p>
                    <p className="text-slate-200 font-medium">
                      mdriyazakondo265@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-5 group">
                  <div className="w-12 h-12 bg-cyan-500/10 border border-cyan-500/20 rounded-2xl flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all">
                    <HiLocationMarker size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">
                      Location
                    </p>
                    <p className="text-slate-200 font-medium">
                      Dhaka, Bangladesh
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Grid */}
            <div className="grid grid-cols-3 gap-4">
              {socialLinks.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className={`h-20 bg-slate-800/20 border border-slate-700/50 rounded-2xl flex items-center justify-center text-2xl text-slate-400 transition-all ${item.color} hover:bg-slate-800/60`}
                  title={item.label}
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

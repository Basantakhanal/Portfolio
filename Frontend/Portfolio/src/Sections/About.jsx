import React from "react";
import boy from "../assets/Boy.jpeg";
import { motion } from "framer-motion";

import { FaReact, FaGithub, FaPython, FaCode } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiMysql } from "react-icons/di";

export default function About() {
  const stats = [
    { label: "Experience", value: "1 year" },
    { label: "Speciality", value: "UI Design" },
    { label: "Focus", value: "Performance & UX" },
  ];

  const skills = [
    { icon: <FaReact size={28} className="text-[#61DAFB]" />, name: "React" },
    { icon: <FaPython size={28} className="text-[#3776AB]" />, name: "Python" },
    { icon: <FaGithub size={28} className="text-white" />, name: "GitHub" },
    { icon: <RiTailwindCssFill size={28} className="text-[#38BDF8]" />, name: "Tailwind CSS" },
    { icon: <DiMysql size={28} className="text-[#00758F]" />, name: "MySQL" },
    { icon: <FaCode size={24} className="text-[#1cd8d2]" />, name: "C" },
    { icon: <FaCode size={24} className="text-[#00bf8f]" />, name: "C++" },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen py-16 px-6 overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#0b1b3a] to-[#020617] text-white flex items-center justify-center"
    >
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-15 blur-[140px] pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-5xl w-full mx-auto flex flex-col gap-12">

        {/* ================= ABOUT SECTION ================= */}
        <motion.div
          className="flex flex-col md:flex-row items-center gap-8 md:gap-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Profile Image */}
          <motion.div
            className="relative flex-shrink-0 w-[210px] h-[210px] md:w-[250px] md:h-[250px] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#1cd8d2]/30 via-[#00bf8f]/20 to-[#302b63]/40 p-[2px]"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
          >
            <div className="w-full h-full rounded-[14px] overflow-hidden bg-[#0b1b3a]">
              <img
                src={boy}
                alt="profile"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* About Text */}
          <div className="flex-1 flex flex-col justify-center text-center md:text-left">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-[#1cd8d2] bg-clip-text text-transparent">
              About Me
            </h2>

            <p className="mt-4 text-gray-300 leading-relaxed text-sm sm:text-base max-w-2xl">
              I am a passionate Computer Engineer with a strong interest in
              software development, web technologies, and innovative
              problem-solving. I enjoy creating efficient and user-friendly
              applications, exploring modern technologies like React and Flask,
              and working with databases to build scalable solutions.
            </p>

            {/* Stats Cards */}
            <div className="mt-6 grid grid-cols-3 gap-3 max-w-md mx-auto md:mx-0">
              {stats.map((item, i) => (
                <motion.div
                  key={i}
                  className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-md px-3.5 py-3 text-center"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 * i, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="text-[11px] text-gray-400 font-semibold uppercase tracking-wider">
                    {item.label}
                  </div>
                  <div className="text-xs sm:text-sm font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent mt-1 leading-tight">
                    {item.value}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-xl border border-[#00bf8f]/50 bg-[#00bf8f]/10 text-[#00bf8f] hover:bg-[#00bf8f] hover:text-slate-950 font-bold px-6 py-2.5 text-sm transition shadow-lg shadow-[#00bf8f]/10"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 backdrop-blur-md text-gray-200 font-semibold px-6 py-2.5 text-sm hover:bg-white/10 hover:text-white transition"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </motion.div>

        {/* Dynamic Glowing Section Divider */}
        <div className="relative w-full h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent my-1" />

        {/* ================= SKILLS SECTION ================= */}
        <motion.div
          className="w-full text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-1.5 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            My Skills
          </h3>

          <p className="text-gray-400 text-xs sm:text-sm mb-6">
            Modern Applications • Technical Stack
          </p>

          {/* Skills Grid */}
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3 px-4.5 py-3 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 hover:border-[#1cd8d2]/40 hover:bg-white/10 transition-all duration-300 shadow-md min-w-[125px]"
                whileHover={{ scale: 1.04, y: -2 }}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <div>{skill.icon}</div>
                <span className="text-xs sm:text-sm font-semibold text-gray-200">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
import React from "react";
import { FaReact, FaGithub, FaPython, FaCode } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiMysql } from "react-icons/di";
import { motion } from "framer-motion";
import ParticlesBackgrounds from "../Components/ParticlesBackgrounds";

export default function Skills() {
  const skills = [
    { icon: <FaReact size={48} />, name: "React" },
    { icon: <FaPython size={48} />, name: "Python" },
    { icon: <FaGithub size={48} />, name: "GitHub" },
    { icon: <RiTailwindCssFill size={48} />, name: "Tailwind CSS" },
    { icon: <DiMysql size={48} />, name: "MySQL" },
    { icon: <FaCode size={48} />, name: "C" },
    { icon: <FaCode size={48} />, name: "C++" },
  ];

  return (
    <section
      id="skills"
      className="relative min-h-screen py-24 px-6 
      bg-gradient-to-r from-[#0f172a] via-[#0b1b3a] to-[#020617] 
      text-white overflow-hidden flex flex-col items-center justify-center"
    >
      {/* Particles Background */}
      <ParticlesBackgrounds />

      {/* Heading */}
      <motion.h2
        className="text-4xl sm:text-5xl font-extrabold bg-clip-text text-transparent 
        bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#1cd8d2] z-10"
        initial={{ opacity: 0, y: -25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Skills
      </motion.h2>

      {/* Subtext */}
      <motion.p
        className="mt-3 mb-12 text-white/70 text-base sm:text-lg z-10"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Modern Applications • Modern Technologies
      </motion.p>

      {/* Grid */}
      <div className="z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center gap-4 p-8 w-[160px] h-[160px]
                       bg-white/5 backdrop-blur-lg rounded-2xl
                       border border-white/10
                       hover:bg-white/10
                       transition-all duration-300 shadow-md"
            whileHover={{ scale: 1.08 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div className="text-white">{skill.icon}</div>
            <span className="text-sm sm:text-base font-medium">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
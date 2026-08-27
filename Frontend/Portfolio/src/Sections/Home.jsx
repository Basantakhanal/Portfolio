import React, { useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import ParticlesBackgrounds from "../Components/ParticlesBackgrounds";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const socials = [
  {
    icon: FaXTwitter,
    label: "X",
    href: "https://x.com/home",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    href: "https://github.com/Basantakhanal",
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    href: "https://www.instagram.com/bas._.anta/",
  },
];

export default function Home() {
  const roles = useMemo(
    () => ["Web Developer", "Frontend Developer"],
    []
  );

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // Typing Animation
  useEffect(() => {
    const current = roles[index];

    const timeout = setTimeout(() => {
      if (!deleting && subIndex < current.length) {
        setSubIndex((v) => v + 1);
      } else if (!deleting && subIndex === current.length) {
        setTimeout(() => setDeleting(true), 1200);
      } else if (deleting && subIndex > 0) {
        setSubIndex((v) => v - 1);
      } else if (deleting && subIndex === 0) {
        setDeleting(false);
        setIndex((p) => (p + 1) % roles.length);
      }
    }, deleting ? 40 : 60);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, roles]);

  // Scroll to Projects
  const scrollToProjects = () => {
    document
      .getElementById("projects")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  // Open Resume
  const openResume = () => {
    window.location.href = "/Myresume.pdf";
  };

  return (
    <section
      id="home"
      className="w-full h-screen relative
      bg-gradient-to-br
      from-[#0f172a]
      via-[#0b1b3a]
      to-[#020617]
      overflow-hidden"
    >
      {/* Particles Background */}
      <ParticlesBackgrounds />

      {/* Main Content */}
      <div
        className="relative z-10 h-full w-full
        max-w-7xl mx-auto px-4
        flex items-center justify-center"
      >
        <div className="flex flex-col items-center text-center">

          {/* Typing Role */}
          <motion.div
            className="mb-5 text-3xl sm:text-4xl
            font-semibold text-white
            min-h-[1.6em]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {roles[index].substring(0, subIndex)}

            <span
              className="inline-block w-[2px]
              ml-1 bg-white animate-pulse h-[1em]"
            />
          </motion.div>

          {/* Name */}
          <motion.h1
            className="text-5xl sm:text-7xl
            font-bold text-white tracking-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Hello, I'm
            <br />

            <span className="text-white">
              Basanta Khanal
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="mt-6 text-base sm:text-lg
            text-gray-300 max-w-2xl
            leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            I am a Computer Engineer from Nepal. Deeply
            interested in technology, coding, and solving
            complex problems.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="mt-8 flex gap-4 sm:gap-6
            justify-center"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {/* View My Work */}
            <button
              onClick={scrollToProjects}
              className="px-5 py-2.5 sm:px-6 sm:py-3
              bg-white text-black
              text-sm sm:text-base
              font-medium
              rounded-full
              hover:bg-gray-200
              transition-colors duration-200
              cursor-pointer"
            >
              View My Work
            </button>

            {/* Resume */}
            <button
              onClick={openResume}
              className="px-5 py-2.5 sm:px-6 sm:py-3
              bg-white text-black
              text-sm sm:text-base
              font-medium
              rounded-full
              hover:bg-gray-200
              transition-colors duration-200
              cursor-pointer"
            >
              My Resume
            </button>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            className="mt-8 flex gap-6
            text-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            {socials.map(
              ({ icon: Icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.2,
                    y: -2,
                  }}
                  className="text-gray-300
                  hover:text-white
                  transition-colors"
                  aria-label={label}
                >
                  <Icon />
                </motion.a>
              )
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
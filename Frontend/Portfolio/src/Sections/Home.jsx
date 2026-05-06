import React, { useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import ParticlesBackgrounds from "../Components/ParticlesBackgrounds";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const socials = [
  { icon: FaXTwitter, label: "X", href: "https://x.com/home" },
  { icon: FaGithub, label: "GitHub", href: "https://github.com/Basantakhanal" },
  {
    icon: FaInstagram,
    label: "Instagram",
    href: "https://www.instagram.com/bas._.anta/",
  },
];

export default function Home() {
  const roles = useMemo(() => ["Web Developer", "Frontend Developer"], []);

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

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

  return (
    <section
      id="home"
      className="w-full h-screen relative bg-gradient-to-r from-[#0f172a] via-[#0b1b3a] to-[#020617] overflow-hidden"
    >
      {/* Background Particles */}
      <ParticlesBackgrounds />

      {/* ❌ Removed gradient blobs */}

      {/* Main Content */}
      <div className="relative z-10 h-full w-full max-w-7xl mx-auto px-4 flex items-center justify-center">
        
        {/* Centered Content */}
        <div className="flex flex-col items-center text-center">
          
          {/* Typing Role Animation */}
          <motion.div
            className="mb-4 text-2xl sm:text-3xl font-semibold text-white min-h-[1.6em]"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {roles[index].substring(0, subIndex)}
            <span className="inline-block w-[2px] ml-1 bg-white animate-pulse align-middle h-[1em]" />
          </motion.div>

          {/* Name Heading */}
          <motion.h1
            className="text-4xl sm:text-6xl font-bold text-transparent bg-clip-text 
            bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Hello, I'm <br />
            <span className="text-white">Basanta Khanal</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="mt-6 text-gray-300 max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            I am a Computer Engineer from Nepal. Deeply interested in technology,
            coding, and solving complex problems. My aim is to grow into a
            competent engineer and build innovative solutions.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="mt-8 flex flex-wrap gap-6 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <a
              href="#projects"
               className="px-6 py-3 rounded-full font-medium bg-white text-black hover:bg-gray-200 transition"
            >
              View My Work
            </a>

            <a
              href="/Myresume.pdf"
              download
              className="px-6 py-3 rounded-full font-medium bg-white text-black hover:bg-gray-200 transition"
            >
              My Resume
            </a>
          </motion.div>

          {/* Social Icons */}
          <div className="mt-8 flex gap-6 text-2xl">
            {socials.map(({ icon: Icon, label, href }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-300 hover:text-white transition"
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* ❌ Removed right-side glow + image section */}
    </section>
  );
}
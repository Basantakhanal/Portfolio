import { useEffect, useRef, useState } from "react";
import Overlaymenu from "./OverlayMenu";
import Logo from "/src/assets/logo.png";
import { FiMenu } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show navbar at the top
      if (currentScrollY <= 10) {
        setVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      // Scrolling down → hide
      if (currentScrollY > lastScrollY.current) {
        setVisible(false);
      }

      // Scrolling up → show
      else if (currentScrollY < lastScrollY.current) {
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50
        flex items-center justify-between
        px-6 py-4
        transition-transform duration-300 ease-in-out
        ${
          visible
            ? "translate-y-0"
            : "-translate-y-full"
        }`}
      >
        {/* Logo + Name */}
        <a
          href="#home"
          className="flex items-center space-x-1 cursor-pointer"
        >
          <img
            src={Logo}
            alt="logo"
            className="w-10 h-10"
          />

          <div
            className="text-2xl font-bold text-white
            hidden sm:block hover:text-gray-300 transition"
          >
            Basanta
          </div>
        </a>

        {/* Hamburger Button */}
        <div
          className="block lg:absolute lg:left-1/2
          lg:transform lg:-translate-x-1/2"
        >
          <button
            onClick={() => setMenuOpen(true)}
            className="text-white text-3xl focus:outline-none"
            aria-label="open menu"
          >
            <FiMenu />
          </button>
        </div>

        {/* Reachout Button */}
        <div className="hidden lg:block">
          <a
            href="#contact"
            className="bg-gradient-to-r from-pink-500 to-blue-500
            text-white px-5 py-2 rounded-full font-medium
            shadow-lg hover:opacity-90
            transition-opacity duration-300"
          >
            Reachout
          </a>
        </div>
      </nav>

      {/* Overlay Menu */}
      <Overlaymenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
    </>
  );
}
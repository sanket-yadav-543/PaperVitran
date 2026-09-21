import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, BookOpen, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Materials", path: "/materials" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="w-full z-50 mt-1">
      {/* 🔹 Top Bar */}
      <div className="bg-[#1a1c23] text-gray-300 text-sm py-2 px-6 flex flex-wrap justify-between items-center border-b border-[#2a2d37] rounded-t-2xl">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <Phone size={15} className="text-[#4FD1C5]" /> +91 9876543XXX
          </span>
          <span className="flex items-center gap-1">
            <Mail size={15} className="text-[#4FD1C5]" /> papervitran@gmail.com
          </span>
        </div>
        
      </div>

      {/* 🔸 Main Navbar */}
      <nav className="bg-[#0d0f14] text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
          {/* Logo & Title */}
          <motion.div
            className="flex items-center gap-3 cursor-pointer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <BookOpen size={34} className="text-[#4FD1C5]" />
            <h1 className="text-3xl font-bold tracking-wide">
              Paper<span className="text-[#4FD1C5]">Vitran</span>
            </h1>
          </motion.div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex gap-12 items-center">
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.path}
                className={({ isActive }) =>
                  `relative text-lg font-medium transition duration-300 ${
                    isActive
                      ? "text-[#4FD1C5] after:absolute after:bottom-[-6px] after:left-0 after:h-[2px] after:w-full after:bg-[#4FD1C5]"
                      : "text-gray-300 hover:text-[#4FD1C5]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="focus:outline-none text-gray-200"
            >
              {menuOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#12141d]/95 backdrop-blur-md px-6 pb-5 border-t border-[#1e2533]"
          >
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block py-3 text-gray-300 text-lg transition duration-300 ${
                    isActive ? "text-[#4FD1C5]" : "hover:text-[#4FD1C5]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;

"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto" },
    exit: { opacity: 0, height: 0 },
  };

  // Function to handle smooth scrolling to sections
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false); // Close mobile menu after clicking
  };

  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#hero" 
          onClick={() => scrollToSection("hero")}
          className="text-2xl font-bold text-[#001f4d]"
        >
          xVerse
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
          <li>
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("hero");
              }}
              className="hover:text-[#001f4d] transition-colors"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("about");
              }}
              className="hover:text-[#001f4d] transition-colors"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("services");
              }}
              className="hover:text-[#001f4d] transition-colors"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("projects");
              }}
              className="hover:text-[#001f4d] transition-colors"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#initiatives"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("initiatives");
              }}
              className="hover:text-[#001f4d] transition-colors"
            >
              Initiatives
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
              className="px-5 py-2 rounded-full bg-[#001f4d] text-white hover:bg-[#003366] transition"
            >
              Contact Us
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700"
          aria-label="Toggle Menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="md:hidden bg-white shadow-lg border-t overflow-hidden"
          >
            <ul className="flex flex-col space-y-4 px-6 py-6 text-gray-700 font-medium">
              <li>
                <a 
                  href="#hero" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("hero");
                  }} 
                  className="hover:text-[#001f4d] transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("about");
                  }} 
                  className="hover:text-[#001f4d] transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("services");
                  }} 
                  className="hover:text-[#001f4d] transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("projects");
                  }} 
                  className="hover:text-[#001f4d] transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#initiatives" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("initiatives");
                  }} 
                  className="hover:text-[#001f4d] transition-colors"
                >
                  Initiatives
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("contact");
                  }}
                  className="px-5 py-2 rounded-full bg-[#001f4d] text-white text-center hover:bg-[#003366] transition"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
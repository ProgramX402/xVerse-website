"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");

  const menuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto" },
    exit: { opacity: 0, height: 0 },
  };

  // Smooth scroll
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActive(sectionId);
    }
    setOpen(false);
  };

  // Detect active section using Intersection Observer
  useEffect(() => {
    const sections = ["hero", "about", "services", "projects", "initiatives", "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((sec) => {
      const section = document.getElementById(sec);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Reusable link renderer
  const MenuLink = ({
    id,
    label,
    isButton,
  }: {
    id: string;
    label: string;
    isButton?: boolean;
  }) => {
    const activeClass = active === id ? "text-[#001f4d] font-semibold" : "text-gray-700";

    if (isButton) {
      return (
        <a
          href={`#${id}`}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection(id);
          }}
          className={`px-5 py-2 rounded-full transition ${
            active === id
              ? "bg-[#003366] text-white"
              : "bg-[#001f4d] text-white hover:bg-[#003366]"
          }`}
        >
          {label}
        </a>
      );
    }

    return (
      <a
        href={`#${id}`}
        onClick={(e) => {
          e.preventDefault();
          scrollToSection(id);
        }}
        className={`${activeClass} hover:text-[#001f4d] transition-colors`}
      >
        {label}
      </a>
    );
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
        <ul className="hidden md:flex items-center space-x-8 font-medium">
          <li><MenuLink id="hero" label="Home" /></li>
          <li><MenuLink id="about" label="About" /></li>
          <li><MenuLink id="services" label="Services" /></li>
          <li><MenuLink id="projects" label="Projects" /></li>
          <li><MenuLink id="initiatives" label="Initiatives" /></li>
          <li><MenuLink id="contact" label="Contact Us" isButton /></li>
        </ul>

        {/* Mobile Menu Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-gray-700">
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
            <ul className="flex flex-col space-y-4 px-6 py-6 font-medium text-gray-700">
              <li><MenuLink id="hero" label="Home" /></li>
              <li><MenuLink id="about" label="About" /></li>
              <li><MenuLink id="services" label="Services" /></li>
              <li><MenuLink id="projects" label="Projects" /></li>
              <li><MenuLink id="initiatives" label="Initiatives" /></li>
              <li><MenuLink id="contact" label="Contact Us" isButton /></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

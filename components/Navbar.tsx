"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false); // NEW

  const menuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto" },
    exit: { opacity: 0, height: 0 },
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActive(sectionId);
    }
    setOpen(false);
  };

  useEffect(() => {
    const sections = ["hero", "about", "services", "projects", "initiatives", "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
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

  // NEW: Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) setScrolled(true);
      else setScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          className={`px-6 py-2 rounded-lg transition font-medium ${
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
    <header
      className={`w-full fixed top-0 left-0 z-50 transition-all ${
        scrolled ? "bg-white shadow-md" : "bg-white"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">

        {/* Logo + Name */}
        <a
          href="#hero"
          onClick={() => scrollToSection("hero")}
          className="flex items-center gap-2"
        >
          <img
            src="/logo.png"
            alt="xVerse Logo"
            className="w-8 h-8 object-contain"
          />
          <span className="text-2xl font-bold text-[#001f4d]">xVerse</span>
        </a>

        {/* Desktop Menu - CENTERED */}
        <div className="hidden md:flex flex-1 justify-center">
          <ul className="flex items-center space-x-10 font-medium">
            <li><MenuLink id="hero" label="Home" /></li>
            <li><MenuLink id="about" label="About" /></li>
            <li><MenuLink id="services" label="Services" /></li>
            <li><MenuLink id="projects" label="Projects" /></li>
            <li><MenuLink id="initiatives" label="Initiatives" /></li>
          </ul>
        </div>

        {/* Contact Button (Desktop Right) */}
        <div className="hidden md:flex">
          <MenuLink id="contact" label="Contact Us" isButton />
        </div>

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
            <ul className="flex flex-col space-y-4 px-6 py-6 font-medium text-gray-700 text-center">
              <li><MenuLink id="hero" label="Home" /></li>
              <li><MenuLink id="about" label="About" /></li>
              <li><MenuLink id="services" label="Services" /></li>
              <li><MenuLink id="projects" label="Projects" /></li>
              <li><MenuLink id="initiatives" label="Initiatives" /></li>
              <li className="pt-2"><MenuLink id="contact" label="Contact Us" isButton /></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

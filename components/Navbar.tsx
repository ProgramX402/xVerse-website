"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto" },
    exit: { opacity: 0, height: 0 },
  };

  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-[#001f4d]">
          xVerse
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
          <li>
            <Link
              href="/"
              className="hover:text-[#001f4d] transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-[#001f4d] transition-colors"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className="hover:text-[#001f4d] transition-colors"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="hover:text-[#001f4d] transition-colors"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/initiatives"
              className="hover:text-[#001f4d] transition-colors"
            >
              Initiatives
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="px-5 py-2 rounded-full bg-[#001f4d] text-white hover:bg-[#003366] transition"
            >
              Contact Us
            </Link>
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
                <Link href="/" onClick={() => setOpen(false)} className="hover:text-[#001f4d] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" onClick={() => setOpen(false)} className="hover:text-[#001f4d] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" onClick={() => setOpen(false)} className="hover:text-[#001f4d] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" onClick={() => setOpen(false)} className="hover:text-[#001f4d] transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/initiatives" onClick={() => setOpen(false)} className="hover:text-[#001f4d] transition-colors">
                  Initiatives
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="px-5 py-2 rounded-full bg-[#001f4d] text-white text-center hover:bg-[#003366] transition"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, Variants, Easing } from "framer-motion";

export default function Hero() {
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, when: "beforeChildren" },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { 
        duration: 0.8, 
        ease: "easeOut" as Easing 
      } 
    },
  };

  return (
    <section
      className="relative bg-zinc-50 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/hero.jpg')" }} // Replace with your image path
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      <motion.div
        className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32 flex flex-col items-center md:items-start text-center md:text-left"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Heading */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-white leading-tight"
          variants={item}
        >
          Welcome to xVerse Platforms
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          className="mt-6 text-lg md:text-xl text-gray-200 max-w-lg"
          variants={item}
        >
          Empowering innovation and connecting ideas with opportunities.
          Explore our services, projects, and initiatives to grow your vision.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          variants={item}
        >
          <Link
            href="/services"
            className="px-6 py-3 bg-[#001f4d] text-white font-medium rounded-lg hover:bg-[#003366] transition flex items-center gap-2 justify-center"
          >
            Get Started <ArrowRight size={18} />
          </Link>
          <Link
            href="/about"
            className="px-6 py-3 border border-white text-white font-medium rounded-lg hover:bg-white hover:text-[#001f4d] transition text-center"
          >
            Learn More
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
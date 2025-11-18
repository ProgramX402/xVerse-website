"use client";

import React from "react";
import { motion, Variants, Easing } from "framer-motion";

export default function AboutUs() {
  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const fadeInLeft: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        duration: 0.8, 
        ease: "easeOut" as Easing 
      } 
    },
  };

  const fadeInRight: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        duration: 0.8, 
        ease: "easeOut" as Easing 
      } 
    },
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: "easeOut" as Easing 
      } 
    },
  };

  return (
    <section className="bg-zinc-50 py-20 overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Left Image */}
        <motion.div
          className="flex-1 flex justify-center md:justify-start w-full"
          variants={fadeInLeft}
        >
          <img
            src="/about.jpg"
            alt="About Us"
            className="w-full max-w-sm md:max-w-md h-64 md:h-80 rounded-xl shadow-lg object-cover"
          />
        </motion.div>

        {/* Right Text Content */}
        <motion.div
          className="flex-1 text-center md:text-left w-full"
          variants={fadeInRight}
        >
          <motion.h2 className="text-3xl md:text-4xl font-bold text-[#001f4d]" variants={fadeInUp}>
            About xVerse Platforms
          </motion.h2>

          <motion.p className="mt-6 text-gray-700 text-lg md:text-xl" variants={fadeInUp}>
            At xVerse Platforms, we are dedicated to connecting ideas with opportunities.
            Our mission is to empower innovators, provide actionable insights, and create
            a platform where projects and initiatives can grow and thrive.
          </motion.p>

          <motion.p className="mt-4 text-gray-700 text-lg md:text-xl" variants={fadeInUp}>
            We believe in building solutions that make a real impact, combining technology,
            creativity, and strategy to deliver value for our clients and partners.
          </motion.p>

          <motion.div className="mt-8" variants={fadeInUp}>
            <a
              href="/contact"
              className="px-6 py-3 bg-[#001f4d] text-white font-medium rounded-lg hover:bg-[#003366] transition"
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
"use client";

import React from "react";
import { motion, Variants, Easing } from "framer-motion";

export default function FounderWord() {
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
      transition: { duration: 0.8, ease: "easeOut" as Easing },
    },
  };

  return (
    <section className="bg-zinc-50 py-20 overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Larger Rectangular Image on the left */}
        <motion.img
          src="/team1.jpg"
          alt="Michael Fortress"
          className="w-full max-w-md md:max-w-lg h-80 md:h-96 rounded-xl object-cover shadow-lg flex-shrink-0"
          variants={item}
        />

        {/* Text on the right */}
        <motion.div className="text-center md:text-left flex-1" variants={item}>
          <p className="text-gray-700 text-lg md:text-xl italic">
            "At xVerse Platforms, our mission is to connect ideas with opportunities,
            empower innovators, and create a platform where growth is not just a goal but a shared journey.
            Every project, initiative, and partnership is guided by our commitment to excellence, innovation, and integrity."
          </p>
          <h3 className="mt-6 text-xl md:text-2xl font-semibold text-[#001f4d]">
            Michael Fortress
          </h3>
          <p className="text-gray-500">CEO & Founder</p>
        </motion.div>
      </motion.div>
    </section>
  );
}

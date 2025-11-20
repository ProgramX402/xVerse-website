"use client";

import React from "react";
import { motion, Variants, Easing } from "framer-motion";

export default function Accomplishments() {
  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" as Easing },
    },
  };

  // Updated accomplishments data (Awards removed)
  const data = [
    { number: "50+", title: "Projects Completed" },
    { number: "30+", title: "Happy Clients" },
    { number: "100+", title: "Collaborations & Partnerships" },
  ];

  return (
    <section className="bg-zinc-50 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#001f4d]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Our Accomplishments
        </motion.h2>

        <motion.div
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {data.map((itemData, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center"
              variants={item}
            >
              <h3 className="text-4xl md:text-5xl font-bold text-[#001f4d]">
                {itemData.number}
              </h3>
              <p className="mt-2 text-gray-700 text-lg md:text-xl text-center">
                {itemData.title}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

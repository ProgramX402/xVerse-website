"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Partners() {
  const partners = [
    { src: "/partner1.jpg", alt: "Partner 1" },
    { src: "/partner2.jpeg", alt: "Partner 2" },
    { src: "/partner3.jpeg", alt: "Partner 3" },
  ];

  return (
    <section className="bg-white py-20" id="partners">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#001f4d]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Partners
        </motion.h2>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          We collaborate with industry-leading organizations to deliver excellence.
        </p>

        {/* Logos */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-12 items-center">
          {partners.map((p, index) => (
            <motion.div
              key={index}
              className="flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={p.src}
                alt={p.alt}
                className="w-40 md:w-52 opacity-80 hover:opacity-100 transition"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

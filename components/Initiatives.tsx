"use client";

import React from "react";
import { motion, Variants, easeOut } from "framer-motion";
import Image from "next/image";

const initiatives = [
  {
    title: "Tech for the less privileged.",
    description: "A platform providing tech training and innovation support for the less privileged.",
    logo: "/init1.jpg",
  },
  {
    title: "Rural Innovation Network",
    description: "A movement aimed at bridging the gap between rural areas and modern technology.",
    logo: "/init2.jpg",
  },
  {
    title: "StuNnovation",
    description: "Encouraging innovation by upskilling students.",
    logo: "/init3.jpg",
  },
  {
    title: "MSME Ignition Network",
    description: "Reliable and innovative ecosytem for MSMEs to thrive.",
    logo: "/init4.jpg",
  },
];

export default function Initiatives() {
  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
  };

  return (
    <section className="bg-zinc-50 py-20" id="initiatives">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#001f4d]">
          Our Initiatives
        </h2>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
          We collaborate with innovative startups and initiatives to create impactful solutions and drive growth.
        </p>

        <motion.div
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {initiatives.map((initiative, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition cursor-pointer"
              variants={itemVariants}
            >
              <div className="w-24 h-24 mb-4 relative">
                <Image
                  src={initiative.logo}
                  alt={initiative.title}
                  fill
                  className="object-cover rounded-full"
                  sizes="6rem"
                  priority={idx === 0} // first image loads faster
                />
              </div>
              <h3 className="text-xl font-semibold text-[#001f4d]">{initiative.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{initiative.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

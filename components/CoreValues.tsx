"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Target, Users, Globe } from "lucide-react";

const coreValues = [
  {
    icon: Shield,
    title: "Integrity",
    description: "We act with honesty and transparency in all that we do.",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for excellence in every project and solution.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We value teamwork and partnerships to achieve shared goals.",
  },
  {
    icon: Globe,
    title: "Innovation",
    description: "We embrace creativity and technology to drive progress.",
  },
];

export default function CoreValues() {
  return (
    <section className="bg-zinc-50 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#001f4d]">
          Our Core Values
        </h2>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
          These principles guide everything we do and define the culture of xVerse Platforms.
        </p>

        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {coreValues.map((value, idx) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={idx}
                className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
                }}
              >
                <div className="bg-[#001f4d] text-white p-4 rounded-full inline-flex mb-4">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-semibold text-[#001f4d] mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

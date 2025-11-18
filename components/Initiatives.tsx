"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const initiatives = [
  {
    title: "Startup Nexus",
    description: "A platform connecting early-stage startups with investors.",
    logo: "/initiatives/nexus.jpg",
    link: "https://startupnexus.com",
  },
  {
    title: "AgroTech Hub",
    description: "Innovating agriculture with technology solutions for farmers.",
    logo: "/initiatives/agrotech.jpg",
    link: "https://agrotechhub.com",
  },
  {
    title: "EduGrowth",
    description: "Upskilling students and professionals through digital learning.",
    logo: "/initiatives/edugrowth.jpg",
    link: "https://edugrowth.com",
  },
  {
    title: "GreenSolutions",
    description: "Sustainable and eco-friendly solutions for modern businesses.",
    logo: "/initiatives/greensolutions.jpg",
    link: "https://greensolutions.com",
  },
];

export default function Initiatives() {
  return (
    <section className="bg-zinc-50 py-20">
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
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {initiatives.map((initiative, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition cursor-pointer"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
              }}
            >
              <div className="w-24 h-24 mb-4">
                <img
                  src={initiative.logo}
                  alt={initiative.title}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#001f4d]">{initiative.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{initiative.description}</p>
              {initiative.link && (
                <Link
                  href={initiative.link}
                  target="_blank"
                  className="mt-4 inline-block text-[#001f4d] font-medium hover:underline"
                >
                  Learn More →
                </Link>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

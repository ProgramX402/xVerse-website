"use client";

import React from "react";
import { motion, Variants, easeOut } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "Medicare",
    description: "A smart hospital management dashboard.",
    image: "/project1.png",
    link: "https://medicareconnect.netlify.app/",
  },
  {
    title: "Orphanage Website",
    description: "A cool public facing website for JCRFCF orphanage.",
    image: "/project2.png",
    link: "https://joschristianrefuge.netlify.app/",
  },
  {
    title: "Farm Ferry",
    description: "A website for an agricultural company.",
    image: "/project3.png",
    link: "https://farmferry.netlify.app/",
  },
  {
    title: "AgriconnectHub",
    description: "A software that provides analytics and insights for farmers.",
    image: "/project4.png",
    link: "https://msmexhub.web.app/",
  },
];

export default function Projects() {
  // Container for staggered animation
  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  // Each project card animation
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeOut }, // ✅ Type-safe
    },
  };

  return (
    <section className="bg-zinc-50 py-20" id="projects">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#001f4d]">
          Our Projects
        </h2>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
          Take a look at some of the projects we've successfully built and deployed for our clients.
        </p>

        <motion.div
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition cursor-pointer"
              variants={itemVariants}
            >
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  priority={idx === 0} // first image loads faster
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-[#001f4d]">{project.title}</h3>
                <p className="mt-2 text-gray-600 text-sm">{project.description}</p>
                {project.link && (
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-[#001f4d] font-medium hover:underline"
                  >
                    View Project →
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

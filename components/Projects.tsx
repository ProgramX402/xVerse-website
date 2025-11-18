"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    title: "Project Alpha",
    description: "An innovative ERP solution for small businesses.",
    image: "/projects/project1.jpg",
    link: "/projects/project-alpha",
  },
  {
    title: "Project Beta",
    description: "A web platform connecting ideas to opportunities.",
    image: "/projects/project2.jpg",
    link: "/projects/project-beta",
  },
  {
    title: "Project Gamma",
    description: "Training platform for skill development and growth.",
    image: "/projects/project3.jpg",
    link: "/projects/project-gamma",
  },
  {
    title: "Project Delta",
    description: "Custom software solution for enterprise clients.",
    image: "/projects/project4.jpg",
    link: "/projects/project-delta",
  },
];

export default function Projects() {
  return (
    <section className="bg-zinc-50 py-20">
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
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition cursor-pointer"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
              }}
            >
              <div className="relative h-48 w-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-[#001f4d]">{project.title}</h3>
                <p className="mt-2 text-gray-600 text-sm">{project.description}</p>
                {project.link && (
                  <Link
                    href={project.link}
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

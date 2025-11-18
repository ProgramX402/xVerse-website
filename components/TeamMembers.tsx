"use client";

import React from "react";
import { motion, Variants, Easing } from "framer-motion";
import { Linkedin, Twitter } from "lucide-react";

const teamMembers = [
  {
    name: "Michael Fortress",
    role: "CEO & Team Lead",
    image: "/team1.jpg",
    linkedin: "https://linkedin.com/in/michaelfortress",
    twitter: "https://twitter.com/michaelfortress",
  },
  {
    name: "Princess Michael",
    role: "COO & Product Manager",
    image: "/team2.jpg",
    linkedin: "https://linkedin.com/in/sarahade",
    twitter: "https://twitter.com/sarahade",
  },
  {
    name: "Hakeem",
    role: "CTO and Software Engineer",
    image: "/team3.jpg",
    linkedin: "https://linkedin.com/in/davidokoro",
    twitter: "https://twitter.com/davidokoro",
  },
  {
    name: "Justice Adam",
    role: "Ecosystem Director and Software Engineer",
    image: "/team4.jpg",
    linkedin: "https://linkedin.com/in/emmanuelnwosu",
    twitter: "https://twitter.com/emmanuelnwosu",
  },
  {
    name: "Feke Alao Peters",
    role: "Head of Partnerships and Software Engineer",
    image: "/team5.jpg",
    linkedin: "https://linkedin.com/in/chinweeze",
    twitter: "https://twitter.com/chinweeze",
  },
];

export default function TeamMembers() {
  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  // Solution 1: Use a predefined easing string with type assertion
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: "easeOut" as Easing 
      } 
    },
  };

  // Alternative Solution 2: Use a cubic-bezier array with proper typing
  /*
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] 
      } 
    },
  };
  */

  return (
    <section className="bg-zinc-50 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#001f4d]">
          Meet Our Team
        </h2>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
          Our team is composed of dedicated professionals driving innovation and delivering value.
        </p>

        <motion.div
          className="mt-12 flex flex-col items-center gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
        >
          {/* Top row - 3 members */}
          <motion.div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full justify-items-center" variants={container}>
            {teamMembers.slice(0, 3).map((member, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-xs hover:shadow-2xl transition"
                variants={fadeInUp}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-[#001f4d]">{member.name}</h3>
                  <p className="text-gray-600 mt-1">{member.role}</p>
                  <div className="flex justify-center mt-3 gap-3 text-[#001f4d]">
                    {member.linkedin && <a href={member.linkedin} target="_blank"><Linkedin size={20} /></a>}
                    {member.twitter && <a href={member.twitter} target="_blank"><Twitter size={20} /></a>}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom row - 2 members */}
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full justify-items-center" variants={container}>
            {teamMembers.slice(3).map((member, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-xs hover:shadow-2xl transition"
                variants={fadeInUp}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-[#001f4d]">{member.name}</h3>
                  <p className="text-gray-600 mt-1">{member.role}</p>
                  <div className="flex justify-center mt-3 gap-3 text-[#001f4d]">
                    {member.linkedin && <a href={member.linkedin} target="_blank"><Linkedin size={20} /></a>}
                    {member.twitter && <a href={member.twitter} target="_blank"><Twitter size={20} /></a>}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
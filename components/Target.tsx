"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Home, School, Users, Globe, User } from "lucide-react";

const targets = [
  {
    icon: Briefcase,
    title: "Companies",
    description: "Large organizations looking for enterprise solutions and innovation support.",
  },
  {
    icon: Home,
    title: "Small Businesses",
    description: "Entrepreneurs and SMEs seeking digital tools and growth opportunities.",
  },
  {
    icon: School,
    title: "Schools",
    description: "Educational institutions aiming to integrate technology into learning.",
  },
  {
    icon: Users,
    title: "NGOs",
    description: "Non-profit organizations looking for tech-enabled social impact solutions.",
  },
  {
    icon: Globe,
    title: "Government Bodies",
    description: "Public institutions seeking digital transformation and smart governance solutions.",
  },
  {
    icon: User,
    title: "Individuals",
    description: "People looking to develop skills, launch startups, or innovate.",
  },
];

export default function WhoWeTarget() {
  return (
    <section className="bg-white py-20" id="target">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#001f4d]">
          Who We Target
        </h2>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
          We provide tailored solutions and support to a wide range of audiences.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {targets.map((target, idx) => {
            const Icon = target.icon;
            return (
              <motion.div
                key={idx}
                className="bg-zinc-50 rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="bg-[#001f4d] text-white p-4 rounded-full inline-flex mb-4">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-semibold text-[#001f4d] mb-2">
                  {target.title}
                </h3>
                <p className="text-gray-600 text-sm">{target.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

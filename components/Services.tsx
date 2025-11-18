"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  BarChart3, 
  Briefcase, 
  Home, 
  School, 
  Leaf, 
  Package 
} from "lucide-react";

const services = [
  {
    icon: BarChart3,
    title: "ERP Software",
    description: "Streamline your business operations with our custom ERP solutions."
  },
  {
    icon: Briefcase,
    title: "Consultancy",
    description: "Expert advice to optimize your business strategy and growth."
  },
  {
    icon: Home,
    title: "Web Development",
    description: "Build responsive, scalable, and modern web applications."
  },
  {
    icon: School,
    title: "Training",
    description: "Upskill your team with our tailored training programs."
  },
  {
    icon: Leaf,
    title: "Partnership",
    description: "Collaborate with us to unlock new opportunities and markets."
  },
  {
    icon: Package,
    title: "Solutions Development",
    description: "Custom software solutions designed to meet your unique needs."
  },
];

export default function Services() {
  return (
    <section className="bg-zinc-50 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-[#001f4d] text-center">
          Our Services
        </h2>
        <p className="mt-4 text-gray-700 text-center max-w-2xl mx-auto">
          We offer a range of services to empower your business and help you grow.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={idx}
                className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-[#001f4d] text-white p-4 rounded-full inline-flex mb-4">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-semibold text-[#001f4d] mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

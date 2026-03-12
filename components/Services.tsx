"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  PenTool,
  Briefcase,
  BarChart3,
  Palette,
  Megaphone,
  Layers,
  Brush,
  Rocket,
  Search,
  Users,
  TrendingUp,
  Cloud,
  Blocks,
  FileText,
  Cpu,
  CheckCircle,
  Flag,
  Shield,
  FlaskConical,
  Radio,
  ArrowRight,
  Brain,
  Monitor,
  Bot
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Modern, scalable, and high-performance websites and web apps."
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Android and iOS applications built for performance and scale."
  },
  {
    icon: PenTool,
    title: "Product & UI/UX Design",
    description: "User-centered product design that drives engagement and usability."
  },
  {
    icon: Briefcase,
    title: "IT Consulting",
    description: "Strategic IT guidance to align technology with business goals."
  },
  {
    icon: BarChart3,
    title: "Business & ERP Software",
    description: "Custom ERP and business management systems."
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description: "Creative visuals that communicate your brand effectively."
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Data-driven marketing strategies for online growth."
  },
  {
    icon: Layers,
    title: "Solution Design, Architecture & Development",
    description: "End-to-end system design and implementation."
  },
  {
    icon: Brush,
    title: "Brand Design",
    description: "Brand identity systems that stand out and scale."
  },
  {
    icon: Rocket,
    title: "Brand Launching",
    description: "Launch strategies that position your brand for success."
  },
  {
    icon: Search,
    title: "Market Research",
    description: "Insights and analytics to guide smart business decisions."
  },
  {
    icon: Users,
    title: "Brand Partnerships & Collaboration",
    description: "Strategic partnerships that unlock new opportunities."
  },
  {
    icon: TrendingUp,
    title: "Business Growth",
    description: "Growth planning, optimization, and execution support."
  },
  {
    icon: Cloud,
    title: "Cloud Engineering",
    description: "Secure and scalable cloud infrastructure solutions."
  },
  {
    icon: Blocks,
    title: "Blockchain Development",
    description: "Decentralized applications and blockchain integrations."
  },
  {
    icon: FileText,
    title: "Technical Writing",
    description: "Clear, structured documentation and technical content."
  },
  {
    icon: Cpu,
    title: "Internet of Things (IoT)",
    description: "Smart device integrations and IoT ecosystems."
  },
  {
    icon: CheckCircle,
    title: "QA Engineering",
    description: "Quality assurance through rigorous testing processes."
  },
  {
    icon: Flag,
    title: "Brand Execution",
    description: "From strategy to execution across all brand touchpoints."
  },
  {
    icon: Shield,
    title: "Cyber Security",
    description: "Protect systems, data, and infrastructure from threats."
  },
  {
    icon: FlaskConical,
    title: "Research & Development",
    description: "Innovation-driven R&D for future-ready solutions."
  },
  {
    icon: FlaskConical,
    title: "Technology Real Estate & Setup",
    description: "Office spaces, data centers and work space for tech professionals and companies."
  },
  {
    icon: Radio,
    title: "Tech & Business Media",
    description: "Content, storytelling, and media for tech and business brands."
  },
  {
    icon: Users,
    title: "Human Resources & Talent",
    description: "Talent sourcing, workforce management, and HR solutions for growing businesses."
  },
  {
    icon: Brain,
    title: "AI / ML Engineering",
    description: "Artificial intelligence and machine learning solutions that automate, predict, and scale."
  },
  {
    icon: Monitor,
    title: "Computer Hardware",
    description: "Hardware supply, setup, maintenance, and enterprise-grade computer solutions."
  },
  {
    icon: Bot,
    title: "Robotics",
    description: "Robotics systems, automation, and intelligent machine solutions."
  }
];

export default function Services() {
  return (
    <section className="bg-zinc-50 py-20" id="services">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-[#001f4d] text-center">
          Our Services
        </h2>

        <p className="mt-4 text-gray-700 text-center max-w-2xl mx-auto">
          We provide end-to-end technology, business, and brand solutions.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={idx}
                className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-[#001f4d] text-white p-4 rounded-full inline-flex mb-4">
                  <Icon size={28} />
                </div>

                <h3 className="text-lg font-semibold text-[#001f4d] mb-2">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm mb-6">
                  {service.description}
                </p>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-[#001f4d] text-white px-5 py-2 rounded-full text-sm font-medium hover:opacity-90 transition"
                >
                  Get Started
                  <ArrowRight size={16} />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
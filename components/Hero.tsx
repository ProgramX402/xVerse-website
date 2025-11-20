"use client";

import React, { useRef } from "react";
import { motion, Variants, easeOut } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  const animationDone = useRef(false);

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, when: "beforeChildren" },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { duration: 0.6, ease: easeOut }, 
    },
  };

  return (
    <section className="relative h-screen bg-zinc-50" id="hero">
      {/* Background Image */}
      <Image
        src="/hero.jpg"
        alt="Background image illustrating tech innovation"
        fill
        priority
        placeholder="blur"
        blurDataURL="/hero.jpg"
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Hero Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 flex flex-col items-center md:items-start text-center md:text-left"
        variants={container}
        initial="hidden"
        animate={animationDone.current ? "visible" : "visible"}
        onAnimationComplete={() => {
          animationDone.current = true; // mark animation done
        }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-white leading-tight"
          variants={item}
        >
          Welcome to xVerse Platforms
        </motion.h1>

        <motion.p
          className="mt-6 text-lg md:text-xl text-gray-200 max-w-lg"
          variants={item}
        >
          Empowering innovation and connecting ideas with opportunities.
          Explore our services, projects, and initiatives to grow your vision.
        </motion.p>

       <motion.div
  className="mt-16 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
  variants={item}
>
  <a
    href="#services"
    className="px-6 py-3 bg-[#001f4d] text-white font-medium rounded-lg hover:bg-[#003366] transition flex items-center gap-2 justify-center"
  >
    Get Started <ArrowRight size={18} />
  </a>
  <a
    href="#about"
    className="px-6 py-3 border border-white text-white font-medium rounded-lg hover:bg-white hover:text-[#001f4d] transition text-center"
  >
    Learn More
  </a>
</motion.div>

      </motion.div>
    </section>
  );
};

// Memoize Hero to prevent unnecessary remounts
export default React.memo(Hero);
 
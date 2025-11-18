"use client";

import React from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        
        {/* Card */}
        <motion.div
          className="bg-white border border-gray-200 p-10 rounded-2xl shadow-xl text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Heading */}
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-black"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Subscribe to Our Newsletter
          </motion.h2>

          <motion.p
            className="mt-4 text-gray-800 max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Stay updated with our latest projects, innovations, and opportunities
            at xVerse Platforms. Get valuable insights directly to your inbox.
          </motion.p>

          {/* Form */}
          <motion.form
            onSubmit={(e) => e.preventDefault()}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="px-5 py-3 rounded-lg w-full sm:w-80 text-black placeholder-gray-500 outline-none border border-gray-400 focus:border-[#001f4d] focus:ring-2 focus:ring-[#001f4d]"
            />

            <button
              type="submit"
              className="px-6 py-3 bg-[#001f4d] text-white font-semibold rounded-lg hover:bg-[#003366] flex items-center justify-center gap-2 shadow"
            >
              Subscribe <Send size={18} />
            </button>
          </motion.form>
        </motion.div>

      </div>
    </section>
  );
}

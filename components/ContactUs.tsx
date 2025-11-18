"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="bg-white py-20" id="contact">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#001f4d] text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Contact Us
        </motion.h2>

        <motion.p
          className="text-black text-center mt-4 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Have a project in mind or need our services? We'd love to connect with you.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <div className="flex items-center gap-4">
              <div className="p-4 rounded-full bg-[#001f4d] text-white">
                <Mail size={22} />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-[#001f4d]">Email</h3>
                <p className="text-black">support@xverseplatforms.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-4 rounded-full bg-[#001f4d] text-white">
                <Phone size={22} />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-[#001f4d]">Phone</h3>
                <p className="text-black">+234 803 123 4567</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-4 rounded-full bg-[#001f4d] text-white">
                <MapPin size={22} />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-[#001f4d]">Location</h3>
                <p className="text-black">Lagos, Nigeria</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-zinc-50 p-8 rounded-xl shadow-lg space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label className="block text-sm font-medium text-black">Name</label>
              <input
                type="text"
                className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#001f4d] outline-none text-black placeholder:text-gray-700"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black">Email</label>
              <input
                type="email"
                className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#001f4d] outline-none text-black placeholder:text-gray-700"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black">Message</label>
              <textarea
                className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#001f4d] outline-none text-black placeholder:text-gray-700"
                rows={5}
                placeholder="Write your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#001f4d] text-white font-medium rounded-lg hover:bg-[#003366] transition flex items-center justify-center gap-2"
            >
              Send Message <Send size={18} />
            </button>
          </motion.form>

        </div>
      </div>
    </section>
  );
}
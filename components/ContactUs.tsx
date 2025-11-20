"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    // Convert FormData → JSON
    const json = Object.fromEntries(data.entries());

    try {
      const res = await fetch("https://formspree.io/f/xblwzzdl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(json),
      });

      if (res.ok) {
        setStatus({
          type: "success",
          message: "Message sent successfully!",
        });
        form.reset();
      } else {
        setStatus({
          type: "error",
          message: "Something went wrong. Please try again.",
        });
      }
    } catch (err) {
      setStatus({
        type: "error",
        message: "Network error. Please try again.",
      });
    }

    setLoading(false);
  };

  return (
    <section className="bg-white py-20" id="contact">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#001f4d] text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Contact Us
        </motion.h2>

        <motion.p
          className="text-black text-center mt-4 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Have a project in mind or need our services? We'd love to connect with you.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4">
              <div className="p-4 rounded-full bg-[#001f4d] text-white">
                <Mail size={22} />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-[#001f4d]">Email</h3>
                <p className="text-black">princessidebuemi@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-4 rounded-full bg-[#001f4d] text-white">
                <Phone size={22} />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-[#001f4d]">Phone</h3>
                <p className="text-black">+234 912 376 9790</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-4 rounded-full bg-[#001f4d] text-white">
                <MapPin size={22} />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-[#001f4d]">Location</h3>
                <p className="text-black">Jos, Nigeria</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-zinc-50 p-8 rounded-xl shadow-lg space-y-6"
          >
            <div>
              <label className="block text-sm font-medium text-black">Name</label>
              <input
                name="name"
                required
                className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg text-black"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black">Email</label>
              <input
                name="email"
                type="email"
                required
                className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg text-black"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black">Message</label>
              <textarea
                name="message"
                rows={5}
                required
                className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg text-black"
                placeholder="Write your message..."
              ></textarea>
            </div>

            {/* Status Message */}
            {status && (
              <p
                className={`text-center font-medium ${
                  status.type === "success" ? "text-green-600" : "text-red-600"
                }`}
              >
                {status.message}
              </p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-[#001f4d] text-white rounded-lg flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"} <Send size={18} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

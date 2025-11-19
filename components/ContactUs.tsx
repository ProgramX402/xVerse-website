"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: string; message: string } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus({ type: "success", message: "Message sent successfully!" });
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus({ type: "error", message: data.error || "Something went wrong." });
      }
    } catch (error) {
      setStatus({ type: "error", message: "Network error. Try again." });
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
            viewport={{ once: true }}
            className="bg-zinc-50 p-8 rounded-xl shadow-lg space-y-6"
          >
            <div>
              <label className="block text-sm font-medium text-black">Name</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                type="text"
                required
                className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#001f4d] outline-none text-black placeholder:text-gray-700"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black">Email</label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                required
                className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#001f4d] outline-none text-black placeholder:text-gray-700"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#001f4d] outline-none text-black placeholder:text-gray-700"
                rows={5}
                placeholder="Write your message..."
              ></textarea>
            </div>

            {status && (
              <p
                className={`text-center font-medium ${
                  status.type === "success" ? "text-green-600" : "text-red-600"
                }`}
              >
                {status.message}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-[#001f4d] text-white font-medium rounded-lg hover:bg-[#003366] transition flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"} <Send size={18} />
            </button>
          </motion.form>

        </div>
      </div>
    </section>
  );
}

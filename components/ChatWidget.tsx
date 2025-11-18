"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPhone, FiMail, FiMessageCircle, FiX } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  const widgetVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: 20, scale: 0.95 },
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="bg-[#001f4d] text-white p-4 rounded-full shadow-xl hover:bg-[#003366] transition"
      >
        {open ? <FiX size={24} /> : <FiMessageCircle size={24} />}
      </button>

      {/* Widget Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={widgetVariants}
            transition={{ duration: 0.25 }}
            className="mt-4 w-64 bg-white rounded-xl shadow-xl border p-4"
          >
            <h3 className="text-lg font-semibold text-[#001f4d] mb-3">
              Contact Us
            </h3>

            <div className="flex flex-col space-y-3">
              {/* WhatsApp */}
              <a
                href="https://wa.me/2349123769790"
                target="_blank"
                className="flex items-center gap-3 p-3 rounded-lg border hover:bg-gray-50 transition"
              >
                <FaWhatsapp size={22} className="text-green-600" />
                <span className="text-gray-700">Chat on WhatsApp</span>
              </a>

              {/* Phone */}
              <a
                href="tel:+2349123769790"
                className="flex items-center gap-3 p-3 rounded-lg border hover:bg-gray-50 transition"
              >
                <FiPhone size={22} className="text-blue-600" />
                <span className="text-gray-700">Call Us</span>
              </a>

              {/* Email */}
              <a
                href="mailto:princessidebuemi@gmail.com"
                className="flex items-center gap-3 p-3 rounded-lg border hover:bg-gray-50 transition"
              >
                <FiMail size={22} className="text-red-600" />
                <span className="text-gray-700">Send Email</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

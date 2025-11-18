"use client";

import React from "react";
import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#001f4d] text-white pt-16 pb-8">
      <motion.div
        className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* About Us */}
        <div>
          <h3 className="text-xl font-semibold mb-4">About Us</h3>
          <p className="text-gray-200 leading-relaxed">
            xVerse Platforms empowers innovators through technology, consultancy,
            and modern digital solutions. We connect ideas with opportunities
            and help businesses grow.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-gray-200">
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/services" className="hover:text-white">Services</Link></li>
            <li><Link href="/projects" className="hover:text-white">Projects</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-gray-300">
              <Facebook size={22} />
            </Link>
            <Link href="#" className="hover:text-gray-300">
              <Twitter size={22} />
            </Link>
            <Link href="#" className="hover:text-gray-300">
              <Instagram size={22} />
            </Link>
            <Link href="#" className="hover:text-gray-300">
              <Linkedin size={22} />
            </Link>
          </div>
        </div>

        {/* Contact Details */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <ul className="space-y-4 text-gray-200">
            <li className="flex items-center gap-3">
              <Mail size={20} /> support@xverseplatforms.com
            </li>
            <li className="flex items-center gap-3">
              <Phone size={20} /> +234 812 345 6789
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={20} /> Lagos, Nigeria
            </li>
          </ul>
        </div>
      </motion.div>

      {/* Bottom Section */}
      <div className="text-center text-gray-300 mt-12 border-t border-white/20 pt-6">
        © {new Date().getFullYear()} xVerse Platforms. All Rights Reserved.
      </div>
    </footer>
  );
}

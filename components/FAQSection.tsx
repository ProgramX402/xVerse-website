"use client";

import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  {
    q: "What services does xVerse Platforms offer?",
    a: "We offer ERP software, consultancy, web development, training, partnerships, and custom solution development."
  },
  {
    q: "Do you build custom software solutions?",
    a: "Yes. We develop fully tailored solutions for businesses, startups, and enterprise clients."
  },
  {
    q: "How long does it take to build a web application?",
    a: "Project timelines vary depending on features, but most web apps take between 3–8 weeks."
  },
  {
    q: "Do you offer technical training?",
    a: "Yes. We provide specialized training programs for digital skills, software usage, and technical upskilling."
  },
  {
    q: "Can I partner with xVerse Platforms?",
    a: "Yes. We work with organizations, startups, and individuals on joint digital innovation projects."
  },
  {
    q: "How do I contact your team?",
    a: "You can reach us through our contact form, email, or our WhatsApp chat widget."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-black">Frequently Asked Questions</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((item, index) => {
            const open = openIndex === index;

            return (
              <div
                key={index}
                className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm"
              >
                {/* TOP */}
                <button
                  onClick={() => setOpenIndex(open ? null : index)}
                  className="w-full flex justify-between items-center text-left text-black"
                >
                  <span className="font-semibold text-lg">{item.q}</span>

                  {open ? (
                    <FiMinus size={20} className="text-black" />
                  ) : (
                    <FiPlus size={20} className="text-black" />
                  )}
                </button>

                {/* CONTENT */}
                <div
                  className={`transition-all overflow-hidden ${
                    open ? "mt-4 max-h-40" : "max-h-0"
                  }`}
                >
                  <p className="text-black text-sm leading-relaxed">{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

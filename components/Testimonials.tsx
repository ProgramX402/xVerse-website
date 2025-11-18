"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { motion, Variants, Easing } from "framer-motion";

export default function Testimonials() {
  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" as Easing },
    },
  };

  const testimonials = [
    {
      name: "Jane Doe",
      text: "Working with xVerse Platforms has been a game-changer for our startup. Their guidance and technology solutions are top-notch!",
    },
    {
      name: "John Smith",
      text: "The team at xVerse helped us scale our project efficiently. Highly recommend their consultancy and development services.",
    },
    {
      name: "Mary Johnson",
      text: "xVerse Platforms empowers innovators. Their insights and support have been invaluable for our growth.",
    },
  ];

  return (
    <section className="bg-zinc-50 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#001f4d]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          What Our Clients Say
        </motion.h2>

        <motion.div
          className="mt-12"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            loop
          >
            {testimonials.map((t, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  className="bg-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto flex flex-col items-center"
                  variants={item}
                >
                  <p className="text-gray-700 text-lg md:text-xl italic text-center">
                    "{t.text}"
                  </p>
                  <h3 className="mt-6 text-xl md:text-2xl font-semibold text-[#001f4d]">
                    {t.name}
                  </h3>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}

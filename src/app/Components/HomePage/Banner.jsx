"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import '../../Css/swiper.css'
import '../../Css/font.css'

const bannerData = [
  {
    title: "Delight in Fresh and Flavorful Bites",
    description: "Experience a delightful blend of fresh ingredients and bold flavors, Our chefs craft each dish with passion and perfection.",
    img: "/assets/b1.jpg"
  },
  {
    title: "Authentic Taste, Unforgettable Moments",
    description: "From traditional recipes to modern twists, we bring you a best dining experience that’s rich in taste and memories.",
    img: "/assets/b-2.jpg"
  },
  {
    title: "Your Perfect Meal, Just a Click Away",
    description: "Order online and enjoy restaurant-quality meals at home. Fresh, fast, and full of flavor! —satisfaction guaranteed!",
    img: "/assets/b-3.jpg"
  }
];

const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex(0); 
  }, []);

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
    //   navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      className="h-[400px] lg:h-[680px] z-10"
      onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} 
    >
      {bannerData.map((slide, index) => (
        <SwiperSlide key={index} className="relative">
          <div className="absolute w-full h-full bg-gradient-to-l from-transparent to-black bg-opacity-50 text-white">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute inset-0 flex flex-col items-center justify-center text-white text-center"
            >
              <h1 className="text-2xl lg:text-5xl font-semibold font-barlow">{slide.title}</h1>
              <p className="mt-4 text-gray-200 text-lg lg:max-w-xl">{slide.description}</p>
              <button className="mt-6 px-6 py-2 bg-[#FFD71B] text-gray-900 uppercase font-medium">
                Purchase
              </button>
            </motion.div>
          </div>
          <img className="object-cover w-full h-full" src={slide.img} alt={slide.title} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;

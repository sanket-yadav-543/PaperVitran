import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Features from "../components/Features";

const Herosection = () => {
    const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: false,
    arrows: false,
    fade: true,
  };

    const posters = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1650661926447-9efb2610f64c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1173",
      alt: "PaperVitran - Study Smart",
      caption: "Access Semester Papers & Study Material Easily",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
      alt: "Share and Learn",
      caption: "Connecting Seniors & Juniors Through Shared Knowledge",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1606733803396-1d028f0e6f43?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074",
      alt: "Smart Study",
      caption: "Study Smart, Prepare Better with PaperVitran",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1596496638641-e240fd67b4c3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1175",
      alt: "Community",
      caption: "Join the PaperVitran Community of Learners",
    },
  ];
    return (
    <div className="relative w-full h-screen bg-[#0d1117] text-white overflow-hidden">
      {/* 🔹 Border / Frame with subtle glow */}
      <div className="absolute inset-0 border-[2px] md:border-[3px] border-[#4FD1C5]/40 rounded-xl shadow-[0_0_20px_#4FD1C5]/20 animate-pulse-slow pointer-events-none z-10"></div>

      {/* 🔹 Carousel */}
      <Slider {...settings} className="w-full h-full">
        {posters.map((poster) => (
          <div key={poster.id} className="relative w-full h-screen">
            <img
              src={poster.src}
              alt={poster.alt}
              className="w-full h-screen object-cover brightness-75"
            />

            {/* 🔹 Overlay Content */}
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4 md:px-10">
              <motion.h2
                className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-[#4FD1C5] mb-3 md:mb-5 drop-shadow-lg"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                PaperVitran
              </motion.h2>

              <motion.p
                className="text-base sm:text-lg md:text-2xl text-gray-200 max-w-md md:max-w-3xl leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {poster.caption}
              </motion.p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    
  );
}

export default Herosection
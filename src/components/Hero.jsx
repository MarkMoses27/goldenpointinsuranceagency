// components/HeroSection.jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

//images

import medicalImage from '../assets/medical.png';
import motorVehicleImage from '../assets/motor-vehicle.png';
import familyImage from '../assets/family.png';




export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const serviceSlides = [
    {
      image: medicalImage,
      serviceName: "Medical Cover",
      title: "Cover Bora Medical Cover",
      subtitle: "Get An Affordable Hospitalization Medical Insurance Cover",
      cta: "Learn More"
    },
    {
      image: motorVehicleImage,
      serviceName: "Motor Insurance",
      title: "Comprehensive Vehicle Protection",
      subtitle: "Full coverage for cars, motorcycles, and commercial vehicles",
      cta: "Get Quote"
    },
    {
      image: familyImage,
      serviceName: "Life Insurance",
      title: "Secure Your Family's Future",
      subtitle: "Financial protection for your loved ones",
      cta: "Explore Plans"
    },
    {
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80",
      serviceName: "Business Insurance",
      title: "Protect Your Enterprise",
      subtitle: "Comprehensive coverage for businesses of all sizes",
      cta: "Get Protected"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % serviceSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [serviceSlides.length]);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Animated Image Carousel */}
      <div className="absolute inset-0">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <img
              src={serviceSlides[currentSlide].image}
              alt={serviceSlides[currentSlide].title}
              className="w-full h-full object-cover object-left"
            />
            {/* Gold/amber overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-amber-900/20 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-amber-600/10 via-transparent to-transparent"></div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content Overlay - Left Aligned */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            <motion.div
              key={currentSlide + "-content"}
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8 text-white text-left"
            >
              {/* Gold-accented Service Badge */}
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-400/40 to-amber-700/30 backdrop-blur-md rounded-2xl border border-amber-200/40 shadow-lg">
                <span className="text-amber-200 font-semibold text-lg tracking-wider drop-shadow">
                  {serviceSlides[currentSlide].serviceName}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight max-w-xl bg-gradient-to-r from-amber-200 via-white to-yellow-100 bg-clip-text text-transparent drop-shadow-lg">
                {serviceSlides[currentSlide].title}
              </h1>
              
              <h2 className="text-xl md:text-2xl font-light text-amber-100/80 max-w-lg leading-relaxed">
                {serviceSlides[currentSlide].subtitle}
              </h2>
              
              <div className="pt-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-600 hover:to-yellow-500 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-yellow-500/25 flex items-center gap-3"
                >
                  {serviceSlides[currentSlide].cta}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-12 left-0 right-0 z-20">
        <div className="flex justify-center space-x-3">
          {serviceSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                currentSlide === index 
                  ? 'bg-gradient-to-r from-amber-400 to-yellow-400 w-12 h-3 shadow-lg'
                  : 'bg-white/40 hover:bg-white/60 w-3 h-3 hover:scale-125'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

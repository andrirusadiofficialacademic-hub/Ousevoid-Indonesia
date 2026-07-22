import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const BANNERS = [
  {
    id: 1,
    image: "https://i.ibb.co.com/pjhVC7S6/SOUND-Without-20260714-173950-0000.png",
    title: "Ousevoid Audio Revolution",
    subtitle: "Nikmati Kejernihan Audio Nirkabel Kelas Dunia"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=1200&auto=format&fit=crop&q=80",
    title: "Sameday 8 Jam Delivery",
    subtitle: "Pengiriman Super Cepat via Gamoon e-Package Jabodetabek"
  }
];

export const BannerSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % BANNERS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + BANNERS.length) % BANNERS.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % BANNERS.length);
  };

  return (
    <div className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-neutral-200/60 bg-neutral-900 group mb-8">
      {/* Aspect Ratio Container */}
      <div className="relative h-44 sm:h-64 md:h-80 w-full overflow-hidden">
        {BANNERS.map((banner, index) => (
          <div
            key={banner.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={banner.image}
              alt={banner.title}
              className="w-full h-full object-cover"
            />
            {/* Dark gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-4 sm:p-6 md:p-8">
              <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-amber-400 mb-1">
                Official Promotion 2026
              </span>
              <h2 className="text-white text-base sm:text-2xl md:text-3xl font-extrabold leading-tight">
                {banner.title}
              </h2>
              <p className="text-neutral-200 text-xs sm:text-sm font-medium mt-0.5 line-clamp-1">
                {banner.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Nav Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/40 transition-colors opacity-0 group-hover:opacity-100"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/40 transition-colors opacity-0 group-hover:opacity-100"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Pagination Indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {BANNERS.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'w-6 bg-white'
                : 'w-2 bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

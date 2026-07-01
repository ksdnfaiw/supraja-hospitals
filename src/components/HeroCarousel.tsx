"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "World-Class Healthcare Infrastructure",
    subtitle: "Experience precision and safety with our state-of-the-art 200-bed facility.",
    image: "/images/hero_slide_1.png",
    ctaText: "Explore Facilities",
    ctaLink: "/about"
  },
  {
    id: 2,
    title: "Advanced Oncology Care & Beyond",
    subtitle: "Comprehensive cancer treatments with the latest medical technology.",
    image: "/images/hero_slide_2.png",
    ctaText: "View Specialties",
    ctaLink: "/departments"
  },
  {
    id: 3,
    title: "Compassionate Patient Care",
    subtitle: "Dedicated specialists ensuring holistic well-being for you and your family.",
    image: "/images/hero_slide_3.png",
    ctaText: "Find a Doctor",
    ctaLink: "/doctors"
  }
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden bg-clinical-blue group">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div 
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
          {/* Background Image with slight zoom effect */}
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[6000ms] ease-linear"
            style={{ 
              backgroundImage: `url('${slide.image}')`,
              transform: index === currentSlide ? 'scale(1.05)' : 'scale(1)'
            }}
          ></div>
          
          {/* Overlays for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-clinical-blue via-clinical-blue/80 to-transparent mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-clinical-blue via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-black/20"></div>

          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-container-max mx-auto px-4 md:px-gutter w-full relative z-20">
              <div className="max-w-3xl transform transition-all duration-1000 delay-300 translate-y-0 opacity-100">
                <div className={`transition-all duration-1000 ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                  <h1 className="font-display-lg text-4xl md:text-5xl lg:text-7xl text-white mb-6 leading-[1.1] drop-shadow-xl">
                    {slide.title.split(' ').map((word, i) => 
                      // Highlight specific words based on slide
                      (slide.id === 1 && word === "Infrastructure") || 
                      (slide.id === 2 && word === "Oncology") || 
                      (slide.id === 3 && word === "Care") 
                        ? <span key={i} className="text-healing-emerald">{word} </span> 
                        : <span key={i}>{word} </span>
                    )}
                  </h1>
                  <p className="font-body-lg text-lg md:text-xl lg:text-2xl text-white/90 mb-10 max-w-2xl drop-shadow-md">
                    {slide.subtitle}
                  </p>
                  <Link 
                    href={slide.ctaLink}
                    className="inline-flex items-center justify-center bg-healing-emerald text-white px-8 py-4 rounded-xl font-label-lg text-lg shadow-xl hover:bg-white hover:text-clinical-blue transition-all duration-300 hover:-translate-y-1"
                  >
                    {slide.ctaText}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 md:w-14 md:h-14 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 border border-white/20 hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft size={32} />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 md:w-14 md:h-14 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 border border-white/20 hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight size={32} />
      </button>

      {/* Navigation Dots */}
      <div className="absolute bottom-12 md:bottom-24 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-500 rounded-full ${
              index === currentSlide 
                ? 'w-10 h-3 bg-healing-emerald' 
                : 'w-3 h-3 bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants.tsx';

const TestimonialSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 8000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-16">
      <div className="text-center mb-10">
        <h4 className="text-xl font-bold text-white/90">Wall of Love</h4>
        <p className="text-slate-500 text-sm">Feedback from mentors and peers</p>
      </div>

      <div className="relative glass-dark rounded-[2.5rem] border border-white/5 p-8 md:p-12 overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 p-8 opacity-5">
          <Quote size={120} className="text-blue-500" />
        </div>

        <div className="relative z-10">
          <div 
            className={`transition-all duration-500 ease-out transform ${
              isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
            }`}
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full border-4 border-blue-500/20 mb-6 overflow-hidden">
                <img 
                  src={TESTIMONIALS[activeIndex].avatar} 
                  alt={TESTIMONIALS[activeIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xl md:text-2xl text-slate-300 italic mb-8 leading-relaxed font-light">
                "{TESTIMONIALS[activeIndex].content}"
              </p>
              <div>
                <h5 className="text-lg font-bold text-white">{TESTIMONIALS[activeIndex].name}</h5>
                <p className="text-blue-400 text-sm font-medium uppercase tracking-widest">{TESTIMONIALS[activeIndex].role}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4 md:px-6 pointer-events-none">
          <button 
            onClick={prevSlide}
            className="w-12 h-12 rounded-full bg-slate-800/50 border border-white/10 flex items-center justify-center text-white hover:bg-blue-600 transition-all active:scale-95 pointer-events-auto"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={nextSlide}
            className="w-12 h-12 rounded-full bg-slate-800/50 border border-white/10 flex items-center justify-center text-white hover:bg-blue-600 transition-all active:scale-95 pointer-events-auto"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-3 mt-8">
        {TESTIMONIALS.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              if (isAnimating) return;
              setActiveIndex(i);
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              activeIndex === i ? 'w-8 bg-blue-500' : 'w-2 bg-slate-700 hover:bg-slate-600'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Section } from './ui/Section';
import { useLanguage } from '../context/LanguageContext';
const testimonials = [
  {
    name: 'Dr. Jean Mugabo',
    role: 'Professor of Computer Science, ULK',
    content:
      'Brahim consistently demonstrates exceptional problem-solving skills and a deep understanding of software engineering principles. His AI projects show remarkable creativity and technical depth.',
    avatar: 'JM'
  },
  {
    name: 'Sarah Uwase',
    role: 'Tech Lead, Kigali Innovation Hub',
    content:
      "Working with Brahim on the agriculture system was impressive. He brings fresh perspectives and isn't afraid to tackle complex challenges. A true team player with strong technical skills.",
    avatar: 'SU'
  },
  {
    name: 'Patrick Niyonzima',
    role: 'Fellow Student & Project Partner',
    content:
      "Brahim's dedication to learning and building is inspiring. He helped our team win the university hackathon with his innovative approach to data visualization and backend architecture.",
    avatar: 'PN'
  }];

export function Testimonials() {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  return (
    <Section
      id="testimonials"
      className="bg-slate-900 text-white rounded-3xl my-20 relative overflow-hidden">

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl translate-y-1/2 translate-x-1/2" />

      <div className="relative z-10">
        <div className="text-center mb-12">
          <span className="text-cyan-400 font-medium tracking-wider uppercase text-sm mb-2 block">
            {t('testimonials.badge')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">{t('testimonials.title')}</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative min-h-[300px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{
                  opacity: 0,
                  x: 100
                }}
                animate={{
                  opacity: 1,
                  x: 0
                }}
                exit={{
                  opacity: 0,
                  x: -100
                }}
                transition={{
                  duration: 0.3
                }}
                className="w-full">

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
                  <Quote className="w-12 h-12 text-cyan-400 mb-6" />

                  <p className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed">
                    "{testimonials[current].content}"
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg">
                      {testimonials[current].avatar}
                    </div>
                    <div>
                      <p className="font-bold text-white">
                        {testimonials[current].name}
                      </p>
                      <p className="text-slate-400 text-sm">
                        {testimonials[current].role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={prev}
              className="absolute left-0 -translate-x-4 md:-translate-x-12 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-colors border border-white/10"
              aria-label="Previous testimonial">

              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={next}
              className="absolute right-0 translate-x-4 md:translate-x-12 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-colors border border-white/10"
              aria-label="Next testimonial">

              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) =>
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2 h-2 rounded-full transition-all ${index === current ? 'bg-cyan-500 w-8' : 'bg-white/30'}`}
                aria-label={`Go to testimonial ${index + 1}`} />

            )}
          </div>
        </div>
      </div>
    </Section>);

}
import React from 'react';

export function Hero() {
  return (
    <section className="container mx-auto px-4 py-8 md:py-16 text-center">
      <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-white leading-tight">
        Guiding You to Success, One Step at a Time
      </h2>
      <p className="text-base md:text-lg text-purple-200 mb-8 md:mb-12 max-w-2xl mx-auto">
        Your ultimate guide to exploring, planning, and achieving career success
      </p>
    </section>
  );
}
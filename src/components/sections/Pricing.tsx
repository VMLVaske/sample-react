import React from 'react';

export default function Pricing() {
  return (
    <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center py-16 md:py-24">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Unser Pricing</h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">la di da</p>
          <a href="#contact" className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
            Jetzt starten
          </a>
        </div>
      </div>
    </section>
  );
}
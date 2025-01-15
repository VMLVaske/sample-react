import React from 'react';

export default function Hero() {
  return (
    <section className="pt-24 pb-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container-width">
        <div className="text-center py-16 md:py-24">
          <p className="text-xl md:text-2xl mb-4 text-blue-100">Willkommen bei</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">PrintPro</h1>
          <p className="text-xl md:text-2xl mb-6 text-blue-100">Ihre Druckexperten in City City</p>
          <p className="max-w-2xl mx-auto mb-8 text-lg text-blue-50">
            Wir sind spezialisiert auf hochwertige Drucklösungen, die auf Ihre Bedürfnisse zugeschnitten sind.
            Von der Druckvorstufe bis zur Weiterverarbeitung übernehmen wir jeden Schritt mit Präzision und Sorgfalt.
            Entdecken Sie unsere Dienstleistungen oder kontaktieren Sie uns, um Ihre Ideen umzusetzen!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <a
              href="#services"
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
            >
              Unsere Dienstleistungen
            </a>
            <a
              href="#contact"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors"
            >
              Kontakt aufnehmen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import ServiceCard from '../ServiceCard';
import { Printer, Image, FileText, Package } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Unsere Dienstleistungen</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard
            Icon={Printer}
            title="Digitaldruck"
            description="Hochwertiger Digitaldruck für alle Ihre geschäftlichen Anforderungen"
          />
          <ServiceCard
            Icon={Image}
            title="Großformatdruck"
            description="Banner, Poster und Beschilderungen in beeindruckender Qualität"
          />
          <ServiceCard
            Icon={FileText}
            title="Visitenkarten"
            description="Professionelle Visitenkarten, die einen bleibenden Eindruck hinterlassen"
          />
          <ServiceCard
            Icon={Package}
            title="Verpackungen"
            description="Individuelle Verpackungslösungen für Ihre Produkte"
          />
        </div>
      </div>
    </section>
  );
}
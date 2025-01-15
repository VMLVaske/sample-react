import React, { useState, useRef, useEffect } from 'react';
import ServiceCard from '../ServiceCard';
import { Printer, Image, FileText, Package, Book, Palette, Newspaper, Bookmark } from 'lucide-react';

export default function Services() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const services = [
    {
      Icon: Image,
      title: "Druckvorstufe",
      subtitle: "Die Basis für perfekte Druckergebnisse",
      preDescription: "Unser erfahrenes Team sorgt dafür, dass Ihre Dateien druckfertig sind. Wir bieten:",
      bulletPoints: [
        "Satzherstellung und Layoutgestaltung",
        "Farbproofs für präzise Ergebnisse",
        "Datenaufbereitung und Fehlerprüfung"
      ],
      postDescription: "Liefern Sie Ihre Dateien per E-Mail oder USB-Stick. Wir übernehmen die technischen Details, damit Sie sich auf Ihre Vision konzentrieren können."
    },
    {
      Icon: Printer,
      title: "Druck",
      subtitle: "Digital- und Offsetdruck",
      preDescription: "Von kleinen bis großen Auflagen bieten wir:",
      bulletPoints: [
        "Digitaldruck für Mengen von 60 g/m² bis 300 g/m²",
        "Offsetdruck für größere Auflagen mit höchster Qualität",
      ],
      postDescription: "Perfekt für Flyer, Visitenkarten, Broschüren und mehr. Auf Wunsch erstellen wir Ihnen einen farbverbindlichen Proof."
    },
    {
      Icon: Book,
      title: "Buchdruck",
      subtitle: "Spezialdruck mit Buchdruck",
      preDescription: "Heben Sie Ihre Druckprodukte mit unseren Heidelberger Druckmaschinen hervor. Wir bieten:",
      bulletPoints: [
        "Prägen, Stanzen und Nummerieren für Karten, Tickets und mehr",
        "Präzisionsarbeit für individuelle Projekte wie Mappen und Broschüren",
      ],
      postDescription: ""
    },
    {
      Icon: Package,
      title: "Weiterverarbeitung",
      subtitle: "Weiterverarbeitung für ein perfektes Endprodukt",
      preDescription: "Unsere Weiterverarbeitungsservices umfassen:",
      bulletPoints: [
        "Schneiden, Falzen (z. B. Wickelfalz, Kreuzfalz), Binden (Klebe-, Faden- oder Drahtheftung)",
        "Bohren, Kleben und Verpacken",
        "Individuelle Lösungen für Halbfertigprodukte, Lagerung und Versand"
      ],
      postDescription: ""
    }
  ];

  const scrollToIndex = (index: number) => {
    if (carouselRef.current) {
      const newIndex = Math.max(0, Math.min(index, services.length - 1));
      setCurrentIndex(newIndex);
      const cardWidth = carouselRef.current.offsetWidth / 3;
      carouselRef.current.scrollTo({
        left: newIndex * cardWidth,
        behavior: 'smooth'
      });
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0));
    setScrollLeft(carouselRef.current?.scrollLeft || 0);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    if (carouselRef.current) {
      const x = e.pageX - (carouselRef.current.offsetLeft || 0);
      const walk = (x - startX) * 2;
      carouselRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (carouselRef.current) {
        const cardWidth = carouselRef.current.offsetWidth / 3;
        carouselRef.current.scrollLeft = currentIndex * cardWidth;
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentIndex]);

  return (
    <section id="services" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container-width">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Unsere Dienstleistungen</h2>

          <div className="relative">
            <div
              ref={carouselRef}
              className="overflow-x-hidden cursor-grab active:cursor-grabbing"
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onMouseMove={handleMouseMove}
            >
              <div className="flex transition-transform duration-300 gap-6 pb-4">
                {services.map((service, index) => (
                  <div key={index} className="flex-none w-full md:w-1/2 lg:w-1/3">
                    <ServiceCard
                      Icon={service.Icon}
                      title={service.title}
                      subtitle={service.subtitle}
                      preDescription={service.preDescription}
                      bulletPoints={service.bulletPoints}
                      postDescription={service.postDescription}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-6 gap-2">
              {Array.from({ length: Math.ceil(services.length / 3) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToIndex(index * 3)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${Math.floor(currentIndex / 3) === index
                    ? 'bg-blue-600'
                    : 'bg-gray-300 hover:bg-blue-400'
                    }`}
                  aria-label={`Gehe zu Slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => scrollToIndex(currentIndex - 3)}
              className={`absolute top-1/2 -translate-y-1/2 -left-4 w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-lg text-blue-600 transition-opacity ${currentIndex === 0 ? 'opacity-0' : 'opacity-100'
                }`}
              disabled={currentIndex === 0}
              aria-label="Vorherige Dienstleistungen"
            >
              ←
            </button>
            <button
              onClick={() => scrollToIndex(currentIndex + 3)}
              className={`absolute top-1/2 -translate-y-1/2 -right-4 w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-lg text-blue-600 transition-opacity ${currentIndex >= services.length - 3 ? 'opacity-0' : 'opacity-100'
                }`}
              disabled={currentIndex >= services.length - 3}
              aria-label="Nächste Dienstleistungen"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
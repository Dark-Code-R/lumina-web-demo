import React, { useState, useRef } from "react";

// Importar las imágenes desde assets
import evaluacionFisioterapeutica from "../assets/promociones/evaluacion-fisioterapeutica.webp";
import rehabilitacionPaquete from "../assets/promociones/rehabilitacion-paquete.webp";
import terapiaRespiratoria from "../assets/promociones/terapia-respiratoria.webp";
import consultaMedica from "../assets/promociones/consulta-medica.webp";
import rehabilitacionDeportiva from "../assets/promociones/rehabilitacion-deportiva.webp";

const promotions = [
  {
    id: 1,
    title: "Evaluación Fisioterapéutica",
    description: "50% de descuento en tu primera consulta de evaluación",
    image: evaluacionFisioterapeutica,
    validUntil: "30 de Junio, 2025",
  },
  {
    id: 2,
    title: "Paquete de Rehabilitación",
    description: "10 sesiones de fisioterapia con 20% de descuento",
    image: rehabilitacionPaquete,
    validUntil: "31 de Mayo, 2025",
  },
  {
    id: 3,
    title: "Terapia Respiratoria",
    description: "Sesión de evaluación gratuita con la compra de un paquete",
    image: terapiaRespiratoria,
    validUntil: "15 de Junio, 2025",
  },
  {
    id: 4,
    title: "Consulta Médica General",
    description: "30% de descuento en consultas para adultos mayores",
    image: consultaMedica,
    validUntil: "30 de Junio, 2025",
  },
  {
    id: 5,
    title: "Rehabilitación Deportiva",
    description: "Evaluación especializada con 25% de descuento para deportistas",
    image: rehabilitacionDeportiva,
    validUntil: "31 de Mayo, 2025",
  },
];

function PromotionsSection() {
  const scrollRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const scroll = (direction) => {
    if (!scrollRef.current) return;

    const { scrollLeft, clientWidth } = scrollRef.current;
    const scrollTo = direction === "left" ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;

    scrollRef.current.scrollTo({
      left: scrollTo,
      behavior: "smooth",
    });

    setScrollPosition(scrollTo);
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    setScrollPosition(scrollRef.current.scrollLeft);
  };

  return (
    <section id="promotions" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-700">Promociones Especiales</h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto mt-4"></div>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Aprovecha nuestras ofertas exclusivas y cuida de tu salud a precios accesibles
          </p>
        </div>

        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-2 rounded-full shadow-md text-gray-700 hover:text-teal-500 transition-colors"
            aria-label="Scroll left"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 py-4 px-2 hide-scrollbar snap-x"
            onScroll={handleScroll}
          >
            {promotions.map((promo) => (
              <div
                key={promo.id}
                className="flex-none w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-start"
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full border border-gray-100">
                  <div className="relative h-48">
                    <img 
                      src={promo.image} 
                      alt={promo.title} 
                      className="absolute inset-0 w-full h-full object-cover" 
                    />
                    <div className="absolute top-4 right-4 bg-teal-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                      Hasta: {promo.validUntil}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-700 mb-2">{promo.title}</h3>
                    <p className="text-gray-500 mb-4">{promo.description}</p>
                    <a
                      href="#contact"
                      className="inline-block text-teal-500 hover:text-teal-600 font-medium transition-colors"
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      Reservar ahora →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-2 rounded-full shadow-md text-gray-700 hover:text-teal-500 transition-colors"
            aria-label="Scroll right"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default PromotionsSection;
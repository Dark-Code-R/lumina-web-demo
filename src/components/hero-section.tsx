import React from "react";
// Importar la imagen desde assets
import heroImage from "../assets/hero_lumina_corps.webp";

function HeroSection() {
  const handleClick = (e, targetId) => {
    e.preventDefault();
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative pt-20 md:pt-0">
      <div className="relative h-[70vh] sm:h-[75vh] md:h-[80vh] min-h-[450px] md:min-h-[600px] max-h-[900px] w-full overflow-hidden">
        {/* Contenedor de la imagen con mejor manejo responsivo */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Lumina Corps Bolivia"
            className="w-full h-full object-cover brightness-90"
            loading="eager"
            style={{
              // Ajustar el foco de la imagen según el tamaño de pantalla
              objectPosition: 'center center',
            }}
          />
        </div>
        
        {/* Gradiente adaptativo según el tamaño de pantalla */}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-800/80 via-teal-900/60 to-transparent" />
        
        {/* Overlay para mejorar legibilidad del texto */}
        <div className="absolute inset-0 bg-black/15" />

        {/* Contenido principal con mejor posicionamiento */}
        <div className="absolute inset-0 flex flex-col justify-center px-4 md:px-10 lg:px-20 z-10">
          <div className="max-w-2xl text-white animate-slide-up">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 drop-shadow-lg">
              Lumina Corps Bolivia
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 text-white/90 drop-shadow-md">
              Cuidamos tu salud con profesionalismo y dedicación
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="#services"
                className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-2.5 sm:py-3 px-5 sm:px-6 rounded-md transition-all duration-300 text-center shadow-md hover:shadow-lg hover:-translate-y-1 text-sm sm:text-base"
                onClick={(e) => handleClick(e, "services")}
              >
                Nuestros Servicios
              </a>
              <a
                href="#contact"
                className="bg-white hover:bg-gray-50 text-teal-500 font-medium py-2.5 sm:py-3 px-5 sm:px-6 rounded-md transition-all duration-300 text-center shadow-md hover:shadow-lg hover:-translate-y-1 text-sm sm:text-base"
                onClick={(e) => handleClick(e, "contact")}
              >
                Contáctanos
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
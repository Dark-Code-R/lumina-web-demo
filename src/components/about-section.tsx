import React from 'react';
// Importar la imagen desde assets
import fotoPersonal from "../assets/foto-personal.webp";

function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-700">Sobre Nosotros</h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto mt-4"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-10">
          {/* Contenedor de imagen responsivo */}
          <div className="md:w-1/2 w-full relative">
            <div className="relative w-full rounded-lg overflow-hidden shadow-lg">
              {/* Contenedor con relación de aspecto responsiva */}
              <div className="aspect-[4/3] sm:aspect-square md:aspect-[4/3] w-full">
                <img
                  src={fotoPersonal}
                  alt="Equipo médico de Lumina Corps Bolivia"
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
            {/* Badge de experiencia responsivo */}
            <div className="absolute -bottom-4 sm:-bottom-6 -right-2 sm:-right-6 bg-teal-500 text-white p-3 sm:p-4 rounded-lg shadow-lg hidden sm:block transform transition-transform hover:scale-105">
              <p className="font-bold text-lg sm:text-xl">+10 años</p>
              <p className="text-sm sm:text-base">de experiencia</p>
            </div>
          </div>

          <div className="md:w-1/2 w-full mt-10 md:mt-0">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-700 mb-4">Comprometidos con tu bienestar</h3>
            <p className="text-gray-500 mb-6">
              En Lumina Corps Bolivia, nos dedicamos a proporcionar atención médica de alta calidad con un enfoque
              personalizado. Nuestro equipo de profesionales altamente calificados trabaja con pasión y dedicación para
              mejorar la salud y calidad de vida de nuestros pacientes.
            </p>
            <p className="text-gray-500 mb-6">
              Contamos con instalaciones modernas y equipos de última tecnología para ofrecer diagnósticos precisos y
              tratamientos efectivos. Nos enorgullece brindar un ambiente acogedor donde cada paciente se siente
              valorado y atendido con el mayor respeto y profesionalismo.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="flex items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-50 rounded-full flex items-center justify-center mr-3 sm:mr-4 transition-transform hover:scale-110">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-teal-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Profesionales certificados</h4>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-50 rounded-full flex items-center justify-center mr-3 sm:mr-4 transition-transform hover:scale-110">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-teal-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Tecnología avanzada</h4>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-50 rounded-full flex items-center justify-center mr-3 sm:mr-4 transition-transform hover:scale-110">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-teal-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Atención oportuna</h4>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-50 rounded-full flex items-center justify-center mr-3 sm:mr-4 transition-transform hover:scale-110">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-teal-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Trato personalizado</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
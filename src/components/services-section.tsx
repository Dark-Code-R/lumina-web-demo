import React from "react";

// Componentes de iconos como SVG estándar
const ActivityIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-10 h-10 text-teal-500" // Cambiado de text-teal-600 a text-teal-500 para un color más claro
  >
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
  </svg>
);

const StethoscopeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-10 h-10 text-teal-500" // Cambiado a text-teal-500
  >
    <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"></path>
    <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"></path>
    <circle cx="20" cy="10" r="2"></circle>
  </svg>
);

const DumbbellIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-10 h-10 text-teal-500" // Cambiado a text-teal-500
  >
    <path d="m6.5 6.5 11 11"></path>
    <path d="m21 21-1-1"></path>
    <path d="m3 3 1 1"></path>
    <path d="m18 22 4-4"></path>
    <path d="m2 6 4-4"></path>
    <path d="m3 10 7-7"></path>
    <path d="m14 21 7-7"></path>
  </svg>
);

const ZapIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-10 h-10 text-teal-500" // Cambiado a text-teal-500
  >
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
  </svg>
);

const ThermometerIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-10 h-10 text-teal-500" // Cambiado a text-teal-500
  >
    <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"></path>
  </svg>
);

const HeartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-10 h-10 text-teal-500" // Cambiado a text-teal-500
  >
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
  </svg>
);

const services = [
  {
    icon: <ActivityIcon />,
    title: "Fisioterapia",
    description: "Tratamientos personalizados para recuperación de lesiones y mejora de la movilidad.",
  },
  {
    icon: <StethoscopeIcon />,
    title: "Medicina General",
    description: "Consultas médicas para diagnóstico y tratamiento de diversas condiciones de salud.",
  },
  {
    icon: <DumbbellIcon />,
    title: "Rehabilitación Deportiva",
    description: "Programas especializados para deportistas que buscan recuperarse de lesiones.",
  },
  {
    icon: <ZapIcon />,
    title: "Electroterapia",
    description: "Técnicas avanzadas de estimulación eléctrica para aliviar el dolor y promover la curación.",
  },
  {
    icon: <ThermometerIcon />,
    title: "Termoterapia",
    description: "Aplicación terapéutica de calor para mejorar la circulación y reducir el dolor muscular.",
  },
  {
    icon: <HeartIcon />,
    title: "Terapia Respiratoria",
    description: "Tratamientos para mejorar la función pulmonar y la capacidad respiratoria.",
  },
];

function ServicesSection() {
  return (
    // Añadido bg-white para forzar fondo blanco
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          {/* Cambiado de text-gray-800 a text-gray-700 para un color más claro */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-700">Nuestros Servicios</h2>
          {/* Cambiado de bg-teal-600 a bg-teal-500 para un color más claro */}
          <div className="w-20 h-1 bg-teal-500 mx-auto mt-4"></div>
          {/* Cambiado de text-gray-600 a text-gray-500 para un color más claro */}
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Ofrecemos una amplia gama de servicios médicos y terapéuticos para cuidar de tu salud integral
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              // Añadido !bg-white para forzar fondo blanco y shadow-lg para más contraste
              className="!bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="mb-4">{service.icon}</div>
              {/* Cambiado de text-gray-800 a text-gray-700 para un color más claro */}
              <h3 className="text-xl font-bold text-gray-700 mb-2">{service.title}</h3>
              {/* Cambiado de text-gray-600 a text-gray-500 para un color más claro */}
              <p className="text-gray-500">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            // Cambiado de bg-teal-600 a bg-teal-500 y de hover:bg-teal-700 a hover:bg-teal-600
            className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-medium py-3 px-8 rounded-md transition-colors shadow-md"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Agenda una Consulta
          </a>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
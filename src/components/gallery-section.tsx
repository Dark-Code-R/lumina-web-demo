import React, { useState } from "react";

// Importar las imágenes desde assets
import equiposFisioterapia from "../assets/gallery/equipos-fisioterapia.webp";
import instalacionesConsultorio from "../assets/gallery/instalaciones-consultorio.webp";
import instalacionesRecepcion from "../assets/gallery/instalaciones-recepcion.webp";
import instalacionesSalaEspera from "../assets/gallery/instalaciones-sala-espera.webp";
import tratamientosFisioterapia from "../assets/gallery/tratamientos-fisioterapia.webp";
import tratamientosMasaje from "../assets/gallery/tratamientos-masaje.webp";

const galleryImages = [
  {
    id: 1,
    src: instalacionesRecepcion,
    alt: "Recepción de Lumina Corps Bolivia",
    category: "Instalaciones",
    description: "Moderna área de recepción diseñada para dar la bienvenida a nuestros pacientes en un ambiente acogedor."
  },
  {
    id: 2,
    src: instalacionesSalaEspera,
    alt: "Sala de espera",
    category: "Instalaciones",
    description: "Cómoda sala de espera con ambiente relajante para nuestros pacientes antes de su consulta."
  },
  {
    id: 3,
    src: equiposFisioterapia,
    alt: "Equipo médico especializado",
    category: "Equipos",
    description: "Tecnología de vanguardia para tratamientos de fisioterapia y rehabilitación física."
  },
  {
    id: 4,
    src: tratamientosFisioterapia,
    alt: "Sesión de rehabilitación",
    category: "Tratamientos",
    description: "Nuestros especialistas guían cada sesión de rehabilitación con atención personalizada."
  },
  {
    id: 5,
    src: instalacionesConsultorio,
    alt: "Consultorio médico",
    category: "Instalaciones",
    description: "Consultorios equipados con todo lo necesario para una atención médica de calidad."
  },
  {
    id: 6,
    src: tratamientosMasaje,
    alt: "Terapia de masaje",
    category: "Tratamientos",
    description: "Sesiones de masaje terapéutico para aliviar tensiones y mejorar la recuperación muscular."
  }
];

function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState(null);

  const filteredImages = filter ? galleryImages.filter((img) => img.category === filter) : galleryImages;

  const categories = Array.from(new Set(galleryImages.map((img) => img.category)));

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-700">Galería</h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto mt-4"></div>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Conoce nuestras instalaciones, equipos y servicios a través de nuestra galería de imágenes
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-2 mb-8">
          <button
            onClick={() => setFilter(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === null 
                ? "bg-teal-500 text-white" 
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Todos
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === category 
                  ? "bg-teal-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group shadow-md hover:shadow-lg transition-all duration-300"
              onClick={() => setSelectedImage(image.id)}
            >
              <div className="w-full h-full relative bg-white">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white text-center font-medium px-4 drop-shadow-md">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox mejorado con descripción */}
        {selectedImage !== null && (
          <div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative w-full max-w-4xl">
              <button
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-8 h-8"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>

              <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
                <div className="h-[60vh]">
                  {galleryImages.find((img) => img.id === selectedImage) && (
                    <img
                      src={galleryImages.find((img) => img.id === selectedImage).src}
                      alt={galleryImages.find((img) => img.id === selectedImage).alt}
                      className="object-contain w-full h-full"
                    />
                  )}
                </div>
                
                {/* Descripción de la imagen */}
                <div className="p-4 bg-white">
                  <h3 className="text-xl font-bold text-gray-700 mb-2">
                    {galleryImages.find((img) => img.id === selectedImage)?.alt}
                  </h3>
                  <p className="text-gray-500">
                    {galleryImages.find((img) => img.id === selectedImage)?.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default GallerySection;
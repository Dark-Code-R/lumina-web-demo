import React, { useState, useEffect } from "react";
// Importa el logo desde la carpeta assets
import logoImage from "../assets/lumina_corps_logo.webp";
// Importa los estilos para el logo
import "../components/styles/logo.css";

const navLinks = [
  { name: "Inicio", href: "#home" },
  { name: "Nosotros", href: "#about" },
  { name: "Servicios", href: "#services" },
  { name: "Promociones", href: "#promotions" },
  { name: "Galería", href: "#gallery" },
  { name: "Contáctanos", href: "#contact" },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLogoModal, setShowLogoModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    if (!href) return;

    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    // Mostrar el modal con el logo ampliado
    setShowLogoModal(true);
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    // Scroll to top smoothly
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    setIsOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md py-2" : "bg-white/80 backdrop-blur-sm py-4"
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            {/* Logo clickeable que muestra el modal */}
            <div 
              className="logo-container cursor-pointer" 
              onClick={handleLogoClick}
              title="Click para ver el logo"
            >
              <img
                src={logoImage}
                alt="Lumina Corps Bolivia Logo"
                className="logo-image"
              />
            </div>
            
            {/* Texto clickeable que lleva al inicio */}
            <a href="#home" className="flex items-center" onClick={handleHomeClick}>
              <span className="logo-text">Lumina Corps Bolivia</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-teal-600 font-medium transition-colors"
                onClick={handleClick}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Navigation Toggle */}
          <button className="md:hidden text-gray-700 hover:text-teal-600" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              /* Icono X para cerrar */
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
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              /* Icono de menú hamburguesa */
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
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-md">
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-teal-600 font-medium transition-colors"
                  onClick={handleClick}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Modal para mostrar el logo ampliado */}
      {showLogoModal && (
        <div className="fixed inset-0 bg-black/70 z-[100] flex items-center justify-center p-4" onClick={() => setShowLogoModal(false)}>
          <div 
            className="bg-white rounded-lg p-4 max-w-md w-full shadow-2xl transform transition-all"
            onClick={(e) => e.stopPropagation()} // Evita que el clic se propague al fondo
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-800">Logo de Lumina Corps Bolivia</h3>
              <button 
                className="text-gray-500 hover:text-gray-700"
                onClick={() => setShowLogoModal(false)}
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
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <div className="flex justify-center">
              <img
                src={logoImage}
                alt="Lumina Corps Bolivia Logo"
                className="max-w-full h-auto rounded-lg shadow-md"
                style={{ maxHeight: '300px' }}
              />
            </div>
            <div className="mt-4 text-center text-gray-600">
              <p>Logo oficial de Lumina Corps Bolivia</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
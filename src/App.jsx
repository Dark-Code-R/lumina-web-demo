import Header from "./components/header";
import HeroSection from "./components/hero-section";
import AboutSection from "./components/about-section";
import ServicesSection from "./components/services-section";
import PromotionsSection from "./components/promotions-section";
import GallerySection from "./components/gallery-section";
import ContactSection from "./components/contact-section";
import Footer from "./components/footer";
import WhatsAppButton from "./components/whatsapp-button";

function App() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PromotionsSection />
      <GallerySection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}

export default App;

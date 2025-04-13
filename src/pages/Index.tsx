
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CourseSection from "../components/CourseSection";
import ColorSection from "../components/ColorSection";
import TypeSection from "../components/TypeSection";
import KeyFeaturesSection from "../components/KeyFeaturesSection";
import QuoteSection from "../components/QuoteSection";
import Footer from "../components/Footer";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        <div className="bg-white py-8 px-6">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold text-agencia-darkBlue">Plataforma educativa agencia·i</h2>
              <p className="text-gray-500">Descubre nuestros cursos y recursos para profesionales</p>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="bg-white">Masterclass</Badge>
              <Badge variant="outline" className="bg-white">Workshops</Badge>
              <Badge variant="outline" className="bg-white">Recursos</Badge>
              <Badge variant="outline" className="bg-white">Comunidad</Badge>
            </div>
          </div>
        </div>
        
        <CourseSection />
        <KeyFeaturesSection />
        <QuoteSection />
        <ColorSection />
        <TypeSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;

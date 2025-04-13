
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="hero-gradient text-white min-h-[500px] flex items-center">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-3xl animate-fade-in">
          <div className="code-tag text-xs mb-2">&lt;/&gt;</div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            agencia<span className="text-agencia-red">·i</span>
          </h1>
          
          <div className="flex flex-wrap gap-8 mb-10 text-sm md:text-base">
            <div className="flex items-center">
              <span className="text-agencia-red mr-2">/</span>
              <span>inspirar</span>
            </div>
            <div className="flex items-center">
              <span className="text-agencia-red mr-2">/</span>
              <span>innovar</span>
            </div>
            <div className="flex items-center">
              <span className="text-agencia-red mr-2">/</span>
              <span>impactar</span>
            </div>
          </div>
          
          <p className="text-xl md:text-2xl max-w-2xl mb-8">
            <span className="text-agencia-red">&lt;/inspirar&gt;</span>
            <span className="block my-3">
              Inspiramos nuevas soluciones para 
              <em className="font-medium not-italic"> transformar</em> el mundo.
            </span>
          </p>
          
          <div className="text-sm opacity-80 max-w-lg">
            Creemos en la fuerza de las pequeñas acciones y su chispa
            disruptiva para motorizar grandes cambios.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

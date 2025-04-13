
import { useState } from "react";
import { Code, Lightbulb, Target } from "lucide-react";

const KeyFeaturesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const features = [
    {
      title: "/inspirar",
      color: "bg-agencia-red",
      hoverColor: "group-hover:bg-agencia-red/90",
      textColor: "text-white",
      description: "Inspiramos nuevas soluciones para transformar sectores tradicionales.",
      longDescription: "Buscamos despertar la creatividad y abrir horizontes en cada proyecto, impulsando ideas innovadoras que desafíen lo convencional.",
      icon: <Lightbulb className="mb-6 opacity-80" size={32} />
    },
    {
      title: "/innovar",
      color: "bg-agencia-blue",
      hoverColor: "group-hover:bg-agencia-blue/90",
      textColor: "text-white",
      description: "Creamos tecnologías disruptivas que cambian paradigmas establecidos.",
      longDescription: "Desarrollamos soluciones tecnológicas que rompen con los esquemas tradicionales y abren nuevas posibilidades en el mercado digital.",
      icon: <Code className="mb-6 opacity-80" size={32} />
    },
    {
      title: "/impactar",
      color: "bg-agencia-white",
      hoverColor: "group-hover:bg-gray-100",
      textColor: "text-agencia-darkBlue",
      description: "Dejamos huella con soluciones que generan cambios significativos.",
      longDescription: "Nuestras soluciones buscan generar un impacto real y medible, transformando la manera en que personas y organizaciones interactúan.",
      icon: <Target className="mb-6 opacity-80" size={32} />
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-agencia-darkBlue mb-2 px-6">Nuestros pilares</h2>
        <p className="text-gray-600 max-w-2xl mb-12 px-6">
          En agencia·i nos basamos en tres conceptos fundamentales que definen nuestro enfoque y metodología.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`${feature.color} ${feature.textColor} group transition-all duration-300 cursor-pointer relative overflow-hidden`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`p-10 text-center h-80 flex flex-col items-center justify-center transition-all duration-500 ${hoveredIndex === index ? 'opacity-0' : 'opacity-100'}`}>
                {feature.icon}
                <h3 className="text-xl font-bold mb-6 code-tag">{feature.title}</h3>
                <p className="text-sm opacity-80">{feature.description}</p>
              </div>
              
              <div 
                className={`absolute inset-0 p-10 flex flex-col items-center justify-center transition-all duration-500 ${feature.color} ${hoveredIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
                  <h3 className="text-xl font-bold mb-6 code-tag">{feature.title}</h3>
                  <p className="opacity-90 leading-relaxed">{feature.longDescription}</p>
                  <div className="mt-6 inline-flex items-center">
                    <span className="code-tag text-xs mr-2">&lt;/&gt;</span>
                    <span>Ver más</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeaturesSection;


import { Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const QuoteSection = () => {
  return (
    <section className="bg-agencia-red text-white py-20 px-6">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto relative">
          <div className="absolute -top-10 left-0 opacity-20">
            <Quote size={80} />
          </div>
          
          <div className="text-sm mb-4 code-tag">[agencia-i]</div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-10 relative z-10">
            El liderazgo no se trata de ser el mejor, sino de hacer que tu equipo alcance su máximo potencial.
          </h2>
          
          <div className="flex items-center mt-12">
            <Avatar className="h-12 w-12 border-2 border-white/20 mr-4">
              <AvatarImage src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80" alt="Federico Lixklett" />
              <AvatarFallback className="bg-white/20 text-white">FL</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">Federico Lixklett</p>
              <p className="text-sm opacity-70">Director de Proyectos en agencia·i</p>
            </div>
          </div>
          
          <div className="mt-10 flex items-center">
            <div className="h-px bg-white/20 flex-grow mr-4"></div>
            <div className="text-sm opacity-70 code-tag">[ liderar | innovar | impactar ]</div>
            <div className="h-px bg-white/20 flex-grow ml-4"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;

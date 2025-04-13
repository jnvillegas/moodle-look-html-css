
import { Quote } from "lucide-react";

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
            Es momento de hackear lo establecido y dejar una huella que nos trascienda.
          </h2>
          
          <div className="flex items-center mt-12">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-4">
              <span className="text-2xl font-bold">F</span>
            </div>
            <div>
              <p className="font-medium">Federico Lixklett</p>
              <p className="text-sm opacity-70">Fundador de agencia·i</p>
            </div>
          </div>
          
          <div className="mt-10 flex items-center">
            <div className="h-px bg-white/20 flex-grow mr-4"></div>
            <div className="text-sm opacity-70 code-tag">[ innovar | inspirar | impactar ]</div>
            <div className="h-px bg-white/20 flex-grow ml-4"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;

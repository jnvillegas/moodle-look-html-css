
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const ExecutiveSlider = () => {
  const executives = [
    {
      imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      name: "Carlos Ramírez",
      position: "Director de Operaciones"
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      name: "Ana Márquez",
      position: "CEO y Fundadora"
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      name: "Javier Mendoza",
      position: "Project Manager Senior"
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      name: "Daniela Ortiz",
      position: "Directora de Innovación"
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1580518324671-c2f0833a3af3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      name: "Luis Estrada",
      position: "Product Owner"
    }
  ];

  return (
    <section className="py-16 bg-agencia-blue/90 text-white">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-10">
          <div>
            <div className="text-sm mb-2 code-tag">[equipo-profesional]</div>
            <h2 className="text-3xl font-bold">Nuestros profesionales</h2>
            <p className="text-gray-200 mt-2">Expertos en gestión de proyectos y metodologías ágiles</p>
          </div>
        </div>

        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {executives.map((executive, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="bg-transparent border border-white/10">
                  <CardContent className="p-0">
                    <div className="aspect-[4/5] relative overflow-hidden group">
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                        style={{ backgroundImage: `url(${executive.imageUrl})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-agencia-darkBlue/90 to-transparent opacity-80" />
                      <div className="absolute bottom-0 left-0 p-4 w-full">
                        <h3 className="text-lg font-bold text-white">{executive.name}</h3>
                        <p className="text-sm text-gray-200">{executive.position}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 bg-white/10 hover:bg-white/20 border-none text-white" />
          <CarouselNext className="right-2 bg-white/10 hover:bg-white/20 border-none text-white" />
        </Carousel>
      </div>
    </section>
  );
};

export default ExecutiveSlider;

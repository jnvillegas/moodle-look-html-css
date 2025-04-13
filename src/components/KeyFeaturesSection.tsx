
const KeyFeaturesSection = () => {
  const features = [
    {
      title: "/inspirar",
      color: "bg-agencia-red",
      textColor: "text-white",
      description: "Inspiramos nuevas soluciones para transformar sectores tradicionales."
    },
    {
      title: "/innovar",
      color: "bg-agencia-blue",
      textColor: "text-white",
      description: "Creamos tecnologías disruptivas que cambian paradigmas establecidos."
    },
    {
      title: "/impactar",
      color: "bg-agencia-white",
      textColor: "text-agencia-darkBlue",
      description: "Dejamos huella con soluciones que generan cambios significativos."
    }
  ];

  return (
    <section className="py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`${feature.color} ${feature.textColor} h-80 flex items-center justify-center`}
            >
              <div className="p-10 text-center">
                <h3 className="text-xl font-bold mb-6 code-tag">{feature.title}</h3>
                <p className="text-sm opacity-80">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeaturesSection;

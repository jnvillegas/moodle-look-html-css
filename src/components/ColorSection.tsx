
const ColorSection = () => {
  const colors = [
    { name: "#060816", description: "Dark Blue", bg: "bg-agencia-darkBlue" },
    { name: "#08284F", description: "Blue", bg: "bg-agencia-blue" },
    { name: "#FA3B32", description: "Red", bg: "bg-agencia-red" },
    { name: "#F9EFEF", description: "White", bg: "bg-agencia-white" }
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-agencia-darkBlue mb-2">Paleta cromática</h2>
        <p className="text-gray-600 max-w-2xl mb-10">
          La paleta de nuestra marca refleja nuestro tono y personalidad a través de
          los colores, su saturación y su combinación de uso consistente y coherente
          fortalece la identidad de la marca y expande nuestras posibilidades.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {colors.map((color, index) => (
            <div key={index} className="rounded-lg overflow-hidden">
              <div className={`${color.bg} h-40 flex items-end p-4`}>
                <span className={`code-tag ${index === 3 ? 'text-agencia-darkBlue' : 'text-white'}`}>
                  {color.name}
                </span>
              </div>
              <div className="bg-gray-100 p-4">
                <p className="font-medium text-agencia-darkBlue">{color.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ColorSection;

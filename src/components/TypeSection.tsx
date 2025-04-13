
const TypeSection = () => {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-agencia-darkBlue mb-2">Tipografía</h2>
        <p className="text-gray-600 max-w-2xl mb-10">
          La tipografía juega un rol fundamental en la expresión visual de nuestra
          marca, reflejando nuestro tono y personalidad a través de las fuentes, su
          diseño y sus variantes. Un uso consistente de la tipografía fortalece la
          identidad de la marca y maximiza el impacto de nuestros mensajes.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-500 mb-1">Headlines</p>
              <p className="text-xl font-bold">DM Sans</p>
              <p className="text-sm uppercase text-gray-400">BOLD</p>
            </div>
            
            <div>
              <p className="text-sm text-gray-500 mb-1">Subtitles</p>
              <p className="text-xl font-medium">DM Sans</p>
              <p className="text-sm uppercase text-gray-400">MEDIUM</p>
            </div>
            
            <div>
              <p className="text-sm text-gray-500 mb-1">Body Copy</p>
              <p className="text-xl font-normal">DM Sans</p>
              <p className="text-sm uppercase text-gray-400">REGULAR</p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-4xl font-bold text-agencia-darkBlue mb-2">Títulos</h3>
            </div>
            
            <div>
              <h4 className="text-2xl font-medium text-agencia-darkBlue mb-2">Subtítulos</h4>
            </div>
            
            <div>
              <p className="text-base text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TypeSection;


import CourseCard from "./CourseCard";

const CourseSection = () => {
  const courses = [
    {
      title: "Optimización de proyectos con IA",
      instructor: "Federico Lixklett",
      date: "20 y 21 nov",
      time: "18 a 21hs",
      isVirtual: true
    },
    {
      title: "Diseño de experiencias digitales",
      instructor: "Ana Martínez",
      date: "15 nov",
      time: "18 a 20hs",
      isVirtual: true
    },
    {
      title: "Estrategias de contenido para redes",
      instructor: "Carlos Gómez",
      date: "25 nov",
      time: "19 a 21hs",
      isVirtual: false
    }
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold text-agencia-darkBlue">Próximas masterclass</h2>
            <p className="text-gray-500 mt-2">Aprende con los mejores profesionales del sector</p>
          </div>
          <a href="#" className="text-agencia-red hover:text-agencia-darkBlue transition-colors text-sm font-medium">
            Ver todas →
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              title={course.title}
              instructor={course.instructor}
              date={course.date}
              time={course.time}
              isVirtual={course.isVirtual}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseSection;


import { Calendar, User, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface CourseCardProps {
  title: string;
  instructor: string;
  date: string;
  time: string;
  imageUrl?: string;
  isVirtual?: boolean;
}

const CourseCard = ({ 
  title, 
  instructor, 
  date, 
  time, 
  imageUrl, 
  isVirtual = true 
}: CourseCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
      <div className="relative">
        <div 
          className="h-40 bg-cover bg-center" 
          style={{ backgroundImage: imageUrl ? `url(${imageUrl})` : "linear-gradient(to right, #08284F, #060816)" }}
        >
          {!imageUrl && (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-bold text-white opacity-20">agencia·i</span>
            </div>
          )}
        </div>
        
        <div className="absolute top-4 left-4 bg-agencia-red text-white px-4 py-1 text-xs font-medium rounded">
          MASTERCLASS
        </div>
        
        {instructor && (
          <div className="absolute -bottom-6 right-6">
            <div className="w-12 h-12 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center overflow-hidden">
              {imageUrl ? (
                <img 
                  src={`/instructors/${instructor.split(' ')[0].toLowerCase()}.jpg`} 
                  alt={instructor}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "";
                    e.currentTarget.parentElement.innerHTML = `<User className="text-gray-600" />`;
                  }}
                />
              ) : (
                <User className="text-gray-600" />
              )}
            </div>
          </div>
        )}
      </div>
      
      <div className="p-4 pt-8">
        <h3 className="font-bold text-lg text-agencia-darkBlue mb-2">
          {title}
        </h3>
        
        <div className="text-sm text-gray-500 mb-3">
          <span>x {instructor}</span>
        </div>
        
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Calendar size={14} />
            <span>{date}</span>
          </div>
          
          <div className="flex items-center space-x-1">
            {isVirtual && (
              <Badge variant="outline" className="text-xs bg-gray-100">
                virtual
              </Badge>
            )}
            <Badge variant="outline" className="text-xs">
              <Clock size={12} className="mr-1" />
              {time}
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;

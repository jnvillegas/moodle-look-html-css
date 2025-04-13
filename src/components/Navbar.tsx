
import { Search, Bell, MessageSquare, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="bg-agencia-darkBlue text-white py-4 px-6 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="md:hidden text-white">
            <Menu />
          </Button>
          <div className="text-2xl font-bold flex items-center">
            <span className="code-tag mr-1">&lt;/&gt;</span>
            <span className="text-white">agencia<span className="text-agencia-red">·i</span></span>
          </div>
        </div>
        
        <div className="hidden md:flex items-center space-x-6 text-sm">
          <a href="#" className="hover:text-agencia-red transition-colors">/inspirar</a>
          <a href="#" className="hover:text-agencia-red transition-colors">/innovar</a>
          <a href="#" className="hover:text-agencia-red transition-colors">/impactar</a>
        </div>

        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="icon" className="text-white">
            <Search size={18} />
          </Button>
          <Button variant="ghost" size="icon" className="text-white relative">
            <Bell size={18} />
            <span className="absolute top-0 right-0 w-2 h-2 bg-agencia-red rounded-full"></span>
          </Button>
          <Button variant="ghost" size="icon" className="text-white">
            <MessageSquare size={18} />
          </Button>
          <Button variant="ghost" size="icon" className="text-white">
            <User size={18} />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

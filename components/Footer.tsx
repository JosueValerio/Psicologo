import React from 'react';
import { Instagram, Linkedin, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <span className="font-serif text-2xl font-bold">Mente Serena</span>
          <p className="text-gray-400 mt-2 text-sm">© {new Date().getFullYear()} Dra. Ana Silva. Todos os direitos reservados.</p>
          <p className="text-gray-500 text-xs mt-1">CRP 06/12345</p>
        </div>
        
        <div className="flex space-x-6">
          <a href="#" className="text-gray-400 hover:text-white transition">
            <Instagram className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition">
            <Facebook className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition">
            <Linkedin className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
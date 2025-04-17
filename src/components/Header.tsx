
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white p-4 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <div className="logo">
          <img src="/logo-b.svg" alt="FurryHome" className="w-12 h-12 text-blue-500" />
          <span className="text-sm">FurryHome</span>
        </div>
        <h1 className="text-2xl font-normal">приют для животных</h1>
      </div>
      
      <button 
        className="md:hidden" 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <Menu />
      </button>
      
      <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block`}>
        <ul className="bg-blue-100 md:flex">
          <li className="px-6 py-3 hover:bg-blue-200">
            <NavLink to="/pets">Питомцы</NavLink>
          </li>
          <li className="px-6 py-3 hover:bg-blue-200">
            <NavLink to="/about">О нас</NavLink>
          </li>
          <li className="px-6 py-3 hover:bg-blue-200">
            <NavLink to="/news">Новости</NavLink>
          </li>
          <li className="px-6 py-3 hover:bg-blue-200">
            <NavLink to="/info">Информация</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

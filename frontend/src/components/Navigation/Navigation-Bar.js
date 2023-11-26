import React, { useState } from 'react';
import { Link } from 'react-router-dom';

/*
  Navbar Component
  Displays a navigation bar with links to different pages of the application.
 */

const Navbar = ({ bgColor = 'bg-transparent', linkColor = 'text-white', position = 'absolute' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the state of the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Determine mobile menu's background and link color based on navbar's background color
  const mobileMenuBgColor = isMenuOpen ? (bgColor === 'bg-transparent' ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.8)') : 'transparent';
  const mobileMenuLinkColor = isMenuOpen ? (bgColor === 'bg-transparent' ? 'text-white' : 'text-black') : linkColor;

  return (
    <nav className={`${bgColor} ${position} top-0 left-0 w-full z-50 transition duration-300`}>
      <div className="container mx-auto px-4 py-5 flex justify-between items-center">
        {/* Logo and Home link */}
        <Link to="/">
          <img src="/images/F1-logo.png" alt="F1 logo" className="w-28 h-auto" />
        </Link>

        {/* Hamburger Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none text-xl">
            <i className={`fas fa-bars ${linkColor}`}></i>
          </button>
        </div>

        {/* Primary Nav Links for Desktop */}
        <ul className={`hidden md:flex items-center space-x-4 ${linkColor}`}>
          <li><Link to="/" className="hover:text-f1-red rounded px-3 py-2 transition duration-300">Home</Link></li>
          <li><Link to="/drivers" className="hover:text-f1-red rounded px-3 py-2 transition duration-300">Drivers</Link></li>
          <li><Link to="/teams" className="hover:text-f1-red rounded px-3 py-2 transition duration-300">Teams</Link></li>
          <li><Link to="/races" className="hover:text-f1-red rounded px-3 py-2 transition duration-300">Races</Link></li>
          <li><Link to="/quiz" className="hover:text-f1-red rounded px-3 py-2 transition duration-300">Quiz</Link></li>
        </ul>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute top-16 right-0 w-full transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 hidden'}`} style={{ backgroundColor: mobileMenuBgColor }}>
          <ul className="flex flex-col items-end space-y-4 pr-4 pt-4">
            {/* Mobile Menu Links */}
            <li><Link to="/" className={`${mobileMenuLinkColor} hover:text-f1-red`}>Home</Link></li>
            <li><Link to="/drivers" className={`${mobileMenuLinkColor} hover:text-f1-red`}>Drivers</Link></li>
            <li><Link to="/teams" className={`${mobileMenuLinkColor} hover:text-f1-red`}>Teams</Link></li>
            <li><Link to="/races" className={`${mobileMenuLinkColor} hover:text-f1-red`}>Races</Link></li>
            <li><Link to="/quiz" className={`${mobileMenuLinkColor} hover:text-f1-red`}>Quiz</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

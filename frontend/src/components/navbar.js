import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ bgColor = 'bg-transparent', linkColor = 'text-white' }) => {
  return (
    <nav className={`${bgColor} absolute top-0 left-0 w-full transition duration-300`}>
      <div className="container mx-auto px-4 py-5 flex justify-between items-center">
        {/* Logo and Home link */}
        <Link to="/">
          <img src="/images/F1-logo.png" alt="F1 logo" className="w-28 h-auto" />
        </Link>

        {/* Primary Nav Links */}
        <ul className="flex items-center space-x-4">
          <li>
            <Link to="/" className={`${linkColor} hover:text-f1-red rounded px-3 py-2 transition duration-300`}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/teams-and-drivers" className={`${linkColor} hover:text-f1-red rounded px-3 py-2 transition duration-300`}>
              Teams & Drivers
            </Link>
          </li>
          <li>
            <Link to="/races" className={`${linkColor} hover:text-f1-red rounded px-3 py-2 transition duration-300`}>
              Races
            </Link>
          </li>
          <li>
            <Link to="/quiz" className={`${linkColor} hover:text-f1-red rounded px-3 py-2 transition duration-300`}>
              Quiz
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-transparent absolute text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            {/* Logo and Home link */}

            {/* Primary Nav Links */}
            <div className="flex items-center space-x-1">
            <Link to="/" className="py-5 px-3 hover:bg-gray-700 rounded transition duration-300">
              Home
            </Link>
              <Link to="/teams-and-drivers" className="py-5 px-3 hover:bg-gray-700 rounded transition duration-300">
                Teams & Drivers
              </Link>
              <Link to="/races" className="py-5 px-3 hover:bg-gray-700 rounded transition duration-300">
                Races
              </Link>
              <Link to="/quiz" className="py-5 px-3 hover:bg-gray-700 rounded transition duration-300">
                Quiz
              </Link>
            </div>
          </div>

          {/* Secondary Nav Links, or user-related links could go here */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

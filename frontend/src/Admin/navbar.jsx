/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <h1 className="text-white text-2xl font-semibold">RecoveryApp</h1>

        {/* Navbar Links (Desktop) */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-white hover:text-gray-300">Dashboard</Link>
          <Link to="/profile" className="text-white hover:text-gray-300">Profile</Link>
          <Link to="/progress" className="text-white hover:text-gray-300">Progress</Link>
          <Link to="/support" className="text-white hover:text-gray-300">Support</Link>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-blue-700 text-white p-4 space-y-4">
          <Link to="/" className="block">Dashboard</Link>
          <Link to="/profile" className="block">Profile</Link>
          <Link to="/progress" className="block">Progress</Link>
          <Link to="/support" className="block">Support</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

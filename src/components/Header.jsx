import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-black border-b border-yellow-500 shadow-[0_2px_10px_rgba(255,215,0,0.15)]">
      <nav className="flex justify-between items-center px-8 py-4">
        {/* Logo Section */}
        <Link to='/'>

        <div className="flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#FFD700"
            className="w-8 h-8"
          >
            <path d="M4 4h8a2 2 0 0 1 2 2v14a1 1 0 0 1-1.447.894L8 18.118l-4.553 2.776A1 1 0 0 1 2 20V6a2 2 0 0 1 2-2zm10 0h6a2 2 0 0 1 2 2v14a1 1 0 0 1-1.447.894L16 18.118l-4.553 2.776A1 1 0 0 1 10 20V6a2 2 0 0 1 2-2z" />
          </svg>
          <h1 className="text-white text-xl font-semibold tracking-wide">
            Library<span className="text-yellow-400">Zone</span>
          </h1>
        </div>

        </Link>
        

        {/* Navigation Links */}
        <ul className="flex gap-8 text-white font-medium">
          <li>
            <Link
              to="/"
              className="hover:text-yellow-400 transition-colors duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/browsebooks"
              className="hover:text-yellow-400 transition-colors duration-300"
            >
              Browse Books
            </Link>
          </li>
          <li>
            <Link
              to="/addbook"
              className="hover:text-yellow-400 transition-colors duration-300"
            >
              Add Book
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

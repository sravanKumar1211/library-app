
import React from "react";
// NavLink is used for navigation with active styling
import { NavLink } from "react-router-dom";

function Header() {
  // Function to dynamically assign class based on whether the link is active
  // isActive is provided by NavLink
  const linkClass = ({ isActive }) =>
    `px-3 py-2 rounded ${isActive ? "bg-yellow-500 text-black" : "text-white hover:text-yellow-400"}`;

  return (
    // Header container with background and bottom border
    <header className="bg-black border-b border-yellow-400">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        
        {/* Logo / Brand name, navigates to home page */}
        <NavLink to='/'>
          <div className="text-yellow-400 font-bold text-xl">BookZone</div>
        </NavLink>

        {/* Navigation links */}
        <nav className="flex gap-3">
          {/* Home link */}
          <NavLink to="/" className={linkClass}>Home</NavLink>

          {/* Browse Books link */}
          <NavLink to="/browsebooks" className={linkClass}>Browse Books</NavLink>

          {/* Add Book link */}
          <NavLink to="/addbook" className={linkClass}>Add Book</NavLink>
        </nav>
      </div>
    </header>
  );
}

// Exporting Header component
export default Header;

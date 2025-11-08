
import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const linkClass = ({ isActive }) =>
    `px-3 py-2 rounded ${isActive ? "bg-yellow-500 text-black" : "text-white hover:text-yellow-400"}`;

  return (
    <header className="bg-black border-b border-yellow-400">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <div className="text-yellow-400 font-bold text-xl">BookZone</div>
        <nav className="flex gap-3">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/browsebooks" className={linkClass}>Browse Books</NavLink>
          <NavLink to="/addbook" className={linkClass}>Add Book</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;

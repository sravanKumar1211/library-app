// src/components/Footer.jsx
import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-white border-t border-yellow-400 mt-10">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-yellow-400 font-bold text-lg">BookZone</h2>
          <p className="text-white text-sm mt-1">Discover and add your favorite books</p>
        </div>
        <div className="text-sm text-white">
          &copy; {new Date().getFullYear()} BookZone. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-black text-white border-t border-yellow-400 mt-10">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-yellow-400 font-bold text-lg mb-3">BookZone</h2>
          <p className="text-white text-sm">
            Discover, add, and explore your favorite books. Join our community of book lovers today!
          </p>
        </div>

        {/* Address / Contact */}
        <div>
          <h3 className="text-yellow-400 font-semibold mb-3">Contact Us</h3>
          <p className="text-white text-sm">123 Book Street, Hyderabad, India</p>
          <p className="text-white text-sm mt-1">Email: info@bookzone.com</p>
          <p className="text-white text-sm mt-1">Phone: +91 98765 43210</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-yellow-400 font-semibold mb-3">Quick Links</h3>
          <ul className="text-white text-sm space-y-1">
            <li><a href="#" className="hover:text-yellow-400 transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition-colors">Browse Books</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition-colors">Add Book</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-yellow-400 font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4 text-white text-xl">
            <a href="#" className="hover:text-yellow-400 transition-colors"><FaFacebook /></a>
            <a href="#" className="hover:text-yellow-400 transition-colors"><FaTwitter /></a>
            <a href="#" className="hover:text-yellow-400 transition-colors"><FaInstagram /></a>
            <a href="#" className="hover:text-yellow-400 transition-colors"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="border-t border-yellow-400 mt-6 py-4 text-center text-sm text-white">
        &copy; {new Date().getFullYear()} BookZone. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;

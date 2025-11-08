import React from "react";
// useNavigate is used to programmatically navigate to another route
import { useNavigate } from "react-router-dom";

function Book({ book }) {
  const navigate = useNavigate(); // initialize navigation

  // If book object is not provided, render nothing
  if (!book) return null;

  return (
    // Container div for the book card
    // onClick navigates to the book details page for this book
    <div
      onClick={() => navigate(`/bookdetails/${book.id}`)}
      className="bg-[#111111] rounded-xl overflow-hidden shadow-md border border-transparent 
                 hover:border-yellow-500 hover:shadow-[0_0_15px_rgba(255,215,0,0.25)] 
                 transition-all duration-300 cursor-pointer"
    >
      {/* Image container with relative positioning */}
      <div className="relative">
        {/* Book cover image */}
        <img
          src={book.imageUrl}
          alt={book.title}
          className="w-full h-48 object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
        />
        {/* Rating badge at bottom-right corner */}
        <div className="absolute bottom-2 right-2 bg-yellow-500 text-black text-xs font-semibold px-2 py-1 rounded-md shadow-md">
          ⭐ {book.irating}
        </div>
      </div>

      {/* Book details section */}
      <div className="p-3">
        {/* Book title */}
        <h3 className="text-base font-semibold text-white mb-1">{book.title}</h3>
        {/* Book author */}
        <p className="text-sm text-gray-400 italic mb-1">{book.author}</p>
        {/* Book genre */}
        <p className="text-xs text-yellow-400">{book.genre}</p>
        {/* Instruction text */}
        <p className="text-xs text-yellow-400">Click To View Details"</p>
      </div>
    </div>
  );
}

// Exporting the Book component
export default Book;

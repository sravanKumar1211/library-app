
import React from "react";
import { useNavigate } from "react-router-dom";

function Book({ book }) {
  const navigate = useNavigate();
  if (!book) return null;

  return (
    <div
      onClick={() => navigate(`/bookdetails/${book.id}`)}
      className="bg-[#111111] rounded-xl overflow-hidden shadow-md border border-transparent hover:border-yellow-500 hover:shadow-[0_0_15px_rgba(255,215,0,0.25)] transition-all duration-300 cursor-pointer"
    >
      <div className="relative">
        <img
          src={book.imageUrl}
          alt={book.title}
          className="w-full h-48 object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
        />
        <div className="absolute bottom-2 right-2 bg-yellow-500 text-black text-xs font-semibold px-2 py-1 rounded-md shadow-md">
          ⭐ {book.irating}
        </div>
      </div>
      <div className="p-3">
        <h3 className="text-base font-semibold text-white mb-1">{book.title}</h3>
        <p className="text-sm text-gray-400 italic mb-1">{book.author}</p>
        <p className="text-xs text-yellow-400">{book.genre}</p>
        <p className="text-xs text-yellow-400">Click To View Details"</p>
      </div>
    </div>
  );
}

export default Book;

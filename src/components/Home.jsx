import React from "react";
import Book from "./Book";

function Home() {
  return (
    <div className="bg-[#141414] min-h-screen text-white px-6 py-10">
      {/* Welcome Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-yellow-400 mb-3">
          Welcome to the World of Learning 📚
        </h1>
        <p className="text-gray-300 text-lg">
          Discover, read, and grow with our golden collection of books.
        </p>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left: Categories */}
        <div className="bg-[#1c1c1c] p-6 rounded-xl border border-yellow-600 shadow-[0_0_12px_rgba(255,215,0,0.15)] w-full lg:w-1/4">
          <h2 className="text-2xl font-semibold text-yellow-400 mb-4 border-b border-yellow-600 pb-2">
            Categories
          </h2>
          <ul className="flex flex-col gap-3">
            {[
              "Sci-Fi",
              "Romantic",
              "Fiction",
              "Adventure",
              "Comic",
              "Horror",
              "Mystery",
              "Thriller",
              "Fantasy",
            ].map((cat) => (
              <li
                key={cat}
                className="bg-[#222222] hover:bg-yellow-500 hover:text-black text-white px-4 py-2 rounded-lg shadow-md border border-transparent hover:border-yellow-400 transition-all duration-300 text-center cursor-pointer"
              >
                {cat}
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Top Rated Books */}
        <div className="flex-1 bg-[#1c1c1c] p-6 rounded-xl border border-yellow-600 shadow-[0_0_12px_rgba(255,215,0,0.15)] overflow-y-auto max-h-[75vh]">
          <h2 className="text-2xl font-semibold text-yellow-400 mb-6 border-b border-yellow-600 pb-2">
            Top Rated Books
          </h2>
          <Book />
        </div>
      </div>
    </div>
  );
}

export default Home;


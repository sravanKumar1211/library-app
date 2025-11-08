import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Home() {
  const navigate = useNavigate();
  const books = useSelector((store) => store.book.items || []);

  // List of all categories to show on left
  const categories = [
    "Sci-Fi",
    "Romantic",
    "Fiction",
    "Adventure",
    "Comic",
    "Horror",
    "Mystery",
    "Thriller",
    "Fantasy",
  ];

  // Get top-rated (one per category ideally)
  const topRatedBooks = categories
    .map((genre) => {
      const bookList = books.filter((b) => b.genre.toLowerCase() === genre.toLowerCase());
      if (bookList.length === 0) return null;
      return bookList.sort((a, b) => b.irating - a.irating)[0];
    })
    .filter(Boolean);

  return (
    <div className="bg-black min-h-screen text-white flex flex-col">
      {/* Hero Section */}
      <div className="text-center py-10 border-b border-yellow-400">
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-3">
          Welcome to BookZone 📚
        </h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Explore our digital library — browse by category, add your favorites, and dive into new adventures.
        </p>
      </div>

      {/* Main layout: genres left, top-rated right */}
      <div className="flex flex-col md:flex-row flex-grow max-w-6xl mx-auto w-full py-10 px-6 gap-10">
        {/* Left: Category List */}
        <div className="md:w-1/3 border-r border-yellow-400 pr-6">
          <h2 className="text-2xl font-bold text-yellow-400 mb-6">Genres</h2>
          <ul className="space-y-3">
            {categories.map((genre) => (
              <li
                key={genre}
                onClick={() => navigate(`/books/${encodeURIComponent(genre)}`)}
                className="cursor-pointer bg-[#111111] p-3 rounded-md hover:bg-yellow-500 hover:text-black transition text-center text-white font-medium border border-yellow-400"
              >
                {genre}
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Top rated books */}
        <div className="md:w-2/3">
          <h2 className="text-2xl font-bold text-yellow-400 mb-6 text-center md:text-left">
            Top Rated Books
          </h2>

          {topRatedBooks.length === 0 ? (
            <p className="text-center text-gray-400">No books available.</p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {topRatedBooks.map((book) => (
                <Link
                  key={book.id}
                  to={`/bookdetails/${book.id}`}
                  className="bg-[#111111] rounded-xl overflow-hidden shadow-md border border-transparent hover:border-yellow-500 hover:shadow-[0_0_15px_rgba(255,215,0,0.25)] transition-all duration-300"
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
                    <h3 className="text-base font-semibold text-white mb-1">
                      {book.title}
                    </h3>
                    <p className="text-sm text-gray-400 italic mb-1">
                      {book.author}
                    </p>
                    <p className="text-xs text-yellow-400">{book.genre}</p>
                     <p className="text-xs text-yellow-400">Click To View Details"</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;

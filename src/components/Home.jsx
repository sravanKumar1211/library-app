import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Home() {
  const books = useSelector((store) => store.book.items || []);

  // Pick top 3 highest-rated books to display as featured
  const featuredBooks = [...books]
    .sort((a, b) => b.irating - a.irating)
    .slice(0, 3);

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center py-10 px-6">
      {/* Hero Section */}
      <section className="text-center max-w-3xl mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">
          Welcome to BookZone 📚
        </h1>
        <p className="text-gray-300 mb-6 text-lg">
          Explore a universe of stories. Browse, search, and add your favorite
          books — all in one place.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/browsebooks"
            className="bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-3 rounded-md font-semibold"
          >
            Browse Books
          </Link>
          <Link
            to="/addbook"
            className="border border-yellow-400 text-yellow-400 hover:bg-yellow-500 hover:text-black px-6 py-3 rounded-md font-semibold"
          >
            Add a Book
          </Link>
        </div>
      </section>

      {/* Featured Books */}
      <section className="w-full max-w-6xl">
        <h2 className="text-2xl text-yellow-400 font-bold mb-6 text-center border-b border-yellow-400 pb-2">
          Featured Books
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredBooks.map((book) => (
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
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;

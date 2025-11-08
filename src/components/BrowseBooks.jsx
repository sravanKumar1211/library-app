import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import Book from "./Book";

function BrowseBooks() {
  const { category } = useParams(); // dynamic route: /books/:category
  const books = useSelector((store) => store.book.items || []);

  // state for search filters
  const [searchName, setSearchName] = useState("");
  const [searchCategory, setSearchCategory] = useState(category || "");

  // ✅ When route param changes, update the category search field automatically
  useEffect(() => {
    if (category) {
      setSearchCategory(category);
    } else {
      setSearchCategory("");
    }
  }, [category]);

  // ✅ Filter logic (title/author + genre)
  const filtered = useMemo(() => {
    return books.filter((b) => {
      const nameMatch =
        b.title.toLowerCase().includes(searchName.toLowerCase()) ||
        b.author.toLowerCase().includes(searchName.toLowerCase());

      const categoryMatch = searchCategory
        ? b.genre.toLowerCase().includes(searchCategory.toLowerCase())
        : true;

      return nameMatch && categoryMatch;
    });
  }, [books, searchName, searchCategory]);

  // ✅ Group results by genre for category-wise display
  const grouped = useMemo(() => {
    return filtered.reduce((acc, b) => {
      const genre = b.genre || "Uncategorized";
      if (!acc[genre]) acc[genre] = [];
      acc[genre].push(b);
      return acc;
    }, {});
  }, [filtered]);

  const genres = Object.keys(grouped);

  return (
    <div className="bg-black min-h-screen text-white py-8 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Page Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-yellow-400">Browse Books</h1>
          <p className="text-gray-300 mt-2">
            Search books by title, author, or category.
          </p>
        </div>

        {/* Search Inputs */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center">
          <input
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
            placeholder="Search by book title or author"
            className="w-full sm:w-1/2 p-3 rounded border border-yellow-400 bg-black text-white placeholder-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            value={searchCategory}
            onChange={(e) => setSearchCategory(e.target.value)}
            placeholder="Search by category (or click below)"
            className="w-full sm:w-1/2 p-3 rounded border border-yellow-400 bg-black text-white placeholder-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        {/* Quick Category Links */}
        <div className="flex flex-wrap gap-3 mb-10 justify-center">
          {[...new Set(books.map((b) => b.genre))].map((g) => (
            <Link
              key={g}
              to={`/books/${encodeURIComponent(g)}`}
              className={`text-sm px-3 py-1 rounded border transition ${
                g.toLowerCase() === searchCategory.toLowerCase()
                  ? "bg-yellow-500 text-black border-yellow-500"
                  : "bg-gray-900 border-yellow-400 text-white hover:bg-yellow-500 hover:text-black"
              }`}
            >
              {g}
            </Link>
          ))}
          <Link
            to="/browsebooks"
            className={`text-sm px-3 py-1 rounded border transition ${
              !searchCategory
                ? "bg-yellow-500 text-black border-yellow-500"
                : "bg-gray-900 border-yellow-400 text-white hover:bg-yellow-500 hover:text-black"
            }`}
          >
            All
          </Link>
        </div>

        {/* Display grouped books */}
        {genres.length === 0 ? (
          <p className="text-center text-yellow-400">No books found.</p>
        ) : (
          genres.map((g) => (
            <section key={g} className="mb-10">
              <h2 className="text-2xl text-yellow-400 font-semibold mb-4 border-b border-yellow-400 inline-block">
                {g}
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {grouped[g].map((book) => (
                  <Book key={book.id} book={book} />
                ))}
              </div>
            </section>
          ))
        )}
      </div>
    </div>
  );
}

export default BrowseBooks;

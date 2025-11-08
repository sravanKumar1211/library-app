import React from "react";

function Book() {
  const books = [
    {
      id: 1,
      name: "The Lost Galaxy",
      author: "Ava Reynolds",
      rating: "4.8",
      img: "https://images.unsplash.com/photo-1544934169-9b84a8b2f39a?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 2,
      name: "Love in Venice",
      author: "Oliver Brown",
      rating: "4.6",
      img: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 3,
      name: "Mystery of the Shadows",
      author: "Luna Carter",
      rating: "4.9",
      img: "https://images.unsplash.com/photo-1551022379-307aaed29d3a?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 4,
      name: "Adventures Beyond Earth",
      author: "Nina Clarke",
      rating: "4.7",
      img: "https://images.unsplash.com/photo-1531219432768-e9d2e4a1f15c?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 5,
      name: "The Haunted Castle",
      author: "Mason White",
      rating: "4.5",
      img: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=500&q=80",
    },
  ];

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {books.map((book) => (
        <div
          key={book.id}
          className="bg-[#111111] rounded-xl overflow-hidden shadow-md border border-transparent hover:border-yellow-500 hover:shadow-[0_0_15px_rgba(255,215,0,0.25)] transition-all duration-300 cursor-pointer"
        >
          <div className="relative">
            <img
              src={book.img}
              alt={book.name}
              className="w-full h-44 object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
            />
            <div className="absolute bottom-2 right-2 bg-yellow-500 text-black text-xs font-semibold px-2 py-1 rounded-md shadow-md">
              ⭐ {book.rating}
            </div>
          </div>
          <div className="p-3">
            <h1 className="text-base font-semibold text-white mb-1">
              {book.name}
            </h1>
            <h3 className="text-sm text-gray-400 italic mb-1">
              {book.author}
            </h3>
            <button className="mt-1 bg-yellow-500 text-black px-2 py-1 rounded-md text-xs font-medium hover:bg-yellow-400 transition-all">
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Book;

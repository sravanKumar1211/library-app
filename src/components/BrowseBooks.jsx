import React, { useState } from 'react';
import Header from './Header';
import Book from './Book';

const booksData = [
  { id: 1, name: 'Dune', category: 'Sci-Fi', author: 'Frank Herbert' },
  { id: 2, name: '1984', category: 'Fiction', author: 'George Orwell' },
  { id: 3, name: 'Foundation', category: 'Sci-Fi', author: 'Isaac Asimov' },
  { id: 4, name: 'Pride and Prejudice', category: 'Fiction', author: 'Jane Austen' },
];

function BrowseBooks() {
  const [searchName, setSearchName] = useState('');
  const [searchCategory, setSearchCategory] = useState('');

  const filteredBooks = booksData.filter((book) => {
    const matchesName = book.name.toLowerCase().includes(searchName.toLowerCase());
    const matchesCategory = book.category.toLowerCase().includes(searchCategory.toLowerCase());
    return matchesName && matchesCategory;
  });

  return (
    <div className="bg-black min-h-screen text-white">
      <Header />

      {/* Search Inputs */}
      <div className="flex gap-4 my-6 px-6">
        <input
          type="text"
          placeholder="Search by book name"
          className="w-1/2 p-3 rounded border border-yellow-400 bg-black text-white placeholder-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Search by category"
          className="w-1/2 p-3 rounded border border-yellow-400 bg-black text-white placeholder-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          value={searchCategory}
          onChange={(e) => setSearchCategory(e.target.value)}
        />
      </div>

      {/* Books Display */}
      <div className="px-6">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div
              key={book.id}
              className="my-6 p-4 border-l-4 border-yellow-400 bg-gray-900 rounded shadow-md"
            >
              <h2 className="text-yellow-400 font-bold text-xl mb-2">
                Category - {book.category}
              </h2>
              <Book name={book.name} author={book.author} />
            </div>
          ))
        ) : (
          <p className="text-yellow-400 text-lg mt-6">No books found</p>
        )}
      </div>
    </div>
  );
}

export default BrowseBooks;

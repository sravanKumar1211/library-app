
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function BookDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = useSelector((store) =>
    (store.book.items || []).find((b) => String(b.id) === String(id))
  );

  if (!book) {
    return (
      <div className="bg-black min-h-screen text-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-yellow-400">Book not found</p>
          <button
            onClick={() => navigate("/browsebooks")}
            className="mt-4 bg-yellow-500 hover:bg-yellow-400 text-black px-4 py-2 rounded"
          >
            Back to Browse
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen text-white flex items-center justify-center p-6">
      <div className="max-w-5xl w-full bg-[#111111] rounded-2xl shadow-lg border border-yellow-400 flex flex-col md:flex-row overflow-hidden">
        <div className="md:w-1/2">
          <img src={book.imageUrl} alt={book.title} className="w-full h-full object-cover" />
        </div>

        <div className="md:w-1/2 p-6 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-yellow-400 mb-2">{book.title}</h1>
            <p className="text-gray-300 italic mb-2">By {book.author}</p>
            <p className="text-sm text-gray-400 mb-1">
              Genre: {book.genre} | Year: {book.year}
            </p>
            <p className="text-sm text-gray-400 mb-3">Pages: {book.pages}</p>
            <p className="text-yellow-400 font-semibold mb-4">⭐ Rating: {book.irating}</p>

            <h2 className="text-yellow-400 font-semibold text-lg mb-1">Description</h2>
            <p className="text-gray-300 leading-relaxed">{book.description}</p>
          </div>

          <div className="mt-6">
            <button
              onClick={() => navigate(-1)} // go back in history
              className="bg-yellow-500 hover:bg-yellow-400 text-black px-4 py-2 rounded-md font-semibold"
            >
              ← Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;

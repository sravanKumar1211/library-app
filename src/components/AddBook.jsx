// src/components/AddBook.jsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../utils/bookSlice";
import { useNavigate } from "react-router-dom";

function AddBook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    author: "",
    year: "",
    genre: "",
    pages: "",
    irating: "",
    imageUrl: "",
    description: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const validate = () => {
    const e = {};
    if (!form.title) e.title = "Title required";
    if (!form.author) e.author = "Author required";
    if (!form.year || isNaN(form.year)) e.year = "Valid year required";
    if (!form.genre) e.genre = "Genre required";
    if (!form.pages || isNaN(form.pages)) e.pages = "Valid pages required";
    if (!form.irating || isNaN(form.irating) || form.irating < 0 || form.irating > 5)
      e.irating = "Rating between 0 and 5";
    if (!form.imageUrl) e.imageUrl = "Image URL required";
    if (!form.description) e.description = "Description required";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const v = validate();
    if (Object.keys(v).length) {
      setErrors(v);
      return;
    }
    setErrors({});

    // Create unique id (simple approach)
    const newBook = {
      id: Date.now(),
      title: form.title,
      author: form.author,
      year: Number(form.year),
      genre: form.genre,
      pages: Number(form.pages),
      irating: Number(form.irating),
      imageUrl: form.imageUrl,
      description: form.description
    };

    dispatch(addBook(newBook));
    // redirect to browsebooks and scroll to top
    navigate("/browsebooks");
  };

  return (
    <div className="bg-black min-h-screen text-white flex justify-center items-start p-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-5xl bg-[#111111] p-6 rounded-xl border border-yellow-400 overflow-auto"
        style={{ maxHeight: "95vh" }}
      >
        <h1 className="text-2xl text-yellow-400 font-bold text-center mb-6">Add New Book</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left 3 */}
          <div className="flex flex-col gap-4">
            <div>
              <label className="text-yellow-400 font-semibold block mb-1">Title</label>
              <input name="title" value={form.title} onChange={handleChange}
                className="w-full p-3 rounded border border-yellow-400 bg-black text-white" />
              {errors.title && <p className="text-red-500">{errors.title}</p>}
            </div>

            <div>
              <label className="text-yellow-400 font-semibold block mb-1">Author</label>
              <input name="author" value={form.author} onChange={handleChange}
                className="w-full p-3 rounded border border-yellow-400 bg-black text-white" />
              {errors.author && <p className="text-red-500">{errors.author}</p>}
            </div>

            <div>
              <label className="text-yellow-400 font-semibold block mb-1">Year</label>
              <input name="year" value={form.year} onChange={handleChange} type="number"
                className="w-full p-3 rounded border border-yellow-400 bg-black text-white" />
              {errors.year && <p className="text-red-500">{errors.year}</p>}
            </div>
          </div>

          {/* Right 3 */}
          <div className="flex flex-col gap-4">
            <div>
              <label className="text-yellow-400 font-semibold block mb-1">Genre</label>
              <input name="genre" value={form.genre} onChange={handleChange}
                className="w-full p-3 rounded border border-yellow-400 bg-black text-white" />
              {errors.genre && <p className="text-red-500">{errors.genre}</p>}
            </div>

            <div>
              <label className="text-yellow-400 font-semibold block mb-1">Pages</label>
              <input name="pages" value={form.pages} onChange={handleChange} type="number"
                className="w-full p-3 rounded border border-yellow-400 bg-black text-white" />
              {errors.pages && <p className="text-red-500">{errors.pages}</p>}
            </div>

            <div>
              <label className="text-yellow-400 font-semibold block mb-1">Rating (0-5)</label>
              <input name="irating" value={form.irating} onChange={handleChange} type="number" step="0.1"
                className="w-full p-3 rounded border border-yellow-400 bg-black text-white" />
              {errors.irating && <p className="text-red-500">{errors.irating}</p>}
            </div>
          </div>
        </div>

        {/* description full width */}
        <div className="mt-6">
          <label className="text-yellow-400 font-semibold block mb-1">Image URL</label>
          <input name="imageUrl" value={form.imageUrl} onChange={handleChange}
            className="w-full p-3 rounded border border-yellow-400 bg-black text-white" />
          {errors.imageUrl && <p className="text-red-500">{errors.imageUrl}</p>}
        </div>

        <div className="mt-4">
          <label className="text-yellow-400 font-semibold block mb-1">Description</label>
          <textarea name="description" value={form.description} onChange={handleChange} rows="4"
            className="w-full p-3 rounded border border-yellow-400 bg-black text-white" />
          {errors.description && <p className="text-red-500">{errors.description}</p>}
        </div>

        <button type="submit" className="mt-6 w-full bg-yellow-400 text-black font-bold py-3 rounded hover:bg-yellow-500 transition">
          Add Book
        </button>
      </form>
    </div>
  );
}

export default AddBook;

import React, { useState } from 'react';

function AddBook() {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    year: '',
    genre: '',
    pages: '',
    irating: '',
    imageUrl: '',
    description: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.title) newErrors.title = 'Title is required';
    if (!formData.author) newErrors.author = 'Author is required';
    if (!formData.year || isNaN(formData.year))
      newErrors.year = 'Valid year is required';
    if (!formData.genre) newErrors.genre = 'Genre is required';
    if (!formData.pages || isNaN(formData.pages))
      newErrors.pages = 'Valid page count is required';
    if (
      !formData.irating ||
      isNaN(formData.irating) ||
      formData.irating < 0 ||
      formData.irating > 5
    )
      newErrors.irating = 'Rating must be 0-5';
    if (!formData.imageUrl) newErrors.imageUrl = 'Image URL is required';
    if (!formData.description) newErrors.description = 'Description is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    console.log('Book added:', formData);
    alert('Book added successfully!');
    setFormData({
      title: '',
      author: '',
      year: '',
      genre: '',
      pages: '',
      irating: '',
      imageUrl: '',
      description: '',
    });
  };

  return (
    <div className="bg-black min-h-screen text-white flex justify-center items-start p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-5xl bg-gray-900 p-6 rounded shadow-lg border-l-4 border-yellow-400 overflow-y-auto"
        style={{ maxHeight: '95vh' }}
      >
        <h1 className="text-yellow-400 text-2xl font-bold mb-6 text-center">
          Add New Book
        </h1>

        {/* Two-column grid for inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left column */}
          <div className="flex flex-col gap-4">
            {['title', 'author', 'year'].map((field) => (
              <div key={field}>
                <label className="block text-yellow-400 font-semibold mb-1 capitalize">
                  {field === 'irating'
                    ? 'Rating (0-5)'
                    : field === 'imageUrl'
                    ? 'Image URL'
                    : field}
                </label>
                <input
                  type={field === 'year' ? 'number' : 'text'}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className="w-full p-3 rounded border border-yellow-400 bg-black text-white placeholder-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder={`Enter ${field}`}
                />
                {errors[field] && (
                  <p className="text-red-500 mt-1">{errors[field]}</p>
                )}
              </div>
            ))}
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-4">
            {['genre', 'pages', 'irating', 'imageUrl'].slice(0, 3).map((field) => (
              <div key={field}>
                <label className="block text-yellow-400 font-semibold mb-1 capitalize">
                  {field === 'irating'
                    ? 'Rating (0-5)'
                    : field === 'imageUrl'
                    ? 'Image URL'
                    : field}
                </label>
                <input
                  type={field === 'pages' || field === 'irating' ? 'number' : 'text'}
                  step={field === 'irating' ? '0.1' : undefined}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className="w-full p-3 rounded border border-yellow-400 bg-black text-white placeholder-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder={`Enter ${field}`}
                />
                {errors[field] && (
                  <p className="text-red-500 mt-1">{errors[field]}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Description spans full width */}
        <div className="mt-6">
          <label className="block text-yellow-400 font-semibold mb-1">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            className="w-full p-3 rounded border border-yellow-400 bg-black text-white placeholder-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="Enter book description"
          />
          {errors.description && (
            <p className="text-red-500 mt-1">{errors.description}</p>
          )}
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="mt-6 w-full bg-yellow-400 text-black font-bold py-3 rounded hover:bg-yellow-500 transition-colors"
        >
          Add Book
        </button>
      </form>
    </div>
  );
}

export default AddBook;

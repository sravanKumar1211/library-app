// src/components/Error.jsx
import React from "react";
import { Link, useRouteError } from "react-router-dom";

function Error() {
  const err = useRouteError();
  const path = (err && err.statusText) || window.location.pathname;

  return (
    <div className="bg-black min-h-screen text-white flex items-center justify-center p-6">
      <div className="text-center max-w-lg">
        <h1 className="text-4xl font-bold text-yellow-400 mb-4">404</h1>
        <p className="text-gray-300 mb-4">Page not found: <span className="text-yellow-400">{path}</span></p>
        <Link to="/" className="inline-block bg-yellow-500 text-black px-4 py-2 rounded">Go Home</Link>
      </div>
    </div>
  );
}

export default Error;

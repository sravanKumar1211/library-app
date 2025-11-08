// src/main.jsx
import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./utils/store";
import "./style.css"; // your tailwind / css
import App from "./App.jsx";
import Home from "./components/Home.jsx";
import BrowseBooks from "./components/BrowseBooks.jsx";
import AddBook from "./components/AddBook.jsx";
import BookDetails from "./components/BookDetails.jsx";
import Error from "./components/Error.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "browsebooks", element: <BrowseBooks /> },
      { path: "books/:category", element: <BrowseBooks /> },
       // use BrowseBooks but with category param
      { path: "bookdetails/:id", element: <BookDetails /> },
      { path: "addbook", element: <AddBook /> }
    ],
    errorElement: <Error />
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);

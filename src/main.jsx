// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import { BrowserRouter, createBrowserRouter } from 'react-router-dom';
// import './style.css'
// import "tailwindcss";
// import App from './App.jsx'
// import Home from './components/Home.jsx';
// import BrowseBooks from './components/BrowseBooks.jsx';
// import AddBook from './components/AddBook.jsx';
// import Book from './components/Book.jsx';
// import BookDetails from './components/BookDetails.jsx';

// const appRouter=createBrowserRouter([
//   {
//     path:"/",
//     element:<App></App>,
//     children:[
//       {
//         path:"",
//         element:<Home/>,
//       },
//       {
//         path:"books",
//         element:<BrowseBooks/>,
//       },
//       {
//         //path:"books/:category",
//         path:"books",
//         element:<Book></Book>,
//       },
//       {
//       //   path:"books/details/:id",
//          path:"bookdetails",
//         element:<BookDetails></BookDetails>,
//       },
//       {
//         path:"addbook",
//         element:<AddBook/>,
//       }
//     ],
//     errorElement:<Error/>
//   }
// ])

// createRoot(document.getElementById('root')).render(
//    <BrowserRouter router={appRouter}>
   
//     </BrowserRouter>
// )


import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './style.css';
import App from './App.jsx';
import Home from './components/Home.jsx';
import BrowseBooks from './components/BrowseBooks.jsx';
import AddBook from './components/AddBook.jsx';
import BookDetails from './components/BookDetails.jsx';
import Error from './components/Error.jsx'; // ✅ make sure this exists

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'browsebooks',
        element: <BrowseBooks />,
      },
      {
        path: 'bookdetails/:id', // ✅ dynamic id
        element: <BookDetails />,
      },
      {
        path: 'addbook',
        element: <AddBook />,
      },
    ],
    errorElement: <Error />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
);

// import React from 'react'
// import Header from './components/Header'
// import { Routes, Route, Outlet } from 'react-router-dom';
// import Footer from './components/Footer';

// function App() {
//   return (
//     <>
//     <Header></Header>
//     <Outlet></Outlet>
//     <Footer></Footer>
//     </>
//   )
// }

// export default App


import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-black text-white">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;

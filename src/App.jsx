import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import store  from './utils/store';
import {Provider} from 'react-redux'

function App() {
  return (
    <>
    <Provider store={store}>
          <Header />
          <main className="min-h-screen bg-black text-white">
          <Outlet />
          </main>
          <Footer />
    </Provider>
     
    </>
  );
}

export default App;

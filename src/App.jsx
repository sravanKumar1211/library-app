import React from 'react'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import BrowseBooks from './components/BrowseBooks';
import AddBook from './components/AddBook';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Header></Header>
    <Home></Home>
    <BrowseBooks></BrowseBooks>
    <AddBook></AddBook>
    <Footer></Footer>
    </>
  )
}

export default App

/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Route, Routes } from "react-router-dom"
import { Counter } from './features/counter/Counter';
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import Universities from './pages/Universities/Universities';
import PostalLookup from './pages/PostalLookup/PostalLookup';
import './App.css';

function App() {
  return (
    <>
        <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/universities" element={<Universities />} />
          <Route path="/postalLookup" element={<PostalLookup />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

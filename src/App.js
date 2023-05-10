import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from './components/home';
import Calculator from './components/calculator';
import QuoteDisplay from './components/quote';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quotes" element={<QuoteDisplay />} />
      </Routes>
    </>
  );
}

export default App;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Card from './Compoenents/Card';
import Create from './Compoenents/Create';
import Details from './Compoenents/Details';

function App() {
  return (
    <Routes>
      <Route path="/create" element={<Create />} />
      <Route path="/" element={<Card />} />
      <Route path="/hotels/:id" element={<Details />} />
    </Routes>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/Sosal" element={<Sosal />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

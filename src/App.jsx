import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import './App.css';
import Sosal from './components/sosal/sosal'
import OurTeachers from './components/OurTeachers/ourteachers';
import FAQ from './components/FAQ/FAQ';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Sosal" element={<Sosal />} />
          <Route path='/OurTeachers' element={<OurTeachers />}/>
          <Route path='/FAQ' element={<FAQ />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

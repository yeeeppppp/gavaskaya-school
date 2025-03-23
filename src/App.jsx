import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Error from './components/Error/Error'
import Zapis from './components/Zapis/Zapis'
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/error" element={<Error />} /> 
          <Route path='/zapis' element={<Zapis/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

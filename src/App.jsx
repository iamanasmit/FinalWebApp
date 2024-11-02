// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage'; // Home page
import Page1 from './pages/Page1'; 
import Page3 from './pages/Page3';
import Page4 from './pages/page4';
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/grading-related-projects' element={<Dashboard/>}/>
        <Route path="/generic-overview" element={<Page1 />} />
        <Route path="/good-grading-courses" element={<Page3 />} />
        <Route path="/ai-ml-optimization" element={<Page4 />} />
      </Routes>
    </Router>
  );
};

export default App;

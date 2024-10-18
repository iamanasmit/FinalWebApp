// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage'; // Home page
import Page1 from './pages/Page1'; // Other pages
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/generic-overview' element={<Dashboard/>}/>
        <Route path="/grading-related-projects" element={<Page1 />} />
        <Route path="/ai-ml-courses" element={<Page2 />} />
        <Route path="/good-grading-courses" element={<Page3 />} />
      </Routes>
    </Router>
  );
};

export default App;

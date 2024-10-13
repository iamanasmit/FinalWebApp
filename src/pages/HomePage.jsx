// src/pages/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>Navigate to different pages:</p>
      <ul>
        <li><Link to="/page1">Go to Page 1</Link></li>
        <li><Link to="/page2">Go to Page 2</Link></li>
        <li><Link to="/page3">Go to Page 3</Link></li>
        <li><Link to="/page4">Go to Page 4</Link></li>
        <li><Link to="/page5">Go to Page 5</Link></li>
        <li><Link to="/page6">Go to Page 6</Link></li>
        <li><Link to="/page7">Go to Page 7</Link></li>
      </ul>
    </div>
  );
};

export default HomePage;

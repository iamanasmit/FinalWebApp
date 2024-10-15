import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div style={{
      textAlign: 'center',
      backgroundColor: '#121212',
      color: '#e0e0e0',
      minHeight: '100vh',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
    }}>
      {/* Logo */}
      <img
        src='src\pages\logo.png'
        alt="Data Analysis and Visualization Team Logo"
        style={{
          width: '150px',
          margin: '20px auto',
          filter: 'brightness(0) invert(1)'
        }}
      />
      {/* Team and Project Description */}
      <h1 style={{ color: '#ffb74d' }}>Data Analysis and Visualization Team</h1>
      <h2 style={{ color: '#ffa726' }}>Grading Stats Report</h2>
      <p>
        Welcome to the Grading Stats Report of IIT Bombay. Our team is focused on analyzing and visualizing
        grading trends across various courses to provide insightful data. Explore detailed reports by categories below.
      </p>
      {/* Navigation Links */}
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li style={{ margin: '10px 0' }}>
          <Link
            to="/page1"
            style={{
              color: '#81d4fa',
              textDecoration: 'none',
              fontSize: '18px'
            }}
            onMouseOver={(e) => e.target.style.color = '#29b6f6'}
            onMouseOut={(e) => e.target.style.color = '#81d4fa'}
          >
            Go to Page 1
          </Link>
        </li>
        <li style={{ margin: '10px 0' }}>
          <Link
            to="/dash"
            style={{
              color: '#81d4fa',
              textDecoration: 'none',
              fontSize: '18px'
            }}
            onMouseOver={(e) => e.target.style.color = '#29b6f6'}
            onMouseOut={(e) => e.target.style.color = '#81d4fa'}
          >
            Go to dash
          </Link>
        </li>
        <li style={{ margin: '10px 0' }}>
          <Link
            to="/page2"
            style={{
              color: '#81d4fa',
              textDecoration: 'none',
              fontSize: '18px'
            }}
            onMouseOver={(e) => e.target.style.color = '#29b6f6'}
            onMouseOut={(e) => e.target.style.color = '#81d4fa'}
          >
            Go to Page 2
          </Link>
        </li>
        <li style={{ margin: '10px 0' }}>
          <Link
            to="/page3"
            style={{
              color: '#81d4fa',
              textDecoration: 'none',
              fontSize: '18px'
            }}
            onMouseOver={(e) => e.target.style.color = '#29b6f6'}
            onMouseOut={(e) => e.target.style.color = '#81d4fa'}
          >
            Go to Page 3
          </Link>
        </li>
        <li style={{ margin: '10px 0' }}>
          <Link
            to="/page4"
            style={{
              color: '#81d4fa',
              textDecoration: 'none',
              fontSize: '18px'
            }}
            onMouseOver={(e) => e.target.style.color = '#29b6f6'}
            onMouseOut={(e) => e.target.style.color = '#81d4fa'}
          >
            Go to Page 4
          </Link>
        </li>
        <li style={{ margin: '10px 0' }}>
          <Link
            to="/page5"
            style={{
              color: '#81d4fa',
              textDecoration: 'none',
              fontSize: '18px'
            }}
            onMouseOver={(e) => e.target.style.color = '#29b6f6'}
            onMouseOut={(e) => e.target.style.color = '#81d4fa'}
          >
            Go to Page 5
          </Link>
        </li>
        <li style={{ margin: '10px 0' }}>
          <Link
            to="/page6"
            style={{
              color: '#81d4fa',
              textDecoration: 'none',
              fontSize: '18px'
            }}
            onMouseOver={(e) => e.target.style.color = '#29b6f6'}
            onMouseOut={(e) => e.target.style.color = '#81d4fa'}
          >
            Go to Page 6
          </Link>
        </li>
        <li style={{ margin: '10px 0' }}>
          <Link
            to="/page7"
            style={{
              color: '#81d4fa',
              textDecoration: 'none',
              fontSize: '18px'
            }}
            onMouseOver={(e) => e.target.style.color = '#29b6f6'}
            onMouseOut={(e) => e.target.style.color = '#81d4fa'}
          >
            Go to Page 7
          </Link>
        </li>
      </ul>
      {/* Social Media Links */}
      <footer style={{ marginTop: '40px' }}>
        <p style={{ color: '#bdbdbd' }}>Connect with us:</p>
        <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', justifyContent: 'center', gap: '20px' }}>
          <li><a href="https://www.facebook.com/yourteam" target="_blank" rel="noopener noreferrer" style={{ color: '#81d4fa', textDecoration: 'none' }}>Facebook</a></li>
          <li><a href="https://www.twitter.com/yourteam" target="_blank" rel="noopener noreferrer" style={{ color: '#81d4fa', textDecoration: 'none' }}>Twitter</a></li>
          <li><a href="https://www.linkedin.com/yourteam" target="_blank" rel="noopener noreferrer" style={{ color: '#81d4fa', textDecoration: 'none' }}>LinkedIn</a></li>
        </ul>
      </footer>
    </div>
  );
};

export default HomePage;

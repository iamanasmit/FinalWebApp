// Import necessary libraries
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css";

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // For advanced animations

const HomePage = () => {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{
        background:
          "linear-gradient(135deg, #1f1c2c, #3b0a45, #a24d90, #f4e041)",
        color: "#ffffff",
        padding: "40px 20px",
        height: "100vh",
        width: "100vw",
        overflowX: "hidden",
        position: "relative",
        paddingTop: "60px", // Add padding to the top
      }}
    >
      {/* Logo with Framer Motion */}
      <motion.img
        src="src/pages/logo.png"
        alt="Data Analysis and Visualization Team Logo"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        style={{
          width: "150px",
          marginBottom: "30px",
          marginTop: "300px", // Reduced margin for better positioning
          filter: "brightness(0) invert(1)",
          objectFit: "contain",
        }}
      />

      {/* Team and Project Description */}
      <motion.h1
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        style={{
          color: "#ffb74d",
          marginBottom: "10px",
          fontSize: "3rem",
          fontWeight: "bold",
          textShadow: "3px 5px 8px rgba(0, 0, 0, 0.5)", // More prominent shadow
        }}
      >
        Data Analysis and Visualization Team
      </motion.h1>

      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        style={{
          color: "#ffa726",
          marginBottom: "20px",
          fontSize: "1.8rem",
          fontWeight: "500",
        }}
      >
        Grading Stats Report
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        style={{
          maxWidth: "700px",
          marginBottom: "40px",
          lineHeight: "1.6",
          textAlign: "center",
          fontSize: "1.2rem",
          fontFamily: "roboto",
        }}
      >
        Explore detailed statistics and trends across various IIT Bombay
        courses. From AI-ML to optimization, our team provides in-depth analysis
        for enhanced academic transparency.
      </motion.p>

      {/* Navigation Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="p-4 rounded-3 shadow-lg"
        style={{
          backgroundColor: "#2b2b2b",
          boxShadow: `0 10px 25px rgba(0, 0, 0, 0.4), 0 0 20px rgba(81, 175, 234, 0.5), 0 0 15px rgba(255, 193, 7, 0.5)`,
          width: "70vw",
        }}
      >
        <ul className="list-unstyled w-100">
          {[
            { to: "/generic-overview", text: "Generic Overview Page" },
            {
              to: "/grading-related-projects",
              text: "Grading related projects",
            },
            { to: "/test-page", text: "Test Page" },
            { to: "/good-grading-courses", text: "Good Grading Courses" },
            { to: "/ai-ml-optimization", text: "AI/ML or Optimization" },
          ].map((item, index) => (
            <li key={index} className="mb-3">
              <Link
                to={item.to}
                className="d-block text-decoration-none py-3 px-4 text-center"
                style={{
                  color: "#81d4fa",
                  fontSize: "20px", // Adjusted font size for a more formal look
                  borderRadius: "12px",
                  backgroundColor: "#333",
                  transition: "all 0.3s ease",
                  boxShadow: `0 4px 15px rgba(0, 0, 0, 0.2), 0 0 10px rgba(81, 175, 234, 0.3), 0 0 10px rgba(255, 82, 82, 0.4)`,
                  fontFamily: "Georgia, serif", // Changed font family to a more formal one
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = "#29b6f6";
                  e.target.style.color = "#ffffff";
                  e.target.style.transform = "scale(1.05)";
                  e.target.style.boxShadow = `0 8px 25px rgba(0, 0, 0, 0.3), 0 0 20px rgba(81, 175, 234, 0.6), 0 0 20px rgba(255, 82, 82, 0.5)`;
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = "#333";
                  e.target.style.color = "#81d4fa";
                  e.target.style.transform = "scale(1)";
                  e.target.style.boxShadow = `0 4px 15px rgba(0, 0, 0, 0.2), 0 0 10px rgba(81, 175, 234, 0.3), 0 0 10px rgba(255, 82, 82, 0.4)`;
                }}
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Social Media Links */}
      <footer className="mt-5 text-center" style={{ color: "#bdbdbd" }}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.3, ease: "easeOut" }}
        >
          Visit us on:
        </motion.p>
        <motion.ul
          className="list-unstyled d-flex justify-content-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        >
          {[
            { href: "https://www.facebook.com/yourteam", label: "Facebook" },
            { href: "https://www.twitter.com/yourteam", label: "Twitter" },
            { href: "https://www.linkedin.com/yourteam", label: "LinkedIn" },
          ].map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
                style={{
                  color: "#81d4fa",
                  transition: "color 0.3s",
                  fontSize: "1.2rem",
                }}
                onMouseOver={(e) => (e.target.style.color = "#29b6f6")}
                onMouseOut={(e) => (e.target.style.color = "#81d4fa")}
              >
                {item.label}
              </a>
            </li>
          ))}
        </motion.ul>
      </footer>
    </div>
  );
};

export default HomePage;

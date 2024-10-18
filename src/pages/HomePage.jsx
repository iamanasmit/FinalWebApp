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
        background: "linear-gradient(135deg, #1c1b29, #0d0c22)",
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
          marginTop: "250px", // Add margin to create space from the top
          filter: "brightness(0) invert(1)",
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
          fontSize: "2.5rem",
          fontWeight: "bold",
          textShadow: "2px 4px 6px rgba(0, 0, 0, 0.4)", // Slight shadow for text
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
          fontSize: "1.1rem",
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat laborum, dolor necessitatibus excepturi vel nemo praesentium tempora ab esse iusto alias hic molestiae et, animi illo iste corporis soluta unde. Blanditiis iure corporis dolor enim cumque quisquam adipisci soluta officia.
      </motion.p>

      {/* Navigation Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="p-4 rounded-3 shadow-lg"
        style={{
          backgroundColor: "#272727",
          boxShadow: `
            0 8px 25px rgba(0, 0, 0, 0.4),      /* Dark shadow */
            0 0 20px rgba(81, 175, 234, 0.5),   /* Blue glow */
            0 0 15px rgba(255, 193, 7, 0.5)     /* Yellow glow */
          `,
          width: "60vw",
        }}
      >
        <ul className="list-unstyled w-100">
          {[
            { to: "/generic-overview", text: "Generic Overview Page" },
            {
              to: "/grading-related-projects",
              text: "Grading related projects",
            },
            { to: "/ai-ml-courses", text: "ML/AI/Optimization" },
            { to: "/good-grading-courses", text: "Good Grading Courses" },
          ].map((item, index) => (
            <li key={index} className="mb-3">
              <Link
                to={item.to}
                className="d-block text-decoration-none py-3 px-4 text-center"
                style={{
                  color: "#81d4fa",
                  fontSize: "22px",
                  borderRadius: "12px",
                  backgroundColor: "#333",
                  transition: "all 0.3s ease",
                  boxShadow: `
                    0 4px 15px rgba(0, 0, 0, 0.2),   /* Default shadow */
                    0 0 10px rgba(81, 175, 234, 0.3), /* Soft blue glow */
                    0 0 10px rgba(255, 82, 82, 0.4)   /* Soft red glow */
                  `,
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = "#29b6f6";
                  e.target.style.color = "#ffffff";
                  e.target.style.transform = "scale(1.05)";
                  e.target.style.boxShadow = `
                    0 8px 25px rgba(0, 0, 0, 0.3),    /* Default shadow */
                    0 0 20px rgba(81, 175, 234, 0.6), /* Stronger blue glow */
                    0 0 20px rgba(255, 82, 82, 0.5)   /* Stronger red glow */
                  `;
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = "#333";
                  e.target.style.color = "#81d4fa";
                  e.target.style.transform = "scale(1)";
                  e.target.style.boxShadow = `
                    0 4px 15px rgba(0, 0, 0, 0.2),   /* Default shadow */
                    0 0 10px rgba(81, 175, 234, 0.3), /* Soft blue glow */
                    0 0 10px rgba(255, 82, 82, 0.4)   /* Soft red glow */
                  `;
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
          Connect with us:
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

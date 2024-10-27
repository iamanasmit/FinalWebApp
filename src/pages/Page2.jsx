import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Plot from "react-plotly.js";
import { motion } from "framer-motion"; // Import motion

const Page2 = () => {
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [selectedYear, setSelectedYear] = useState("2020");

  useEffect(() => {
    AOS.init({
      delay: 200,
      duration: 1000,
      easing: "ease-in-out",
    });

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setGraphSize({ width, height });
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial call to set sizes

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [graphSize, setGraphSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  const dashboardStyles = {
    background: "linear-gradient(135deg, #1f1c2c, #928dab)",
    color: "#ffffff",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    height: "100vh",
    width: "100vw",
    boxSizing: "border-box",
    overflowX: "hidden",
    position: "relative",
  };
  
  

  
  const titleStyles = {
    fontSize: "24px",
    marginBottom: "20px",
    color: "#ffffff",
    position: "fixed",
    top: "20px",
    left: "20px",
    zIndex: 1000,
  };

  useEffect(() => {
    fetch("src\\pages\\seminar_records_2020.json") // Adjust this path to your file location
      .then((response) => response.json())
      .then((jsonData) => {
        setData(jsonData);
      })
      .catch((error) => {
        console.error("Error loading JSON data:", error);
      });
  }, []);

  useEffect(() => {
    fetch("src\\pages\\records_2021.json") // Adjust this path to your file location
      .then((response) => response.json())
      .then((jsonData) => {
        setData1(jsonData);
      })
      .catch((error) => {
        console.error("Error loading JSON data for 2021:", error);
      });
  }, []);

  useEffect(() => {
    fetch("src\\pages\\records_2022.json") // Adjust this path to your file location
      .then((response) => response.json())
      .then((jsonData) => {
        setData2(jsonData);
      })
      .catch((error) => {
        console.error("Error loading JSON data for 2022:", error);
      });
  }, []);

  useEffect(() => {
    fetch("src\\pages\\records_2023.json") // Adjust this path to your file location
      .then((response) => response.json())
      .then((jsonData) => {
        setData3(jsonData);
      })
      .catch((error) => {
        console.error("Error loading JSON data for 2023:", error);
      });
  }, []);

  const cardStyles = {
    backgroundColor: "#2b2a3a",
    borderRadius: "10px",
    padding: "20px",
    flex: "1 1 22%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minWidth: "200px",
  };

  const chartsSectionStyles = {
    marginBottom: "20px",
    display: "flex",
    justifyContent: "space-between",
    gap: "20px",
    flexWrap: "wrap",
    marginTop: "80px",
  };

  const chartContentStyles = {
    backgroundColor: "#393850",
    borderRadius: "8px",
    height: "60vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    flex: 1,
  };

  const h2Styles = {
    textAlign: "center",
    margin: "0",
  };
  const logoStyles = {
    position: "fixed",
    top: "20px",
    right: "20px",
    zIndex: 1000,
    width: "50px",
    height: "50px",
  };
  const darkThemeLayout = (title) => ({
    title: {
      text: title,
      font: {
        color: "#ffffff",
      },
    },
    paper_bgcolor: "#1c1b29", // Background color of the entire chart
    plot_bgcolor: "#2b2a3a", // Background color of the plot
    font: {
      color: "#ffffff", // Default text color
    },
    xaxis: {
      color: "#ffffff", // Axis labels color
      tickcolor: "#ffffff",
      gridcolor: "#444444", // Gridline color for a subtle contrast
    },
    yaxis: {
      color: "#ffffff",
      tickcolor: "#ffffff",
      gridcolor: "#444444",
    },
    autosize: true,  // Enable autosize to allow Plotly to adapt to container
  });

  const plotConfig = {
    scrollZoom: false,       // Disables scrolling to zoom
    displayModeBar: false,   // Hides the mode bar (optional)
    editable: false,         // Disables any edits like dragging, zooming, etc.
  };

  const getGraph5Data = () => {
    switch (selectedYear) {
      case "2020":
        return data;
      case "2021":
        return data1;
      case "2022":
        return data2;
      case "2023":
        return data3;
      default:
        return [];
    }
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  return (
    <div style={dashboardStyles}>
      <h1 style={titleStyles}>Test Page</h1>
      <img src='src/pages/logo.png' alt="Data Analysis and Visualization Team Logo" style={logoStyles} />
      <div style={chartsSectionStyles}>
        <motion.div 
          style={cardStyles}
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
        >
          <h2 style={h2Styles}>Graph 1</h2>
          <div style={chartContentStyles}>
            <Plot
              data={[{
                x: data.map(d => d['Course Code']),
                y: data.map(d => d['Average Grade']),
                type: "scatter",
                mode: "markers",
                marker: { color: "rgb(255, 99, 132)" }
              }]}
              layout={darkThemeLayout("Average Grades by Course Code for 2020")}
              style={{ width: "100%", height: "100%" }}
              config={plotConfig}
              useResizeHandler
            />
          </div>
        </motion.div>
        <motion.div 
          style={cardStyles}
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 style={h2Styles}>Graph 2</h2>
          <div style={chartContentStyles}>
            <Plot
              data={[{
                x: data1.map(d => d['Course Code']),
                y: data1.map(d => d['Average Grade']),
                type: "scatter",
                mode: "markers",
                marker: { color: "rgb(255, 99, 132)" }
              }]}
              layout={darkThemeLayout("Average Grades by Course Code for 2021")}
              style={{ width: "100%", height: "100%" }}
              config={plotConfig}
              useResizeHandler
            />
          </div>
        </motion.div>
      </div>
      <div style={chartsSectionStyles}>
        <motion.div 
          style={cardStyles}
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 style={h2Styles}>Graph 3</h2>
          <div style={chartContentStyles}>
            <Plot
              data={[{
                x: data2.map(d => d['Course Code']),
                y: data2.map(d => d['Average Grade']),
                type: "scatter",
                mode: "markers",
                marker: { color: "rgb(255, 99, 132)" }
              }]}
              layout={darkThemeLayout("Average Grades by Course Code for 2022")}
              style={{ width: "100%", height: "100%" }}
              config={plotConfig}
              useResizeHandler
            />
          </div>
        </motion.div>
        <motion.div 
          style={cardStyles}
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 style={h2Styles}>Graph 4</h2>
          <div style={chartContentStyles}>
            <Plot
              data={[{
                x: data3.map(d => d['Course Code']),
                y: data3.map(d => d['Average Grade']),
                type: "scatter",
                mode: "markers",
                marker: { color: "rgb(255, 99, 132)" }
              }]}
              layout={darkThemeLayout("Average Grades by Course Code for 2023")}
              style={{ width: "100%", height: "100%" }}
              config={plotConfig}
              useResizeHandler
            />
          </div>
        </motion.div>
      </div>
      <div style={chartsSectionStyles}>
        <motion.div 
          style={cardStyles}
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 style={h2Styles}>Graph 5</h2>
          <div style={{ ...chartContentStyles, flexDirection: "column" }}>
            <select 
              value={selectedYear}
              onChange={handleYearChange}
              style={{
                marginBottom: "10px",
                marginTop: "10px",
                padding: "10px",
                borderRadius: "5px",
                border: "none",
                backgroundColor: "#2b2a3a",
                color: "#ffffff",
                fontSize: "16px",
              }}
            >
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
            </select>

            <Plot
              data={[{
                x: getGraph5Data().map(d => d['Course Code']),
                y: getGraph5Data().map(d => d['Average Grade']),
                type: "scatter",
                mode: "markers",
                marker: { color: "rgb(23, 190, 207)", size: 12 },
              }]}
              layout={darkThemeLayout(`Average Grades by Course Code for ${selectedYear}`)}
              style={{ width: "100%", height: "100%" }}
              config={plotConfig}
              useResizeHandler
              className="plotly-graph"
              divId="plotly-graph"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Page2;



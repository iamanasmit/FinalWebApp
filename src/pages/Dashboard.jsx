import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Plot from "react-plotly.js";

const Dashboard = () => {
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

  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [selectedYear, setSelectedYear] = useState("2020");

  useEffect(() => {
    // Load the JSON file with course codes and average grades
    fetch("src\\pages\\data\\Percentage_APs_2020.json") // Adjust this path to your file location
      .then((response) => response.json())
      .then((jsonData) => {
        setData(jsonData);
      })
      .catch((error) => {
        console.error("Error loading JSON data:", error);
      });
  }, []);

  useEffect(() => {
    // Load the JSON file with course codes and average grades
    fetch("src\\pages\\data\\Percentage_APs_2021.json") // Adjust this path to your file location
      .then((response) => response.json())
      .then((jsonData) => {
        setData1(jsonData);
      })
      .catch((error) => {
        console.error("Error loading JSON data for 2021:", error);
      });
  }, []);

  useEffect(() => {
    // Load the JSON file with course codes and average grades
    fetch("src\\pages\\data\\Percentage_APs_2022.json") // Adjust this path to your file location
      .then((response) => response.json())
      .then((jsonData) => {
        setData2(jsonData);
      })
      .catch((error) => {
        console.error("Error loading JSON data for 2022:", error);
      });
  }, []);

  useEffect(() => {
    // Load the JSON file with course codes and average grades
    fetch("src\\pages\\data\\Percentage_APs_2023.json") // Adjust this path to your file location
      .then((response) => response.json())
      .then((jsonData) => {
        setData3(jsonData);
      })
      .catch((error) => {
        console.error("Error loading JSON data for 2023:", error);
      });
  }, []);

  const getGraphDepts = () => {
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

  const titleStyles = {
    fontSize: "24px",
    marginBottom: "20px",
    color: "#ffffff",
    position: "fixed",
    top: "20px",
    left: "20px",
    zIndex: 1000,
  };

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

  // Dark theme layout for Plotly
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

  return (
    <div style={dashboardStyles}>
      <h1 style={titleStyles}>Test Page</h1>

      {/* Percent APs given by department */}
      <div style={chartsSectionStyles}>
        <div style={cardStyles}>
          <h2 style={h2Styles}>Percentage APs given by Department</h2>
          <div style={{ ...chartContentStyles, flexDirection: "column" }}>
            {/* Dropdown for Year Selection */}
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
              data={[
                {
                  x: getGraphDepts().map(d => d['X']),
                  y: getGraphDepts().map(d => d['Y']),
                  type: "bar",
                  mode: "markers",
                  marker: { color: "rgb(23, 190, 207)", size: 12 },
                },
              ]}
              layout={darkThemeLayout(`Average Grades by Department for ${selectedYear}`)}
              style={{ width: "100%", height: "100%" }}
              config={plotConfig}
              useResizeHandler
              className="plotly-graph"
              divId="plotly-graph"
            />
          </div>
        </div>
      </div>

      <div style={chartsSectionStyles}>
        <div style={cardStyles}>
          <h2 style={h2Styles}>Yearwise grading stats</h2>
          <div style={chartContentStyles}>
            <Plot
              data={[
                {
                  x: ["2020", "2021", "2022", "2023"],
                  y: [8.2186824115, 7.9254884772, 7.9042077959, 7.8633442403],
                  type: "bar",
                  marker: {
                    colors: ["#ff6347", "#1e90ff", "#32cd32"],
                  },
                },
              ]}
              layout={darkThemeLayout("Pie Chart")}
              style={{ width: "100%", height: "100%" }} // Fill container
              config={plotConfig}
              useResizeHandler
              className="plotly-graph"
              divId="plotly-graph"
            />
          </div>
        </div>
        <div style={cardStyles}>
          <h2 style={h2Styles}>Graph 4</h2>
          <div style={chartContentStyles}>
            <Plot
              data={[
                {
                  z: [[1, 20, 30], [20, 1, 60], [30, 60, 1]],
                  type: "heatmap",
                  colorscale: "Viridis",
                },
              ]}
              layout={darkThemeLayout("Heatmap")}
              style={{ width: "100%", height: "100%" }} // Fill container
              config={plotConfig}
              useResizeHandler
              className="plotly-graph"
              divId="plotly-graph"
            />
          </div>
        </div>
      </div>
      <div style={chartsSectionStyles}>
        <div style={cardStyles}>
          <h2 style={h2Styles}>Graph 5</h2>
          <div style={chartContentStyles}>
            <Plot
              data={[
                {
                  type: "scatter3d",
                  mode: "markers",
                  x: [1, 2, 3, 4],
                  y: [5, 6, 7, 8],
                  z: [9, 10, 11, 12],
                  marker: { color: "rgb(23, 190, 207)", size: 12 },
                },
              ]}
              layout={darkThemeLayout("3D Scatter Plot")}
              style={{ width: "100%", height: "100%" }} // Fill container
              config={plotConfig}
              useResizeHandler
              className="plotly-graph"
              divId="plotly-graph"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

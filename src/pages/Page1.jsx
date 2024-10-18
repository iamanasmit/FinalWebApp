import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Plot from "react-plotly.js";

const Page1 = () => {
  useEffect(() => {
    AOS.init({
      delay: 200,
      duration: 1000,
      easing: "ease-in-out",
      once: true, // Animation occurs only once when scrolling down
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

  const [graphSize, setGraphSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const dashboardStyles = {
    backgroundColor: "#1e1c3a", // Dark background with a slight blue tint
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
    fontSize: "28px",
    marginBottom: "20px",
    color: "#ffcc00", // Bright accent color for title
    position: "fixed",
    top: "20px",
    left: "20px",
    zIndex: 1000,
  };

  const cardStyles = {
    backgroundColor: "#2c2b4f", // Darker background for cards
    borderRadius: "12px",
    padding: "20px",
    flex: "1 1 22%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minWidth: "250px",
    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.5)", // Softer shadow for depth
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
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
    backgroundColor: "#3a384e",
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
    color: "#ffcc00", // Accent color for headings
    marginBottom: "10px",
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
    plot_bgcolor: "#2c2b4f", // Background color of the plot
    font: {
      color: "#ffffff", // Default text color
    },
    xaxis: {
      color: "#ffffff", // Axis labels color
      tickcolor: "#ffffff",
      gridcolor: "#444444", // Gridline color for subtle contrast
    },
    yaxis: {
      color: "#ffffff",
      tickcolor: "#ffffff",
      gridcolor: "#444444",
    },
    autosize: true, // Enable autosize to allow Plotly to adapt to container
  });

  const plotConfig = {
    scrollZoom: false, // Disables scrolling to zoom
    displayModeBar: false, // Hides the mode bar (optional)
    editable: false, // Disables any edits like dragging, zooming, etc.
  };

  return (
    <div style={dashboardStyles}>
      <h1 style={titleStyles}>Course Statistics Dashboard</h1>
      <div style={chartsSectionStyles}>
        <div
          style={cardStyles}
          data-aos="flip-up"
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "0 12px 30px rgba(0, 0, 0, 0.6)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 6px 20px rgba(0, 0, 0, 0.5)";
          }}
        >
          <h2 style={h2Styles}>Graph 1</h2>
          <div style={chartContentStyles}>
            <Plot
              data={[
                {
                  x: [1, 2, 3, 4],
                  y: [10, 15, 13, 17],
                  type: "scatter",
                  mode: "lines+markers",
                  marker: { color: "red" },
                },
              ]}
              layout={darkThemeLayout("Line Chart")}
              style={{ width: "100%", height: "100%" }} // Fill container
              config={plotConfig}
              useResizeHandler
              className="plotly-graph"
              divId="plotly-graph-1"
            />
          </div>
        </div>
        <div style={cardStyles} data-aos="flip-up">
          <h2 style={h2Styles}>Graph 2</h2>
          <div style={chartContentStyles}>
            <Plot
              data={[
                {
                  x: ["Apples", "Bananas", "Cherries"],
                  y: [10, 20, 30],
                  type: "bar",
                  marker: { color: "#00aaff" },
                },
              ]}
              layout={darkThemeLayout("Bar Chart")}
              style={{ width: "100%", height: "100%" }} // Fill container
              config={plotConfig}
              useResizeHandler
              className="plotly-graph"
              divId="plotly-graph-2"
            />
          </div>
        </div>
      </div>
      <div style={chartsSectionStyles}>
        <div style={cardStyles} data-aos="flip-up">
          <h2 style={h2Styles}>Graph 3</h2>
          <div style={chartContentStyles}>
            <Plot
              data={[
                {
                  labels: ["Red", "Blue", "Green"],
                  values: [10, 20, 30],
                  type: "pie",
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
              divId="plotly-graph-3"
            />
          </div>
        </div>
        <div style={cardStyles} data-aos="flip-up">
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
              divId="plotly-graph-4"
            />
          </div>
        </div>
      </div>
      <div style={chartsSectionStyles}>
        <div style={cardStyles} data-aos="flip-up">
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
              divId="plotly-graph-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page1;

import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import Plot from "react-plotly.js";
import { MathJax, MathJaxContext } from "better-react-mathjax";

const Page3 = () => {
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setGraphSize({ width, height });
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [graphSize, setGraphSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [data, setData] = useState([]);
  const [selectedCourseCode, setSelectedCourseCode] = useState(""); // State for dropdown
  const [showInsights, setShowInsights] = useState({}); // State to track visibility of insights

  useEffect(() => {
    fetch("good_grading_courses.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching JSON data:", error));
  }, []);

  const handleCourseCodeChange = (event) => {
    setSelectedCourseCode(event.target.value);
  };

  const [hoveredButtonIndex, setHoveredButtonIndex] = useState(null); // State to track hovered button

  const buttonStyles = {
    marginTop: "10px",
    padding: "10px",
    borderRadius: "5px",
    backgroundColor: "#444444", // Darker button background
    color: "#ffffff",
    transition: "background-color 0.3s ease, transform 0.3s ease",
  };
  const toggleInsights = (index) => {
    setShowInsights((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const CBSsummary = () => (
    <div
      style={{
        color: "#ffffff",
        margin: "20px 0",
        padding: "20px",
        backgroundColor: "#2b2a3a",
        borderRadius: "10px",
      }}
    >
      <h2>What is CBS?</h2>
      <p>
        CBS (CPI Booster Score) is a metric designed to help identify courses
        that have a higher potential to improve a student's CPI (Cumulative
        Performance Index). It considers multiple factors:
      </p>
      <ul>
        <li>
          <strong>Grade Distribution:</strong> Courses with more high grades
          (APs, AAs, ABs) receive higher CBS scores.
        </li>
        <li>
          <strong>Enrollment Numbers:</strong> Courses with higher enrollment
          have reduced score penalties, as they offer more reliable grade
          distributions.
        </li>
        <li>
          <strong>Weighted Average by Semester:</strong> Recent semesters
          contribute more to CBS than older semesters, ensuring the score
          reflects current grading trends.
        </li>
      </ul>
      <h3>CBS Formula</h3>
      <MathJaxContext>
        <MathJax>
          {`\\[ F(X, N, \\sigma^2, N_0, k) = \\frac{X}{\\left(1 + \\left(10^{\\frac{N}{N_0}}\\right) \\sigma^2\\right) \\left(1 + \\frac{\\frac{N_0}{k}}{N_0 + N k} L\\right)} \\]`}
        </MathJax>
        <MathJax>{`\\[ L = -\\ln\\left(\\frac{N}{N_0}\\right) \\]`}</MathJax>
        <MathJax>
          {`\\[ X = \\frac{10 \\cdot (\\text{no. of APs}) + 10 \\cdot (\\text{no. of AAs}) + 9 \\cdot (\\text{no. of ABs})}{\\text{Total grades awarded}} \\]`}
        </MathJax>
      </MathJaxContext>
    </div>
  );

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

  const cardStyles = {
    backgroundColor: "#2b2a3a",
    borderRadius: "10px",
    padding: "20px",
    flex: "1 1 22%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minWidth: "200px",
    transition: "transform 0.3s, box-shadow 0.3s", // Added transition for smooth hover effects
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

  const insightsSectionStyles = {
    marginTop: "10px",
    padding: "10px",
    backgroundColor: "#2b2a3a",
    borderRadius: "5px",
    color: "#ffffff",
  };

  const h2Styles = {
    textAlign: "center",
    margin: "0",
  };

  // Extract CBS scores and course codes for charts
  const cbsScores = data.map((item) => item.CBS);
  const courseCodes = data.map((item) => item["Course Code"]);

  // Define insights for each graph
  const insights = [
    "The histogram indicates the distribution of CBS scores among various courses. A larger concentration of scores at the higher end suggests a significant number of courses have favorable grading patterns, which may positively impact student performance.",
    "The treemap visualizes the relationship between course codes and their respective CBS scores. This allows for easy identification of high-scoring courses, suggesting they might be valuable for students looking to enhance their CPI.",
    "The scatter plot illustrates the CBS scores for various course codes, providing insights into individual course performance. Points that are notably higher in CBS suggest courses that may yield significant benefits for students aiming to improve their overall academic standing.",
  ];

  const darkThemeLayout = (title, xLabel = "", yLabel = "") => ({
    title: {
      text: title,
      font: {
        color: "#ffffff",
      },
    },
    paper_bgcolor: "#1c1b29",
    plot_bgcolor: "#2b2a3a",
    font: {
      color: "#ffffff",
    },
    xaxis: {
      title: {
        text: xLabel,
        font: {
          color: "#ffffff",
        },
      },
      color: "#ffffff",
      tickcolor: "#ffffff",
      gridcolor: "#444444",
    },
    yaxis: {
      title: {
        text: yLabel,
        font: {
          color: "#ffffff",
        },
      },
      color: "#ffffff",
      tickcolor: "#ffffff",
      gridcolor: "#444444",
    },
    autosize: true,
  });
  

  const plotConfig = {
    scrollZoom: false,
    displayModeBar: false,
    editable: false,
  };

  // Component to explain CBS calculation
  const logoStyles = {
    position: "fixed",
    top: "20px",
    right: "20px",
    zIndex: 1000,
    width: "50px",
    height: "50px",
  };

  const buttonHoverStyles = {
    backgroundColor: "#666666", // Lighter shade for hover
    transform: "scale(1.05)", // Slightly larger on hover
  };

  // Updated histogram color for dark theme
  const histogramColor = "#66c0f4"; // Light blue color for histogram

  return (
    <div style={dashboardStyles}>
      <h1 style={titleStyles}>Good Grading Courses</h1>
      <img
        src="src/pages/logo.png"
        alt="Data Analysis and Visualization Team Logo"
        style={logoStyles}
      />
      <CBSsummary data-aos="flip-up" />

      <div style={chartsSectionStyles}>
        <div style={cardStyles}>
          <h2 style={h2Styles}>CBS Score Distribution</h2>
          <div style={chartContentStyles}>
            <Plot
              data={[
                {
                  x: cbsScores,
                  type: "histogram",
                  marker: { color: "#ffa500" },
                  xaxis: "x",
                  yaxis: "y",
                },
              ]}
              layout={darkThemeLayout("Distribution of CBS Scores", "CBS Score", "Count")}
              style={{ width: "100%", height: "100%" }}
              config={plotConfig}
              useResizeHandler
              className="plotly-graph"
              divId="plotly-histogram"
            />
          </div>
          <button
            onClick={() => toggleInsights(0)} // Index 0 for histogram
            style={{
              ...buttonStyles,
              ...buttonHoverStyles,
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#666666"; // Change to hover color
              e.target.style.transform = "scale(1.05)"; // Scale on hover
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#444444"; // Reset to original color
              e.target.style.transform = "scale(1)"; // Reset scale
            }}
          >
            Show Insights
          </button>
          {showInsights[0] && ( // Show insights for index 0
            <div style={insightsSectionStyles}>
              <p>{insights[0]}</p>
            </div>
          )}
        </div>
      </div>

      <div style={chartsSectionStyles}>
        <div style={cardStyles}>
          <h2 style={h2Styles}>CBS Score vs. Course Code</h2>
          <div style={chartContentStyles}>
            <Plot
              data={[
                {
                  type: "treemap",
                  labels: courseCodes,
                  values: cbsScores,
                  parents: Array(courseCodes.length).fill(""),
                  textinfo: "label+value",
                  texttemplate: "%{label}<br>%{value:.2f}",
                  marker: {
                    colors: cbsScores,
                    colorscale: "Viridis",
                  },
                },
              ]}
              layout={darkThemeLayout("Top-30 Courses with High CBS")}
              style={{ width: "100%", height: "100%" }}
              config={plotConfig}
              useResizeHandler
              className="plotly-graph"
              divId="plotly-treemap"
            />
          </div>
          <button
            onClick={() => toggleInsights(1)} // Index 1 for treemap
            style={{
              ...buttonStyles,
              ...buttonHoverStyles,
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#666666"; // Change to hover color
              e.target.style.transform = "scale(1.05)"; // Scale on hover
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#444444"; // Reset to original color
              e.target.style.transform = "scale(1)"; // Reset scale
            }}
          >
            Show Insights
          </button>
          {showInsights[1] && ( // Show insights for index 1
            <div style={insightsSectionStyles}>
              <p>{insights[1]}</p>
            </div>
          )}
        </div>
      </div>

      <div style={chartsSectionStyles}>
        <div style={cardStyles}>
          <h2 style={h2Styles}>CBS Score vs. Course Code</h2>
          <div style={chartContentStyles}>
            <Plot
              data={[
                {
                  x: courseCodes,
                  y: cbsScores,
                  type: "scatter",
                  mode: "markers",
                  marker: { color: "#ffa500", size: 10 },
                },
              ]}
              layout={darkThemeLayout(
                "Scatter Plot of CBS Score vs. Course Code", 
              )}
              style={{ width: "100%", height: "100%" }}
              config={plotConfig}
              useResizeHandler
              className="plotly-graph"
              divId="plotly-scatter"
            />
          </div>
          <button
            onClick={() => toggleInsights(2)} // Index 2 for scatter plot
            style={{
              ...buttonStyles,
              ...buttonHoverStyles,
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#666666"; // Change to hover color
              e.target.style.transform = "scale(1.05)"; // Scale on hover
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#444444"; // Reset to original color
              e.target.style.transform = "scale(1)"; // Reset scale
            }}
          >
            Show Insights
          </button>
          {showInsights[2] && ( // Show insights for index 2
            <div style={insightsSectionStyles}>
              <p>{insights[2]}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page3;

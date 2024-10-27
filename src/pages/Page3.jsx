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

  useEffect(() => {
    fetch("good_grading_courses.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching JSON data:", error));
  }, []);

  // Component to explain CBS calculation
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
          {`\\[
          F(X, N, \\sigma^2, N_0, k) = \\frac{X}{\\left(1 + \\left(10^{\\frac{N}{N_0}}\\right) \\sigma^2\\right) \\left(1 + \\frac{\\frac{N_0}{k}}{N_0 + N k} L\\right)}
          \\]`}
        </MathJax>
        <MathJax>
          {`\\[
          L = -\\ln\\left(\\frac{N}{N_0}\\right)
          \\]`}
        </MathJax>
        <MathJax>
          {`\\[
          X = \\frac{10 \\cdot (\\text{no. of APs}) + 10 \\cdot (\\text{no. of AAs}) + 9 \\cdot (\\text{no. of ABs})}{\\text{Total grades awarded}}
          \\]`}
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

  // Extract CBS scores and course codes for charts
  const cbsScores = data.map((item) => item.CBS);
  const courseCodes = data.map((item) => item["Course Code"]);

  const darkThemeLayout = (title) => ({
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
      color: "#ffffff",
      tickcolor: "#ffffff",
      gridcolor: "#444444",
    },
    yaxis: {
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

  return (
    <div style={dashboardStyles}>
      <h1 style={titleStyles}>Good Grading Courses</h1>
      <CBSsummary data-aos="flip-up"/>
      <div style={chartsSectionStyles} >
        <div style={cardStyles}>
          <h2 style={h2Styles}>CBS Scores Histogram</h2>
          <div style={chartContentStyles}>
            <Plot
              data={[
                {
                  x: cbsScores,
                  type: "histogram",
                  marker: { color: "#00aaff" },
                },
              ]}
              layout={darkThemeLayout("Histogram of CBS Scores")}
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
                  texttemplate: "%{label}<br>%{value:.2f}", // Round values to 2 decimal places
                  marker: {
                    colors: cbsScores,
                    colorscale: "Viridis", // You can choose from different colorscales like 'Viridis', 'Rainbow', etc.
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
        </div>
      </div>
      <div style={chartsSectionStyles}>
        <div style={cardStyles} >
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
                "Scatter Plot of CBS Score vs. Course Code"
              )}
              style={{ width: "100%", height: "100%" }}
              config={plotConfig}
              useResizeHandler
              className="plotly-graph"
              divId="plotly-scatter"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page3;

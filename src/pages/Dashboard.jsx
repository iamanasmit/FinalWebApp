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
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [selectedYear, setSelectedYear] = useState("2020");

  const [insightVisibility, setInsightVisibility] = useState({
    graph1: false,
    graph2: false,
    graph3: false,
    graph4: false,
  });

  useEffect(() => {
    fetch("Percentage_APs_2020.json") // Adjust this path to your file location
      .then((response) => response.json())
      .then((jsonData) => {
        setData(jsonData);
      })
      .catch((error) => {
        console.error("Error loading JSON data:", error);
      });
  }, []);

  useEffect(() => {
    fetch("Percentage_APs_2021.json") // Adjust this path to your file location
      .then((response) => response.json())
      .then((jsonData) => {
        setData1(jsonData);
      })
      .catch((error) => {
        console.error("Error loading JSON data for 2021:", error);
      });
  }, []);

  useEffect(() => {
    fetch("Percentage_APs_2022.json") // Adjust this path to your file location
      .then((response) => response.json())
      .then((jsonData) => {
        setData2(jsonData);
      })
      .catch((error) => {
        console.error("Error loading JSON data for 2022:", error);
      });
  }, []);

  useEffect(() => {
    fetch("Percentage_APs_2023.json") // Adjust this path to your file location
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

  const logoStyles = {
    position: "fixed",
    top: "20px",
    right: "20px",
    zIndex: 1000,
    width: "50px",
    height: "50px",
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const toggleInsights = (graph) => {
    setInsightVisibility((prevState) => ({
      ...prevState,
      [graph]: !prevState[graph],
    }));
  };

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
    transition: "transform 0.3s, box-shadow 0.3s",
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
    backgroundColor: "#2b2a3a",
    padding: "10px",
    borderRadius: "5px",
  };

  const h2Styles = {
    textAlign: "center",
    margin: "0",
  };

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

  return (
    <div style={dashboardStyles}>
      <h1 style={titleStyles}>Grading Related Projects</h1>
      <img src="logo.png" alt="Data Analysis and Visualization Team Logo" style={logoStyles} />

      <div style={chartsSectionStyles}>
        <div
          style={cardStyles}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <h2 style={h2Styles}>Percentage APs given by Department</h2>
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
                x: getGraphDepts().map((d) => d["X"]),
                y: getGraphDepts().map((d) => d["Y"]),
                type: "bar",
                mode: "markers",
                marker: { color: "rgb(23, 190, 207)", size: 12 },
              }]}
              layout={darkThemeLayout(`Average Grades by Department for ${selectedYear}`, "Department", "Average Grade")}
              style={{ width: "100%", height: "100%" }}
              config={plotConfig}
              useResizeHandler
              className="plotly-graph"
              divId="plotly-graph"
            />

            <button onClick={() => toggleInsights("graph1")} style={{ marginTop: "10px", backgroundColor: "#1e90ff", color: "#fff", padding: "10px", border: "none", borderRadius: "5px" }}>
              {insightVisibility.graph1 ? "Hide Insights" : "Show Insights"}
            </button>

            {insightVisibility.graph1 && (
              <div style={insightsSectionStyles}>
                <h3>Insights:</h3>
                <p>
                  This bar chart illustrates the percentage of APs awarded across different departments for the year {selectedYear}. 
                  High percentages indicate departments where students have achieved notable performance, 
                  while lower percentages may highlight areas for improvement.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div style={chartsSectionStyles}>

        {/* Graph 2 */}
        <div
          style={cardStyles}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <h2 style={h2Styles}>Yearwise grading stats</h2>
          <div style={{ ...chartContentStyles, flexDirection: "column" }}>
            <Plot
              data={[{
                x: ["2020", "2021", "2022", "2023"],
                y: [8.2186824115, 7.9254884772, 7.9042077959, 7.8633442403],
                type: "bar",
                marker: {
                  colors: ["#ff6347", "#1e90ff", "#32cd32"],
                },
              }]}
              layout={darkThemeLayout("Yearwise grading stats", "Year", "Average Grade")}
              style={{ width: "100%", height: "100%" }}
              config={plotConfig}
              useResizeHandler
              className="plotly-graph"
              divId="plotly-graph"
            />

            <button onClick={() => toggleInsights("graph2")} style={{ marginTop: "10px", backgroundColor: "#1e90ff", color: "#fff", padding: "10px", border: "none", borderRadius: "5px" }}>
              {insightVisibility.graph2 ? "Hide Insights" : "Show Insights"}
            </button>

            {insightVisibility.graph2 && (
              <div style={insightsSectionStyles}>
                <p>
                This graph relates the average grade received by students in various calendar years. As we can see there is a steady decline in average grade received by students across the years. This effect can be attributed to the onset of COVID - 19 pandemic in 2020 which resulted in online classes. Although there is a huge drop in 2021 in comparison to 2020 but we can see this declining trend vanishing as we go to 2022 and 2023, in fact the grades are now almost steady in the past two years.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div style={chartsSectionStyles}>

        {/* Graph 3 */}
        <div
          style={cardStyles}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <h2 style={h2Styles}>Analyzing Bachelor's vs Master's grading</h2>
          <div style={{ ...chartContentStyles, flexDirection: "column" }}>
            <Plot
              data={[
                {
                  x: [
                    7.0, 15.0, 9.0, 10.0, 12.0, 0.0, 8.0, 14.0, 13.0, 5.0, 20.0,
                    11.0, 2.0, 4.0, 21.0, 6.0, 18.0, 16.0, 3.0, 17.0, 23.0,
                    28.0, 50.0, 25.0, 1.0, 30.0, 19.0, 26.0, 22.0, 39.0, 27.0,
                    34.0, 57.0, 38.0, 41.0, 42.0, 47.0, 24.0, 51.0, 37.0, 29.0,
                    58.0, 31.0, 35.0, 33.0, 56.0, 44.0, 64.0, 32.0, 40.0, 67.0,
                    78.0, 49.0, 65.0, 45.0, 62.0, 89.0, 79.0, 55.0, 60.0, 68.0,
                    36.0, 66.0, 70.0, 61.0, 72.0, 54.0, 95.0, 81.0, 48.0,
                  ], // X-coordinates for blue dots
                  y: [
                    28, 27, 27, 23, 22, 21, 21, 20, 20, 19, 17, 16, 15, 15, 13,
                    13, 12, 11, 9, 9, 8, 7, 7, 6, 6, 5, 5, 5, 5, 4, 4, 4, 3, 3,
                    3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1,
                    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                  ], // Y-coordinates for blue dots
                  mode: "markers",
                  marker: { color: "red", size: 10 },
                  type: "scatter",
                  name: "Bachelors",
                },
                {
                  x: [
                    0.0, 11.0, 10.0, 16.0, 12.0, 8.0, 20.0, 14.0, 13.0, 15.0,
                    9.0, 26.0, 25.0, 5.0, 18.0, 4.0, 6.0, 17.0, 23.0, 19.0,
                    21.0, 3.0, 31.0, 7.0, 22.0, 28.0, 2.0, 29.0, 33.0, 50.0,
                    24.0, 1.0, 42.0, 40.0, 38.0, 30.0, 36.0, 45.0, 37.0, 47.0,
                    27.0, 48.0, 32.0, 60.0, 51.0, 46.0, 62.0, 39.0, 44.0, 54.0,
                    35.0, 34.0, 43.0, 76.0, 100.0, 53.0, 52.0, 66.0, 65.0, 70.0,
                    41.0, 57.0, 64.0, 74.0, 61.0, 95.0, 93.0, 55.0, 85.0,
                  ], // X-coordinates for red dots
                  y: [
                    58, 33, 30, 30, 28, 28, 26, 24, 23, 22, 22, 21, 21, 20, 20,
                    19, 19, 18, 16, 15, 15, 14, 13, 12, 11, 10, 10, 9, 8, 8, 7,
                    7, 7, 6, 6, 6, 6, 5, 5, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3,
                    3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1,
                  ], // Y-coordinates for red dots
                  mode: "markers",
                  marker: { color: "blue", size: 10 },
                  type: "scatter",
                  name: "Masters",
                },
              ]}
              layout={darkThemeLayout("Scatter plot of percentage of AA and number of courses","Percentage of AA","Number of Courses")}
              style={{ width: "100%", height: "100%" }}
              config={plotConfig}
              useResizeHandler
              className="plotly-graph"
              divId="plotly-graph"
            />

            <button onClick={() => toggleInsights("graph3")} style={{ marginTop: "10px", backgroundColor: "#1e90ff", color: "#fff", padding: "10px", border: "none", borderRadius: "5px" }}>
              {insightVisibility.graph3 ? "Hide Insights" : "Show Insights"}
            </button>

            {insightVisibility.graph3 && (
              <div style={insightsSectionStyles}>
                <p>
                The scatter plot shows that bachelor's courses are more widely dispersed than master's courses between 0-60% on the Y-axis. However, in the 0-20% range, there is minimal variation in AA grades between the two. Notably, master's courses tend to score higher than bachelor's courses in the 0-10% range, suggesting that some master's courses (≥5xx) have moderate grading similar to bachelor's courses. The data used for this graph is from AY-2023
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

    </div>

    
  );
};

export default Dashboard;

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Plot from "react-plotly.js";

const Page1 = () => {
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [data4, setData4] = useState([]);
  const [data5, setData5] = useState([]);
  const [data6, setData6] = useState([]);
  const [data7, setData7] = useState([]);
  const [data8, setData8] = useState([]);
  const [data9, setData9] = useState([]);
  const [data10, setData10] = useState([]);
  const [data11, setData11] = useState([]);
  const [data12, setData12] = useState([]);
  const [data13, setData13] = useState([]);
  const [data14, setData14] = useState([]);
  const [data15, setData15] = useState([]);
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
    // Load the JSON file with course codes and average grades
    fetch("src\\pages\\data\\Department_Grades_2020.json") // Adjust this path to your file location
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
    fetch("src\\pages\\data\\Department_Grades_2021.json") // Adjust this path to your file location
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
    fetch("src\\pages\\data\\Department_Grades_2022.json") // Adjust this path to your file location
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
    fetch("src\\pages\\data\\Department_Grades_2023.json") // Adjust this path to your file location
      .then((response) => response.json())
      .then((jsonData) => {
        setData3(jsonData);
      })
      .catch((error) => {
        console.error("Error loading JSON data for 2023:", error);
      });
  }, []);

  useEffect(() => {
    // Load the JSON file with course codes and average grades
    fetch("src\\pages\\data\\Percentage_APs_2020.json") // Adjust this path to your file location
      .then((response) => response.json())
      .then((jsonData) => {
        setData4(jsonData);
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
        setData5(jsonData);
      })
      .catch((error) => {
        console.error("Error loading JSON data:", error);
      });
  }, []);

  useEffect(() => {
    // Load the JSON file with course codes and average grades
    fetch("src\\pages\\data\\Percentage_APs_2022.json") // Adjust this path to your file location
      .then((response) => response.json())
      .then((jsonData) => {
        setData6(jsonData);
      })
      .catch((error) => {
        console.error("Error loading JSON data:", error);
      });
  }, []);

  useEffect(() => {
    // Load the JSON file with course codes and average grades
    fetch("src\\pages\\data\\Percentage_APs_2023.json") // Adjust this path to your file location
      .then((response) => response.json())
      .then((jsonData) => {
        setData7(jsonData);
      })
      .catch((error) => {
        console.error("Error loading JSON data:", error);
      });
  }, []);

  useEffect(() => {
    // Load the JSON file with course codes and average grades
    fetch("src\\pages\\data\\Registrations_Grades_2020.json") // Adjust this path to your file location
      .then((response) => response.json())
      .then((jsonData) => {
        setData8(jsonData);
      })
      .catch((error) => {
        console.error("Error loading JSON data:", error);
      });
  }, []);

  useEffect(() => {
    // Load the JSON file with course codes and average grades
    fetch("src\\pages\\data\\Registrations_Grades_2021.json") // Adjust this path to your file location
      .then((response) => response.json())
      .then((jsonData) => {
        setData9(jsonData);
      })
      .catch((error) => {
        console.error("Error loading JSON data:", error);
      });
  }, []);

  useEffect(() => {
    // Load the JSON file with course codes and average grades
    fetch("src\\pages\\data\\Registrations_Grades_2022.json") // Adjust this path to your file location
      .then((response) => response.json())
      .then((jsonData) => {
        setData10(jsonData);
      })
      .catch((error) => {
        console.error("Error loading JSON data:", error);
      });
  }, []);

  useEffect(() => {
    // Load the JSON file with course codes and average grades
    fetch("src\\pages\\data\\Registrations_Grades_2023.json") // Adjust this path to your file location
      .then((response) => response.json())
      .then((jsonData) => {
        setData11(jsonData);
      })
      .catch((error) => {
        console.error("Error loading JSON data:", error);
      });
  }, []);

  useEffect(() => {
    // Load the JSON file with course codes and average grades
    fetch("src\\pages\\data\\Registrations_Grades_2020.json") // Adjust this path to your file location
      .then((response) => response.json())
      .then((jsonData) => {
        setData12(jsonData);
      })
      .catch((error) => {
        console.error("Error loading JSON data:", error);
      });
  }, []);

  useEffect(() => {
    // Load the JSON file with course codes and average grades
    fetch("src\\pages\\data\\Registrations_Grades_2021.json") // Adjust this path to your file location
      .then((response) => response.json())
      .then((jsonData) => {
        setData13(jsonData);
      })
      .catch((error) => {
        console.error("Error loading JSON data:", error);
      });
  }, []);

  useEffect(() => {
    // Load the JSON file with course codes and average grades
    fetch("src\\pages\\data\\Registrations_Grades_2022.json") // Adjust this path to your file location
      .then((response) => response.json())
      .then((jsonData) => {
        setData14(jsonData);
      })
      .catch((error) => {
        console.error("Error loading JSON data:", error);
      });
  }, []);

  useEffect(() => {
    // Load the JSON file with course codes and average grades
    fetch("src\\pages\\data\\Registrations_Grades_2023.json") // Adjust this path to your file location
      .then((response) => response.json())
      .then((jsonData) => {
        setData15(jsonData);
      })
      .catch((error) => {
        console.error("Error loading JSON data:", error);
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

  const getGraphAPs = () => {
    switch (selectedYear) {
      case "2020":
        return data4;
      case "2021":
        return data5;
      case "2022":
        return data6;
      case "2023":
        return data7;
      default:
        return [];
    }
  };

  const getGraphRegs = () => {
    switch (selectedYear) {
      case "2020":
        return data8;
      case "2021":
        return data9;
      case "2022":
        return data10;
      case "2023":
        return data11;
      default:
        return [];
    }
  };

  const getRegistrationGradesData=()=>{
    switch (selectedYear) {
      case "2020":
        return data12;
      case "2021":
        return data13;
      case "2022":
        return data14;
      case "2023":
        return data15;
      default:
        return [];
    }
  }

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  return (
    <div style={dashboardStyles}>
      <h1 style={titleStyles}>Generic Overview</h1>
      <div style={chartsSectionStyles}>
        <div style={cardStyles}>
          <h2 style={h2Styles}>Average Grades by Department</h2>
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
          <h2 style={h2Styles}>Percentage of APs across all Departments</h2>
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
                  x: getGraphAPs().map(d => d['X']),
                  y: getGraphAPs().map(d => d['Y']),
                  type: "bar",
                  mode: "markers",
                  marker: { color: "rgb(23, 190, 207)", size: 12 },
                },
              ]}
              layout={darkThemeLayout(`Percentage of APs across all Department for ${selectedYear}`)}
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
          <h2 style={h2Styles}>Average Grades vs Number of Registrations</h2>
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
                  x: getRegistrationGradesData().map(d => d['X']),
                  y: getRegistrationGradesData().map(d => d['Y']),
                  type: "bar",
                  mode: "markers",
                  marker: { color: "rgb(23, 190, 207)", size: 12 },
                },
              ]}
              layout={darkThemeLayout(`Average Grades vs Number of Registrations in ${selectedYear}`)}
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
          <h2 style={h2Styles}>Average Grades vs Number of Registrations</h2>
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
                  x: getGraphRegs().map(d => d['X']),
                  y: getGraphRegs().map(d => d['Y']),
                  type: "bar",
                  mode: "markers",
                  marker: { color: "rgb(23, 190, 207)", size: 12 },
                },
              ]}
              layout={darkThemeLayout(`Average Grades vs Number of Registrations in ${selectedYear}`)}
              style={{ width: "100%", height: "100%" }}
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
}

export default Page1;

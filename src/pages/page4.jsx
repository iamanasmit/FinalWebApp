import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Plot from "react-plotly.js";

const basicData = [
  { "Course Code": "CS 251", 2020: 149.0, 2021: 178.0, 2022: 199.0, 2023: 0.0 },
  {
    "Course Code": "CS 335",
    2020: 131.0,
    2021: 152.0,
    2022: 190.0,
    2023: 199.0,
  },
  {
    "Course Code": "CS 337",
    2020: 130.0,
    2021: 148.0,
    2022: 183.0,
    2023: 199.0,
  },
  { "Course Code": "CS 419", 2020: 76.0, 2021: 135.0, 2022: 93.0, 2023: 109.0 },
  {
    "Course Code": "CS 699",
    2020: 143.0,
    2021: 113.0,
    2022: 108.0,
    2023: 115.0,
  },
  {
    "Course Code": "CS 725",
    2020: 180.0,
    2021: 155.0,
    2022: 181.0,
    2023: 157.0,
  },
  {
    "Course Code": "CS 747",
    2020: 213.0,
    2021: 289.0,
    2022: 224.0,
    2023: 200.0,
  },
  {
    "Course Code": "DS 203",
    2020: 73.0,
    2021: 163.0,
    2022: 145.0,
    2023: 401.0,
  },
  { "Course Code": "DS 303", 2020: 156.0, 2021: 0.0, 2022: 173.0, 2023: 178.0 },
  {
    "Course Code": "EE 769",
    2020: 167.0,
    2021: 272.0,
    2022: 283.0,
    2023: 266.0,
  },
  { "Course Code": "IE 506", 2020: 0.0, 2021: 0.0, 2022: 139.0, 2023: 82.0 },
];

const advancedData = [
  { "Course Code": "CS 689", 2020: 0.0, 2021: 29.0, 2022: 0.0, 2023: 0.0 },
  { "Course Code": "CS 726", 2020: 74.0, 2021: 111.0, 2022: 109.0, 2023: 84.0 },
  { "Course Code": "CS 748", 2020: 30.0, 2021: 27.0, 2022: 15.0, 2023: 0.0 },
  { "Course Code": "CS 767", 2020: 56.0, 2021: 0.0, 2022: 20.0, 2023: 11.0 },
  { "Course Code": "CS 781", 2020: 0.0, 2021: 11.0, 2022: 6.0, 2023: 12.0 },
  { "Course Code": "EE 782", 2020: 0.0, 2021: 0.0, 2022: 0.0, 2023: 178.0 },
  { "Course Code": "IE 643", 2020: 87.0, 2021: 51.0, 2022: 97.0, 2023: 121.0 },
  { "Course Code": "IE 663", 2020: 14.0, 2021: 1.0, 2022: 4.0, 2023: 0.0 },
  {
    "Course Code": "ME 781",
    2020: 189.0,
    2021: 187.0,
    2022: 215.0,
    2023: 251.0,
  },
];

const logoStyles = {
  position: "fixed",
  top: "20px",
  right: "20px",
  zIndex: 1000,
  width: "50px",
  height: "50px",
};
const Page4 = () => {
  const [dataML, setDataML] = useState([]);
  const [dataAdvanced, setDataAdvanced] = useState([]);

  useEffect(() => {
    AOS.init({
      delay: 200,
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setGraphSize({ width, height });
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [basicChartData, setBasicChartData] = useState([]);
  const [advancedChartData, setAdvancedChartData] = useState([]);

  useEffect(() => {
    // Extract course codes
    const courseCodesBasic = basicData.map((course) => course["Course Code"]);
    const courseCodesAdvanced = advancedData.map(
      (course) => course["Course Code"]
    );

    // Process basic ML data for each year
    const basicData2020 = {
      x: courseCodesBasic,
      y: basicData.map((course) => course["2020"]),
      mode: "lines+markers",
      name: "2020",
    };
    const basicData2021 = {
      x: courseCodesBasic,
      y: basicData.map((course) => course["2021"]),
      mode: "lines+markers",
      name: "2021",
    };
    const basicData2022 = {
      x: courseCodesBasic,
      y: basicData.map((course) => course["2022"]),
      mode: "lines+markers",
      name: "2022",
    };
    const basicData2023 = {
      x: courseCodesBasic,
      y: basicData.map((course) => course["2023"]),
      mode: "lines+markers",
      name: "2023",
    };

    // Process advanced ML data for each year
    const advancedData2020 = {
      x: courseCodesAdvanced,
      y: advancedData.map((course) => course["2020"]),
      mode: "lines+markers",
      name: "2020",
    };
    const advancedData2021 = {
      x: courseCodesAdvanced,
      y: advancedData.map((course) => course["2021"]),
      mode: "lines+markers",
      name: "2021",
    };
    const advancedData2022 = {
      x: courseCodesAdvanced,
      y: advancedData.map((course) => course["2022"]),
      mode: "lines+markers",
      name: "2022",
    };
    const advancedData2023 = {
      x: courseCodesAdvanced,
      y: advancedData.map((course) => course["2023"]),
      mode: "lines+markers",
      name: "2023",
    };

    setBasicChartData([
      basicData2020,
      basicData2021,
      basicData2022,
      basicData2023,
    ]);
    setAdvancedChartData([
      advancedData2020,
      advancedData2021,
      advancedData2022,
      advancedData2023,
    ]);
  }, []);

  useEffect(() => {
    fetch("records_ml.json")
      .then((response) => response.json())
      .then((jsonData) => {
        setDataML(jsonData);
      })
      .catch((error) => {
        console.error("Error loading records_ml.json data:", error);
      });

    fetch("advanced_ml.json")
      .then((response) => response.json())
      .then((jsonData) => {
        setDataAdvanced(jsonData);
      })
      .catch((error) => {
        console.error("Error loading advanced_ml.json data:", error);
      });
  }, []);

  const plotDataML = [];
  const years = ["2020", "2021", "2022", "2023"];

  years.forEach((year) => {
    plotDataML.push({
      x: dataML.map((d) => d["Course Code"]),
      y: dataML.map((d) => d[year]),
      type: "scatter",
      mode: "lines+markers",
      name: year,
    });
  });

  const plotDataAdvanced = [];

  years.forEach((year) => {
    plotDataAdvanced.push({
      x: dataAdvanced.map((d) => d["Course Code"]),
      y: dataAdvanced.map((d) => d[year]),
      type: "scatter",
      mode: "lines+markers",
      name: year,
    });
  });

  const [graphSize, setGraphSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

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
    position: "relative",
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

  const [insightVisibility, setInsightVisibility] = useState({
    graph1: false,
    graph2: false,
    graph3: false,
    graph4: false,
    graph5: false,
    graph6: false,
  });

  const toggleInsights = (graph) => {
    setInsightVisibility((prevState) => ({
      ...prevState,
      [graph]: !prevState[graph],
    }));
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

  // Dark theme layout for Plotly
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
    scrollZoom: false, // Disables scrolling to zoom
    displayModeBar: false, // Hides the mode bar (optional)
    editable: false, // Disables any edits like dragging, zooming, etc.
  };

  const [dataReg, setDataReg] = useState([]);
  const [dataGrade, setDataGrade] = useState([]);

  useEffect(() => {
    fetch("reg_opt.json")
      .then((response) => response.json())
      .then((jsonData) => {
        setDataReg(jsonData);
      })
      .catch((error) => {
        console.error("Error loading reg_opt.json data:", error);
      });

    fetch("grade_opt.json")
      .then((response) => response.json())
      .then((jsonData) => {
        setDataGrade(jsonData);
      })
      .catch((error) => {
        console.error("Error loading grade_opt.json data:", error);
      });
  }, []);

  const plotDataReg = [];

  years.forEach((year) => {
    plotDataReg.push({
      x: dataReg.map((d) => d["Course Code"]),
      y: dataReg.map((d) => d[year]),
      type: "scatter",
      mode: "lines+markers",
      name: year,
    });
  });

  const plotDataGrade = [];
  years.forEach((year) => {
    plotDataGrade.push({
      x: dataGrade.map((d) => d["Course Code"]),
      y: dataGrade.map((d) => d[year]),
      type: "scatter",
      mode: "lines+markers",
      name: year,
    });
  });

  return (
    <div style={dashboardStyles}>
      <h1 style={titleStyles}>AI/ML and Optimization courses</h1>
      <img src="logo.png" alt="AI" style={logoStyles} />
      <div style={chartsSectionStyles}>
        <div style={cardStyles} >
          <h2 style={h2Styles}>Basic ML courses vs Registration over years</h2>
          <div style={chartContentStyles}>
            <Plot
              data={basicChartData}
              layout={darkThemeLayout(
                "Basic ML courses vs Registration over years",
                "Course Codes",
                "Scores"
              )}
              style={{ width: "100%", height: "100%" }}
              config={plotConfig}
              useResizeHandler
              className="plotly-graph"
              divId="plotly-graph-2"
            />
          </div>
          {/* Insight Section */}
          {/* <div style={insightSectionStyles}>
            <p style={insightTextStyles}>{graphInsights.graph1}</p>
          </div> */}
        </div>

        <div style={cardStyles} >
          <h2 style={h2Styles}>
            Advanced ML courses vs Registration over years
          </h2>
          <div style={chartContentStyles}>
            <Plot
              data={advancedChartData}
              layout={darkThemeLayout(
                "Advanced ML courses vs Registration over years",
                "Course Codes",
                "Scores"
              )}
              style={{ width: "100%", height: "100%" }}
              config={plotConfig}
              useResizeHandler
              className="plotly-graph"
              divId="plotly-graph-2"
            />
          </div>
          {/* Insight Section */}
          {/* <div style={insightSectionStyles}>
            <p style={insightTextStyles}>{graphInsights.graph2}</p>
          </div> */}
        </div>
      </div>

      <div style={chartsSectionStyles}>
        <div style={cardStyles} >
          <h2 style={h2Styles}>
            Optimization Courses VS Registrations Over Years
          </h2>
          <div style={chartContentStyles}>
            <Plot
              data={plotDataReg}
              layout={darkThemeLayout(
                "Optimization Courses vs Registraions over years",
                "Course Codes",
                "Scores"
              )}
              style={{ width: "100%", height: "100%" }}
              config={plotConfig}
              useResizeHandler
              className="plotly-graph"
              divId="plotly-graph-3"
            />
          </div>
          {/* Insight Section */}
          {/* <div style={insightSectionStyles}>
            <p style={insightTextStyles}>{graphInsights.graph3}</p>
          </div> */}
        </div>

        <div style={cardStyles} >
          <h2 style={h2Styles}>Optimization Courses VS Grades Over Years</h2>
          <div style={chartContentStyles}>
            <Plot
              data={plotDataGrade}
              layout={darkThemeLayout(
                "Optimization Courses vs Grades over years",
                "Course Codes",
                "Scores"
              )}
              style={{ width: "100%", height: "100%" }}
              config={plotConfig}
              useResizeHandler
              className="plotly-graph"
              divId="plotly-graph-4"
            />
          </div>
          {/* Insight Section */}
          {/* <div style={insightSectionStyles}>
            <p style={insightTextStyles}>{graphInsights.graph4}</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Page4;

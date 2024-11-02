import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Plot from "react-plotly.js";

const Page1 = () => {
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);

  const [data8, setData8] = useState([]);
  const [data9, setData9] = useState([]);
  const [data10, setData10] = useState([]);
  const [data11, setData11] = useState([]);

  const [data12, setData12] = useState([]);
  const [data13, setData13] = useState([]);
  const [data14, setData14] = useState([]);
  const [data15, setData15] = useState([]);

  const [data16, setData16] = useState([]);
  const [data17, setData17] = useState([]);

  const [data18, setData18] = useState([]);
  const [data19, setData19] = useState([]);
  const [data20, setData20] = useState([]);
  const [data21, setData21] = useState([]);

  const [data22, setData22] = useState([]);
  const [data23, setData23] = useState([]);
  const [data24, setData24] = useState([]);
  const [data25, setData25] = useState([]);

  const [data26, setData26] = useState([]);
  const [data27, setData27] = useState([]);
  const [data28, setData28] = useState([]);
  const [data29, setData29] = useState([]);
  const [data30, setData30] = useState([]);
  const [data31, setData31] = useState([]);
  const [data32, setData32] = useState([]);
  const [data33, setData33] = useState([]);
  const [data34, setData34] = useState([]);
  const [data35, setData35] = useState([]);
  const [data36, setData36] = useState([]);
  const [data37, setData37] = useState([]);
  const [data38, setData38] = useState([]);
  const [data39, setData39] = useState([]);
  const [data40, setData40] = useState([]);
  const [data41, setData41] = useState([]);
  const [data42, setData42] = useState([]);

  const [data43, setData43] = useState([]);
  const [data44, setData44] = useState([]);
  const [data45, setData45] = useState([]);
  const [data46, setData46] = useState([]);
  const [data47, setData47] = useState([]);
  const [data48, setData48] = useState([]);
  const [data49, setData49] = useState([]);
  const [data50, setData50] = useState([]);
  const [data51, setData51] = useState([]);
  const [data52, setData52] = useState([]);
  const [data53, setData53] = useState([]);
  const [data54, setData54] = useState([]);
  const [data55, setData55] = useState([]);
  const [data56, setData56] = useState([]);
  const [data57, setData57] = useState([]);

  const [selectedSem, setSelectedSem] = useState("1");

  const [selectedYear1, setSelectedYear1] = useState("2020");
  const [selectedYear3, setSelectedYear3] = useState("2020");
  const [selectedYear4, setSelectedYear4] = useState("2020");
  const [selectedYear5, setSelectedYear5] = useState("2020");

  const [selectedCourse1, setSelectedCourse1] = useState("AE");
  const [selectedCourse2, setSelectedCourse2] = useState("AE");

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

  const logoStyles = {
    position: "fixed",
    top: "20px",
    right: "20px",
    zIndex: 1000,
    width: "50px",
    height: "50px",
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
    fetch("Department_Grades_2020.json") // Adjust this path to your file location
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
    fetch("Department_Grades_2021.json") // Adjust this path to your file location
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
    fetch("Department_Grades_2022.json") // Adjust this path to your file location
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
    fetch("Department_Grades_2023.json") // Adjust this path to your file location
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
    fetch("Registrations_Grades_2020.json") // Adjust this path to your file location
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
    fetch("Registrations_Grades_2021.json") // Adjust this path to your file location
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
    fetch("Registrations_Grades_2022.json") // Adjust this path to your file location
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
    fetch("Registrations_Grades_2023.json") // Adjust this path to your file location
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
    fetch("Regs_Years_Minors_2020.json") // Adjust this path to your file location
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
    fetch("Regs_Years_Minors_2021.json") // Adjust this path to your file location
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
    fetch("Regs_Years_Minors_2022.json") // Adjust this path to your file location
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
    fetch("Regs_Years_Minors_2023.json") // Adjust this path to your file location
      .then((response) => response.json())
      .then((jsonData) => {
        setData15(jsonData);
      })
      .catch((error) => {
        console.error("Error loading JSON data:", error);
      });
  }, []);

  useEffect(() => {
    // Load the JSON file with course codes and average grades
    fetch("Regs_Sem_Minors_1.json") // Adjust this path to your file location
      .then((response) => response.json())
      .then((jsonData) => {
        setData16(jsonData);
      })
      .catch((error) => {
        console.error("Error loading JSON data:", error);
      });
  }, []);

  useEffect(() => {
    // Load the JSON file with course codes and average grades
    fetch("Regs_Sem_Minors_2.json") // Adjust this path to your file location
      .then((response) => response.json())
      .then((jsonData) => {
        setData17(jsonData);
      })
      .catch((error) => {
        console.error("Error loading JSON data:", error);
      });
  }, []);

  useEffect(() => {
    // Load the JSON file with course codes and average grades
    fetch("Average_2XX_2020.json") // Adjust this path to your file location
      .then((response) => response.json())
      .then((jsonData) => {
        setData18(jsonData);
      })
      .catch((error) => {
        console.error("Error loading JSON data:", error);
      });
  }, []);

  useEffect(() => {
    // Load the JSON file with course codes and average grades
    fetch("Average_2XX_2021.json") // Adjust this path to your file location
      .then((response) => response.json())
      .then((jsonData) => {
        setData19(jsonData);
      })
      .catch((error) => {
        console.error("Error loading JSON data:", error);
      });
  }, []);

  useEffect(() => {
    // Load the JSON file with course codes and average grades
    fetch("Average_2XX_2022.json") // Adjust this path to your file location
      .then((response) => response.json())
      .then((jsonData) => {
        setData20(jsonData);
      })
      .catch((error) => {
        console.error("Error loading JSON data:", error);
      });
  }, []);

  useEffect(() => {
    // Load the JSON file with course codes and average grades
    fetch("Average_2XX_2023.json") // Adjust this path to your file location
      .then((response) => response.json())
      .then((jsonData) => {
        setData21(jsonData);
      })
      .catch((error) => {
        console.error("Error loading JSON data:", error);
      });
  }, []);

  useEffect(() => {
    // Load the JSON file with course codes and average grades
    fetch("Average_3XX_2020.json") // Adjust this path to your file location
      .then((response) => response.json())
      .then((jsonData) => {
        setData22(jsonData);
      })
      .catch((error) => {
        console.error("Error loading JSON data:", error);
      });
  }, []);

  useEffect(() => {
    // Load the JSON file with course codes and average grades
    fetch("Average_3XX_2021.json") // Adjust this path to your file location
      .then((response) => response.json())
      .then((jsonData) => {
        setData23(jsonData);
      })
      .catch((error) => {
        console.error("Error loading JSON data:", error);
      });
  }, []);

  useEffect(() => {
    // Load the JSON file with course codes and average grades
    fetch("Average_3XX_2022.json") // Adjust this path to your file location
      .then((response) => response.json())
      .then((jsonData) => {
        setData24(jsonData);
      })
      .catch((error) => {
        console.error("Error loading JSON data:", error);
      });
  }, []);

  useEffect(() => {
    // Load the JSON file with course codes and average grades
    fetch("Average_3XX_2023.json") // Adjust this path to your file location
      .then((response) => response.json())
      .then((jsonData) => {
        setData25(jsonData);
      })
      .catch((error) => {
        console.error("Error loading JSON data:", error);
      });
  }, []);

  useEffect(() => {
    // Load the JSON file with course codes and average grades
    fetch("Percent_Grades_2XX_AE.json") // Adjust this path to your file location
      .then((response) => response.json())
      .then((jsonData) => {
        setData26(jsonData);
      })
      .catch((error) => {
        console.error("Error loading JSON data:", error);
      });
  }, []);

  useEffect(() => {
    // Load the JSON file with course codes and average grades
    fetch("Percent_Grades_2XX_CE.json") // Adjust this path to your file location
      .then((response) => response.json())
      .then((jsonData) => {
        setData27(jsonData);
      })
      .catch((error) => {
        console.error("Error loading JSON data:", error);
      });
  }, []);

  useEffect(() => {
    // Load the JSON file with course codes and average grades
    fetch("Percent_Grades_2XX_CH.json") // Adjust this path to your file location
      .then((response) => response.json())
      .then((jsonData) => {
        setData28(jsonData);
      })
      .catch((error) => {
        console.error("Error loading JSON data:", error);
      });
  }, []);

  useEffect(() => {
    // Load the JSON file with course codes and average grades
    fetch("Percent_Grades_2XX_CL.json") // Adjust this path to your file location
      .then((response) => response.json())
      .then((jsonData) => {
        setData29(jsonData);
      })
      .catch((error) => {
        console.error("Error loading JSON data:", error);
      });
  }, []);

  useEffect(() => {
    // Load the JSON file with course codes and average grades
    fetch("Percent_Grades_2XX_CS.json") // Adjust this path to your file location
      .then((response) => response.json())
      .then((jsonData) => {
        setData30(jsonData);
      })
      .catch((error) => {
        console.error("Error loading JSON data:", error);
      });
  }, []);

  useEffect(() => {
    // Load the JSON file with course codes and average grades
    fetch("Percent_Grades_2XX_DS.json") // Adjust this path to your file location
      .then((response) => response.json())
      .then((jsonData) => {
        setData31(jsonData);
      })
      .catch((error) => {
        console.error("Error loading JSON data:", error);
      });
  }, []);

  useEffect(() => {
    // Load the JSON file with course codes and average grades
    fetch("Percent_Grades_2XX_EC.json") // Adjust this path to your file location
      .then((response) => response.json())
      .then((jsonData) => {
        setData32(jsonData);
      })
      .catch((error) => {
        console.error("Error loading JSON data:", error);
      });
  }, []);

  useEffect(() => {
    // Load the JSON file with course codes and average grades
    fetch("Percent_Grades_2XX_EE.json") // Adjust this path to your file location
      .then((response) => response.json())
      .then((jsonData) => {
        setData33(jsonData);
      })
      .catch((error) => {
        console.error("Error loading JSON data:", error);
      });
  }, []);

  useEffect(() => {
    // Load the JSON file with course codes and average grades
    fetch("Percent_Grades_2XX_EN.json") // Adjust this path to your file location
      .then((response) => response.json())
      .then((jsonData) => {
        setData34(jsonData);
      })
      .catch((error) => {
        console.error("Error loading JSON data:", error);
      });
  }, []);

  useEffect(() => {
    // Load the JSON file with course codes and average grades
    fetch("Percent_Grades_2XX_ES.json") // Adjust this path to your file location
      .then((response) => response.json())
      .then((jsonData) => {
        setData35(jsonData);
      })
      .catch((error) => {
        console.error("Error loading JSON data:", error);
      });
  }, []);

  useEffect(() => {
    // Load the JSON file with course codes and average grades
    fetch("Percent_Grades_2XX_HS.json") // Adjust this path to your file location
      .then((response) => response.json())
      .then((jsonData) => {
        setData36(jsonData);
      })
      .catch((error) => {
        console.error("Error loading JSON data:", error);
      });
  }, []);

  useEffect(() => {
    // Load the JSON file with course codes and average grades
    fetch("Percent_Grades_2XX_DE.json") // Adjust this path to your file location
      .then((response) => response.json())
      .then((jsonData) => {
        setData37(jsonData);
      })
      .catch((error) => {
        console.error("Error loading JSON data:", error);
      });
  }, []);

  useEffect(() => {
    // Load the JSON file with course codes and average grades
    fetch("Percent_Grades_2XX_ME.json") // Adjust this path to your file location
      .then((response) => response.json())
      .then((jsonData) => {
        setData38(jsonData);
      })
      .catch((error) => {
        console.error("Error loading JSON data:", error);
      });
  }, []);

  useEffect(() => {
    // Load the JSON file with course codes and average grades
    fetch("Percent_Grades_2XX_MM.json") // Adjust this path to your file location
      .then((response) => response.json())
      .then((jsonData) => {
        setData39(jsonData);
      })
      .catch((error) => {
        console.error("Error loading JSON data:", error);
      });
  }, []);

  useEffect(() => {
    // Load the JSON file with course codes and average grades
    fetch("Percent_Grades_2XX_PH.json") // Adjust this path to your file location
      .then((response) => response.json())
      .then((jsonData) => {
        setData40(jsonData);
      })
      .catch((error) => {
        console.error("Error loading JSON data:", error);
      });
  }, []);

  useEffect(() => {
    // Load the JSON file with course codes and average grades
    fetch("Percent_Grades_2XX_MA.json") // Adjust this path to your file location
      .then((response) => response.json())
      .then((jsonData) => {
        setData41(jsonData);
      })
      .catch((error) => {
        console.error("Error loading JSON data:", error);
      });
  }, []);

  useEffect(() => {
    // Load the JSON file with course codes and average grades
    fetch("Percent_Grades_2XX_SC.json") // Adjust this path to your file location
      .then((response) => response.json())
      .then((jsonData) => {
        setData42(jsonData);
      })
      .catch((error) => {
        console.error("Error loading JSON data:", error);
      });
  }, []);

  useEffect(() => {
    // Load the JSON file with course codes and average grades
    fetch("Percent_Grades_3XX_AE.json") // Adjust this path to your file location
      .then((response) => response.json())
      .then((jsonData) => {
        setData43(jsonData);
      })
      .catch((error) => {
        console.error("Error loading JSON data:", error);
      });
  }, []);

  useEffect(() => {
    // Load the JSON file with course codes and average grades
    fetch("Percent_Grades_3XX_CE.json") // Adjust this path to your file location
      .then((response) => response.json())
      .then((jsonData) => {
        setData44(jsonData);
      })
      .catch((error) => {
        console.error("Error loading JSON data:", error);
      });
  }, []);

  useEffect(() => {
    // Load the JSON file with course codes and average grades
    fetch("Percent_Grades_3XX_CL.json") // Adjust this path to your file location
      .then((response) => response.json())
      .then((jsonData) => {
        setData45(jsonData);
      })
      .catch((error) => {
        console.error("Error loading JSON data:", error);
      });
  }, []);

  useEffect(() => {
    // Load the JSON file with course codes and average grades
    fetch("Percent_Grades_3XX_CS.json") // Adjust this path to your file location
      .then((response) => response.json())
      .then((jsonData) => {
        setData46(jsonData);
      })
      .catch((error) => {
        console.error("Error loading JSON data:", error);
      });
  }, []);

  useEffect(() => {
    // Load the JSON file with course codes and average grades
    fetch("Percent_Grades_3XX_DS.json") // Adjust this path to your file location
      .then((response) => response.json())
      .then((jsonData) => {
        setData47(jsonData);
      })
      .catch((error) => {
        console.error("Error loading JSON data:", error);
      });
  }, []);

  useEffect(() => {
    // Load the JSON file with course codes and average grades
    fetch("Percent_Grades_3XX_EC.json") // Adjust this path to your file location
      .then((response) => response.json())
      .then((jsonData) => {
        setData48(jsonData);
      })
      .catch((error) => {
        console.error("Error loading JSON data:", error);
      });
  }, []);

  useEffect(() => {
    // Load the JSON file with course codes and average grades
    fetch("Percent_Grades_3XX_EE.json") // Adjust this path to your file location
      .then((response) => response.json())
      .then((jsonData) => {
        setData49(jsonData);
      })
      .catch((error) => {
        console.error("Error loading JSON data:", error);
      });
  }, []);

  useEffect(() => {
    // Load the JSON file with course codes and average grades
    fetch("Percent_Grades_3XX_EN.json") // Adjust this path to your file location
      .then((response) => response.json())
      .then((jsonData) => {
        setData50(jsonData);
      })
      .catch((error) => {
        console.error("Error loading JSON data:", error);
      });
  }, []);

  useEffect(() => {
    // Load the JSON file with course codes and average grades
    fetch("Percent_Grades_3XX_ES.json") // Adjust this path to your file location
      .then((response) => response.json())
      .then((jsonData) => {
        setData51(jsonData);
      })
      .catch((error) => {
        console.error("Error loading JSON data:", error);
      });
  }, []);

  useEffect(() => {
    // Load the JSON file with course codes and average grades
    fetch("Percent_Grades_3XX_HS.json") // Adjust this path to your file location
      .then((response) => response.json())
      .then((jsonData) => {
        setData52(jsonData);
      })
      .catch((error) => {
        console.error("Error loading JSON data:", error);
      });
  }, []);

  useEffect(() => {
    // Load the JSON file with course codes and average grades
    fetch("Percent_Grades_3XX_DE.json") // Adjust this path to your file location
      .then((response) => response.json())
      .then((jsonData) => {
        setData53(jsonData);
      })
      .catch((error) => {
        console.error("Error loading JSON data:", error);
      });
  }, []);

  useEffect(() => {
    // Load the JSON file with course codes and average grades
    fetch("Percent_Grades_3XX_ME.json") // Adjust this path to your file location
      .then((response) => response.json())
      .then((jsonData) => {
        setData54(jsonData);
      })
      .catch((error) => {
        console.error("Error loading JSON data:", error);
      });
  }, []);

  useEffect(() => {
    // Load the JSON file with course codes and average grades
    fetch("Percent_Grades_3XX_MM.json") // Adjust this path to your file location
      .then((response) => response.json())
      .then((jsonData) => {
        setData55(jsonData);
      })
      .catch((error) => {
        console.error("Error loading JSON data:", error);
      });
  }, []);

  useEffect(() => {
    // Load the JSON file with course codes and average grades
    fetch("Percent_Grades_3XX_PH.json") // Adjust this path to your file location
      .then((response) => response.json())
      .then((jsonData) => {
        setData56(jsonData);
      })
      .catch((error) => {
        console.error("Error loading JSON data:", error);
      });
  }, []);

  useEffect(() => {
    // Load the JSON file with course codes and average grades
    fetch("Percent_Grades_3XX_SC.json") // Adjust this path to your file location
      .then((response) => response.json())
      .then((jsonData) => {
        setData57(jsonData);
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

  const getGraphDepts = () => {
    switch (selectedYear1) {
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

  const getGraphRegs = () => {
    switch (selectedYear3) {
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

  const getGraphRegsMinorsSems = () => {
    switch (selectedSem) {
      case "1":
        return data16;
      case "2":
        return data17;
      default:
        return [];
    }
  };

  const getAverage2XX = () => {
    switch (selectedYear4) {
      case "2020":
        return data18;
      case "2021":
        return data19;
      case "2022":
        return data20;
      case "2023":
        return data21;
      default:
        return [];
    }
  };

  const getAverage3XX = () => {
    switch (selectedYear4) {
      case "2020":
        return data22;
      case "2021":
        return data23;
      case "2022":
        return data24;
      case "2023":
        return data25;
      default:
        return [];
    }
  };

  const getGradePercent2XX = () => {
    switch (selectedCourse1) {
      case "AE":
        return data26;
      case "CE":
        return data27;
      case "CH":
        return data28;
      case "CL":
        return data29;
      case "CS":
        return data30;
      case "DS":
        return data31;
      case "EC":
        return data32;
      case "EE":
        return data33;
      case "EN":
        return data34;
      case "ES":
        return data35;
      case "HS":
        return data36;
      case "DE":
        return data37;
      case "ME":
        return data38;
      case "MM":
        return data39;
      case "PH":
        return data40;
      case "MA":
        return data41;
      case "SC":
        return data42;
      default:
        return [];
    }
  };

  const getGradePercent3XX = () => {
    switch (selectedCourse2) {
      case "AE":
        return data43;
      case "CE":
        return data44;
      case "CL":
        return data45;
      case "CS":
        return data46;
      case "DS":
        return data47;
      case "EC":
        return data48;
      case "EE":
        return data49;
      case "EN":
        return data50;
      case "ES":
        return data51;
      case "HS":
        return data52;
      case "DE":
        return data53;
      case "ME":
        return data54;
      case "MM":
        return data55;
      case "PH":
        return data56;
      case "SC":
        return data57;
      default:
        return [];
    }
  };

  const handleYearChange1 = (event) => {
    setSelectedYear1(event.target.value);
  };

  const handleYearChange3 = (event) => {
    setSelectedYear3(event.target.value);
  };

  const handleYearChange4 = (event) => {
    setSelectedYear4(event.target.value);
  };

  const handleSemChange = (event) => {
    setSelectedSem(event.target.value);
  };

  const handleCourseChange1 = (event) => {
    setSelectedCourse1(event.target.value);
  };

  const handleCourseChange2 = (event) => {
    setSelectedCourse2(event.target.value);
  };

  return (
    <div style={dashboardStyles}>
      <h1 style={titleStyles}>Generic Overview Page</h1>
      <img src="logo.png" style={logoStyles} />
      <div style={chartsSectionStyles}>
        <div style={cardStyles}>
          <h2 style={h2Styles}>Average Grades by Department</h2>
          <div style={{ ...chartContentStyles, flexDirection: "column" }}>
            {/* Dropdown for Year Selection */}
            <select
              value={selectedYear1}
              onChange={handleYearChange1}
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
                  x: getGraphDepts().map((d) => d["X"]),
                  y: getGraphDepts().map((d) => d["Y"]),
                  type: "bar",
                  mode: "markers",
                  marker: { color: "rgb(23, 190, 207)", size: 12 },
                },
              ]}
              layout={darkThemeLayout(
                `Average Grades by Department for ${selectedYear1}`,
                "Department",
                "Grade"
              )}
              style={{ width: "100%", height: "100%" }}
              config={plotConfig}
              useResizeHandler
              className="plotly-graph"
              divId="plotly-graph"
            />

            <button
              onClick={() => toggleInsights("graph1")}
              style={{
                marginTop: "10px",
                backgroundColor: "#1e90ff",
                color: "#fff",
                padding: "10px",
                border: "none",
                borderRadius: "5px",
              }}
            >
              {insightVisibility.graph1 ? "Hide Insights" : "Show Insights"}
            </button>

            {insightVisibility.graph1 && (
              <div style={insightsSectionStyles}>
                <p>
                  <ul>
                    <li>
                      <strong>Data Overview:</strong> The data categorizes
                      courses by department and tracks average grades from 2020
                      to 2023.
                    </li>
                    <li>
                      <strong>2020 Grades:</strong> Average grades were highest
                      in 2020, likely due to online learning during COVID-19.
                    </li>
                    <li>
                      <strong>Trends:</strong> Major departments (CS, ME, MA,
                      MM) show a gradual decline in average grades over time.
                    </li>
                    <li>
                      <strong>Standard Deviation:</strong> Most departments have
                      a standard deviation of around 2, indicating that
                      professors consider variability in grading.
                    </li>
                    <li>
                      <strong>Data Science Courses:</strong> Average grades for
                      DS courses significantly dropped in 2022 and 2023 compared
                      to 2020 and 2021.
                    </li>
                    <li>
                      <strong>Lowest Grades:</strong> The Maths Department
                      consistently records the lowest average grades each year.
                    </li>
                  </ul>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div style={chartsSectionStyles}>
        <div style={cardStyles}>
          <h2 style={h2Styles}>Average Grades vs Number of Registrations</h2>
          <div style={{ ...chartContentStyles, flexDirection: "column" }}>
            {/* Dropdown for Year Selection */}
            <select
              value={selectedYear3}
              onChange={handleYearChange3}
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
                  x: getGraphRegs().map((d) => d["X"]),
                  y: getGraphRegs().map((d) => d["Y"]),
                  type: "bar",
                  mode: "markers",
                  marker: { color: "rgb(23, 190, 207)", size: 12 },
                },
              ]}
              layout={darkThemeLayout(
                `Average Grades vs Number of Registrations in ${selectedYear3}`,
                "Number of Registrations",
                "Grade"
              )}
              style={{ width: "100%", height: "100%" }}
              config={plotConfig}
              useResizeHandler
              className="plotly-graph"
              divId="plotly-graph"
            />

            <button
              onClick={() => toggleInsights("graph2")}
              style={{
                marginTop: "10px",
                backgroundColor: "#1e90ff",
                color: "#fff",
                padding: "10px",
                border: "none",
                borderRadius: "5px",
              }}
            >
              {insightVisibility.graph2 ? "Hide Insights" : "Show Insights"}
            </button>

            {insightVisibility.graph2 && (
              <div style={insightsSectionStyles}>
                <p>
                  <ul>
                    <li>
                      <strong>Data Overview:</strong> The data calculates
                      average grades based on student registration numbers,
                      categorized into groups: 0-100, 100-200, 200-300, 300-400,
                      400-500, 500-600, 600-700, and 700-800.
                    </li>
                    <li>
                      <strong>General Trend:</strong> Average grades declined
                      from 2020 to 2022, likely due to the transition from
                      online to offline classes, with a slight increase in 2023.
                    </li>
                    <li>
                      <strong>Registration Impact:</strong> Courses with lower
                      registrations tend to have slightly higher average grades,
                      though this is not universal.
                    </li>
                    <li>
                      <strong>Enrollment Growth:</strong> No courses had over
                      400 students before 2021, indicating an increase in
                      student intake over time.
                    </li>
                    <li>
                      <strong>Anomaly:</strong> In 2023, courses with 400-500
                      registrations exhibited notably higher average grades
                      compared to other groups.
                    </li>
                  </ul>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div style={chartsSectionStyles}>
        <div style={cardStyles}>
          <h2 style={h2Styles}>Number of Minor Registrations by Year</h2>
          <div style={{ ...chartContentStyles, flexDirection: "column" }}>
            {/* Dropdown for Year Selection */}
            <select
              value={selectedSem}
              onChange={handleSemChange}
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
              <option value="1">1</option>
              <option value="2">2</option>
            </select>

            <Plot
              data={[
                {
                  x: getGraphRegsMinorsSems().map((d) => d["X"]),
                  y: getGraphRegsMinorsSems().map((d) => d["Y"]),
                  type: "bar",
                  mode: "markers",
                  marker: { color: "rgb(23, 190, 207)", size: 12 },
                },
              ]}
              layout={darkThemeLayout(
                `Number of Minor Registrations by Year for Sem:${selectedSem}`,
                "Year",
                "Number of Registrations"
              )}
              style={{ width: "100%", height: "100%" }}
              config={plotConfig}
              useResizeHandler
              className="plotly-graph"
              divId="plotly-graph"
            />
            {/* <button
              onClick={() => toggleInsights("graph3")}
              style={{
                marginTop: "10px",
                backgroundColor: "#1e90ff",
                color: "#fff",
                padding: "10px",
                border: "none",
                borderRadius: "5px",
              }}
            >
              {insightVisibility.graph3 ? "Hide Insights" : "Show Insights"}
            </button>

            {insightVisibility.graph3 && (
              <div style={insightsSectionStyles}>
                <h3>Insights:</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique dicta, recusandae consectetur nostrum atque qui
                  sequi non totam voluptas consequatur laborum, harum, assumenda
                  asperiores iste deserunt error alias ducimus aspernatur!
                </p>
              </div>
            )} */}
          </div>
        </div>
      </div>

      <div style={chartsSectionStyles}>
        <div style={cardStyles}>
          <h2 style={h2Styles}>
            Average Grade of 2XX and 3XX Courses by Department
          </h2>
          <div style={{ ...chartContentStyles, flexDirection: "column" }}>
            {/* Dropdown for Year Selection */}
            <select
              value={selectedYear4}
              onChange={handleYearChange4}
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
                  x: getAverage2XX().map((d) => d["X"]),
                  y: getAverage2XX().map((d) => d["Y"]),
                  type: "scatter",
                  mode: "lines+markers",
                  marker: { color: "red" },
                  name: "2XX Courses",
                },
                {
                  x: getAverage3XX().map((d) => d["X"]),
                  y: getAverage3XX().map((d) => d["Y"]),
                  type: "scatter",
                  mode: "lines+markers",
                  marker: { color: "blue" },
                  name: "3XX Courses",
                },
              ]}
              layout={darkThemeLayout(
                `Average Grade of 2XX and 3XX Courses by Department for ${selectedYear4}`,
                "Department",
                "Average Grade"
              )}
              style={{ width: "100%", height: "100%" }}
              config={plotConfig}
              useResizeHandler
              className="plotly-graph"
              divId="plotly-graph"
            />
            <button
              onClick={() => toggleInsights("graph4")}
              style={{
                marginTop: "10px",
                backgroundColor: "#1e90ff",
                color: "#fff",
                padding: "10px",
                border: "none",
                borderRadius: "5px",
              }}
            >
              {insightVisibility.graph4 ? "Hide Insights" : "Show Insights"}
            </button>

            {insightVisibility.graph4 && (
              <div style={insightsSectionStyles}>
                <h3>Insights:</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Molestiae adipisci impedit dolores, culpa error, nemo quidem
                  inventore, animi maiores minus ducimus obcaecati deserunt
                  corrupti. Ex tempore itaque corrupti sunt nam?
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div style={chartsSectionStyles}>
        <div style={cardStyles}>
          <h2 style={h2Styles}>
            Grades Distribution by Department for 2XX Courses
          </h2>
          <div style={{ ...chartContentStyles, flexDirection: "column" }}>
            {/* Dropdown for Year Selection */}
            <select
              value={selectedCourse1}
              onChange={handleCourseChange1}
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
              <option value="AE">AE</option>
              <option value="CE">CE</option>
              <option value="CH">CH</option>
              <option value="CL">CL</option>
              <option value="CS">CS</option>
              <option value="DS">DS</option>
              <option value="EC">EC</option>
              <option value="EE">EE</option>
              <option value="EN">EN</option>
              <option value="ES">ES</option>
              <option value="HS">HS</option>
              <option value="DE">DE</option>
              <option value="ME">ME</option>
              <option value="MM">MM</option>
              <option value="PH">PH</option>
              <option value="MA">MA</option>
              <option value="SC">SC</option>
            </select>

            <Plot
              data={[
                {
                  x: getGradePercent2XX().map((d) => d["X"]),
                  y: getGradePercent2XX().map((d) => d["Y"]),
                  type: "bar",
                  mode: "markers",
                  marker: { color: "rgb(23, 190, 207)", size: 12 },
                },
              ]}
              layout={darkThemeLayout(
                `Grade Distribution for 2XX Courses for ${selectedCourse1}`,
                "Department",
                "Grade Distribution"
              )}
              style={{ width: "100%", height: "100%" }}
              config={plotConfig}
              useResizeHandler
              className="plotly-graph"
              divId="plotly-graph"
            />
            <button
              onClick={() => toggleInsights("graph5")}
              style={{
                marginTop: "10px",
                backgroundColor: "#1e90ff",
                color: "#fff",
                padding: "10px",
                border: "none",
                borderRadius: "5px",
              }}
            >
              {insightVisibility.graph5 ? "Hide Insights" : "Show Insights"}
            </button>

            {insightVisibility.graph5 && (
              <div style={insightsSectionStyles}>
                <h3>Insights:</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis blanditiis amet sed rerum tempore placeat, sapiente
                  perferendis consectetur modi possimus fuga id praesentium vero
                  sit incidunt, quo omnis minima quas.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div style={chartsSectionStyles}>
        <div style={cardStyles}>
          <h2 style={h2Styles}>
            Grades Distribution by Department for 3XX Courses
          </h2>
          <div style={{ ...chartContentStyles, flexDirection: "column" }}>
            {/* Dropdown for Year Selection */}
            <select
              value={selectedCourse2}
              onChange={handleCourseChange2}
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
              <option value="AE">AE</option>
              <option value="CE">CE</option>
              <option value="CL">CL</option>
              <option value="CS">CS</option>
              <option value="DS">DS</option>
              <option value="EC">EC</option>
              <option value="EE">EE</option>
              <option value="EN">EN</option>
              <option value="ES">ES</option>
              <option value="HS">HS</option>
              <option value="DE">DE</option>
              <option value="ME">ME</option>
              <option value="MM">MM</option>
              <option value="PH">PH</option>
              <option value="SC">SC</option>
            </select>

            <Plot
              data={[
                {
                  x: getGradePercent3XX().map((d) => d["X"]),
                  y: getGradePercent3XX().map((d) => d["Y"]),
                  type: "bar",
                  mode: "markers",
                  marker: { color: "rgb(23, 190, 207)", size: 12 },
                },
              ]}
              layout={darkThemeLayout(
                `Grade Distribution for 3XX Courses for ${selectedCourse2}`,
                "Department",
                "Grade Distribution"
              )}
              style={{ width: "100%", height: "100%" }}
              config={plotConfig}
              useResizeHandler
              className="plotly-graph"
              divId="plotly-graph"
            />

            <button
              onClick={() => toggleInsights("graph5")}
              style={{
                marginTop: "10px",
                backgroundColor: "#1e90ff",
                color: "#fff",
                padding: "10px",
                border: "none",
                borderRadius: "5px",
              }}
            >
              {insightVisibility.graph5 ? "Hide Insights" : "Show Insights"}
            </button>

            {insightVisibility.graph5 && (
              <div style={insightsSectionStyles}>
                <h3>Insights:</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis, blanditiis, quidem tenetur possimus minus nemo
                  inventore non natus soluta rerum voluptatum ea vitae ipsam
                  impedit nisi incidunt cupiditate molestias ex.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page1;

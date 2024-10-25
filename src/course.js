import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';

const Course = () => {
  const [dataML, setDataML] = useState([]);
  const [dataAdvanced, setDataAdvanced] = useState([]);

  useEffect(() => {
 
    fetch("records_ml.json")
      .then(response => response.json())
      .then(jsonData => {
        setDataML(jsonData);
      })
      .catch(error => {
        console.error("Error loading records_ml.json data:", error);
      });

    
    fetch("advanced_ml.json")
      .then(response => response.json())
      .then(jsonData => {
        setDataAdvanced(jsonData);
      })
      .catch(error => {
        console.error("Error loading advanced_ml.json data:", error);
      });
  }, []);

 
  const plotDataML = [];
  const years = ["2020", "2021", "2022", "2023"];

  years.forEach(year => {
    plotDataML.push({
      x: dataML.map(d => d["Course Code"]),
      y: dataML.map(d => d[year]),
      type: 'scatter',
      mode: 'lines+markers',
      name: year,
    });
  });

  
  const plotDataAdvanced = [];

  years.forEach(year => {
    plotDataAdvanced.push({
      x: dataAdvanced.map(d => d["Course Code"]),
      y: dataAdvanced.map(d => d[year]),
      type: 'scatter',
      mode: 'lines+markers',
      name: year,
    });
  });

  return (
    <div>
      <div className="plot-container">
        <h2>Basic ML Courses VS Registrations Over Years</h2>
        <Plot
          data={plotDataML}
          layout={{
            title: 'Basic ML Courses VS Registrations Over Years',
            xaxis: { title: 'Course Code' },
            yaxis: { title: 'Registrations' },
            template: 'plotly_dark',
          }}
          style={{ width: "100%", height: "400px" }}
          config={{ responsive: true }}
        />
      </div>

      <div className="plot-container">
        <h2>Advanced Courses VS Registrations Over Years</h2>
        <Plot
          data={plotDataAdvanced}
          layout={{
            title: 'Advanced ML Courses VS Registrations Over Years',
            xaxis: { title: 'Course Code' },
            yaxis: { title: 'Registrations' },
            template: 'plotly_dark',
          }}
          style={{ width: "100%", height: "400px" }}
          config={{ responsive: true }}
        />
      </div>
    </div>
  );
};

export default Course;

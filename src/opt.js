
import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';

const Opt = () => {
  const [dataReg, setDataReg] = useState([]);
  const [dataGrade, setDataGrade] = useState([]);

  useEffect(() => {

    fetch("reg_opt.json")
      .then(response => response.json())
      .then(jsonData => {
        setDataReg(jsonData);
      })
      .catch(error => {
        console.error("Error loading reg_opt.json data:", error);
      });

   
    fetch("grade_opt.json")
      .then(response => response.json())
      .then(jsonData => {
        setDataGrade(jsonData);
      })
      .catch(error => {
        console.error("Error loading grade_opt.json data:", error);
      });
  }, []);

  const plotDataReg = [];
  const years = ["2020", "2021", "2022", "2023"];

  years.forEach(year => {
    plotDataReg.push({
      x: dataReg.map(d => d["Course Code"]),
      y: dataReg.map(d => d[year]),
      type: 'scatter',
      mode: 'lines+markers',
      name: year,
    });
  });


  const plotDataGrade = [];
  years.forEach(year => {
    plotDataGrade.push({
      x: dataGrade.map(d => d["Course Code"]),
      y: dataGrade.map(d => d[year]),
      type: 'scatter',
      mode: 'lines+markers',
      name: year,
    });
  });

  return (
    <div>
      <div className="plot-container">
        <h2>Optimization Courses VS Registrations Over Years</h2>
        <Plot
          data={plotDataReg}
          layout={{
            title: 'Optimization Courses VS Registrations Over Years',
            xaxis: { title: 'Course Code' },
            yaxis: { title: 'Registrations' },
            template: 'plotly_dark',
          }}
          style={{ width: "100%", height: "400px", border: "1px solid #ddd", marginBottom: "20px" }}
          config={{ responsive: true }}
        />
      </div>

      <div className="plot-container">
        <h2>Optimization Courses VS Grades Over Years</h2>
        <Plot
          data={plotDataGrade}
          layout={{
            title: 'Optimization Courses VS Grades Over Years',
            xaxis: { title: 'Course Code' },
            yaxis: { title: 'Grades' },
            template: 'plotly_dark',
          }}
          style={{ width: "100%", height: "400px", border: "1px solid #ddd" }}
          config={{ responsive: true }}
        />
      </div>
    </div>
  );
};

export default Opt;

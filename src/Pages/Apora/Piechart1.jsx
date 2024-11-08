import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

function PieChartExample() {
  const data = {
    labels: ['Accepted', 'Rejected'], // Labels for the two sections
    datasets: [
      {
        data: [60, 40], // Percentage for each color
        backgroundColor: ['rgb(29,58,175,1)', 'rgb(2,151,70,1)'], // Colors for the sections
        hoverBackgroundColor: ['rgb(29,58,175,1)', 'rgb(2,151,70,1)'], // Colors on hover
      },
    ],
  };

  return (
    <div style={{ width: '200px', height: '200px' }}> {/* Set container size */}
    <Pie data={data} width={100} height={100} /> {/* Set chart dimensions */}
  </div>
  );
}

export default PieChartExample;

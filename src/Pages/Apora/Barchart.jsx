import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function BarChartExample() {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May'], // X-axis labels
    datasets: [
      {
        label: 'Quantity', // Label for the dataset
        data: [12, 19, 3, 5, 2], // Data points for each label
        backgroundColor: 'rgb(29,58,175,1)',
        borderColor: 'rgb(2,151,70,1)', // Bar border color
        borderWidth: 1, // Border width
      },
    ],
  };

  const options = {
    responsive: true, // Responsive chart
    plugins: {
      legend: {
        position: 'top', // Position of the legend
      },
      title: {
        display: true,
       
      },
    },
  };

  return (
    <div style={{ width: '600px', height: '300px' }}>
      <Bar data={data} options={options} />
    </div>
  );
}

export default BarChartExample;

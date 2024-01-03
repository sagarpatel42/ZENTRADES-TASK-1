import React from "react";
import { Bar } from "react-chartjs-2";

const ChartJS = ({ labels, dataset, title, color, xaxis }) => {
  const data = {
    labels: labels,
    datasets: [
      {
        label: title,
        data: dataset,
        backgroundColor: [color], // Specify colors for each bar
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    indexAxis: "y",
    scales: {
      x: {
        type: "linear",
        beginAtZero: true,
        title: {
          display: true,
          text: xaxis, // Add a label for the x-axis
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default ChartJS;

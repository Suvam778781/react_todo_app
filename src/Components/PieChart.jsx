import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { Box } from "@mui/system";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart({ labels, values }) {
  const data = {
    labels: ["Pending","Completed"],
    datasets: [
      {
        label: "Todo",
        data: values,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(155, 109, 64, 0.2)",
          "rgba(135, 179, 64, 0.2)",
          "rgba(235, 139, 64, 0.2)",
          "rgba(185, 119, 64, 0.2)",
          "rgba(211, 109, 64, 0.2)",
          "rgba(231, 100, 64, 0.2)",
          
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true, // Enable responsiveness
    maintainAspectRatio: false, // Disable maintaining aspect ratio
    plugins: {
      legend: {
        position: "right", // Set legend position to the right
      },
    },
  };

  return (
    <Box border={"2px solid"} paddingX={"10px"} margin={"auto"} marginTop={"20px"} height={"200px"} width={"300px"} bg={"white"} borderRadius="20px">
      <Pie data={data} options={options} />
    </Box>
  );
}

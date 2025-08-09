// src/components/financeDashboard-content/ExpenseIncomeComparison.tsx
import React from "react";
import { Paper, Typography, Divider, Box } from "@mui/material";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,    // <-- important
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

// Register scales and elements globally
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const chartData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May"],
  datasets: [
    {
      label: "Income",
      data: [4000, 4200, 3800, 4500, 4700],
      backgroundColor: "rgba(75, 192, 192, 0.6)",
    },
    {
      label: "Expenses",
      data: [3200, 3000, 3500, 3300, 3600],
      backgroundColor: "rgba(255, 99, 132, 0.6)",
    },
  ],
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "bottom" as const,
    },
  },
};

const ExpenseIncomeComparison = () => {
  const fontFamily = "'Comic Neue', cursive";

  return (
    <Paper
      elevation={6}
      sx={{
        p: 4,
        mb: 3,
        borderRadius: "20px",
        bgcolor: "lavender",
        boxShadow: "0 8px 30px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Typography variant="h5" mb={2} sx={{ fontFamily, fontWeight: "bold" }}>
        📊 Expense vs. Income Comparison
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <Box sx={{ width: "100%", height: { xs: 250, sm: 300, md: 200 }, overflowX: "auto" }}>
        <Bar data={chartData} options={chartOptions} />
      </Box>
    </Paper>
  );
};

export default ExpenseIncomeComparison;

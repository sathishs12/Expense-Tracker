// src/components/financeDashboard-content/BudgetAlerts.tsx
import React from "react";
import { Paper, Typography, Divider } from "@mui/material";

const BudgetAlerts = () => {
  const fontFamily = "'Comic Neue', cursive";

  return (
    <Paper
      elevation={6}
      sx={{
        p: 4,
        borderRadius: "20px",
        bgcolor: "lavender",
        boxShadow: "0 8px 30px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Typography variant="h5" mb={2} sx={{ fontFamily, fontWeight: "bold" }}>
        💡 Budget Alerts
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <Typography sx={{ fontFamily }}>
        Receive instant alerts when you're close to exceeding your monthly budget.  
        Stay informed and in control of your finances with real-time notifications.
      </Typography>
    </Paper>
  );
};

export default BudgetAlerts;

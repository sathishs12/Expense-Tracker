// src/components/financeDashboard-content/PersonalizedFinanceTips.tsx
import React from "react";
import { Paper, Typography, Divider, List, ListItem } from "@mui/material";

const tips = [
  "Track every expense to see where your money goes.",
  "Automate savings right after payday.",
  "Follow the 50/30/20 budgeting rule.",
  "Cut unused subscriptions to save money.",
  "Set spending limits for entertainment and dining.",
  "Shop with a list to avoid impulse buys.",
  "Review bills and negotiate lower rates.",
];

const PersonalizedFinanceTips = () => {
  const fontFamily = "'Comic Neue', cursive";

  return (
    <Paper
      elevation={6}
      sx={{
        p: 4,
        borderRadius: "20px",
        bgcolor: "lavender",
        boxShadow: "0 8px 30px rgba(0, 0, 0, 0.2)",
        mb: 3,
      }}
    >
      <Typography variant="h5" mb={2} sx={{ fontFamily, fontWeight: "bold" }}>
        📰 Personalized Finance Tips
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <List sx={{ maxHeight: 200, overflow: "auto" }}>
        {tips.map((tip, index) => (
          <ListItem key={index} sx={{ py: 0.5 }}>
            <Typography sx={{ fontFamily }}>{tip}</Typography>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default PersonalizedFinanceTips;

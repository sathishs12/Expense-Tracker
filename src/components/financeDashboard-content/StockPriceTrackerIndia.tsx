import React, { useState, useEffect } from "react";
import {
  Paper,
  Typography,
  Divider,
  List,
  ListItem
} from "@mui/material";
import Grid from '@mui/material/GridLegacy';

const StockPriceTrackerIndia = () => {
  const fontFamily = "'Comic Neue', cursive";

  const [stocks, setStocks] = useState([
    { symbol: "INFY", price: 1587.40, change: "+1.20%" },
    { symbol: "HDFCBANK", price: 1650.75, change: "+0.25%" },
    { symbol: "ITC", price: 448.60, change: "+0.65%" }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setStocks((prevStocks) =>
        prevStocks.map((stock) => {
          // Random price change between -1% and +1%
          const priceChange = (stock.price * (Math.random() * 0.02 - 0.01)).toFixed(2);
          const newPrice = parseFloat((stock.price + parseFloat(priceChange)).toFixed(2));

          const percentageChange = ((newPrice - stock.price) / stock.price * 100).toFixed(2);
          const changeString = `${percentageChange.startsWith("-") ? "" : "+"}${percentageChange}%`;

          return { ...stock, price: newPrice, change: changeString };
        })
      );
    }, 1000); // update every second

    return () => clearInterval(interval);
  }, []);

  return (
    <Paper
      elevation={6}
      sx={{
        p: 4,
        borderRadius: "20px",
        bgcolor: "lavender",
        boxShadow: "0 8px 30px rgba(0, 0, 0, 0.2)"
      }}
    >
      <Typography
        variant="h5"
        mb={2}
        sx={{ fontFamily, fontWeight: "bold" }}
      >
        📈 Stock Price Tracker (India)
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <List>
        {stocks.map((stock, index) => (
          <ListItem key={index} divider>
            <Grid container>
              <Grid item xs={6}>
                <Typography sx={{ fontFamily, fontWeight: "bold" }}>
                  {stock.symbol}
                </Typography>
              </Grid>
              <Grid item xs={6} textAlign="right">
                <Typography sx={{ fontFamily }}>
                  ₹{stock.price.toFixed(2)}{" "}
                  <span style={{ color: stock.change.startsWith("+") ? "green" : "red" }}>
                    {stock.change}
                  </span>
                </Typography>
              </Grid>
            </Grid>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default StockPriceTrackerIndia;

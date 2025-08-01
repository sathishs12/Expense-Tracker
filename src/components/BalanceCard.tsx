import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import {
  Box,
  Typography,
  Paper,
  keyframes,
} from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import Grid from '@mui/material/GridLegacy';

// Animation
const fadeInScale = keyframes`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const BalanceCard = () => {
  const transactions = useSelector((state: RootState) => state.transactions.items);
  const income = transactions
    .filter((t) => t.type === 'income')
    .reduce((acc, t) => acc + t.amount, 0);
  const expense = transactions
    .filter((t) => t.type === 'expense')
    .reduce((acc, t) => acc + t.amount, 0);
  const balance = income - expense;

  const cardData = [
    {
      label: 'INCOME',
      amount: income,
      icon: <ArrowDownwardIcon sx={{ color: '#00e676', fontSize: 30 }} />,
      gradient: 'linear-gradient(135deg, #00c9ff 0%, #92fe9d 100%)',
    },
    {
        label: 'BALANCE',
        amount: balance,
        icon: <AccountBalanceWalletIcon sx={{ color: '#fff176', fontSize: 30 }} />,
        gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    },
    {
      label: 'EXPENSES',
      amount: expense,
      icon: <ArrowUpwardIcon sx={{ color: '#ff5252', fontSize: 30 }} />,
      gradient: 'linear-gradient(135deg, #f77062 0%, #fe5196 100%)',
    },
  ];

  return (
    <Box px={2} mb={4}>
      <Grid
        container
        spacing={3}
        justifyContent="center"
        sx={{ animation: `${fadeInScale} 0.6s ease-in-out` }}
      >
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper
              elevation={5}
              sx={{
                p: 3,
                borderRadius: 3,
                background: card.gradient,
                color: '#fff',
                textAlign: 'center',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.03)',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
                },
              }}
            >
              <Box display="flex" justifyContent="center" mb={1}>
                {card.icon}
              </Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                {card.label}
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 'bold', mt: 1 }}>
                R {card.amount.toFixed(2)}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BalanceCard;

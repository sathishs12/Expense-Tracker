// import React from 'react';
// import { useSelector } from 'react-redux';
// import { RootState } from '../store';
// import {
//   Box,
//   Typography,
//   Paper,
//   keyframes,
// } from '@mui/material';
// import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
// import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
// import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
// import Grid from '@mui/material/GridLegacy';

// // Animation
// const fadeInScale = keyframes`
//   from {
//     opacity: 0;
//     transform: scale(0.97);
//   }
//   to {
//     opacity: 1;
//     transform: scale(1);
//   }
// `;

// const BalanceCard = () => {
//   const transactions = useSelector((state: RootState) => state.transactions.items);
//   const income = transactions
//     .filter((t) => t.type === 'income')
//     .reduce((acc, t) => acc + t.amount, 0);
//   const expense = transactions
//     .filter((t) => t.type === 'expense')
//     .reduce((acc, t) => acc + t.amount, 0);
//   const balance = income - expense;

//   const cardData = [
//     {
//       label: 'Income',
//       amount: income,
//       icon: <ArrowDownwardIcon fontSize="large" />,
//       bgColor: '#101820',
//       textColor: '#FEE715',
//     },
//     {
//       label: 'Balance',
//       amount: balance,
//       icon: <AccountBalanceWalletIcon fontSize="large" />,
//       bgColor: '#101820',
//       textColor: '#FEE715',
//     },
//     {
//       label: 'Expenses',
//       amount: expense,
//       icon: <ArrowUpwardIcon fontSize="large" />,
//       bgColor: '#101820',
//       textColor: '#FEE715',
//     },
//   ];

//   return (
//     <Box px={2} mb={5}>
//       <Grid
//         container
//         spacing={3}
//         justifyContent="center"
//         sx={{ animation: `${fadeInScale} 0.5s ease-in-out` }}
//       >
//         {cardData.map((card, index) => (
//           <Grid item xs={12} sm={6} md={4} key={index}>
//             <Paper
//               elevation={2}
//               sx={{
//                 p: 3,
//                 borderRadius: 3,
//                 backgroundColor: card.bgColor,
//                 color: card.textColor,
//                 // minHeight: 160,
//                 display: 'flex',
//                 flexDirection: 'column',
//                 justifyContent: 'space-between',
//                 transition: 'all 0.3s ease',
//                 '&:hover': {
//                   transform: 'translateY(-3px)',
//                   boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
//                 },
//               }}
//             >
//               <Box display="flex" justifyContent="space-between" alignItems="center">
//                 <Typography variant="subtitle1" fontWeight={600}>
//                   {card.label}
//                 </Typography>
//                 <Box>{card.icon}</Box>
//               </Box>

//               <Typography
//                 variant="h5"
//                 fontWeight="bold"
//                 mt={2}
//               >
//                 R {card.amount.toFixed(2)}
//               </Typography>
//             </Paper>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default BalanceCard;


import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import {
  Box,
  Typography,
  Paper
} from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import Grid from '@mui/material/GridLegacy';
import '@fontsource/comic-neue'; // Defaults to weight 400

const BalanceCard = () => {
  const transactions = useSelector((state: RootState) => state.transactions.items);
  const income = transactions
    .filter((t) => t.type === 'income')
    .reduce((acc, t) => acc + t.amount, 0);
  const expense = transactions
    .filter((t) => t.type === 'expense')
    .reduce((acc, t) => acc + t.amount, 0);
  const balance = income - expense;

//   const fontFamily = `'Comic Sans MS', 'cursive', 'sans-serif'`; // 🎉 Fun key font
const fontFamily = `'Comic Neue', cursive`;

  const cardData = [
    {
      label: 'Income',
      amount: income,
      icon: <ArrowDownwardIcon />,
      bgColor: 'lavender',
      textColor: 'black',
    },
    {
      label: 'Balance',
      amount: balance,
      icon: <AccountBalanceWalletIcon />,
      bgColor: 'black',
      textColor: 'lavender',
    },
    {
      label: 'Expenses',
      amount: expense,
      icon: <ArrowUpwardIcon />,
      bgColor: 'lavender',
      textColor: 'black',
    },
  ];

  return (
    <Box px={2} mb={5}>
      <Grid container spacing={3} justifyContent="center">
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper
              elevation={6}
              sx={{
                p: 3,
                borderRadius: '20px',
                backgroundColor: card.bgColor,
                color: card.textColor,
                minHeight: 160,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                fontFamily,
                boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-5px)',
                //   backgroundColor:"black",
                //   color:"white",
                },
              }}
            >
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant="subtitle2" fontWeight={600} sx={{ fontFamily }}>
                  {card.label}
                </Typography>
                <Box>{card.icon}</Box>
              </Box>

              <Box mt={2}>
                <Typography variant="h5" fontWeight="bold" sx={{ fontFamily }}>
                  Rs. {card.amount.toFixed(2)}
                </Typography>
              </Box>

              <Box mt={2} display="flex" justifyContent="space-between" alignItems="center">
                <CreditCardIcon />
                <Typography variant="body2" sx={{ letterSpacing: '2px', fontFamily }}>
                  **** **** **** 1234
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BalanceCard;

// import React, { useState } from 'react';
// import {
//   PieChart,
//   Pie,
//   Cell,
//   ResponsiveContainer,
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   CartesianGrid,
// } from 'recharts';
// import { useSelector } from 'react-redux';
// import { RootState } from '../store';
// import {
//   Typography,
//   Paper,
//   Box,
//   keyframes,
//   Switch,
//   FormControlLabel,
// } from '@mui/material';
// import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
// import Grid from '@mui/material/GridLegacy';
// import RestartAltIcon from '@mui/icons-material/RestartAlt';
// import { useDispatch } from 'react-redux';
// import { clearIncomeTransactions } from '../features/transactions/transactionSlice'; // Create this action

// const COLORS = ['#2f8c6d', '#4b75ca', '#3ccfcf', '#304ffe'];

// const fadeIn = keyframes`
//   from {
//     opacity: 0;
//     transform: translateY(20px);
//   }
//   to {
//     opacity: 1;
//     transform: translateY(0);
//   }
// `;

// const IncomeChart = () => {
//   const transactions = useSelector((state: RootState) => state.transactions.items);
//   const incomeData = transactions.filter(t => t.type === 'income');
//   const [showLineChart, setShowLineChart] = useState(false);
// const dispatch = useDispatch();

// const handleReset = () => {
//   dispatch(clearIncomeTransactions());
// };
//   // Grouped data for Pie chart
//   const grouped = incomeData.reduce((acc: any, t) => {
//     acc[t.category] = (acc[t.category] || 0) + t.amount;
//     return acc;
//   }, {});

//   const chartData = Object.keys(grouped).map(key => ({
//     name: key,
//     value: grouped[key],
//   }));

//   const lineChartData = incomeData.map(t => ({
//     name: t.date,
//     amount: t.amount,
//   }));

//   const hasData = chartData.length > 0;

//   return (
//     <Paper
//       elevation={4}
//       sx={{
//         p: 3,
//         bgcolor: '#f7fdfd',
//         borderRadius: 4,
//         maxWidth: 600,
//         mx: 'auto',
//         mt: 4,
//         animation: `${fadeIn} 0.6s ease`,
//         boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
//       }}
//     >
//     <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
//   <Typography
//     variant="h6"
//     sx={{
//       fontWeight: 'bold',
//       background: 'linear-gradient(to right, #00c6ff, #0072ff)',
//       WebkitBackgroundClip: 'text',
//       WebkitTextFillColor: 'transparent',
//     }}
//   >
//     Total Income
//   </Typography>

//   <Box display="flex" alignItems="center" gap={1}>
//     <FormControlLabel
//       control={
//         <Switch
//           checked={showLineChart}
//           onChange={() => setShowLineChart(!showLineChart)}
//           color="primary"
//         />
//       }
//       label={showLineChart ? 'Line View' : 'Pie View'}
//     />
//     <RestartAltIcon
//       sx={{
//         cursor: 'pointer',
//         color: '#2196f3',
//         '&:hover': { color: '#1565c0' },
//       }}
//       onClick={handleReset}
//       titleAccess="Reset Chart"
//     />
//   </Box>
// </Box>


//       {hasData ? (
//         <>
//           <Box
//             sx={{
//               width: '100%',
//               height: 300,
//               display: 'flex',
//               justifyContent: 'center',
//             }}
//           >
//             <ResponsiveContainer width="100%" height="100%">
//               {showLineChart ? (
//                 <LineChart data={lineChartData}>
//                   <CartesianGrid strokeDasharray="3 3" />
//                   <XAxis dataKey="name" />
//                   <YAxis />
//                   <Tooltip />
//                   <Line
//                     type="monotone"
//                     dataKey="amount"
//                     stroke="#2196f3"
//                     strokeWidth={3}
//                     dot={{ r: 4 }}
//                     activeDot={{ r: 6 }}
//                   />
//                 </LineChart>
//               ) : (
//                 <PieChart>
//                   <Pie
//                     data={chartData}
//                     dataKey="value"
//                     innerRadius={50}
//                     outerRadius={80}
//                     label
//                   >
//                     {chartData.map((_, index) => (
//                       <Cell
//                         key={index}
//                         fill={COLORS[index % COLORS.length]}
//                       />
//                     ))}
//                   </Pie>
//                 </PieChart>
//               )}
//             </ResponsiveContainer>
//           </Box>

//           {/* Legend only for Pie chart */}
//           {!showLineChart && (
//             <Grid container spacing={1} justifyContent="center" mt={2}>
//               {chartData.map((entry, index) => (
//                 <Grid item xs={6} sm={4} md={3} key={index}>
//                   <Box display="flex" alignItems="center" gap={1}>
//                     <Box
//                       sx={{
//                         width: 12,
//                         height: 12,
//                         borderRadius: '50%',
//                         bgcolor: COLORS[index % COLORS.length],
//                       }}
//                     />
//                     <Typography variant="body2">{entry.name}</Typography>
//                   </Box>
//                 </Grid>
//               ))}
//             </Grid>
//           )}
//         </>
//       ) : (
//         <Box
//           sx={{
//             py: 6,
//             textAlign: 'center',
//             color: 'gray',
//             animation: `${fadeIn} 0.5s ease`,
//           }}
//         >
//           <InfoOutlinedIcon sx={{ fontSize: 40, mb: 1, color: '#b0bec5' }} />
//           <Typography variant="body1" sx={{ fontWeight: 500 }}>
//             No income data available
//           </Typography>
//           <Typography variant="body2" sx={{ mt: 1, color: '#90a4ae' }}>
//             Add an income transaction to view insights here.
//           </Typography>
//         </Box>
//       )}
//     </Paper>
//   );
// };

// export default IncomeChart;


import React, { useState } from 'react';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip as RechartsTooltip,
  CartesianGrid,
} from 'recharts';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import {
  Typography,
  Paper,
  Box,
  keyframes,
  Switch,
  FormControlLabel,
  Tooltip,
} from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Grid from '@mui/material/GridLegacy';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { clearIncomeTransactions } from '../features/transactions/transactionSlice';

const COLORS = ['#FEE715', '#3f51b5', '#2196f3', '#29b6f6'];

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const IncomeChart = () => {
  const transactions = useSelector((state: RootState) => state.transactions.items);
  const incomeData = transactions.filter(t => t.type === 'income');
  const [showLineChart, setShowLineChart] = useState(false);
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(clearIncomeTransactions());
  };

  const grouped = incomeData.reduce((acc: any, t) => {
    acc[t.category] = (acc[t.category] || 0) + t.amount;
    return acc;
  }, {});

  const chartData = Object.keys(grouped).map(key => ({
    name: key,
    value: grouped[key],
  }));

  const lineChartData = incomeData.map(t => ({
    name: t.date,
    amount: t.amount,
  }));

  const hasData = chartData.length > 0;
  const fontFamily = `'Comic Sans MS', 'cursive', 'sans-serif'`; // 🎉 Fun key font
  return (
    <Paper
      elevation={4}
      sx={{
        p: 3,
        bgcolor: 'black',
        borderRadius: 4,
        maxWidth: 600,
        mx: 'auto',
        mt: 4,
        animation: `${fadeIn} 0.6s ease`,
        boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 'bold',
            color: 'lavender',
            fontFamily
          }}
        >
          Total Income
        </Typography>

        <Box display="flex" alignItems="center" gap={1}>
          <FormControlLabel
            control={
              <Switch
                checked={showLineChart}
                onChange={() => setShowLineChart(!showLineChart)}
                sx={{
                  '& .MuiSwitch-thumb': { backgroundColor: 'lavender' },
                  '& .MuiSwitch-track': { backgroundColor: '#444' },
                }}
              />
            }
            label={
              <Typography sx={{ color: 'lavender',fontFamily}}>
                {showLineChart ? 'Line View' : 'Pie View'}
              </Typography>
            }
          />
          <Tooltip title="Reset Chart">
            <RestartAltIcon
              onClick={handleReset}
              sx={{
                cursor: 'pointer',
                color: 'lavender',
                '&:hover': { color: '#fff' },
              }}
            />
          </Tooltip>
        </Box>
      </Box>

      {hasData ? (
        <>
          <Box sx={{ width: '100%', height: 300 }}>
            <ResponsiveContainer width="100%" height="100%">
              {showLineChart ? (
                <LineChart data={lineChartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                  <XAxis dataKey="name" stroke="lavender" />
                  <YAxis stroke="lavender" />
                  <RechartsTooltip
                    contentStyle={{
                      backgroundColor: '#222',
                      borderColor: 'lavender',
                      color: '#fff',
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="amount"
                    stroke="lavender"
                    strokeWidth={3}
                    dot={{ r: 4, stroke: '#101820', fill: 'lavender' }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              ) : (
                <PieChart>
                  <Pie
                    data={chartData}
                    dataKey="value"
                    innerRadius={50}
                    outerRadius={80}
                    label
                  >
                    {chartData.map((_, index) => (
                      <Cell
                        key={index}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                </PieChart>
              )}
            </ResponsiveContainer>
          </Box>

          {!showLineChart && (
            <Grid container spacing={1} justifyContent="center" mt={2}>
              {chartData.map((entry, index) => (
                <Grid item xs={6} sm={4} md={3} key={index}>
                  <Box display="flex" alignItems="center" gap={1}>
                    <Box
                      sx={{
                        width: 12,
                        height: 12,
                        borderRadius: '50%',
                        bgcolor: COLORS[index % COLORS.length],
                      }}
                    />
                    <Typography variant="body2" sx={{ color: 'lavender',fontFamily }}>
                      {entry.name}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          )}
        </>
      ) : (
        <Box sx={{ py: 6, textAlign: 'center', animation: `${fadeIn} 0.5s ease` }}>
          <InfoOutlinedIcon sx={{ fontSize: 40, mb: 1, color: 'lavender' }} />
          <Typography variant="body1" sx={{ fontWeight: 500, color: 'lavender',fontFamily }}>
            No income data available
          </Typography>
          <Typography variant="body2" sx={{ mt: 1, color: '#ccc',fontFamily }}>
            Add an income transaction to view insights here.
          </Typography>
        </Box>
      )}
    </Paper>
  );
};

export default IncomeChart;

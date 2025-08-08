// import React, { useState, useMemo } from 'react';
// import {
//   Card,
//   CardContent,
//   Typography,
//   Box,
//   Button,
//   Chip,
//   Modal,
//   TextField,
//   useTheme,
// } from '@mui/material';
// import { Bar } from 'react-chartjs-2';
// import { useSelector, useDispatch } from 'react-redux';
// import { RootState } from '../store';
// import { deleteTransaction } from '../features/transactions/transactionSlice';
// import Grid from '@mui/material/GridLegacy';

// const CategoryTransactionCards = () => {
//   const theme = useTheme();
//   const transactions = useSelector((state: RootState) => state.transactions.items);
//   const dispatch = useDispatch();

//   const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
//   const [modalOpen, setModalOpen] = useState(false);
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');

//   const openModal = (category: string) => {
//     setSelectedCategory(category);
//     setModalOpen(true);
//   };

//   const closeModal = () => {
//     setModalOpen(false);
//     setSelectedCategory(null);
//     setStartDate('');
//     setEndDate('');
//   };

//   const filteredTransactions = useMemo(() => {
//     return transactions.filter((t) => {
//       if (selectedCategory && t.category !== selectedCategory) return false;
//       if (startDate && t.date < startDate) return false;
//       if (endDate && t.date > endDate) return false;
//       return true;
//     });
//   }, [transactions, selectedCategory, startDate, endDate]);

//   const chartData = useMemo(() => {
//     const dates = Array.from(new Set(filteredTransactions.map((t) => t.date))).sort();
//     const incomeData = dates.map((date) =>
//       filteredTransactions.filter((t) => t.date === date && t.type === 'income')
//         .reduce((sum, t) => sum + t.amount, 0)
//     );
//     const expenseData = dates.map((date) =>
//       filteredTransactions.filter((t) => t.date === date && t.type === 'expense')
//         .reduce((sum, t) => sum + t.amount, 0)
//     );

//     return {
//       labels: dates,
//       datasets: [
//         {
//           label: 'Income',
//           backgroundColor: 'limegreen',
//           data: incomeData,
//         },
//         {
//           label: 'Expense',
//           backgroundColor: 'orangered',
//           data: expenseData,
//         },
//       ],
//     };
//   }, [filteredTransactions]);

//   return (
//     <Box>
//       <Grid container spacing={3}>
//         {transactions.map((t) => (
//           <Grid item xs={12} sm={6} md={4} key={t.id}>
//             <Card
//               onClick={() => openModal(t.category)}
//               sx={{
//                 cursor: 'pointer',
//                 bgcolor: theme.palette.mode === 'dark' ? 'grey.800' : 'white',
//               }}
//             >
//               <CardContent>
//                 <Typography variant="h6" gutterBottom>{t.category}</Typography>
//                 <Typography variant="body2" color="textSecondary">{t.date}</Typography>
//                 <Typography variant="h6" color={t.type === 'income' ? 'green' : 'red'}>
//                   ₹ {t.amount.toFixed(2)}
//                 </Typography>
//                 <Chip
//                   label={t.type}
//                   color={t.type === 'income' ? 'success' : 'error'}
//                   size="small"
//                   sx={{ mt: 1 }}
//                 />
//                 <Box mt={2} display="flex" justifyContent="space-between">
//                   <Button variant="outlined" size="small" onClick={(e) => {
//                     e.stopPropagation();
//                     // TODO: handleEdit(t)
//                   }}>Edit</Button>
//                   <Button variant="outlined" size="small" color="error" onClick={(e) => {
//                     e.stopPropagation();
//                     dispatch(deleteTransaction(t.id));
//                   }}>Delete</Button>
//                 </Box>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>

//       {/* Modal for category chart */}
//       <Modal open={modalOpen} onClose={closeModal}>
//         <Box
//           sx={{
//             position: 'absolute',
//             top: '50%',
//             left: '50%',
//             transform: 'translate(-50%, -50%)',
//             bgcolor: theme.palette.background.paper,
//             boxShadow: 24,
//             p: 4,
//             borderRadius: 2,
//             width: '90%',
//             maxWidth: 600,
//           }}
//         >
//           <Typography variant="h6" gutterBottom align="center">
//             {selectedCategory} - Transactions
//           </Typography>

//           <Box display="flex" gap={2} mb={2}>
//             <TextField
//               label="Start Date"
//               type="date"
//               value={startDate}
//               onChange={(e) => setStartDate(e.target.value)}
//               InputLabelProps={{ shrink: true }}
//               fullWidth
//             />
//             <TextField
//               label="End Date"
//               type="date"
//               value={endDate}
//               onChange={(e) => setEndDate(e.target.value)}
//               InputLabelProps={{ shrink: true }}
//               fullWidth
//             />
//           </Box>

//           <Bar
//             data={chartData}
//             options={{
//               responsive: true,
//               plugins: {
//                 legend: {
//                   labels: {
//                     color: theme.palette.mode === 'dark' ? '#fff' : '#000',
//                   },
//                 },
//               },
//               scales: {
//                 x: {
//                   ticks: {
//                     color: theme.palette.mode === 'dark' ? '#fff' : '#000',
//                   },
//                 },
//                 y: {
//                   ticks: {
//                     color: theme.palette.mode === 'dark' ? '#fff' : '#000',
//                   },
//                 },
//               },
//             }}
//           />
//         </Box>
//       </Modal>
//     </Box>
//   );
// };

// export default CategoryTransactionCards;






// import React, { useState, useMemo } from 'react';
// import {
//   Typography,
//   Box,
//   Button,
//   Chip,
//   Modal,
//   TextField,
//   useTheme,
//   Paper,
// } from '@mui/material';
// import { Bar } from 'react-chartjs-2';
// import { useSelector, useDispatch } from 'react-redux';
// import { RootState } from '../store';
// import { deleteTransaction } from '../features/transactions/transactionSlice';
// import Grid from '@mui/material/GridLegacy';
// import '@fontsource/comic-neue'; // For Comic Neue font
// import { getThemeColors } from '../utils/themeColors';
// import { Theme } from '@mui/material';
// import CreditCardIcon from '@mui/icons-material/CreditCard';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// } from 'chart.js';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );


// const fontFamily = `'Comic Neue', cursive`;

// const CategoryTransactionCards = () => {
//  const theme = useTheme(); // ✅ Must be at top
//   const themeMode = theme.palette.mode;
//   const themeColors = getThemeColors(themeMode);

//   const transactions = useSelector((state: RootState) => state.transactions.items);
//   const dispatch = useDispatch();
// const fontFamily = `'Comic Neue', cursive`;
//   const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
//   const [modalOpen, setModalOpen] = useState(false);
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');

//   const openModal = (category: string) => {
//     setSelectedCategory(category);
//     setModalOpen(true);
//   };

//   const closeModal = () => {
//     setModalOpen(false);
//     setSelectedCategory(null);
//     setStartDate('');
//     setEndDate('');
//   };

//   const filteredTransactions = useMemo(() => {
//     return transactions.filter((t) => {
//       if (selectedCategory && t.category !== selectedCategory) return false;
//       if (startDate && t.date < startDate) return false;
//       if (endDate && t.date > endDate) return false;
//       return true;
//     });
//   }, [transactions, selectedCategory, startDate, endDate]);

//   const chartData = useMemo(() => {
//     if (!selectedCategory) return { labels: [], datasets: [] };

//     const dates = Array.from(new Set(filteredTransactions.map((t) => t.date))).sort();
//     const incomeData = dates.map((date) =>
//       filteredTransactions
//         .filter((t) => t.date === date && t.type === 'income')
//         .reduce((sum, t) => sum + t.amount, 0)
//     );
//     const expenseData = dates.map((date) =>
//       filteredTransactions
//         .filter((t) => t.date === date && t.type === 'expense')
//         .reduce((sum, t) => sum + t.amount, 0)
//     );
//      return {
//       labels: dates,
//       datasets: [
//         {
//           label: 'Incomes',
//           // backgroundColor: themeColors.income.backgroundColor,
//           // borderColor: themeColors.income.textColor,
//           borderWidth: 1,
//           data: incomeData,
//           fontFamily,
//           fontWeight:600,
//         },
//         {
//           label: 'Expense',
//           // backgroundColor: themeColors.expense.backgroundColor,
//           // borderColor: themeColors.expense.textColor,
//           borderWidth: 1,
//           data: expenseData,
//           fontFamily,
//           fontWeight:600,
//         },
//       ],
//     };
//   }, [filteredTransactions, selectedCategory, themeColors]);

//   return (
//     <Box sx={{ fontFamily, p: 2 }}>
//       <Grid container spacing={3} justifyContent="center">
//         {transactions.map((t, index) => {
//           const isFirst = index % 2 === 0;
//           const bgColor = isFirst ? 'black' : 'lavender';
//           const textColor = isFirst ? 'lavender' : 'black';
//           return (
//             <Grid item xs={12} sm={6} md={4} key={t.id}>
//               <Paper
//                 elevation={6}
//                 onClick={() => openModal(t.category)}
//                 sx={{
//                   p: 3,
//                   borderRadius: '20px',
//                   backgroundColor: bgColor,
//                   color: textColor,
//                   minHeight: 160,
//                   display: 'flex',
//                   flexDirection: 'column',
//                   justifyContent: 'space-between',
//                   fontFamily,
//                   boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
//                   transition: 'transform 0.3s ease-in-out',
//                   cursor: 'pointer',
//                   '&:hover': {
//                     transform: 'translateY(-5px)',
//                   },
//                 }}
//               >
//                 <Box display="flex" justifyContent="space-between" alignItems="center">
//                   <Typography variant="subtitle2" fontWeight={600} sx={{fontFamily,fontWeight:600,
                   
//                   }}>
//                     {t.category}
//                   </Typography>
//                   <Chip
//                     label={t.type.charAt(0).toUpperCase() + t.type.slice(1)}
//                     sx={{
//                       backgroundColor: bgColor,
//                       color: textColor,
//                       fontFamily,
//                       fontWeight: 600,
//                     }}
//                   />

//                 </Box>

//                 <Box mt={1}>
//                   <Typography variant="body2" color="inherit" sx={{fontFamily,fontWeight:600,}}>
//                     {t.date}
//                   </Typography>
//                   <Typography
//                     variant="h6"
//                     fontWeight="bold"
//                     sx={{
//                       color: t.type === 'income' ? 'lightgreen' : 'tomato',
//                       fontFamily,fontWeight:600,
//                     }}
//                   >
//                     ₹ {t.amount.toFixed(2)}
//                   </Typography>
//                 </Box>

//                 <Box mt={2} display="flex" justifyContent="space-between">
//                   {/* <Button
//                     sx={{
//                       backgroundColor: bgColor,
//                       color: textColor,
//                        fontFamily, fontWeight: 600,
//                        border: '2px solid transparent',
//                        borderRadius: '25px',
//                       '&:hover': {
//                         opacity: 0.9,
//                       },
//                     }}
//                   >
//                     Edit
//                   </Button> */}
//                   <CreditCardIcon />
//                   <Button
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     dispatch(deleteTransaction(t.id));
//                   }}
//                     sx={{
//                      backgroundColor: bgColor,
//                   color: textColor,
//                        fontFamily, fontWeight: 600,
//                       border: '2px solid transparent',
//                        borderRadius: '25px',
//                       '&:hover': {
//                         opacity: 0.9,
//                       },
//                     }}
//                   >
//                     Delete
//                   </Button>

//                 </Box>
//               </Paper>
//             </Grid>
//           );
//         })}
//       </Grid>

//       {/* Modal for category chart */}
//       {/* <Modal open={modalOpen} onClose={closeModal}>
//         <Box
//           sx={{
//             position: 'absolute',
//             top: '50%',
//             left: '50%',
//             transform: 'translate(-50%, -50%)',
//             bgcolor: 'lavender',
//             color: 'black',
//             boxShadow: 24,
//             p: 3,
//             borderRadius: 2,
//             width: '90%',
//             maxWidth: 600,
//             fontFamily,
//           }}
//         >
//           <Typography variant="h6" gutterBottom align="center">
//             {selectedCategory} - Transactions
//           </Typography>

//           <Box display="flex" gap={2} mb={2}>
//             <TextField
//               label="Start Date"
//               type="date"
//               value={startDate}
//               onChange={(e) => setStartDate(e.target.value)}
//               InputLabelProps={{ shrink: true }}
//               fullWidth
//               sx={{ bgcolor: 'white' }}
//             />
//             <TextField
//               label="End Date"
//               type="date"
//               value={endDate}
//               onChange={(e) => setEndDate(e.target.value)}
//               InputLabelProps={{ shrink: true }}
//               fullWidth
//               sx={{ bgcolor: 'white' }}
//             />
//           </Box>

//           <Bar
//             data={chartData}
//             options={{
//               responsive: true,
//               plugins: {
//                 legend: {
//                   labels: {
//                     color: 'black',
//                     font: { family: 'Comic Neue' },
//                   },
//                 },
//               },
//               scales: {
//                 x: {
//                   ticks: {
//                     color: 'black',
//                     font: { family: 'Comic Neue' },
//                   },
//                 },
//                 y: {
//                   ticks: {
//                     color: 'black',
//                     font: { family: 'Comic Neue' },
//                   },
//                 },
//               },
//             }}
//           />
//         </Box>
//       </Modal> */}
//     </Box>
//   );
// };

// export default CategoryTransactionCards;


import React, { useState, useMemo } from 'react';
import {
  Typography,
  Box,
  Button,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Paper
} from '@mui/material';
import Grid from '@mui/material/GridLegacy';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { deleteTransaction } from '../features/transactions/transactionSlice';
import { Download, Delete } from '@mui/icons-material';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import '@fontsource/comic-neue';
import { saveAs } from 'file-saver';
import { Close } from "@mui/icons-material";

const fontFamily = `'Comic Neue', cursive`;

const CategoryTransactionCards = () => {
  const transactions = useSelector((state: RootState) => state.transactions.items);
  const dispatch = useDispatch();

  const [selectedGroup, setSelectedGroup] = useState<{ type: string; category: string } | null>(null);

  // ✅ Group by type + category and sum
  const groupedTransactions = useMemo(() => {
    const map = new Map<string, { type: string; category: string; total: number }>();

    transactions.forEach((t) => {
      const key = `${t.type}-${t.category}`;
      if (map.has(key)) {
        map.get(key)!.total += t.amount;
      } else {
        map.set(key, { type: t.type, category: t.category, total: t.amount });
      }
    });

    return Array.from(map.values());
  }, [transactions]);

  // ✅ Transactions for selected group
  const selectedTransactions = useMemo(() => {
    if (!selectedGroup) return [];
    return transactions.filter(
      (t) => t.type === selectedGroup.type && t.category === selectedGroup.category
    );
  }, [transactions, selectedGroup]);

  // ✅ CSV Download for selected group
  const downloadCSV = () => {
    if (!selectedGroup) return;
    const rows = [['Date', 'Category', 'Type', 'Amount']];
    selectedTransactions.forEach((t) => {
      rows.push([t.date, t.category, t.type, t.amount.toString()]);
    });
    const csv = rows.map((r) => r.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, `${selectedGroup.type}_${selectedGroup.category}.csv`);
  };

  return (
    <Box sx={{ fontFamily, p: 2 }}>
      <Grid container spacing={3} justifyContent="center">
        {groupedTransactions.map((group, index) => {
          const isFirst = index % 2 === 0;
          const bgColor = isFirst ? 'black' : 'lavender';
          const textColor = isFirst ? 'lavender' : 'black';
          return (
            <Grid item xs={12} sm={6} md={4} key={`${group.type}-${group.category}`}>
              <Paper
                elevation={6}
                onClick={() => setSelectedGroup({ type: group.type, category: group.category })}
                sx={{
                  p: 3,
                  borderRadius: '20px',
                  backgroundColor: bgColor,
                  color: textColor,
                  minHeight: 160,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  fontFamily,
                  boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
                  transition: 'transform 0.3s ease-in-out',
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                  },
                }}
              >
                <Box display="flex" justifyContent="space-between" alignItems="center">
                  <Typography variant="subtitle2" fontWeight={600}>
                    {group.category}
                  </Typography>
                  <Chip
                    label={group.type.charAt(0).toUpperCase() + group.type.slice(1)}
                    sx={{
                      backgroundColor: bgColor,
                      color: textColor,
                      fontFamily,
                      fontWeight: 600,
                    }}
                  />
                </Box>

                <Box mt={1}>
                  <Typography variant="body2" color="inherit">
                    Total
                  </Typography>
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    sx={{
                      color: group.type === 'income' ? 'lightgreen' : 'tomato',
                    }}
                  >
                    ₹ {group.total.toFixed(2)}
                  </Typography>
                </Box>

                <Box mt={2} display="flex" justifyContent="space-between">
                  <CreditCardIcon />
                  <Button
                    sx={{
                      backgroundColor: bgColor,
                      color: textColor,
                      fontFamily,
                      fontWeight: 600,
                      border: '2px solid transparent',
                      borderRadius: '25px',
                      '&:hover': {
                        opacity: 0.9,
                      },
                    }}
                  >
                    View
                  </Button>
                </Box>
              </Paper>
            </Grid>
          );
        })}
      </Grid>

      {/* ✅ Popup Table View */}
  {/* ✅ Popup Table View */}
<Dialog
  open={!!selectedGroup}
  onClose={() => setSelectedGroup(null)}
  maxWidth="md"
  fullWidth
  PaperProps={{
    sx: {
      borderRadius: '20px',
      backgroundColor: 'lavender',
      color: 'black',
      fontFamily,
      boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
      overflow: 'hidden',
    },
  }}
>
  <DialogTitle
    sx={{
      fontFamily,
      fontWeight: 600,
      borderBottom: '2px solid lavender',
      textAlign: 'center',
      fontSize: { xs: '1.2rem', sm: '1.5rem' },
      position: "relative", // so the close icon can be positioned inside
    }}
  >
    {selectedGroup?.category} - {selectedGroup?.type}

    {/* Close button */}
    <IconButton
      onClick={() => setSelectedGroup(null)}
      sx={{
        position: "absolute",
        right: 8,
        top: 8,
        color: "black",
      }}
    >
      <Close />
    </IconButton>
  </DialogTitle>

  <DialogContent sx={{ p: { xs: 2, sm: 3 } }}>
    <Box display="flex" justifyContent="flex-end" mb={2}>
      <Button
        startIcon={<Download />}
        variant="contained"
        onClick={downloadCSV}
        sx={{
          fontFamily,
          backgroundColor: 'black',
          color: 'lavender',
          fontWeight: 'bold',
          borderRadius: '25px',
          '&:hover': {
            backgroundColor: 'lavender',
            color:"black"
          },
        }}
      >
        Download CSV
      </Button>
    </Box>

    <Box sx={{ overflowX: 'auto' }}>
      <Table
        sx={{
          minWidth: 400,
          '& th': {
            color: 'black',
            fontFamily,
            fontWeight: 'bold',
            borderBottom: '2px solid black',
            textAlign: 'center',
          },
          '& td': {
            color: 'black',
            fontFamily,
            textAlign: 'center',
            borderBottom: '1px solid rgba(255,255,255,0.2)',
          },
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell>S.no</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {selectedTransactions.map((t, index) => (
            <TableRow key={t.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{t.date}</TableCell>
              <TableCell
                sx={{
                  color: t.type === 'income' ? 'lightgreen' : 'tomato',
                  fontWeight: 'bold',
                }}
              >
                ₹ {t.amount.toFixed(2)}
              </TableCell>
              <TableCell>
                <IconButton
                  onClick={() => dispatch(deleteTransaction(t.id))}
                  sx={{ color: 'tomato' }}
                >
                  <Delete />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
          {selectedTransactions.length === 0 && (
            <TableRow>
              <TableCell colSpan={3} align="center">
                No transactions found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </Box>
  </DialogContent>
</Dialog>

    </Box>
  );
};

export default CategoryTransactionCards;

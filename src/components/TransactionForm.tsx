// // // components/TransactionForm.tsx
// // import React, {
// //   useState,
// //   useImperativeHandle,
// //   forwardRef,
// //   useEffect,
// // } from 'react';
// // import { useDispatch } from 'react-redux';
// // import { addTransaction } from '../features/transactions/transactionSlice';
// // import { v4 as uuidv4 } from 'uuid';
// // import {
// //   Box,
// //   TextField,
// //   MenuItem,
// //   Button,
// //   Typography,
// //   Paper,
// //   InputAdornment,
// //   keyframes,
// // } from '@mui/material';
// // import { AttachMoney, Category as CategoryIcon } from '@mui/icons-material';
// // import { ArrowDownward, ArrowUpward } from '@mui/icons-material';
// // import {
// //   Fastfood,
// //   Flight,
// //   ShoppingCart,
// //   TrendingUp,
// //   AddCircleOutline,
// //   Category as DefaultCategoryIcon,
// // } from '@mui/icons-material';

// // const categoryIcons: { [key: string]: React.ElementType } = {
// //   Food: Fastfood,
// //   Travel: Flight,
// //   Shopping: ShoppingCart,
// //   Salary: AttachMoney,
// //   Investment: TrendingUp,
// //   'Add New Category': AddCircleOutline,
// // };


// // const fadeIn = keyframes`
// //   from {
// //     opacity: 0;
// //     transform: translateY(30px);
// //   }
// //   to {
// //     opacity: 1;
// //     transform: translateY(0);
// //   }
// // `;

// // const defaultCategories = ['Food', 'Travel', 'Shopping', 'Salary', 'Investment', 'Add New Category'];

// // // 👇 Accept ref via forwardRef
// // const TransactionForm = forwardRef((_, ref) => {
// //   const [type, setType] = useState<'income' | 'expense' | ''>('');
// //   const [category, setCategory] = useState('');
// //   const [amount, setAmount] = useState('');
// //   const [date, setDate] = useState('');
// //   const [customCategory, setCustomCategory] = useState('');
// //   const [categories, setCategories] = useState(defaultCategories);
// //   const [highlighted, setHighlighted] = useState(false);

// //   const dispatch = useDispatch();

// //   // 👇 Expose scrollToAndHighlight to parent using useImperativeHandle
// //   useImperativeHandle(ref, () => ({
// //     scrollToAndHighlight: () => {
// //       setHighlighted(true);
// //       const form = document.getElementById('transaction-form');
// //       if (form) {
// //         form.scrollIntoView({ behavior: 'smooth', block: 'center' });
// //       }
// //       setTimeout(() => setHighlighted(false), 2000);
// //     },
// //   }));

// //   const handleCreate = () => {
// //     const finalCategory = category === 'Add New Category' ? customCategory : category;
// //     if (!type || !finalCategory || !amount || !date) return;

// //     dispatch(
// //       addTransaction({
// //         id: uuidv4(),
// //         type,
// //         category: finalCategory,
// //         amount: parseFloat(amount),
// //         date,
// //       })
// //     );

// //     setType('');
// //     setCategory('');
// //     setAmount('');
// //     setDate('');
// //     setCustomCategory('');

// //     if (category === 'Add New Category' && customCategory && !categories.includes(customCategory)) {
// //       setCategories((prev) => [...prev.filter(c => c !== 'Add New Category'), customCategory, 'Add New Category']);
// //     }
// //   };

// //   return (
// //     <Paper
// //       id="transaction-form"
// //       elevation={6}
// //       sx={{
// //         p: 4,
// //         maxWidth: 460,
// //         mx: 'auto',
// //         mt: 4,
// //         bgcolor: highlighted ? '#fff3e0' : '#f7fdfd',
// //         backdropFilter: 'blur(10px)',
// //         borderRadius: 4,
// //         animation: `${fadeIn} 0.6s ease-in-out`,
// //         boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
// //       }}
// //     >
// //       <Typography
// //         variant="h5"
// //         gutterBottom
// //         sx={{
// //           textAlign: 'center',
// //           fontWeight: 'bold',
// //         background: 'linear-gradient(to right, #00c6ff, #0072ff)',
// //           WebkitBackgroundClip: 'text',
// //           WebkitTextFillColor: 'transparent',
// //           mb: 3,
// //           letterSpacing: 1,
// //         }}
// //       >
// //         Transactions
// //       </Typography>

// //       {/* Type */}
// //       <TextField
// //         label="Type"
// //         value={type}
// //         onChange={(e) => setType(e.target.value as 'income' | 'expense')}
// //         fullWidth
// //         select
// //         margin="normal"
// //         InputLabelProps={{ sx: { color: '#0a2342' } }}
// //         InputProps={{
// //           startAdornment: (
// //             <InputAdornment position="start">
// //               <AttachMoney color="action" />
// //             </InputAdornment>
// //           ),
// //         }}
// //         sx={{
// //           '& .MuiOutlinedInput-root': {
// //             borderRadius: 2,
// //             '& fieldset': { borderColor: '#0a2342' },
// //             '&:hover fieldset': { borderColor: '#2196f3' },
// //             '&.Mui-focused fieldset': {
// //               borderColor: '#3f51b5',
// //               boxShadow: '0 0 0 2px rgba(33, 150, 243, 0.2)',
// //             },
// //           },
// //           '& label.Mui-focused': { color: '#0a2342' },
// //         }}
// //       >
// //        <MenuItem value="income">
// //   <ArrowDownward sx={{ color: 'green', mr: 1 }} />
// //   Income
// // </MenuItem>
// // <MenuItem value="expense">
// //   <ArrowUpward sx={{ color: 'red', mr: 1 }} />
// //   Expense
// // </MenuItem>
// //       </TextField>

// //        {/* Category */}
// //       <TextField
// //         label="Category"
// //         value={category}
// //         onChange={(e) => setCategory(e.target.value)}
// //         select
// //         fullWidth
// //         margin="normal"
// //         InputLabelProps={{ sx: { color: '#0a2342' } }}
// //         InputProps={{
// //           startAdornment: (
// //             <InputAdornment position="start">
// //               <CategoryIcon color="action" />
// //             </InputAdornment>
// //           ),
// //         }}
// //         sx={{
// //           '& .MuiOutlinedInput-root': {
// //             borderRadius: 2,
// //             '& fieldset': { borderColor: '#0a2342' },
// //             '&:hover fieldset': { borderColor: '#2196f3' },
// //             '&.Mui-focused fieldset': {
// //               borderColor: '#3f51b5',
// //               boxShadow: '0 0 0 2px rgba(33, 150, 243, 0.2)',
// //             },
// //           },
// //           '& label.Mui-focused': { color: '#0a2342' },
// //         }}
// //       >
// //         {categories.map((cat) => {
// //           const Icon = categoryIcons[cat] || DefaultCategoryIcon;
// //           return (
// //             <MenuItem key={cat} value={cat}>
// //               <Icon sx={{ color: '#3f51b5', mr: 1 }} />
// //               {cat}
// //             </MenuItem>
// //           );
// //         })}
// //       </TextField>

// //       {/* Custom Category Field */}
// //       {category === 'Add New Category' && (
// //         <TextField
// //           label="New Category"
// //           value={customCategory}
// //           onChange={(e) => setCustomCategory(e.target.value)}
// //           fullWidth
// //           margin="normal"
// //           InputLabelProps={{ sx: { color: '#0a2342' } }}
// //           sx={{
// //             '& .MuiOutlinedInput-root': {
// //               borderRadius: 2,
// //               '& fieldset': { borderColor: '#0a2342' },
// //               '&:hover fieldset': { borderColor: '#2196f3' },
// //               '&.Mui-focused fieldset': {
// //                 borderColor: '#3f51b5',
// //                 boxShadow: '0 0 0 2px rgba(33, 150, 243, 0.2)',
// //               },
// //             },
// //             '& label.Mui-focused': { color: '#0a2342' },
// //           }}
// //         />
// //       )}

// //       {/* Amount */}
// //       <TextField
// //         label="Amount"
// //         value={amount}
// //         onChange={(e) => setAmount(e.target.value)}
// //         type="number"
// //         fullWidth
// //         margin="normal"
// //         InputLabelProps={{ sx: { color: '#0a2342' } }}
// //         sx={{
// //           '& .MuiOutlinedInput-root': {
// //             borderRadius: 2,
// //             '& fieldset': { borderColor: '#0a2342' },
// //             '&:hover fieldset': { borderColor: '#2196f3' },
// //             '&.Mui-focused fieldset': {
// //               borderColor: '#3f51b5',
// //               boxShadow: '0 0 0 2px rgba(33, 150, 243, 0.2)',
// //             },
// //           },
// //           '& label.Mui-focused': { color: '#0a2342' },
// //         }}
// //       />

// //       {/* Date */}
// //       <TextField
// //         label="Date"
// //         value={date}
// //         onChange={(e) => setDate(e.target.value)}
// //         type="date"
// //         fullWidth
// //         margin="normal"
// //         InputLabelProps={{ shrink: true, sx: { color: '#0a2342' } }}
// //         sx={{
// //           '& .MuiOutlinedInput-root': {
// //             borderRadius: 2,
// //             '& fieldset': { borderColor: '#0a2342' },
// //             '&:hover fieldset': { borderColor: '#2196f3' },
// //             '&.Mui-focused fieldset': {
// //               borderColor: '#3f51b5',
// //               boxShadow: '0 0 0 2px rgba(33, 150, 243, 0.2)',
// //             },
// //           },
// //           '& label.Mui-focused': { color: '#0a2342' },
// //         }}
// //       />

// //       {/* Button */}
// //       <Button
// //         onClick={handleCreate}
// //         variant="contained"
// //         fullWidth
// //         sx={{
// //           mt: 3,
// //           py: 1.2,
// //           borderRadius: 2,
// //           textTransform: 'none',
// //           fontWeight: 'bold',
// //           fontSize: '1rem',
// //           background: 'linear-gradient(to right, #3f51b5, #2196f3)',
// //           boxShadow: '0 6px 20px rgba(33, 150, 243, 0.4)',
// //           '&:hover': {
// //             background: 'linear-gradient(to right, #303f9f, #1976d2)',
// //           },
// //         }}
// //       >
// //         Create
// //       </Button>
// //     </Paper>
// //   );
// // });

// // export default TransactionForm;



// // components/TransactionForm.tsx
// import React, {
//   useState,
//   useImperativeHandle,
//   forwardRef,
// } from 'react';
// import { useDispatch } from 'react-redux';
// import { addTransaction } from '../features/transactions/transactionSlice';
// import { v4 as uuidv4 } from 'uuid';
// import {
//   TextField,
//   MenuItem,
//   Button,
//   Typography,
//   Paper,
//   InputAdornment,
//   keyframes,
// } from '@mui/material';
// import {
//   AttachMoney,
//   Category as CategoryIcon,
//   ArrowDownward,
//   ArrowUpward,
//   Fastfood,
//   Flight,
//   ShoppingCart,
//   TrendingUp,
//   AddCircleOutline,
//   Category as DefaultCategoryIcon,
// } from '@mui/icons-material';

// const categoryIcons: { [key: string]: React.ElementType } = {
//   Food: Fastfood,
//   Travel: Flight,
//   Shopping: ShoppingCart,
//   Salary: AttachMoney,
//   Investment: TrendingUp,
//   'Add New Category': AddCircleOutline,
// };

// const fadeIn = keyframes`
//   from {
//     opacity: 0;
//     transform: translateY(30px);
//   }
//   to {
//     opacity: 1;
//     transform: translateY(0);
//   }
// `;

// const defaultCategories = [
//   'Food',
//   'Travel',
//   'Shopping',
//   'Salary',
//   'Investment',
//   'Add New Category',
// ];

// const TransactionForm = forwardRef((_, ref) => {
//   const [type, setType] = useState<'income' | 'expense' | ''>('');
//   const [category, setCategory] = useState('');
//   const [amount, setAmount] = useState('');
//   const [date, setDate] = useState('');
//   const [customCategory, setCustomCategory] = useState('');
//   const [categories, setCategories] = useState(defaultCategories);
//   const [highlighted, setHighlighted] = useState(false);

//   const dispatch = useDispatch();

//   useImperativeHandle(ref, () => ({
//     scrollToAndHighlight: () => {
//       setHighlighted(true);
//       const form = document.getElementById('transaction-form');
//       if (form) {
//         form.scrollIntoView({ behavior: 'smooth', block: 'center' });
//       }
//       setTimeout(() => setHighlighted(false), 2000);
//     },
//   }));

//   const handleCreate = () => {
//     const finalCategory =
//       category === 'Add New Category' ? customCategory : category;
//     if (!type || !finalCategory || !amount || !date) return;

//     dispatch(
//       addTransaction({
//         id: uuidv4(),
//         type,
//         category: finalCategory,
//         amount: parseFloat(amount),
//         date,
//       })
//     );

//     setType('');
//     setCategory('');
//     setAmount('');
//     setDate('');
//     setCustomCategory('');

//     if (
//       category === 'Add New Category' &&
//       customCategory &&
//       !categories.includes(customCategory)
//     ) {
//       setCategories((prev) => [
//         ...prev.filter((c) => c !== 'Add New Category'),
//         customCategory,
//         'Add New Category',
//       ]);
//     }
//   };

//   const textFieldStyles = {
//     '& .MuiOutlinedInput-root': {
//       borderRadius: '25px',
//       paddingLeft: 1,
//       backgroundColor: '#1c1c1e',
//       color: 'black',
//       '& fieldset': { borderColor: 'black' },
//       '&:hover fieldset': { borderColor: 'black' },
//       '&.Mui-focused fieldset': {
//         borderColor: 'black',
//         boxShadow: '0 0 0 2px rgba(254, 231, 21, 0.2)',
//       },
//       '& input': {
//         color: 'black',
//       },
//     },
//     '& label': {
//       color: 'black',
//     },
//     '& label.Mui-focused': {
//       color: 'black',
//     },
//     '& .MuiSvgIcon-root': {
//       color: 'black',
//     },
//   };

//   return (
//     <Paper
//       id="transaction-form"
//       elevation={6}
//       sx={{
//         p: 4,
//         maxWidth: 480,
//         mx: 'auto',
//         mt: 5,
//         borderRadius: '20px',
//         bgcolor: '#101820',
//         animation: `${fadeIn} 0.5s ease-out`,
//         boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)',
//         transition: 'background 0.3s ease',
//       }}
//     >
//       <Typography
//         variant="h5"
//         sx={{
//           fontWeight: 700,
//           textAlign: 'center',
//           mb: 3,
//           color: 'black',
//           letterSpacing: 1,
//         }}
//       >
//         New Transaction
//       </Typography>

//       {/* Type */}
//       <TextField
//         label="Type"
//         value={type}
//         onChange={(e) => setType(e.target.value as 'income' | 'expense')}
//         fullWidth
//         select
//         margin="normal"
//         InputProps={{
//           startAdornment: (
//             <InputAdornment position="start">
//               <AttachMoney sx={{ color: 'black' }} />
//             </InputAdornment>
//           ),
//         }}
//         sx={textFieldStyles}
//       >
//         <MenuItem value="income">
//           <ArrowDownward sx={{ color: 'limegreen', mr: 1 }} /> Income
//         </MenuItem>
//         <MenuItem value="expense">
//           <ArrowUpward sx={{ color: 'orangered', mr: 1 }} /> Expense
//         </MenuItem>
//       </TextField>

//       {/* Category */}
//       <TextField
//         label="Category"
//         value={category}
//         onChange={(e) => setCategory(e.target.value)}
//         select
//         fullWidth
//         margin="normal"
//         InputProps={{
//           startAdornment: (
//             <InputAdornment position="start">
//               <CategoryIcon sx={{ color: 'black' }} />
//             </InputAdornment>
//           ),
//         }}
//         sx={textFieldStyles}
//       >
//         {categories.map((cat) => {
//           const Icon = categoryIcons[cat] || DefaultCategoryIcon;
//           return (
//             <MenuItem key={cat} value={cat}>
//               <Icon sx={{ color: 'black', mr: 1 }} />
//               {cat}
//             </MenuItem>
//           );
//         })}
//       </TextField>

//       {/* Custom Category */}
//       {category === 'Add New Category' && (
//         <TextField
//           label="New Category"
//           value={customCategory}
//           onChange={(e) => setCustomCategory(e.target.value)}
//           fullWidth
//           margin="normal"
//           sx={textFieldStyles}
//         />
//       )}

//       {/* Amount */}
//       <TextField
//         label="Amount"
//         value={amount}
//         onChange={(e) => setAmount(e.target.value)}
//         type="number"
//         fullWidth
//         margin="normal"
//         InputProps={{
//           startAdornment: (
//             <InputAdornment position="start" sx={{ color: 'black' }}>
//               ₹
//             </InputAdornment>
//           ),
//         }}
//         sx={textFieldStyles}
//       />

//       {/* Date */}
//       <TextField
//         label="Date"
//         value={date}
//         onChange={(e) => setDate(e.target.value)}
//         type="date"
//         fullWidth
//         margin="normal"
//         InputLabelProps={{ shrink: true }}
//         sx={textFieldStyles}
//       />

//       {/* Create Button */}
//       <Button
//         onClick={handleCreate}
//         variant="contained"
//         fullWidth
//         sx={{
//           mt: 3,
//           py: 1.3,
//           fontSize: '1rem',
//           fontWeight: 'bold',
//           textTransform: 'none',
//           borderRadius: '25px',
//           color: '#101820',
//           backgroundColor: 'black',
//           '&:hover': {
//             backgroundColor: '#e6d200',
//           },
//         }}
//       >
//         Create
//       </Button>
//     </Paper>
//   );
// });

// export default TransactionForm;

// components/TransactionForm.tsx
import React, {
  useState,
  useImperativeHandle,
  forwardRef,
} from 'react';
import { useDispatch } from 'react-redux';
import { addTransaction } from '../features/transactions/transactionSlice';
import { v4 as uuidv4 } from 'uuid';
import {
  TextField,
  MenuItem,
  Button,
  Typography,
  Paper,
  InputAdornment,
  keyframes,
  Box,
} from '@mui/material';
import {
  AttachMoney,
  Category as CategoryIcon,
  ArrowDownward,
  ArrowUpward,
  Fastfood,
  Flight,
  ShoppingCart,
  TrendingUp,
  AddCircleOutline,
  Savings,
  BusinessCenter,
  LocalGroceryStore,
  LocalAtm,
} from '@mui/icons-material';

// Category icons
const categoryIcons: { [key: string]: React.ElementType } = {
  Food: Fastfood,
  Travel: Flight,
  Shopping: ShoppingCart,
  Salary: AttachMoney,
  Investment: TrendingUp,
  Freelance: BusinessCenter,
  Savings: Savings,
  Groceries: LocalGroceryStore,
  ATM: LocalAtm,
  'Add New Category': AddCircleOutline,
};

// Type-based default categories
const defaultIncomeCategories = ['Salary', 'Investment', 'Freelance', 'Savings', 'Add New Category'];
const defaultExpenseCategories = ['Food', 'Travel', 'Shopping', 'Groceries', 'ATM', 'Add New Category'];

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const TransactionForm = forwardRef((_, ref) => {
  const [type, setType] = useState<'income' | 'expense' | ''>('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [customCategory, setCustomCategory] = useState('');
  const [incomeCategories, setIncomeCategories] = useState(defaultIncomeCategories);
  const [expenseCategories, setExpenseCategories] = useState(defaultExpenseCategories);
  const [highlighted, setHighlighted] = useState(false);
  const fontFamily = `'Comic Sans MS', 'cursive', 'sans-serif'`; // 🎉 Fun key font
  const dispatch = useDispatch();

  useImperativeHandle(ref, () => ({
    scrollToAndHighlight: () => {
      setHighlighted(true);
      const form = document.getElementById('transaction-form');
      if (form) {
        form.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      setTimeout(() => setHighlighted(false), 2000);
    },
  }));

  const getRelevantCategories = () => {
    if (type === 'income') return incomeCategories;
    if (type === 'expense') return expenseCategories;
    return [];
  };

  const handleCreate = () => {
    const finalCategory = category === 'Add New Category' ? customCategory : category;
    if (!type || !finalCategory || !amount || !date) return;

    dispatch(
      addTransaction({
        id: uuidv4(),
        type,
        category: finalCategory,
        amount: parseFloat(amount),
        date,
      })
    );

    // Reset fields
    setType('');
    setCategory('');
    setAmount('');
    setDate('');
    setCustomCategory('');

    // Add new category to relevant list
    if (category === 'Add New Category' && customCategory) {
      if (type === 'income' && !incomeCategories.includes(customCategory)) {
        setIncomeCategories((prev) => [
          ...prev.filter((c) => c !== 'Add New Category'),
          customCategory,
          'Add New Category',
        ]);
      }
      if (type === 'expense' && !expenseCategories.includes(customCategory)) {
        setExpenseCategories((prev) => [
          ...prev.filter((c) => c !== 'Add New Category'),
          customCategory,
          'Add New Category',
        ]);
      }
    }
  };

  const isFormValid =
  type &&
  category &&
  amount &&
  date &&
  (category !== 'Add New Category' || customCategory);

const hasAnyFieldFilled =
  type || category || customCategory || amount || date;


const resetForm = () => {
  setType('');
  setCategory('');
  setAmount('');
  setDate('');
  setCustomCategory('');
};


  const textFieldStyles = {
    '& .MuiOutlinedInput-root': {
      borderRadius: '25px',
      paddingLeft: 1,
      backgroundColor: 'lavender',
      color: 'black',
      '& fieldset': { borderColor: 'black' },
      '&:hover fieldset': { borderColor: 'black' },
      '&.Mui-focused fieldset': {
        borderColor: 'black',
        boxShadow: '0 0 0 2px rgba(254, 231, 21, 0.2)',
      },
      '& input': {
        color: 'black',
      },
    },
    '& label': {
      color: 'black',
    },
    '& label.Mui-focused': {
      color: 'black',
    },
    '& .MuiSvgIcon-root': {
      color: 'black',
    },
    fontFamily
  };

  return (
    <Paper
      id="transaction-form"
      elevation={6}
      sx={{
        p: 4,
        maxWidth: 480,
        mx: 'auto',
        mt: 5,
        borderRadius: '20px',
        bgcolor: 'lavender',
        animation: `${fadeIn} 0.5s ease-out`,
        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)',
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontWeight: 700,
          textAlign: 'center',
          mb: 3,
          color: 'black',
          letterSpacing: 1,
          fontFamily
        }}
      >
        New Transaction
      </Typography>

      {/* Type */}
      <TextField
        label="Type"
        value={type}
        onChange={(e) => {
          setType(e.target.value as 'income' | 'expense');
          setCategory('');
          setCustomCategory('');
        }}
        fullWidth
        select
        margin="normal"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AttachMoney sx={{ color: 'black' }} />
            </InputAdornment>
          ),
        }}
        sx={textFieldStyles}
      >
        <MenuItem value="income">
          <ArrowDownward sx={{ color: 'limegreen', mr: 1 }} /> Income
        </MenuItem>
        <MenuItem value="expense">
          <ArrowUpward sx={{ color: 'orangered', mr: 1 }} /> Expense
        </MenuItem>
      </TextField>

      {/* Category */}
      <TextField
        label="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        select
        fullWidth
        margin="normal"
        disabled={!type}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <CategoryIcon sx={{ color: 'black' }} />
            </InputAdornment>
          ),
        }}
        sx={textFieldStyles}
      >
        {getRelevantCategories().map((cat) => {
          const Icon = categoryIcons[cat] || CategoryIcon;
          return (
            <MenuItem key={cat} value={cat}>
              <Icon sx={{ color: 'black', mr: 1 }} />
              {cat}
            </MenuItem>
          );
        })}
      </TextField>

      {/* Custom Category */}
      {category === 'Add New Category' && (
        <TextField
          label="New Category"
          value={customCategory}
          onChange={(e) => setCustomCategory(e.target.value)}
          fullWidth
          margin="normal"
          sx={textFieldStyles}
        />
      )}

      {/* Amount */}
      <TextField
        label="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        type="number"
        fullWidth
        margin="normal"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" sx={{ color: 'black' }}>
              ₹
            </InputAdornment>
          ),
        }}
        sx={textFieldStyles}
      />

      {/* Date */}
      <TextField
        label="Date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        type="date"
        fullWidth
        margin="normal"
        InputLabelProps={{ shrink: true }}
        sx={textFieldStyles}
      />

      {/* Create Button */}
      {/* <Button
        onClick={handleCreate}
        variant="contained"
        fullWidth
        sx={{
          mt: 3,
          py: 1.3,
          fontSize: '1rem',
          fontWeight: 'bold',
          textTransform: 'none',
          borderRadius: '25px',
          color: 'lavender',
          fontFamily,
          backgroundColor: 'black',
          border: '2px solid transparent', 
          '&:hover': {
            backgroundColor: 'lavender',
            color:"black",
            border: '2px solid black',
          },
        }}
      >
        Create
      </Button> */}
      <Box mt={3} display="flex" gap={2}>
    <Button
      onClick={resetForm}
    disabled={!hasAnyFieldFilled}
      variant="outlined"
      fullWidth
      sx={{
        py: 1.3,
        fontSize: '1rem',
        fontWeight: 'bold',
        textTransform: 'none',
        borderRadius: '25px',
        color: 'black',
        fontFamily,
        border: '2px solid black',
        backgroundColor: 'transparent',
        '&:hover': {
          backgroundColor: 'black',
          color: 'lavender',
        },
      }}
    >
      Reset
    </Button>
  <Button
    onClick={handleCreate}
    variant="contained"
    fullWidth
    disabled={!isFormValid} 
    sx={{
      py: 1.3,
      fontSize: '1rem',
      fontWeight: 'bold',
      textTransform: 'none',
      borderRadius: '25px',
      color: 'lavender',
      fontFamily,
      backgroundColor: 'black',
      border: '2px solid transparent',
      '&:hover': {
        backgroundColor: 'lavender',
        color: 'black',
        border: '2px solid black',
      },
    }}
  >
    Create
  </Button>

</Box>

    </Paper>
  );
});

export default TransactionForm;

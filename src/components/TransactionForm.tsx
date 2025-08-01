// components/TransactionForm.tsx
import React, {
  useState,
  useImperativeHandle,
  forwardRef,
  useEffect,
} from 'react';
import { useDispatch } from 'react-redux';
import { addTransaction } from '../features/transactions/transactionSlice';
import { v4 as uuidv4 } from 'uuid';
import {
  Box,
  TextField,
  MenuItem,
  Button,
  Typography,
  Paper,
  InputAdornment,
  keyframes,
} from '@mui/material';
import { AttachMoney, Category as CategoryIcon } from '@mui/icons-material';
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';
import {
  Fastfood,
  Flight,
  ShoppingCart,
  TrendingUp,
  AddCircleOutline,
  Category as DefaultCategoryIcon,
} from '@mui/icons-material';

const categoryIcons: { [key: string]: React.ElementType } = {
  Food: Fastfood,
  Travel: Flight,
  Shopping: ShoppingCart,
  Salary: AttachMoney,
  Investment: TrendingUp,
  'Add New Category': AddCircleOutline,
};


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

const defaultCategories = ['Food', 'Travel', 'Shopping', 'Salary', 'Investment', 'Add New Category'];

// 👇 Accept ref via forwardRef
const TransactionForm = forwardRef((_, ref) => {
  const [type, setType] = useState<'income' | 'expense' | ''>('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [customCategory, setCustomCategory] = useState('');
  const [categories, setCategories] = useState(defaultCategories);
  const [highlighted, setHighlighted] = useState(false);

  const dispatch = useDispatch();

  // 👇 Expose scrollToAndHighlight to parent using useImperativeHandle
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

    setType('');
    setCategory('');
    setAmount('');
    setDate('');
    setCustomCategory('');

    if (category === 'Add New Category' && customCategory && !categories.includes(customCategory)) {
      setCategories((prev) => [...prev.filter(c => c !== 'Add New Category'), customCategory, 'Add New Category']);
    }
  };

  return (
    <Paper
      id="transaction-form"
      elevation={6}
      sx={{
        p: 4,
        maxWidth: 460,
        mx: 'auto',
        mt: 4,
        bgcolor: highlighted ? '#fff3e0' : 'white',
        backdropFilter: 'blur(10px)',
        borderRadius: 4,
        animation: `${fadeIn} 0.6s ease-in-out`,
        boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
      }}
    >
      <Typography
        variant="h5"
        gutterBottom
        sx={{
          textAlign: 'center',
          fontWeight: 'bold',
        background: 'linear-gradient(to right, #00c6ff, #0072ff)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          mb: 3,
          letterSpacing: 1,
        }}
      >
        Transactions
      </Typography>

      {/* Type */}
      <TextField
        label="Type"
        value={type}
        onChange={(e) => setType(e.target.value as 'income' | 'expense')}
        fullWidth
        select
        margin="normal"
        InputLabelProps={{ sx: { color: '#0a2342' } }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AttachMoney color="action" />
            </InputAdornment>
          ),
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            borderRadius: 2,
            '& fieldset': { borderColor: '#0a2342' },
            '&:hover fieldset': { borderColor: '#2196f3' },
            '&.Mui-focused fieldset': {
              borderColor: '#3f51b5',
              boxShadow: '0 0 0 2px rgba(33, 150, 243, 0.2)',
            },
          },
          '& label.Mui-focused': { color: '#0a2342' },
        }}
      >
       <MenuItem value="income">
  <ArrowDownward sx={{ color: 'green', mr: 1 }} />
  Income
</MenuItem>
<MenuItem value="expense">
  <ArrowUpward sx={{ color: 'red', mr: 1 }} />
  Expense
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
        InputLabelProps={{ sx: { color: '#0a2342' } }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <CategoryIcon color="action" />
            </InputAdornment>
          ),
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            borderRadius: 2,
            '& fieldset': { borderColor: '#0a2342' },
            '&:hover fieldset': { borderColor: '#2196f3' },
            '&.Mui-focused fieldset': {
              borderColor: '#3f51b5',
              boxShadow: '0 0 0 2px rgba(33, 150, 243, 0.2)',
            },
          },
          '& label.Mui-focused': { color: '#0a2342' },
        }}
      >
        {categories.map((cat) => {
          const Icon = categoryIcons[cat] || DefaultCategoryIcon;
          return (
            <MenuItem key={cat} value={cat}>
              <Icon sx={{ color: '#3f51b5', mr: 1 }} />
              {cat}
            </MenuItem>
          );
        })}
      </TextField>

      {/* Custom Category Field */}
      {category === 'Add New Category' && (
        <TextField
          label="New Category"
          value={customCategory}
          onChange={(e) => setCustomCategory(e.target.value)}
          fullWidth
          margin="normal"
          InputLabelProps={{ sx: { color: '#0a2342' } }}
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: 2,
              '& fieldset': { borderColor: '#0a2342' },
              '&:hover fieldset': { borderColor: '#2196f3' },
              '&.Mui-focused fieldset': {
                borderColor: '#3f51b5',
                boxShadow: '0 0 0 2px rgba(33, 150, 243, 0.2)',
              },
            },
            '& label.Mui-focused': { color: '#0a2342' },
          }}
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
        InputLabelProps={{ sx: { color: '#0a2342' } }}
        sx={{
          '& .MuiOutlinedInput-root': {
            borderRadius: 2,
            '& fieldset': { borderColor: '#0a2342' },
            '&:hover fieldset': { borderColor: '#2196f3' },
            '&.Mui-focused fieldset': {
              borderColor: '#3f51b5',
              boxShadow: '0 0 0 2px rgba(33, 150, 243, 0.2)',
            },
          },
          '& label.Mui-focused': { color: '#0a2342' },
        }}
      />

      {/* Date */}
      <TextField
        label="Date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        type="date"
        fullWidth
        margin="normal"
        InputLabelProps={{ shrink: true, sx: { color: '#0a2342' } }}
        sx={{
          '& .MuiOutlinedInput-root': {
            borderRadius: 2,
            '& fieldset': { borderColor: '#0a2342' },
            '&:hover fieldset': { borderColor: '#2196f3' },
            '&.Mui-focused fieldset': {
              borderColor: '#3f51b5',
              boxShadow: '0 0 0 2px rgba(33, 150, 243, 0.2)',
            },
          },
          '& label.Mui-focused': { color: '#0a2342' },
        }}
      />

      {/* Button */}
      <Button
        onClick={handleCreate}
        variant="contained"
        fullWidth
        sx={{
          mt: 3,
          py: 1.2,
          borderRadius: 2,
          textTransform: 'none',
          fontWeight: 'bold',
          fontSize: '1rem',
          background: 'linear-gradient(to right, #3f51b5, #2196f3)',
          boxShadow: '0 6px 20px rgba(33, 150, 243, 0.4)',
          '&:hover': {
            background: 'linear-gradient(to right, #303f9f, #1976d2)',
          },
        }}
      >
        Create
      </Button>
    </Paper>
  );
});

export default TransactionForm;

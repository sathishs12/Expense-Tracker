// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface Transaction {
//   id: string;
//   type: 'income' | 'expense';
//   category: string;
//   amount: number;
//   date: string;
// }

// interface TransactionState {
//   items: Transaction[];
// }

// const initialState: TransactionState = {
//   items: [],
// };

// const transactionSlice = createSlice({
//   name: 'transactions',
//   initialState,
//   reducers: {
//     addTransaction: (state, action: PayloadAction<Transaction>) => {
//       state.items.push(action.payload);
//     },
//     clearIncomeTransactions: (state) => {
//       state.items = state.items.filter(t => t.type !== 'income');
//     },
//     clearExpenseTransactions: (state) => {
//       state.items = state.items.filter(t => t.type !== 'expense');
//     },
//   },
// });

// export const { addTransaction, clearIncomeTransactions , clearExpenseTransactions} = transactionSlice.actions;
// export default transactionSlice.reducer;


// // transactionSlice.ts
// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface Transaction {
//   id: string;
//   type: 'income' | 'expense';
//   category: string;
//   amount: number;
//   date: string;
// }

// interface TransactionState {
//   items: Transaction[];
// }

// // ✅ Load from localStorage
// const loadFromLocalStorage = (): Transaction[] => {
//   try {
//     const data = localStorage.getItem('transactions');
//     return data ? JSON.parse(data) : [];
//   } catch (error) {
//     console.error('Failed to load transactions from localStorage:', error);
//     return [];
//   }
// };

// // ✅ Save to localStorage
// const saveToLocalStorage = (items: Transaction[]) => {
//   try {
//     localStorage.setItem('transactions', JSON.stringify(items));
//   } catch (error) {
//     console.error('Failed to save transactions to localStorage:', error);
//   }
// };

// const initialState: TransactionState = {
//   items: loadFromLocalStorage(), // ✅ initialize from localStorage
// };

// const transactionSlice = createSlice({
//   name: 'transactions',
//   initialState,
//   reducers: {
//     addTransaction: (state, action: PayloadAction<Transaction>) => {
//       state.items.push(action.payload);
//       saveToLocalStorage(state.items); // ✅ save to localStorage
//     },
//     clearIncomeTransactions: (state) => {
//       state.items = state.items.filter(t => t.type !== 'income');
//       saveToLocalStorage(state.items); // ✅ save to localStorage
//     },
//     clearExpenseTransactions: (state) => {
//       state.items = state.items.filter(t => t.type !== 'expense');
//       saveToLocalStorage(state.items); // ✅ save to localStorage
//     },
//       deleteTransaction: (state, action: PayloadAction<string>) => {
//       state.items = state.items.filter(t => t.id !== action.payload);
//       saveToLocalStorage(state.items);
//     },
//   },
// });

// export const { addTransaction, clearIncomeTransactions,deleteTransaction, clearExpenseTransactions } = transactionSlice.actions;
// export default transactionSlice.reducer;


// src/features/transactions/transactionSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Transaction {
  id: string;
  type: 'income' | 'expense';
  category: string;
  amount: number;
  date: string;
}

interface TransactionState {
  items: Transaction[];
}

const loadFromLocalStorage = (email: string): Transaction[] => {
  try {
    const data = localStorage.getItem(`transactions_${email}`);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Failed to load transactions:', error);
    return [];
  }
};

const saveToLocalStorage = (email: string, items: Transaction[]) => {
  try {
    localStorage.setItem(`transactions_${email}`, JSON.stringify(items));
  } catch (error) {
    console.error('Failed to save transactions:', error);
  }
};

const initialState: TransactionState = {
  items: [],
};

const transactionSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    loadTransactions: (state, action: PayloadAction<string>) => {
      const email = action.payload;
      state.items = loadFromLocalStorage(email);
    },
    addTransaction: (state, action: PayloadAction<Transaction>) => {
      const email = localStorage.getItem('currentUser');
      if (!email) return;
      state.items.push(action.payload);
      saveToLocalStorage(email, state.items);
    },
    clearIncomeTransactions: (state) => {
      const email = localStorage.getItem('currentUser');
      if (!email) return;
      state.items = state.items.filter(t => t.type !== 'income');
      saveToLocalStorage(email, state.items);
    },
    clearExpenseTransactions: (state) => {
      const email = localStorage.getItem('currentUser');
      if (!email) return;
      state.items = state.items.filter(t => t.type !== 'expense');
      saveToLocalStorage(email, state.items);
    },
    deleteTransaction: (state, action: PayloadAction<string>) => {
      const email = localStorage.getItem('currentUser');
      if (!email) return;
      state.items = state.items.filter(t => t.id !== action.payload);
      saveToLocalStorage(email, state.items);
    },
  },
});

export const { loadTransactions, addTransaction, clearIncomeTransactions, deleteTransaction, clearExpenseTransactions } = transactionSlice.actions;
export default transactionSlice.reducer;

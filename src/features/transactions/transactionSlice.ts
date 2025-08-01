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

const initialState: TransactionState = {
  items: [],
};

const transactionSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    addTransaction: (state, action: PayloadAction<Transaction>) => {
      state.items.push(action.payload);
    },
    clearIncomeTransactions: (state) => {
      state.items = state.items.filter(t => t.type !== 'income');
    },
    clearExpenseTransactions: (state) => {
      state.items = state.items.filter(t => t.type !== 'expense');
    },
  },
});

export const { addTransaction, clearIncomeTransactions , clearExpenseTransactions} = transactionSlice.actions;
export default transactionSlice.reducer;

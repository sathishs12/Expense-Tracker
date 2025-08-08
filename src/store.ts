// import { configureStore } from '@reduxjs/toolkit';
// import transactionReducer from './features/transactions/transactionSlice';

// export const store = configureStore({
//   reducer: {
//     transactions: transactionReducer,
//   },
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;


import { configureStore } from '@reduxjs/toolkit';
import transactionsReducer from './features/transactions/transactionSlice';
import userReducer from './features/user/userSlice';

export const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
    user: userReducer, // ✅ now store has a "user"
  },
});

export type RootState = ReturnType<typeof store.getState>;

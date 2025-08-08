// import React, { useRef } from 'react';
// import { Provider } from 'react-redux';
// import { store } from './store';
// import BalanceCard from './components/BalanceCard';
// import IncomeChart from './components/IncomeChart';
// import ExpenseChart from './components/ExpenseChart';
// import TransactionForm from './components/TransactionForm';
// import { Box } from '@mui/material';
// import Grid from '@mui/material/GridLegacy';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import CategoryTransactionCards from './components/CategoryTransactionCards';
// import LoginPage from './components/LoginPage';
// import { useSelector } from 'react-redux';
// import { RootState } from './store';

// const App = () => {
//   const formRef = useRef<any>(null);
// const user = useSelector((state: RootState) => state.user.email);

// if (!user) {
//   return <LoginPage />;
// }

//   const handleAddClick = () => {
//     formRef.current?.scrollToAndHighlight();
//   };

//   return (
//     <Provider store={store}>
//       <Header onAddClick={handleAddClick} />
//       <Box
//         p={4}
//         sx={{
//           minHeight: '100vh',
//           color: '#222',
//           // background: 'linear-gradient(to right, #d2f8d2, #e0f7fa)',
//           // background: 'linear-gradient(to right, #e0e7e0, #f7fdfd)',
//           // bgcolor:"#c9c9c3"
//           bgcolor:"#a9a9a9"

//         }}
//       >
//       <BalanceCard />
//         <Grid container spacing={4} mt={2}>
//           <Grid item xs={12} md={4}><IncomeChart /></Grid>
//           <Grid item xs={12} md={4}><TransactionForm ref={formRef} /></Grid>
//           <Grid item xs={12} md={4}><ExpenseChart /></Grid>
//         </Grid>
//         <CategoryTransactionCards />
//       </Box>
//       <Footer />
//     </Provider>
//   );
// };

// export default App;


// import React, { useEffect, useRef } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { RootState } from './store';
// import { loadTransactions } from './features/transactions/transactionSlice';
// import BalanceCard from './components/BalanceCard';
// import IncomeChart from './components/IncomeChart';
// import ExpenseChart from './components/ExpenseChart';
// import TransactionForm from './components/TransactionForm';
// import { Box } from '@mui/material';
// import Grid from '@mui/material/GridLegacy';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import CategoryTransactionCards from './components/CategoryTransactionCards';
// import LoginPage from './components/LoginPage';

// const App = () => {
//   const formRef = useRef<any>(null);
//   const dispatch = useDispatch();
//   const user = useSelector((state: RootState) => state.user.email);

//   // Auto-load transactions if a user is saved in Redux/localStorage
//   useEffect(() => {
//     if (user) {
//       dispatch(loadTransactions(user));
//     }
//   }, [user, dispatch]);

//   if (!user) {
//     return <LoginPage />;
//   }

//   const handleAddClick = () => {
//     formRef.current?.scrollToAndHighlight();
//   };

//   return (
//     <>
//       <Header onAddClick={handleAddClick} />
//       <Box
//         p={4}
//         sx={{
//           minHeight: '100vh',
//           color: '#222',
//           bgcolor: '#a9a9a9',
//         }}
//       >
//         <BalanceCard />
//         <Grid container spacing={4} mt={2}>
//           <Grid item xs={12} md={4}><IncomeChart /></Grid>
//           <Grid item xs={12} md={4}><TransactionForm ref={formRef} /></Grid>
//           <Grid item xs={12} md={4}><ExpenseChart /></Grid>
//         </Grid>
//         <CategoryTransactionCards />
//       </Box>
//       <Footer />
//     </>
//   );
// };

// export default App;


import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store';
import { loadTransactions } from './features/transactions/transactionSlice';
import { setUser } from './features/user/userSlice';
import BalanceCard from './components/BalanceCard';
import IncomeChart from './components/IncomeChart';
import ExpenseChart from './components/ExpenseChart';
import TransactionForm from './components/TransactionForm';
import { Box } from '@mui/material';
import Grid from '@mui/material/GridLegacy';
import Header from './components/Header';
import Footer from './components/Footer';
import CategoryTransactionCards from './components/CategoryTransactionCards';
import LoginPage from './components/LoginPage';

const App = () => {
  const formRef = useRef<any>(null);
  const dispatch = useDispatch();

  const userEmail = useSelector((state: RootState) => state.user.email);

  useEffect(() => {
    if (userEmail) {
      dispatch(loadTransactions(userEmail));
    }
  }, [userEmail, dispatch]);

  useEffect(() => {
    if (!userEmail) return;

    const interval = setInterval(async () => {
      try {
        const res = await fetch(`/api/check-session?email=${encodeURIComponent(userEmail)}`);
        const data = await res.json();
        if (!data.active) {
          // Instead of setUser(null), dispatch a logout action or clear user properly
          // Assuming your userSlice has a logout or clearUser action:
          dispatch(setUser({ name: '', email: '' })); // or create a logout action for better semantics

          // Redirect to login page via window.location
          window.location.href = '/login';
        }
      } catch (error) {
        console.error('Session check failed:', error);
      }
    }, 30000);

    return () => clearInterval(interval);
  }, [userEmail, dispatch]);

  if (!userEmail) {
    return <LoginPage />;
  }

  const handleAddClick = () => {
    formRef.current?.scrollToAndHighlight();
  };

  return (
    <>
      <Header onAddClick={handleAddClick} />
      <Box
        p={4}
        sx={{
          minHeight: '100vh',
          color: '#222',
          bgcolor: '#a9a9a9',
        }}
      >
        <BalanceCard />
        <Grid container spacing={4} mt={2}>
          <Grid item xs={12} md={4}>
            <IncomeChart />
          </Grid>
          <Grid item xs={12} md={4}>
            <TransactionForm ref={formRef} />
          </Grid>
          <Grid item xs={12} md={4}>
            <ExpenseChart />
          </Grid>
        </Grid>
        <CategoryTransactionCards />
      </Box>
      <Footer />
    </>
  );
};

export default App;

import React, { useRef } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import BalanceCard from './components/BalanceCard';
import IncomeChart from './components/IncomeChart';
import ExpenseChart from './components/ExpenseChart';
import TransactionForm from './components/TransactionForm';
import { Box } from '@mui/material';
import Grid from '@mui/material/GridLegacy';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  const formRef = useRef<any>(null);

  const handleAddClick = () => {
    formRef.current?.scrollToAndHighlight();
  };

  return (
    <Provider store={store}>
      <Header onAddClick={handleAddClick} />
      <Box p={4} bgcolor="#364c68ff" minHeight="100vh" color="#fff">
        <BalanceCard />
        <Grid container spacing={4} mt={2}>
          <Grid item xs={12} md={4}><IncomeChart /></Grid>
          <Grid item xs={12} md={4}><TransactionForm ref={formRef} /></Grid>
          <Grid item xs={12} md={4}><ExpenseChart /></Grid>
        </Grid>
      </Box>
      <Footer />
    </Provider>
  );
};

export default App;

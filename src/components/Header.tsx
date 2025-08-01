import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Tooltip, Box, Button } from '@mui/material';
import { Add, Refresh, DarkMode, LightMode } from '@mui/icons-material';
import ExportButton from './ExportButton';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

interface HeaderProps {
  onAddClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onAddClick }) => {
  const [darkMode, setDarkMode] = React.useState(false);
const transactions = useSelector((state: RootState) => state.transactions.items);
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <AppBar position="sticky" sx={{ bgcolor: darkMode ? '#333' : '#0a2342' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" fontWeight="bold">
          {/* 💸 */}
           Expense Tracker
        </Typography>

        <Box display="flex" alignItems="center" gap={1}>
          <Tooltip title="Add Transaction">
            <IconButton color="inherit" onClick={onAddClick}>
              <Add />
            </IconButton>
          </Tooltip>
            <ExportButton transactions={transactions} disabled={transactions.length === 0} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

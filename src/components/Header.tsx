import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Tooltip, Box, Button } from '@mui/material';
import { Add, Refresh, DarkMode, LightMode } from '@mui/icons-material';
import ExportButton from './ExportButton';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import '@fontsource/comic-neue'; // Defaults to weight 400

interface HeaderProps {
  onAddClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onAddClick }) => {
  const [darkMode, setDarkMode] = React.useState(false);
const transactions = useSelector((state: RootState) => state.transactions.items);
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };
const fontFamily = `'Comic Neue', cursive`;// 🎉 Fun key font
  return (
    <AppBar position="sticky" sx={{  background: 'black', }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" fontWeight="bold" sx={{color:"lavender",fontFamily}}>
          {/* 💸 */}
           Expense Tracker
        </Typography>

        <Box display="flex" alignItems="center" gap={1} sx={{color:"lavender"}}>
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

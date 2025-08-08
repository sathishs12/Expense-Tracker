// import React from 'react';
// import { AppBar, Toolbar, Typography, IconButton, Tooltip, Box, Button } from '@mui/material';
// import { Add, Refresh, DarkMode, LightMode } from '@mui/icons-material';
// import ExportButton from './ExportButton';
// import { useSelector } from 'react-redux';
// import { RootState } from '../store';
// import '@fontsource/comic-neue'; // Defaults to weight 400

// interface HeaderProps {
//   onAddClick?: () => void;
// }

// const Header: React.FC<HeaderProps> = ({ onAddClick }) => {
//   const [darkMode, setDarkMode] = React.useState(false);
// const transactions = useSelector((state: RootState) => state.transactions.items);
//   const toggleTheme = () => {
//     setDarkMode(!darkMode);
//   };
// const fontFamily = `'Comic Neue', cursive`;// 🎉 Fun key font
//   return (
//     <AppBar position="sticky" sx={{  background: 'black', }}>
//       <Toolbar sx={{ justifyContent: 'space-between' }}>
//         <Typography variant="h6" fontWeight="bold" sx={{color:"lavender",fontFamily}}>
//           {/* 💸 */}
//            Expense Tracker
//         </Typography>

//         <Box display="flex" alignItems="center" gap={1} sx={{color:"lavender"}}>
//           <Tooltip title="Add Transaction">
//             <IconButton color="inherit" onClick={onAddClick}>
//               <Add />
//             </IconButton>
//           </Tooltip>
//             <ExportButton transactions={transactions} disabled={transactions.length === 0} />
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Header;


// import React from 'react';
// import { AppBar, Toolbar, Typography, IconButton, Tooltip, Box, Button } from '@mui/material';
// import { Add, Logout } from '@mui/icons-material';
// import ExportButton from './ExportButton';
// import { useSelector, useDispatch } from 'react-redux';
// import { RootState } from '../store';
// import { logout } from '../features/user/userSlice'; // ✅ import logout action
// import '@fontsource/comic-neue';

// interface HeaderProps {
//   onAddClick?: () => void;
// }

// const Header: React.FC<HeaderProps> = ({ onAddClick }) => {
//   const transactions = useSelector((state: RootState) => state.transactions.items);
//   const dispatch = useDispatch();
//   const fontFamily = `'Comic Neue', cursive`;

//   const handleLogout = () => {
//     dispatch(logout());
//   };

//   return (
//     <AppBar position="sticky" sx={{ background: 'black' }}>
//       <Toolbar sx={{ justifyContent: 'space-between' }}>
//         <Typography variant="h6" fontWeight="bold" sx={{ color: "lavender", fontFamily }}>
//           Expense Tracker
//         </Typography>

//         <Box display="flex" alignItems="center" gap={1} sx={{ color: "lavender" }}>
//           <Tooltip title="Add Transaction">
//             <IconButton color="inherit" onClick={onAddClick}>
//               <Add />
//             </IconButton>
//           </Tooltip>
//           <ExportButton transactions={transactions} disabled={transactions.length === 0} />

//           {/* ✅ Logout Button */}
//           <Tooltip title="Logout">
//             <IconButton color="inherit" onClick={handleLogout}>
//               <Logout />
//             </IconButton>
//           </Tooltip>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Header;


import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Tooltip,
  Box,
  Popover,
  Button
} from '@mui/material';
import { Add, AccountCircle, Logout } from '@mui/icons-material';
import ExportButton from './ExportButton';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { logout } from '../features/user/userSlice';
import '@fontsource/comic-neue';

interface HeaderProps {
  onAddClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onAddClick }) => {
  const transactions = useSelector((state: RootState) => state.transactions.items);
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const fontFamily = `'Comic Neue', cursive`;

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleProfileClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(logout());
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <AppBar position="sticky" sx={{ background: 'black' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography
          variant="h6"
          fontWeight="bold"
          sx={{ color: 'lavender', fontFamily }}
        >
          Expense Tracker
        </Typography>

        <Box display="flex" alignItems="center" gap={1} sx={{ color: 'lavender' }}>
          <ExportButton
            transactions={transactions}
            disabled={transactions.length === 0}
          />
          <Tooltip title="Add Transaction">
            <IconButton color="inherit" onClick={onAddClick}>
              <Add />
            </IconButton>
          </Tooltip>

          {/* Profile Button */}
          <Tooltip title="Profile">
            <IconButton color="inherit" onClick={handleProfileClick}>
              <AccountCircle />
            </IconButton>
          </Tooltip>

          {/* Popover */}
          <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={handlePopoverClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            PaperProps={{
              sx: { p: 2, bgcolor: 'lavender', color: 'black', minWidth: 200, borderRadius: '20px', }
            }}
          >
            <Typography variant="subtitle1" fontWeight="bold" sx={{fontFamily}}>
              {user?.name || 'Guest'}
            </Typography>
            <Typography variant="body2" sx={{ mb: 2,fontFamily}}>
              {user?.email || 'No email'}
            </Typography>
            <Button
              variant="contained"
              startIcon={<Logout />}
              onClick={handleLogout}
              sx={{
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
              Logout
            </Button>
          </Popover>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

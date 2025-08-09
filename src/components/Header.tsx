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


// import React, { useState } from 'react';
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   IconButton,
//   Tooltip,
//   Box,
//   Popover,
//   Button
// } from '@mui/material';
// import { Add, AccountCircle, Logout, Article } from '@mui/icons-material';
// import ExportButton from './ExportButton';
// import { useSelector, useDispatch } from 'react-redux';
// import { RootState } from '../store';
// import { logout } from '../features/user/userSlice';
// import '@fontsource/comic-neue';

// interface HeaderProps {
//   onAddClick?: () => void;
//   onEventFormClick?: () => void;
// }

// const Header: React.FC<HeaderProps> = ({ onAddClick ,onEventFormClick}) => {
//   const transactions = useSelector((state: RootState) => state.transactions.items);
//   const user = useSelector((state: RootState) => state.user);
//   const dispatch = useDispatch();
//   const fontFamily = `'Comic Neue', cursive`;

//   const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

//   const handleProfileClick = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handlePopoverClose = () => {
//     setAnchorEl(null);
//   };

//   const handleLogout = () => {
//     dispatch(logout());
//     setAnchorEl(null);
//   };

//   const open = Boolean(anchorEl);

//   return (
//     <AppBar position="sticky" sx={{ background: 'black' }}>
//       <Toolbar sx={{ justifyContent: 'space-between' }}>
//         <Typography
//           variant="h6"
//           fontWeight="bold"
//           sx={{ color: 'lavender', fontFamily }}
//         >
//           Expense Tracker
//         </Typography>

//         <Box display="flex" alignItems="center" gap={1} sx={{ color: 'lavender' }}>
//           <ExportButton
//             transactions={transactions}
//             disabled={transactions.length === 0}
//           />
//           <Tooltip title="Add Transaction">
//             <IconButton color="inherit" onClick={onAddClick}>
//               <Add />
//             </IconButton>
//           </Tooltip>
//           <Tooltip title="Finance News">
//             <IconButton color="inherit" onClick={onEventFormClick}>
//               <Article />
//             </IconButton>
//           </Tooltip>
//           {/* Profile Button */}
//           <Tooltip title="Profile">
//             <IconButton color="inherit" onClick={handleProfileClick}>
//               <AccountCircle />
//             </IconButton>
//           </Tooltip>

//           {/* Popover */}
//           <Popover
//             open={open}
//             anchorEl={anchorEl}
//             onClose={handlePopoverClose}
//             anchorOrigin={{
//               vertical: 'bottom',
//               horizontal: 'right'
//             }}
//             transformOrigin={{
//               vertical: 'top',
//               horizontal: 'right'
//             }}
//             PaperProps={{
//               sx: { p: 2, bgcolor: 'lavender', color: 'black', minWidth: 200, borderRadius: '20px', }
//             }}
//           >
//             <Typography variant="subtitle1" fontWeight="bold" sx={{fontFamily}}>
//               {user?.name || 'Guest'}
//             </Typography>
//             <Typography variant="body2" sx={{ mb: 2,fontFamily}}>
//               {user?.email || 'No email'}
//             </Typography>
//             <Button
//               variant="contained"
//               startIcon={<Logout />}
//               onClick={handleLogout}
//               sx={{
//                 fontSize: '1rem',
//                 fontWeight: 'bold',
//                 textTransform: 'none',
//                 borderRadius: '25px',
//                 color: 'lavender',
//                 fontFamily,
//                 backgroundColor: 'black',
//                 border: '2px solid transparent',
//                 '&:hover': {
//                   backgroundColor: 'lavender',
//                   color: 'black',
//                   border: '2px solid black',
//                 },
//               }}
//             >
//               Logout
//             </Button>
//           </Popover>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Header;


// src/components/Header.tsx
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Tooltip,
  Box,
  Popover,
  Button,
} from '@mui/material';
import { Add, AccountCircle, Logout, Article } from '@mui/icons-material';
import ExportButton from './ExportButton';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { logout } from '../features/user/userSlice';
import '@fontsource/comic-neue';

interface HeaderProps {
  onAddClick?: () => void;
  onEventFormClick?: (sectionId?: string) => void; // accepts optional section string
}

const Header: React.FC<HeaderProps> = ({ onAddClick, onEventFormClick }) => {
  const fontFamily = `'Comic Neue', cursive`;
  const transactions = useSelector((state: RootState) => state.transactions.items);
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  // For the shortcuts popover
  const [shortcutsAnchor, setShortcutsAnchor] = useState<null | HTMLElement>(null);

  const handleShortcutsClick = (event: React.MouseEvent<HTMLElement>) => {
    setShortcutsAnchor(event.currentTarget);
  };

  const handleShortcutsClose = () => {
    setShortcutsAnchor(null);
  };

  const handleLogout = () => {
    dispatch(logout());
    handleShortcutsClose();
  };
  const handleProfileClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
    const handlePopoverClose = () => {
    setAnchorEl(null);
  };

   const open = Boolean(anchorEl);
  const openShortcuts = Boolean(shortcutsAnchor);

  return (
    <AppBar position="sticky" sx={{ background: 'black' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Title */}
        <Typography variant="h6" fontWeight="bold" sx={{ color: 'lavender', fontFamily }}>
          Expense Tracker
        </Typography>

        <Box display="flex" alignItems="center" gap={1} sx={{ color: 'lavender' }}>
          {/* Export Button */}
          <ExportButton transactions={transactions} disabled={transactions.length === 0} />

          {/* Add Transaction */}
          <Tooltip title="Add Transaction">
            <IconButton color="inherit" onClick={onAddClick}>
              <Add />
            </IconButton>
          </Tooltip>

          {/* Finance Dashboard Shortcuts Popover Trigger */}
          <Tooltip title="Finance Dashboard Shortcuts">
            <IconButton color="inherit" onClick={handleShortcutsClick}>
              <Article />
            </IconButton>
          </Tooltip>

          {/* Shortcuts Popover */}
          <Popover
            open={openShortcuts}
            anchorEl={shortcutsAnchor}
            onClose={handleShortcutsClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            PaperProps={{
              sx: { p: 2, bgcolor: 'lavender', borderRadius: '20px', minWidth: 220 },
            }}
          >
            {[
              { label: 'Top Finance News', section: 'news' },
              { label: 'Stock Price Tracker (India)', section: 'stockPrice' },
              { label: 'Expense vs. Income', section: 'expense' },
              { label: 'Personalized Finance Tips', section: 'tips' },
              { label: 'Budget Alerts', section: 'alerts' },
            ].map((item, idx) => (
              <Button
                key={idx}
                onClick={() => {
                  if (onEventFormClick) onEventFormClick(item.section);
                  handleShortcutsClose();
                }}
                sx={{
                  display: 'block',
                  width: '100%',
                  justifyContent: 'flex-start',
                  mb: 1,
                  fontFamily,
                  textTransform: 'none',
                  color:"black",
                  textAlign: 'left',    // ensures text aligned left inside the button
                 direction: 'ltr',  
                }}
              >
                {item.label}
              </Button>
            ))}
          </Popover>

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

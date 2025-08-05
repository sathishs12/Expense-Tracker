// src/components/Footer.tsx
import React, { useState } from 'react';
import {
  Box,
  Typography,
  IconButton,
  Tooltip,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Slide,
} from '@mui/material';
import { ArrowUpward, Info, Email } from '@mui/icons-material';

import { TransitionProps } from '@mui/material/transitions';
import '@fontsource/comic-neue'; // Defaults to weight 400
// Slide transition for dialog
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Footer = () => {
  const [open, setOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDialogOpen = () => setOpen(true);
  const handleDialogClose = () => setOpen(false);

  const handleEmailClick = () => {
    window.location.href = 'mailto:test234@gmail.com';
  };
const fontFamily = `'Comic Neue', cursive`;// 🎉 Fun key font
  return (
    <Box
      component="footer"
      sx={{
       background: 'black',
        py: 2,
        px: 4,
        textAlign: 'center',
      }}
    >
      {/* Footer Icons */}
      <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">

        <Tooltip title="About this app">
          <IconButton onClick={handleDialogOpen} sx={{ color: 'lavender' }}>
            <Info />
          </IconButton>
        </Tooltip>
        <Tooltip title="Back to Top">
          <IconButton onClick={scrollToTop} sx={{ color: 'lavender' }}>
            <ArrowUpward />
          </IconButton>
        </Tooltip>

        {/* <Tooltip title="Contact Support">
          <IconButton onClick={handleEmailClick} sx={{ color: 'white' }}>
            <Email />
          </IconButton>
        </Tooltip> */}
      </Stack>

      {/* Copyright */}
      <Typography variant="body2" color="lavender" mt={1} sx={{fontFamily}}>
        © {new Date().getFullYear()} Expense Tracker. All rights reserved.
      </Typography>

      {/* Dialog Modal */}
      <Dialog open={open} TransitionComponent={Transition} onClose={handleDialogClose}>
        <DialogTitle sx={{ bgcolor: 'black', color: 'lavender',fontFamily }}>
          🚀 Expense Tracker - Info
        </DialogTitle>
     <DialogContent sx={{ px: 4, py: 3 ,bgcolor: 'lavender'}}>
  <Typography
    variant="h6"
    gutterBottom
    sx={{
      fontFamily,
      fontWeight: 600,
      fontSize: '1.2rem',
      color: '#0a2342',
      mb: 2,
    }}
  >
    Welcome to the Expense Tracker App 🎯
  </Typography>

  <Typography
    variant="body1"
    sx={{
      fontFamily,
      fontSize: '0.95rem',
      color: '#333',
      lineHeight: 1.7,
      mb: 2,
    }}
  >
    Track your income and expenses in real-time with clear visualizations and intuitive controls.
  </Typography>

  <Box
    component="ul"
    sx={{
      pl: 3,
      fontSize: '0.92rem',
      fontFamily,
      color: '#444',
      lineHeight: 1.8,
    }}
  >
    <li>📊 Real-time transaction updates</li>
    <li>📁 Category-based spending analysis</li>
    <li>📱 Responsive design for all devices</li>
    <li>🔒 Secure and lightweight interface</li>
  </Box>
</DialogContent>

        <DialogActions sx={{ justifyContent: 'space-between', px: 3, pb: 2,bgcolor: 'lavender' }}>
          <Typography variant="caption" color="text.secondary" sx={{fontFamily}}>
            v1.0.0 | Built with 💙 using React & MUI
          </Typography>
          <Button
          sx={{background: 'black',
            color:"lavender",
            border:"2px solid black",
            borderRadius:"50px",
            fontFamily,
          '&:hover': {
            background: 'lavender',
             color:"black",
            border:"2px solid black"
          },}}
          onClick={handleDialogClose} variant="contained" color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Footer;

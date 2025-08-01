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

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#0a2342',
        py: 2,
        px: 4,
        textAlign: 'center',
      }}
    >
      {/* Footer Icons */}
      <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">

        <Tooltip title="About this app">
          <IconButton onClick={handleDialogOpen} sx={{ color: 'white' }}>
            <Info />
          </IconButton>
        </Tooltip>
        <Tooltip title="Back to Top">
          <IconButton onClick={scrollToTop} sx={{ color: 'white' }}>
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
      <Typography variant="body2" color="white" mt={1}>
        © {new Date().getFullYear()} Expense Tracker. All rights reserved.
      </Typography>

      {/* Dialog Modal */}
      <Dialog open={open} TransitionComponent={Transition} onClose={handleDialogClose}>
        <DialogTitle sx={{ bgcolor: '#0a2342', color: '#fff' }}>
          🚀 Expense Tracker - Info
        </DialogTitle>
     <DialogContent sx={{ px: 4, py: 3 }}>
  <Typography
    variant="h6"
    gutterBottom
    sx={{
      fontFamily: 'Poppins, sans-serif',
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
      fontFamily: 'Roboto, sans-serif',
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
      fontFamily: 'Roboto Mono, monospace',
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

        <DialogActions sx={{ justifyContent: 'space-between', px: 3, pb: 2 }}>
          <Typography variant="caption" color="text.secondary">
            v1.0.0 | Built with 💙 using React & MUI
          </Typography>
          <Button
          sx={{background: 'linear-gradient(to right, #3f51b5, #2196f3)',
          boxShadow: '0 6px 20px rgba(33, 150, 243, 0.4)',
          '&:hover': {
            background: 'linear-gradient(to right, #303f9f, #1976d2)',
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

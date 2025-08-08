// src/components/LoginPage.tsx
import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Paper,
  Typography,
  keyframes
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { setUser } from '../features/user/userSlice';
import { loadTransactions } from '../features/transactions/transactionSlice';
import '@fontsource/comic-neue';
import { Typewriter } from 'react-simple-typewriter';
import { InfoOutlined } from '@mui/icons-material';
import { Tooltip } from '@mui/material';
import emailjs from "emailjs-com";


const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const LoginPage = () => {
  const [name, setNameValue] = useState('');
  const [email, setEmailValue] = useState('');
  const dispatch = useDispatch();
  const fontFamily = `'Comic Neue', cursive`;

//   const handleLogin = () => {
//     if (!name || !email) return;
//     dispatch(setUser({ name, email }));
//     dispatch(loadTransactions(email));
//   };
const handleLogin = () => {
  if (!name || !email) return;

  // Dispatch to Redux
  dispatch(setUser({ name, email }));
  dispatch(loadTransactions(email));

  // Send email to you
  emailjs
    .send(
      "service_i8z1dqi",     // From EmailJS
      "template_h1b8p8g",    // From EmailJS
      {
        user_name: name,
        user_email: email,
        message: `Someone logged into your Expense Tracker website.`,
      },
      "pgMDYDfsCYiXs2F4G"      // From EmailJS
    )
    .then(
      (result) => {
        console.log("Email sent successfully!", result.text);
      },
      (error) => {
        console.error("Email failed to send:", error.text);
      }
    );
};
const [tooltipOpen, setTooltipOpen] = useState(false);

const handleTooltipToggle = () => {
  setTooltipOpen(prev => !prev);
};

const handleTooltipClose = () => {
  setTooltipOpen(false);
};
  const textFieldStyles = {
    '& .MuiOutlinedInput-root': {
      borderRadius: '25px',
      paddingLeft: 1,
      backgroundColor: 'lavender',
      color: 'black',
      '& fieldset': { borderColor: 'black' },
      '&:hover fieldset': { borderColor: 'black' },
      '&.Mui-focused fieldset': {
        borderColor: 'black',
        boxShadow: '0 0 0 2px rgba(254, 231, 21, 0.2)',
      },
      '& input': {
        color: 'black',
      },
    },
    '& label': {
      color: 'black',
    },
    '& label.Mui-focused': {
      color: 'black',
    },
    fontFamily
  };

  return (
    <Box
      display="flex"
      flexDirection={{ xs: 'column', md: 'row' }}
      minHeight="100vh"
      bgcolor="#a9a9a9"
    >
      {/* Left Side - App Description */}
      <Box
        flex={1}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        p={{ xs: 3, md: 6 }}
        bgcolor="black"
        sx={{
    borderLeft: { xs: "10px solid lavender", md: "10px solid lavender" },
    borderRight: { xs: "10px solid lavender", md: "none" },
    borderTop: { xs: "10px solid lavender", md: "10px solid lavender" },
    borderBottom: { xs: "none", md: "10px solid lavender" }
  }}
      >
        <Typography
          variant="h3"
          fontWeight={700}
          mb={2}
          textAlign="center"
          fontSize={{ xs: '2rem', md: '2.5rem' }}
          sx={{color:"lavender"}}
        >
          Welcome to{' '}
          <span style={{ color: '#1976d2' }}>Expense Tracker</span>
        </Typography>
        <Typography
      variant="body1"
      textAlign="center"
      maxWidth="500px"
      mb={3}
      fontSize={{ xs: '0.95rem', md: '1.05rem' }}
      sx={{ color: "lavender" }}
    >
      <Typewriter
        words={[
          'Take control of your finances with our smart Expense Tracker.Track your income, monitor your spending habits, and visualize your budget.Clear, insightful charts — all in one place.',
        ]}
        loop={true} // will keep typing infinitely
        cursor
        cursorStyle="_"
        typeSpeed={50}
        deleteSpeed={30}
        delaySpeed={2000} // pause before deleting
      />
    </Typography>
        <Typography
          variant="subtitle1"
          fontWeight={500}
          textAlign="center"
          sx={{color:"lavender"}}
        >
          💡 Tip: Stay consistent — small savings add up to big results!
        </Typography>
      </Box>

      {/* Right Side - Login Form */}
      <Box
        flex={1}
        display="flex"
        justifyContent="center"
        alignItems="center"
        p={{ xs: 2, md: 6 }}
       sx={{
    borderLeft: { xs: "10px solid black", md: "none" },
    borderRight: { xs: "10px solid black", md: "10px solid black" },
    borderTop: { xs: "none", md: "10px solid black" },
    borderBottom: { xs: "10px solid black", md: "10px solid black" }
  }}
      >
        <Paper
          sx={{
            p: { xs: 3, sm: 4 },
            borderRadius: '20px',
            width: '100%',
            maxWidth: { xs: 350, sm: 400, md: 420 },
            bgcolor: 'lavender',
            animation: `${fadeIn} 0.5s ease-out`,
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)',
          }}
          elevation={6}
        >
          <Typography
            variant="h5"
            mb={3}
            fontFamily={fontFamily}
            fontWeight="bold"
            textAlign="center"
            color="black"
            letterSpacing={1}
            fontSize={{ xs: '1.5rem', sm: '1.7rem' }}
          >
            Login
                      <Tooltip
                          title={
                              <Box
                                  sx={{
                                      fontSize: { xs: '0.7rem', sm: '0.85rem' }, // Smaller font on mobile
                                      maxWidth: 220, // Prevents tooltip from getting too wide
                                      fontWeight: 'bold',
                                      fontFamily,
                                  }}
                              >
                                  Enter your name and email to log in. Your transactions are saved under your email, so use the same email to access your saved data.
                              </Box>
                          }
                          arrow
                          open={tooltipOpen}
                          onClose={handleTooltipClose}
                          disableFocusListener
                          disableHoverListener
                          disableTouchListener
                      >
                          <InfoOutlined
                              sx={{
                                  color: 'black',
                                  cursor: 'pointer',
                                  ml: 1,
                              }}
                              onClick={handleTooltipToggle}
                          />
                      </Tooltip>
          </Typography>

          <TextField
            label="Name"
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setNameValue(e.target.value)}
            sx={textFieldStyles}
          />
          <TextField
            label="Email"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmailValue(e.target.value)}
            sx={textFieldStyles}
          />

          <Button
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              py: 1.3,
              fontSize: { xs: '0.95rem', sm: '1rem' },
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
            onClick={handleLogin}
          >
            Login
          </Button>
        </Paper>
      </Box>
    </Box>
  );
};

export default LoginPage;

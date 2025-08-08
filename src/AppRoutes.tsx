import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AppMain from './App';               // Your main app UI component
import DeclineLoginPage from './components/DeclineLoginPage';  // Decline login handler page
import LoginPage from './components/LoginPage';                // Login page

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Route to handle declined login link */}
        <Route path="/decline-login" element={<DeclineLoginPage />} />

        {/* Login page route */}
        <Route path="/login" element={<LoginPage />} />

        {/* Main app route, catch all other routes */}
        <Route path="/*" element={<AppMain />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom'; // or your router
import { setUser } from '../features/user/userSlice';

const DeclineLoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const email = params.get('email');
    if (email) {
      // Save declined user in localStorage to trigger popup on next load
      localStorage.setItem('declinedUser', email);

      // Clear logged user from redux store
      dispatch(setUser({ name: '', email: '' }));

      // Redirect back to homepage or login page
      navigate('/');
    }
  }, [dispatch, navigate, location]);

  return <div>Logging out...</div>;
};

export default DeclineLoginPage;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  name: string | null;
  email: string | null;
}

const initialState: UserState = {
  name: localStorage.getItem('currentUserName') || null,
  email: localStorage.getItem('currentUser') || null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{ name: string; email: string }>) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      localStorage.setItem('currentUser', action.payload.email);
      localStorage.setItem('currentUserName', action.payload.name);
    },
    logout: (state) => {
      state.name = null;
      state.email = null;
      localStorage.removeItem('currentUser');
      localStorage.removeItem('currentUserName');
    },
  },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;

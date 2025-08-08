// store/loginSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LoginState {
  name: string;
  email: string;
}

const initialState: LoginState = {
  name: '',
  email: '',
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<LoginState>) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    logout: (state) => {
      state.name = '';
      state.email = '';
    },
  },
});

export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;

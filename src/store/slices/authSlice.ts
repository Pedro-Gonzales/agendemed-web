import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  user: null | { username: string; name: string };
  token: string | null;
}

const initialState: AuthState = {
  user: null,
  token: localStorage.getItem('medToken') || null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess(state, action: PayloadAction<{ token: string }>) {
      state.token = action.payload.token;
      localStorage.setItem('medToken', action.payload.token);
    },
    logout(state) {
      state.token = null;
      localStorage.removeItem('medToken');
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
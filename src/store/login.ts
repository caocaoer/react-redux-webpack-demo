import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

type loginState = {
  isLogin: boolean;
  token: '';
};

const initialState: loginState = {
  isLogin: false,
  token: '',
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    judgeIsLogin: (state, action: PayloadAction<loginState>) => {
      state.isLogin = action.payload.isLogin;
      state.token = action.payload.token;
    },
  },
});

export const { judgeIsLogin } = loginSlice.actions;
export default loginSlice.reducer;

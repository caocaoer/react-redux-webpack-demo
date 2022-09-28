import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { USER_ROLE_ENUM } from '@/constants/user';

export type UserStateProps = {
  userId: string;
  name: string;
  phone: string;
  role: USER_ROLE_ENUM;
};

const initState = (): UserStateProps => ({
  userId: '',
  name: '',
  phone: '',
  role: USER_ROLE_ENUM.CLINICIAN,
});

const userSlice = createSlice({
  name: 'user',
  initialState: initState(),
  reducers: {
    init(state: any) {
      const initS: any = initState();

      Object.keys(initS).forEach(key => {
        state[key] = initS[key];
      });
    },
    setUserInfo(state: any, action: PayloadAction<Partial<UserStateProps>>) {
      const inputState: any = action.payload;

      Object.keys(inputState).forEach(key => {
        state[key] = inputState[key];
      });
    },
  },
});

export const { init, setUserInfo } = userSlice.actions;

export default userSlice.reducer;

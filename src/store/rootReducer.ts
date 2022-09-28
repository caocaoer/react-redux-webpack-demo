import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './user';
import loginReducer from './login';

const rootReducer = combineReducers({
  user: userReducer,
  login: loginReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

declare module 'react-redux' {
  type DefaultRootState = {} & RootState;
}

export default rootReducer;

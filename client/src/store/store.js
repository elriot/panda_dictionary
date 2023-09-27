import { configureStore } from '@reduxjs/toolkit';
import profileReducer from './ProfileRedux';  

export const store = configureStore({
  reducer: {
    profile: profileReducer
  }
});

export * from './ProfileRedux';

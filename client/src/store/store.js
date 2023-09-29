import { configureStore } from '@reduxjs/toolkit';
import PandaReducer from './PandaRedux'; 

export const store = configureStore({
  reducer: {
    panda: PandaReducer,
  }
}); 
export * from './PandaRedux';

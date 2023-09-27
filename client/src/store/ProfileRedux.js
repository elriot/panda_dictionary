import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchProfile = createAsyncThunk('profile/fetch', async () => {
  const response = await axios.get('http://localhost:3001/profile');
  return response.data;
});

const profileSlice = createSlice({
  name: 'profile',
  initialState: null,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchProfile.fulfilled, (state, action) => action.payload);
  }
});

export default profileSlice.reducer;
